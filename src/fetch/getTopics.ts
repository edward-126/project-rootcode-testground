export interface Topic {
  _id: string;
  title: string;
  description: string;
}

export const getTopics = async (): Promise<{ topics: Topic[] } | undefined> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/topics`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics", error);
    return undefined;
  }
};
