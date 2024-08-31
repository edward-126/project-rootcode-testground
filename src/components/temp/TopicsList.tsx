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
        <h2 className="">Topics list</h2>
        <div className="mt-8 space-y-3">
          {topicData.map((topics, idx) => (
            <div
              className="flex flex-col justify-between gap-3 rounded-lg border border-border p-4 sm:flex-row sm:gap-0"
              key={idx}
            >
              <div className="flex flex-col gap-1">
                <h3>{topics.title}</h3>
                <small>{topics.description}</small>
                <small>{topics.userId}</small>
              </div>

              <div className="flex w-full items-center justify-end gap-4 sm:w-fit sm:justify-normal">
                <Link href={`/editTopic/${topics._id}`}>
                  <Button size="icon" variant="outline">
                    <Edit className="size-5" />
                  </Button>
                </Link>
                <RemoveBtn id={topics._id} />
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default TopicsList;
