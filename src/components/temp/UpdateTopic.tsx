"use client";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import Spacer from "@/components/shared/Spacer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { updateTopic } from "@/fetch/updateTopic";

const UpdateTopic = ({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) => {
  const router = useRouter();
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await updateTopic(id, newTitle, newDescription);

      router.push("/");
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Spacer />
      <MaxWidthWrapper>
        <h2 className="mb-6">Update/Edit a topic</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-0.5">
            <Label>Topic Title</Label>
            <Input
              onChange={(e) => setNewTitle(e.target.value)}
              value={newTitle}
            />
          </div>
          <div className="space-y-0.5">
            <Label>Topic Description</Label>
            <Textarea
              className="min-h-[150px]"
              onChange={(e) => setNewDescription(e.target.value)}
              value={newDescription}
            />
          </div>
          <Button type="submit">Edit Topic</Button>
        </form>
      </MaxWidthWrapper>
    </>
  );
};

export default UpdateTopic;
