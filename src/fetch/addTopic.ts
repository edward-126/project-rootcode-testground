export const addTopic = async (
  title: string,
  description: string,
): Promise<void> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/topics`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, description }),
  });

  if (!res.ok) {
    throw new Error("Failed to create a topic");
  }
};
