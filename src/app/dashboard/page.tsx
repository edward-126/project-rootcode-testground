import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound } from "next/navigation";
import React from "react";

const page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

  if (!user || user.email !== ADMIN_EMAIL) {
    return notFound();
  }

  return (
    <>
      <div className="flex h-[calc(100vh-8.5rem-2px)] flex-col items-center justify-center gap-1">
        <h1>DashBoard</h1>
        <p>This is a protected route.</p>
      </div>
    </>
  );
};

export default page;
