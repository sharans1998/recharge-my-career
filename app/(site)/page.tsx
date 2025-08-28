import { HomeHero } from "@/components/sections/home-hero";
import { HomeServices } from "@/components/sections/home-services";
import { HomeAbout } from "@/components/sections/home-about";
import { ContactCta } from "@/components/contact-cta";
import { ScrollAnimate } from "@/components/scroll-animate";

export default function Page() {
  return (
    <>
      <ScrollAnimate>
        <HomeHero />
      </ScrollAnimate>
      <ScrollAnimate>
        <HomeServices />
      </ScrollAnimate>
      <ScrollAnimate>
        <HomeAbout />
      </ScrollAnimate>
    </>
  );
}
