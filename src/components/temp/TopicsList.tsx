import { getTopics, Topic } from "@/data/topics";
import { Edit } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import Spacer from "../shared/Spacer";
import { Button } from "../ui/button";
import RemoveBtn from "./RemoveBtn";

const TopicsList = async () => {
  const data = await getTopics();
  const topicData = data?.topics ?? [];

  return (
    <>
      <Spacer />
      <MaxWidthWrapper className="*:mb-4">
        {topicData.map((topics, idx) => (
          <div
            className="flex justify-between rounded-lg border border-border p-4"
            key={idx}
          >
            <div className="">
              <h3>{topics.title}</h3>
              <small>{topics.description}</small>
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
        ))}
      </MaxWidthWrapper>
    </>
  );
};

export default TopicsList;
