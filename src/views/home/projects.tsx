"use client";

import { ChevronIcon, Squiggle } from "@/components/icons";
import { projects } from "@/data";
import { useState } from "react";

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [outgoing, setOutgoing] = useState(0);
  const project = projects[index];

  const step = (offset: number) => {
    setOutgoing(index);
    setIndex((index + offset + projects.length) % projects.length);
  };

  const slideLayer = (slide: number) => {
    if (slide === index) return "v-fade z-10";
    if (slide === outgoing) return "";
    return "invisible";
  };

  return (
    <section id="projects" aria-live="polite" className="relative">
      <figure className="relative isolate aspect-375/404 md:ml-[43%] lg:ml-[37.85%] lg:aspect-895/728 lg:min-h-132 lg:w-[62.15%]">
        {projects.map(({ title, images }, slide) => (
          <picture key={title} className="contents">
            <source media="(min-width: 64rem)" srcSet={images.desktop.src} />
            <source media="(min-width: 48rem)" srcSet={images.tablet.src} />
            <img
              src={images.mobile.src}
              alt=""
              width={375}
              height={404}
              loading="lazy"
              className={`absolute inset-0 size-full object-cover ${slideLayer(slide)}`}
            />
          </picture>
        ))}

        <figcaption
          key={index}
          className="v-photo-scrim v-fade absolute inset-x-0 bottom-0 z-20 flex h-[27.5%] flex-col justify-center pr-8 text-right text-white md:pr-10 lg:pr-38.5"
        >
          <span className="text-caption lg:text-h3-lg font-extrabold">
            {project.client}
          </span>
          <span className="text-caption lg:text-body-lg">
            {project.year} Project
          </span>
        </figcaption>
      </figure>

      <div className="pointer-events-none relative md:absolute md:inset-x-0 md:top-0">
        <div
          aria-hidden="true"
          className="bg-ink pointer-events-auto absolute inset-y-0 left-0 w-full md:w-[50.78%] lg:w-[51.04%]"
        >
          <Squiggle className="absolute top-35 left-full hidden w-15.75 -translate-x-1/2 -translate-y-1/2 -scale-y-100 text-white md:block lg:top-54 lg:w-33.75" />
        </div>

        <div className="v-container relative py-16 md:py-25 lg:py-38">
          <h2
            key={index}
            className="text-h2 lg:text-h2-lg v-fade pointer-events-auto text-white md:max-w-70.25 lg:max-w-111.25"
          >
            {project.title}
          </h2>

          <div className="pointer-events-auto mt-6 flex w-fit gap-4 md:mt-8 lg:mt-14">
            <button
              type="button"
              aria-label="Previous project"
              onClick={() => step(-1)}
              className="border-red text-red hover:border-red-hover hover:text-red-hover v-focus-on-dark flex size-10 items-center justify-center rounded-full border motion-safe:transition-colors"
            >
              <ChevronIcon className="h-3 w-2 rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Next project"
              onClick={() => step(1)}
              className="border-red text-red hover:border-red-hover hover:text-red-hover v-focus-on-dark flex size-10 items-center justify-center rounded-full border motion-safe:transition-colors"
            >
              <ChevronIcon className="h-3 w-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
