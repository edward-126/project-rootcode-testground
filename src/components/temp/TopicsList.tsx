import { Edit } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import Spacer from "../shared/Spacer";
import { Button } from "../ui/button";
import RemoveBtn from "./RemoveBtn";
import { getTopics } from "@/fetch/getTopics";

const TopicsList = async () => {
  const data = await getTopics();
  const topicData = data?.topics ?? [];

  return (
    <>
      <Spacer />
      <MaxWidthWrapper className="*:mb-4">
        {topicData.map((topics, idx) => (
          <div
            className="flex flex-col justify-between gap-3 rounded-lg border border-border p-4 sm:flex-row sm:gap-0"
            key={idx}
          >
            <div className="">
              <h3>{topics.title}</h3>
              <small>{topics.description}</small>
            </div>

            <div className="flex w-full items-center justify-end gap-4 sm:w-fit sm:justify-normal">
              <Link href="/editTopic/123">
                <Button size="icon" variant="outline">
                  <Edit className="size-5" />
                </Button>
              </Link>
              <RemoveBtn id={topics._id} />
            </div>
          </div>
        ))}
      </MaxWidthWrapper>
    </>
  );
};

export default TopicsList;
