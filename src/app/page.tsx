import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Grassroots } from "@/components/site/grassroots";
import { Academy } from "@/components/site/academy";
import { Promotions } from "@/components/site/promotions";
import { Community } from "@/components/site/community";
import { PartnerCta } from "@/components/site/partner-cta";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0c] text-zinc-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Grassroots />
        <Academy />
        <Promotions />
        <Community />
        <PartnerCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
