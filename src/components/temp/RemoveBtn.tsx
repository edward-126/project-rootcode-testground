"use client";

import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { deleteTopic } from "@/fetch/removeTopic";

const RemoveBtn = ({ id }: { id: string }) => {
  const router = useRouter();

  const handleRemove = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      try {
        await deleteTopic(id);
        router.refresh();
      } catch (error) {
        console.error("Failed to delete the topic", error);
      }
    }
  };

  return (
    <Button onClick={handleRemove} size="icon" variant="outline">
      <Trash2 className="size-5" />
    </Button>
  );
};

export default RemoveBtn;
