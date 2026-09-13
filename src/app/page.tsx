import { SiteFooter, SiteHeader } from "@/components/layout";
import { Approach, Hero, Projects, Strategic } from "@/views/home";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Strategic />
        <Approach />
        <Projects />
      </main>
      <SiteFooter />
    </>
  );
}
