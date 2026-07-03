import { Hero } from "@/components/sections/hero";
import { Dealers } from "@/components/sections/dealers";
import { About } from "@/components/sections/about";
import { Industries } from "@/components/sections/industries";
import { Products } from "@/components/sections/products";
import { FounderMessage } from "@/components/sections/founder-message";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Dealers />
      <About />
      <Products />
      <Industries />
      <FounderMessage />
      <Contact />
    </main>
  );
}
