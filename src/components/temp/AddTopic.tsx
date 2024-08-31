"use client";

import React, { useState } from "react";
import Spacer from "../shared/Spacer";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useRouter } from "next/navigation";
import { addTopic } from "@/fetch/addTopic";
import { Button } from "../ui/button";

const AddTopic = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
};

export default AddTopic;
