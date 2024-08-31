import Link from "next/link";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button, buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  return (
    <>
      <nav className="sticky inset-x-0 top-0 z-[100] w-full border-b border-border bg-white/75 backdrop-blur transition-all">
        <MaxWidthWrapper>
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="z-40 flex text-lg font-semibold">
              Project-Test-<span className="text-green-600">RootCode</span>
            </Link>
            <div className="flex h-full items-center space-x-4">
              {user ? (
                <>
                  <Button asChild variant={"ghost"}>
                    <Link href="/api/auth/logout">Sign Out</Link>
                  </Button>
                  {isAdmin && (
                    <Button asChild variant={"ghost"}>
                      <Link href="/dashboard">Dashboard</Link>
                    </Button>
                  )}
                  <div className="hidden h-8 w-px bg-border sm:block" />
                  <Button asChild>
                    <Link href="/addTopic">
                      Add a Topic
                      <ArrowRight className="ml-1.5 size-4" />
                    </Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button asChild variant={"ghost"}>
                    <Link href="/api/auth/register">Sign up</Link>
                  </Button>

                  <Button asChild variant={"ghost"}>
                    <Link href="/api/auth/login">Login</Link>
                  </Button>

                  <div className="hidden h-8 w-px bg-border sm:block" />
                  <Button asChild>
                    <Link href="/addTopic">
                      Add a Topic
                      <ArrowRight className="ml-1.5 size-4" />
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>
    </>
  );
};

export default Navbar;
