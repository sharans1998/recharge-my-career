import type React from "react"
import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Target, Rocket, Gauge, Handshake } from "lucide-react"
import Link from "next/link"
import { ContactCta } from "@/components/contact-cta"

export const metadata: Metadata = {
  title: "Services — Career Strategising",
}

type Service = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  desc: string
  bullets: string[]
  meta?: string
}

const services: Service[] = [
  {
    icon: Target,
    title: "Career Strategy Coaching",
    desc: "Move from reactive choices to a proactive, personalised career strategy you can execute with confidence.",
    bullets: [
      "Clarify life plans and career expectations",
      "Discover ideal and feasible paths",
      "Assess leadership competencies",
      "Sharpen personal branding and networking",
      "Craft a practical job search and interview plan",
    ],
    meta: "Format: 1:1 sessions • Duration: tailored",
  },
  {
    icon: Rocket,
    title: "Transition Acceleration Coaching",
    desc: "Set yourself up to win in a new role with a structured 100‑day plan and ongoing, confidential support.",
    bullets: [
      "Psychometric insights for faster onboarding",
      "Define and promote your leadership brand",
      "Co‑create a 100‑day transition plan",
      "Regular progress reviews and course‑correction",
      "Situational analysis and expectation management",
    ],
    meta: "Format: 1:1 + on‑the‑job supports • Duration: 8–12 weeks",
  },
  {
    icon: Gauge,
    title: "Performance Coaching",
    desc: "Break through limiting behaviours and turn insight into sustained performance and growth.",
    bullets: [
      "Build awareness around a focused coaching objective",
      "Uncover patterns that limit performance",
      "Translate insights into specific behaviours",
      "Accountability for implementation",
      "Support through personal change",
    ],
    meta: "Format: 1:1 sessions • Duration: 8–16 weeks",
  },
  {
    icon: Handshake,
    title: "Outplacement Career Coaching",
    desc: "Help leaders navigate change with dignity and momentum—positioning them strongly for what’s next.",
    bullets: [
      "Discover ideal and feasible next paths",
      "Position appropriately for chosen direction",
      "Co‑create job search strategy and assets",
      "Interview support through to offer",
      "Handholding through selection to onboarding",
    ],
    meta: "Format: Individual or cohort • Duration: tailored",
  },
]

export default function Page() {
  return (
    <>
    <section className="w-full py-12 md:py-20">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 space-y-3 text-center">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Services</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Clear, outcome‑focused coaching for leaders. Choose the support that matches your context.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <Card key={s.title} className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-md border p-2">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-lg">{s.title}</CardTitle>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                  {s.meta ? <p className="mt-2 text-xs text-muted-foreground">{s.meta}</p> : null}
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="text-sm text-muted-foreground flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
    <ContactCta />
    </>
  )
}
