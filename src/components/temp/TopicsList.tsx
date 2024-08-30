import { Edit } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import { Button } from "../ui/button";
import RemoveBtn from "./RemoveBtn";
import Spacer from "../shared/Spacer";

const TopicsList = () => {
  return (
    <>
      <Spacer />
      <MaxWidthWrapper>
        <div className="flex justify-between rounded-lg border border-border p-4">
          <div className="">
            <h3>Topic Title</h3>
            <small>Topic Description</small>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/editTopic/123">
              <Button size="icon" variant="outline">
                <Edit className="size-5" />
              </Button>
            </Link>
            <RemoveBtn />
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default TopicsList;
