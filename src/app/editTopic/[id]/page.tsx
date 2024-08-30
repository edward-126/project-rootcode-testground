import UpdateTopic from "@/components/temp/UpdateTopic";
import { getTopicById } from "@/fetch/getTopicById";

const Page = async ({ params }: { params: any }) => {
  const { id } = params;
  const data = await getTopicById(id);

  if (!data?.topic) {
    return <div>Topic not found</div>;
  }

  const { title, description } = data.topic;

  return (
    <>
      <UpdateTopic id={id} title={title} description={description} />
    </>
  );
};

export default Page;
