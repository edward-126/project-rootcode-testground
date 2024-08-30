export const deleteTopic = async (id: string): Promise<void> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/topics?id=${id}`,
    {
      method: "DELETE",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to delete the topic");
  }
};
