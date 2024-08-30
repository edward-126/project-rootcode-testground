export const updateTopic = async (
  id: string,
  newTitle: string,
  newDescription: string,
): Promise<void> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/topics/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      },
    );

    if (!res.ok) {
      const errorDetails = await res.json();
      throw new Error(`Failed to update topic: ${errorDetails.error}`);
    }
  } catch (error) {
    console.error("Error updating topic:", error);
    throw error;
  }
};
