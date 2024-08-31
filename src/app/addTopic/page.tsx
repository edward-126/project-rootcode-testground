"use client";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import Spacer from "@/components/shared/Spacer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { addTopic } from "@/fetch/addTopic";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { isAuthenticated, isLoading } = useKindeBrowserClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      await addTopic(title, description);
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Error adding topic:", error);
      alert("Failed to add topic.");
    }
  };

  if (isLoading)
    return (
      <>
        <div className="flex h-[calc(100vh-8.5rem-2px)] items-center justify-center">
          <Loader2 className="size-16 animate-spin text-primary" />
        </div>
      </>
    );

  if (!isLoading && !isAuthenticated) {
    return (
      <>
        <div className="flex h-[calc(100vh-8.5rem-2px)] flex-col items-center justify-center gap-1">
          <h3>
            Please{" "}
            <Link
              href="/api/auth/login"
              className="text-primary transition-all duration-300 ease-in-out hover:text-primary/70"
            >
              Login
            </Link>{" "}
            or{" "}
            <Link
              href="/api/auth/register"
              className="text-primary transition-all duration-300 ease-in-out hover:text-primary/70"
            >
              Signup
            </Link>{" "}
            to continue.
          </h3>
          <p>Have a great day!!</p>
        </div>
      </>
    );
  }

  if (!isLoading && isAuthenticated) {
    return (
      <>
        <Spacer />
        <MaxWidthWrapper>
          <h2 className="mb-6">Add a New Topic</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-0.5">
              <Label htmlFor="title">Topic Title</Label>
              <Input
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
              />
            </div>
            <div className="space-y-0.5">
              <Label htmlFor="description">Topic Description</Label>
              <Textarea
                id="description"
                className="min-h-[150px]"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                required
              />
            </div>
            <Button type="submit">Add Topic</Button>
          </form>
        </MaxWidthWrapper>
      </>
    );
  }
};

export default page;
