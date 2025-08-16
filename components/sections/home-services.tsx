import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Map, Briefcase } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const PREVIEW = [
  {
    icon: Target,
    title: "Career Development & Transitions",
    desc: "Navigate career crossroads with clarity, from early professionals to senior leaders.",
  },
  {
    icon: Map,
    title: "Communication & Feedback",
    desc: "Build skills for meaningful conversations, difficult feedback, and influential leadership.",
  },
  {
    icon: Briefcase,
    title: "High Potential Development",
    desc: "Accelerate growth for emerging leaders and employees in transition.",
  },
]

export function HomeServices() {
  return (
    <section className="w-full border-t">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Coaching focus areas</h2>
            <p className="text-muted-foreground">Tailored support across industries and career stages.</p>
          </div>
          <Link href="/services" className="hidden sm:block">
            <Button variant="outline">View all services</Button>
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PREVIEW.map((s) => {
            const Icon = s.icon
            return (
              <Card key={s.title} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-md border p-2">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-lg">{s.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-8 rounded-lg border p-4 bg-muted/30">
          <h3 className="font-medium mb-2">Industry experience</h3>
          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            <span className="bg-background border rounded px-2 py-1">Financial Services</span>
            <span className="bg-background border rounded px-2 py-1">Technology</span>
            <span className="bg-background border rounded px-2 py-1">Manufacturing</span>
            <span className="bg-background border rounded px-2 py-1">IT</span>
            <span className="bg-background border rounded px-2 py-1">Telecommunications</span>
            <span className="bg-background border rounded px-2 py-1">Startups</span>
            <span className="bg-background border rounded px-2 py-1">Software</span>
            <span className="bg-background border rounded px-2 py-1">Entrepreneurship</span>
          </div>
        </div>

        <div className="mt-6 sm:hidden">
          <Link href="/services">
            <Button variant="outline" className="w-full bg-transparent">
              View all services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
