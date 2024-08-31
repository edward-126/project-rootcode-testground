import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="border-t border-border pt-5">
      <MaxWidthWrapper className="mb-5 flex items-center justify-between font-light md:flex-row">
        <div className="flex items-center gap-1 text-xs font-medium">
          ©<span>{new Date().getFullYear()}</span>
          <span>Project-Test-Rootcode</span>
        </div>
        <div className="text-xs font-normal">
          <span>
            Work of{" "}
            <Link
              href="https://its-thilina.vercel.app/"
              target="_blank"
              className="font-medium transition-all duration-300 ease-in-out hover:text-primary"
            >
              Thilina Rathnayaka
            </Link>{" "}
            &{" "}
            <Link
              href="https://www.ammaarilham.dev/"
              target="_blank"
              className="font-medium transition-all duration-300 ease-in-out hover:text-primary"
            >
              Ammaar Ilham
            </Link>
          </span>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
