import type { Metadata } from "next"
import { VideoCard } from "@/components/video-card"
import { ContactCta } from "@/components/contact-cta"

export const metadata: Metadata = {
  title: "Videos — Career Strategising",
}

const videos = [
  // Replace these IDs with your actual YouTube IDs (aim for 15–20)
  { title: "Designing a Career You Actually Want", youtubeId: "dQw4w9WgXcQ" },
  { title: "Telling a Clear Professional Story", youtubeId: "oHg5SJYRHA0" },
  { title: "Interview Structure That Works", youtubeId: "9bZkp7q19f0" },
  { title: "Negotiation Basics: Anchor and Trade", youtubeId: "3JZ_D3ELwOQ" },
  { title: "Networking Without Noise", youtubeId: "Zi_XLOBDo_Y" },
  { title: "Making Your First 100 Days Count", youtubeId: "fJ9rUzIMcZQ" },
]

export default function Page() {
  return (
    <>
    <section className="w-full py-12 md:py-20">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 space-y-3 text-center">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Videos</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A growing library of short, practical insights—career clarity, strategy, interviews, negotiation, and more.
            Browse the collection below and share with your teams.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {videos.map((v) => (
            <VideoCard key={v.youtubeId} title={v.title} youtubeId={v.youtubeId} />
          ))}
        </div>
      </div>
    </section>
    <ContactCta />
    </>
  )
}
