"use client";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import Spacer from "@/components/shared/Spacer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { addTopic } from "@/fetch/addTopic";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Please fill in the input forms");
      return;
    }

    try {
      await addTopic(title, description);
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Spacer />
      <MaxWidthWrapper>
        <h2 className="mb-6">Add a new topic</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-0.5">
            <Label>Topic Title</Label>
            <Input onChange={(e) => setTitle(e.target.value)} value={title} />
          </div>
          <div className="space-y-0.5">
            <Label>Topic Description</Label>
            <Textarea
              className="min-h-[150px]"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <Button type="submit">Add Topic</Button>
        </form>
      </MaxWidthWrapper>
    </>
  );
};

export default page;
