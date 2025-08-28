import type { Metadata } from "next";
import { VideoCard } from "@/components/video-card";

export const metadata: Metadata = {
  title: "Videos — Recharge My Career",
  description:
    "A collection of insightful videos to support your career journey.",
};

const videos = [
  {
    title: "The Power of Self-Reflection in Career Growth",
    youtubeId: "eh9ZIzykyE0",
  },
  { title: "Vision Mission", youtubeId: "JPgEFKZZVkI" },
  { title: "Victim of Wrong measure of success", youtubeId: "zw2Pe5WDHP0" },
  { title: "Market Trends", youtubeId: "i9emsAKZFwA" },
  { title: "Role analysis", youtubeId: "IrCvEf5tloA" },
  { title: "SWOT Analysis", youtubeId: "Y9hgObp_Kf4" },
  { title: "Feasible Future Path", youtubeId: "sdr_L6nqwZw" },
  { title: "Personal brand", youtubeId: "eGBORiNIk_E" },
  { title: "Professional Network", youtubeId: "fgJkkMM4x8A" },
  { title: "Development Plan", youtubeId: "kDTPvCvc8cA" },
  { title: "Emerging Career Management Resources", youtubeId: "ZJgrkGi9xsA" },
];

export default function Page() {
  return (
    <>
      <section className="w-full py-12 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-10 space-y-3 text-center">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Videos
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A growing library of short, practical insights—career clarity,
              strategy, interviews, negotiation, and more. Browse the collection
              below and share with your teams.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {videos.map((v) => (
              <VideoCard
                key={v.youtubeId}
                title={v.title}
                youtubeId={v.youtubeId}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
