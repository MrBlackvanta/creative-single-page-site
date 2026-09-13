import heroDesktop from "@/assets/image-hero-desktop.webp";
import heroMobile from "@/assets/image-hero-mobile.webp";
import heroTablet from "@/assets/image-hero-tablet.webp";

export default function Hero() {
  return (
    <section className="relative pb-24 md:min-h-151.5 lg:min-h-200">
      <div className="relative md:absolute md:inset-y-0 md:right-0 md:left-[43%] lg:left-[37.85%]">
        <picture className="contents">
          <source media="(min-width: 64rem)" srcSet={heroDesktop.src} />
          <source media="(min-width: 48rem)" srcSet={heroTablet.src} />
          <img
            src={heroMobile.src}
            alt="Two designers working side by side at laptops in a bright studio."
            width={375}
            height={200}
            fetchPriority="high"
            className="h-50 w-full object-cover md:h-full"
          />
        </picture>
        <div
          aria-hidden="true"
          className="v-photo-fade absolute inset-y-0 left-0 hidden w-2/3 md:block"
        />
      </div>

      <div className="v-container relative pt-14 md:pt-19.25 lg:pt-28">
        <h1 className="text-h1 md:text-h1-md lg:text-h1-lg md:max-w-99.5 lg:max-w-182.5">
          Branding &
          <br />
          website design agency
        </h1>
        <p className="text-body lg:text-body-lg mt-6 md:mt-8 md:max-w-99.5 lg:mt-12 lg:max-w-135">
          We specialize in visual storytelling by creating cohesive brand and
          website design solutions for small businesses, giving lasting
          impressions to audiences in a digital world.
        </p>
        <a
          href="#contact"
          className="v-btn-lg v-btn-red v-focus mt-10 w-44.25 md:mt-8 lg:mt-12"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
