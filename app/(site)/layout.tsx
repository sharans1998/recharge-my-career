import type React from "react";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactCta } from "@/components/contact-cta";
import { ScrollAnimate } from "@/components/scroll-animate";

export const metadata: Metadata = {
  title: "Recharge My Career",
  description:
    "A coach, guide, and thinking partner for people at turning points",
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <ScrollAnimate>
        <ContactCta />
      </ScrollAnimate>
      <SiteFooter />
    </div>
  );
}
