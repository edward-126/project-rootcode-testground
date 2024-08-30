export interface Topic {
  title: string;
  description: string;
}

export const getTopics = async (): Promise<{ topics: Topic[] } | undefined> => {
  try {
    const res = await fetch(`${process.env.BASE_URL}api/topics`, {
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
