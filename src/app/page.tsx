import { SiteHeader } from "@/components/layout";
import { Hero, Strategic } from "@/views/home";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Strategic />
      </main>
    </>
  );
}
