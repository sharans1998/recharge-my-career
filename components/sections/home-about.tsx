import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HomeAbout() {
  return (
    <section className="w-full border-t">
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-24">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <Image
              src="https://res.cloudinary.com/dyb4kpthp/image/upload/v1756294319/satish-02_bnipa3.jpg"
              alt="Satish Chandra Rajasekhariah"
              width={600}
              height={600}
              className="rounded-xl"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              A bit about my journey
            </h2>
            <p className="text-muted-foreground">
              I've spent over 30 years in the IT industry, leading teams and
              mentoring professionals across the globe. My passion has always
              been to help people unlock their potential and navigate their
              career paths with confidence. This journey from corporate
              leadership to coaching has been a fulfilling one, allowing me to
              dedicate my time to what I love most: helping others grow.
            </p>
            <Link href="/my-story">
              <Button variant="outline" className="cursor-pointer">
                Read my full story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
