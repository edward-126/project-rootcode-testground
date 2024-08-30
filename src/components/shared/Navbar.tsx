import Link from "next/link";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 h-20 border-b border-border bg-white/60 backdrop-blur transition-all duration-200">
        <MaxWidthWrapper className="flex h-full items-center justify-between">
          <Link href="/">
            <div className="text-lg font-semibold">Project-Test-Rootcode</div>
          </Link>
          <Button asChild variant="outline">
            <Link href="/addTopic">Add Topic</Link>
          </Button>
        </MaxWidthWrapper>
      </nav>
    </>
  );
};

export default Navbar;
