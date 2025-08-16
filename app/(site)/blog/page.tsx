import type { Metadata } from "next"
import { BlogCard } from "@/components/blog-card"
import { ContactCta } from "@/components/contact-cta"

export const metadata: Metadata = {
  title: "Blog — Career Strategising",
}

const posts = [
  {
    title: "The Three Lenses of Career Clarity",
    excerpt: "When you separate strengths, values, and constraints, decisions become simpler—and more durable.",
    date: "2025-06-01",
    imageQuery: "minimal%20workspace%20with%20notebook",
  },
  {
    title: "Story Before Strategy",
    excerpt: "If your narrative isn’t clear, your plan will be noisy. Here’s how to fix that in under an hour.",
    date: "2025-05-15",
    imageQuery: "calm%20desk%20and%20pen%20closeup",
  },
  {
    title: "Interview Structure That Works",
    excerpt: "Use simple patterns to frame persuasive, memorable answers without sounding rehearsed.",
    date: "2025-04-20",
    imageQuery: "subtle%20abstract%20texture%20neutrals",
  },
]

export default function Page() {
  return (
    <>
    <section className="w-full py-12 md:py-20">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 space-y-3 text-center">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Blog</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights from 10+ years of writing on career strategy, leadership, and transitions. Explore select
            highlights below and stay tuned as we publish the full archive of 40–50 posts.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <BlogCard
              key={p.title}
              title={p.title}
              excerpt={p.excerpt}
              date={p.date}
              imageQuery={p.imageQuery}
              href="#"
            />
          ))}
        </div>
      </div>
    </section>
    <ContactCta />
    </>
  )
}
