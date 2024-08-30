export const getTopicById = async (id: any): Promise<{ topic?: any }> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/topics/${id}`,
      {
        cache: "no-store",
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topic", error);
    return {};
  }
};
