"use client"

import type React from "react"
import EmailCaptureForm from "./email-capture-form";
import { Mail } from "lucide-react"

export function ContactCta() {
  return (
    <section className="w-full border-t">
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-24">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
              <Mail className="h-3.5 w-3.5" />
              <span>Ready for your next chapter?</span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Let's have a conversation about your turning point
            </h2>
            <p className="text-muted-foreground">
              Whether you're navigating a career transition, leadership challenge, or life change—I'm here to help you
              see the big picture clearly and move forward with confidence.
            </p>
          </div>
          <div className="w-full">
            <EmailCaptureForm />
          </div>
        </div>
      </div>
    </section>
  )
}
