import strategicDesktop from "@/assets/image-strategic-desktop.webp";
import strategicMobile from "@/assets/image-strategic-mobile.webp";
import strategicTablet from "@/assets/image-strategic-tablet.webp";
import { Squiggle } from "@/components/icons";

export default function Strategic() {
  return (
    <section id="about" className="relative">
      <div className="relative md:absolute md:top-0 md:-bottom-30 md:left-0 md:w-[49.22%] lg:-bottom-50 lg:w-[51.04%]">
        <picture className="contents">
          <source media="(min-width: 64rem)" srcSet={strategicDesktop.src} />
          <source media="(min-width: 48rem)" srcSet={strategicTablet.src} />
          <img
            src={strategicMobile.src}
            alt="A desk from above with a laptop, a coffee and a designer lettering by hand in a sketchbook."
            width={375}
            height={200}
            loading="lazy"
            className="h-50 w-full object-cover md:h-full"
          />
        </picture>

        <Squiggle className="text-red absolute bottom-0 left-6 w-15.75 translate-y-1/2 md:top-40 md:bottom-auto md:left-full md:-translate-x-1/2 md:-translate-y-1/2 lg:top-66 lg:w-33.75" />
      </div>

      <div className="bg-ink py-18 md:ml-[49.22%] md:py-30 lg:ml-[51.04%] lg:py-50">
        <div className="px-6 text-white md:pr-[10.26%] md:pl-[17.69%] lg:pr-[15.04%] lg:pl-[21.84%]">
          <h2 className="text-h2 lg:text-h2-lg">
            <span className="text-red">Design</span> is
            <br className="hidden md:inline lg:hidden" /> strategic.
          </h2>

          <p className="text-body lg:text-body-lg mt-6 md:mt-8 lg:mt-12">
            “A well-crafted design strategy consistently produces desired
            outcomes and brand awareness. We are firm believers that success
            lies in creative collaboration with our clients.”
          </p>

          <a
            href="#contact"
            className="text-label lg:text-label-lg text-red hover:text-red-hover v-focus-on-dark mt-10 block w-fit border-b-2 pb-2.25 motion-safe:transition-colors md:mt-8 lg:mt-12 lg:pb-2"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </section>
  );
}
