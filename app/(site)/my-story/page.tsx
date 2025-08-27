import Image from "next/image";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { ContactCta } from "@/components/contact-cta";

export const metadata: Metadata = {
  title: "My Story — Recharge My Career",
  description: "Satish's journey from IT leadership to coaching.",
};

export default function Page() {
  return (
    <>
      <section className="w-full py-12 md:py-20">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] items-start">
            <div className="space-y-6">
              <Badge variant="secondary" className="rounded-full">
                My Story
              </Badge>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                From IT leadership to life‑changing conversations
              </h1>

              <p className="text-muted-foreground leading-relaxed">
                Over 30 years in the global IT industry, I held leadership
                positions at Wipro, Aricent, Microland, and Careernet
                Consulting—working across service delivery, marketing, talent
                acquisition, and information systems. I started Wipro's
                Technology & IT Governance Consulting Practice, headed program
                management for total outsourcing at major clients like HDFC Bank
                and Genpact, and built strategic resourcing functions that hired
                4,000+ people annually.
              </p>

              <div className="space-y-3">
                <h2 className="text-xl font-medium">The turning point</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In 2009, a simple question changed everything:{" "}
                  <em>
                    "What is one activity you want to take up as a full‑time
                    career?"
                  </em>{" "}
                  Leadership development and coaching was my immediate answer.
                  For the last 13 years, I've never been bored—I'm as excited
                  today as I was during my first coaching session or first SLII
                  workshop.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl font-medium">My philosophy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I believe leadership is not a role confined to hierarchy but a
                  lifelong process of aligning inner clarity with outer impact.
                  Leadership development isn't just about growing high
                  performers—it's about becoming conscious contributors to
                  teams, communities, and our own inner journey. It's about
                  creating clarity, inspiring trust, and sustaining meaningful
                  change over a lifetime.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl font-medium">My coaching approach</h2>
                <p className="text-muted-foreground leading-relaxed">
                  My style is rooted in helping people see the big picture
                  clearly—across career, leadership challenges, or life
                  transitions. I guide clients to step back, reflect deeply, and
                  realign with what truly matters. I draw from diverse coaching
                  frameworks, analytical tools, and powerful inquiry to deepen
                  reflections—adapting to each client's context. From these
                  reflections, I support clients in crafting practical action
                  plans that move them steadily toward their goals.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium">Journey so far</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>
                      325+ leaders coached across 3,000+ sessions in India,
                      Singapore, and UAE
                    </li>
                    <li>
                      350+ Situational Leadership II workshops facilitated
                      globally
                    </li>
                    <li>
                      Leadership coach to two of the top 5 IT outsourcing
                      providers from India
                    </li>
                    <li>
                      Personal milestone: 4 half marathons completed after
                      turning 50
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium">
                    Credentials and certifications
                  </h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>
                      Professional Certified Coach (PCC) from International
                      Coaching Federation since 2012
                    </li>
                    <li>
                      Executive Post Graduate Diploma in Organization
                      Development and Change from TISS, India
                    </li>
                    <li>
                      Certified Professional Coach from International Coaching
                      Academy, Australia
                    </li>
                    <li>
                      Certified Trainer for Ken Blanchard's Situational
                      Leadership II programs
                    </li>
                    <li>
                      Certified assessor for Harrison Assessments, PaPI (Cubix),
                      Everything DiSC (Wiley)
                    </li>
                    <li>
                      Certified facilitator for Patrick Lencioni's 5 Behaviors
                      of a Cohesive Team
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium">What others say</h3>
                  <blockquote className="mt-2 text-sm text-muted-foreground italic">
                    "With his blend of business experiences and leadership
                    development, he is able to have insightful conversations
                    which lead to uncovering options which never crossed my
                    mind."
                  </blockquote>
                </div>
              </div>
            </div>

            <div className="order-first md:order-last md:sticky top-24">
              <Image
                src="https://res.cloudinary.com/dyb4kpthp/image/upload/v1756294319/satish-03_mo09hx.jpg"
                alt="Satish Chandra Rajasekhariah portrait"
                width={700}
                height={900}
                className="rounded-xl object-contain w-full overflow-hidden bg-muted"
              />
            </div>
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
