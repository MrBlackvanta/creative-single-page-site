import { approachSteps } from "@/data";

export default function Approach() {
  return (
    <section id="service" className="relative">
      <div className="bg-red-surface py-24 md:ml-[43%] md:py-30 lg:ml-[37.85%] lg:py-50">
        <div className="v-container pointer-events-none md:absolute md:inset-x-0 md:top-61.5 lg:top-100">
          <h2 className="text-h2 lg:text-h2-lg pointer-events-auto text-white md:max-w-70.25 md:text-black lg:max-w-135">
            Our approach for creating a winning brand
          </h2>
        </div>

        <ol className="mt-12.25 grid gap-10 px-6 text-white md:mt-0 md:pr-[9.13%] md:pl-[9.82%] lg:gap-14 lg:pr-[11.84%] lg:pl-[31.84%]">
          {approachSteps.map(({ title, description }, index) => (
            <li key={title} className="relative pt-11 pl-4 lg:pl-14.75">
              <span
                aria-hidden="true"
                data-step={String(index + 1).padStart(2, "0")}
                className="text-h1-lg absolute top-0 left-0 text-white/25 before:content-[attr(data-step)]"
              />
              <h3 className="text-h3 lg:text-h3-lg">{title}</h3>
              <p className="text-body lg:text-body-lg mt-3.75 lg:mt-6">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
