import { Motion } from "@/components/site/motion";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Figures } from "@/components/site/figures";
import { Mosaic } from "@/components/site/mosaic";
import { Band } from "@/components/site/band";
import { Pillars } from "@/components/site/pillars";
import { Record } from "@/components/site/record";
import { Industry } from "@/components/site/industry";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Figures />
        <Mosaic />
        <Band />
        <Pillars />
        <Record />
        <Industry />
        <Contact />
      </main>
      <Footer />
      <Motion />
    </>
  );
}
