import { Squiggle } from "@/components/icons";
import Signature from "./signature";

export default function SiteFooter() {
  return (
    <footer id="contact" className="relative">
      <Squiggle className="text-red absolute top-1/2 left-0 hidden w-33.75 -translate-x-1/2 -translate-y-1/2 lg:block" />

      <div className="v-container py-25 md:flex md:items-center md:justify-between md:pt-17.5 md:pb-25.25 lg:py-30">
        <h2 className="text-h2 lg:text-h2-lg md:max-w-99.5 lg:max-w-158.75">
          Let&apos;s build something great together.
        </h2>

        <a
          href="#contact"
          className="v-btn v-btn-red v-focus mt-11.75 w-49.75 md:mt-0"
        >
          Schedule a Call
        </a>
      </div>

      <Signature />
    </footer>
  );
}
