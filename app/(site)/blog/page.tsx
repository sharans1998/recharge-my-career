import type { Metadata } from "next"
import { BlogCard } from "@/components/blog-card"
import { ContactCta } from "@/components/contact-cta"
import { getSortedPostsData } from "@/lib/posts"

export const metadata: Metadata = {
  title: "Blog — Career Strategising",
}

export default function Page() {
  const posts = getSortedPostsData()

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
              key={p.id}
              title={p.title}
              excerpt={p.excerpt}
              date={p.date}
              href={`/blog/${p.id}`}
            />
          ))}
        </div>
      </div>
    </section>
    <ContactCta />
    </>
  )
}
