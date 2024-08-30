import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";

const RemoveBtn = () => {
  return (
    <>
      <Button size="icon" variant={"destructive"}>
        <Trash2 className="size-5" />
      </Button>
    </>
  );
};

export default RemoveBtn;
