import { SiteHeader } from "@/components/layout";
import { Approach, Hero, Strategic } from "@/views/home";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Strategic />
        <Approach />
      </main>
    </>
  );
}
