import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function HomeHero() {
  return (
    <section className="w-full">
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-8 py-20 md:py-32 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
                <span>Meet Satish Chandra Rajasekhariah</span>
              </div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                A coach, guide, and thinking partner for people at turning
                points
              </h1>
              <p className="text-muted-foreground text-lg max-w-[58ch]">
                I work with budding professionals, solopreneurs, and senior
                leaders navigating transitions in work or life. Through deep
                coaching and reflective strategies, I help them realign with
                purpose, act with clarity, and grow with impact.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="mailto:hello@example.com"
                  className="w-full sm:w-auto"
                >
                  <Button className="w-full cursor-pointer">
                    Book a consultation
                  </Button>
                </Link>
                <Link href="/services" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="w-full bg-transparent cursor-pointer"
                  >
                    Explore services
                  </Button>
                </Link>
              </div>
              <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  30+ years of global IT leadership at Wipro, Aricent,
                  Microland, and Careernet Consulting
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  325+ leaders coached across 3,000+ sessions in India,
                  Singapore, and UAE
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  PCC (ICF), EPGD (TISS), 350+ leadership workshops facilitated
                  globally
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="https://res.cloudinary.com/dyb4kpthp/image/upload/v1756294318/satish-01_dqzngx.jpg"
                alt="Abstract minimal shapes symbolizing clarity"
                width={700}
                height={700}
                priority
                className="w-full rounded-xl object-contain aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
