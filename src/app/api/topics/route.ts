import { getAuthenticatedUser } from "@/lib/auth";
import connectMongoDB from "@/lib/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

// export async function POST(request: any) {
//   const { title, description } = await request.json();
//   await connectMongoDB();
//   await Topic.create({ title, description });
//   return NextResponse.json({ message: "Topic Created" }, { status: 200 });
// }

export async function POST(request: any) {
  const user = await getAuthenticatedUser(request);

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { title, description } = await request.json();

  if (!title || !description) {
    return NextResponse.json(
      { message: "Title and description are required." },
      { status: 400 },
    );
  }

  await connectMongoDB();

  try {
    const newTopic = await Topic.create({
      title,
      description,
      userId: user,
    });

    return NextResponse.json(
      { message: "Topic Created", topic: newTopic },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating topic:", error);
    return NextResponse.json(
      { message: "Failed to create topic", error: error },
      { status: 500 },
    );
  }
}

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request: any) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic Deleted" }, { status: 200 });
}
