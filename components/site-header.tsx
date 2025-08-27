"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const NAV = [
  { name: "Home", href: "/" },
  { name: "My Story", href: "/my-story" },
  { name: "Services", href: "/services" },
  { name: "Videos", href: "/videos" },
  { name: "Blog", href: "/blog" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="Recharge My Career"
            width={32}
            height={32}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link href="mailto:hello@example.com" className="hidden">
            <Button size="sm">Book a call</Button>
          </Link>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden">
          <Button
            variant="outline"
            size="icon"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile nav panel */}
      <div
        id="mobile-nav"
        className={cn(
          "md:hidden border-t px-4 transition-[max-height] overflow-hidden",
          open ? "max-h-96 py-4" : "max-h-0"
        )}
      >
        <nav className="grid gap-2">
          {NAV.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-md px-2 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="mailto:hello@example.com"
            onClick={() => setOpen(false)}
            className="hidden"
          >
            <Button className="w-full">Book a call</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
