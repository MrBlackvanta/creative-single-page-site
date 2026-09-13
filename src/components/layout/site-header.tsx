import { Logo } from "@/components/icons";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import NavLinks from "./nav-links";

export default function SiteHeader() {
  return (
    <header className="relative z-20">
      <div
        aria-hidden="true"
        className="bg-red-surface absolute inset-y-0 right-0 left-[43%] hidden md:block lg:left-[51.04%]"
      />

      <div className="v-container relative flex h-27.5 items-center md:h-44.5">
        <Link href="/" aria-label="creative, home" className="v-focus">
          <Logo className="h-7.5 w-40.25" />
        </Link>

        <div className="ml-auto hidden items-center gap-7 md:flex lg:gap-12.25">
          <NavLinks variant="header" />
          <a
            href="#contact"
            className="v-btn v-btn-ink v-focus-on-dark w-36.75 lg:w-49.75"
          >
            Schedule a Call
          </a>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
