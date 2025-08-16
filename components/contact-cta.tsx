"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Mail } from "lucide-react"

export function ContactCta() {
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    toast({
      title: "Thanks for reaching out",
      description: "I'll get back to you shortly to discuss how we can work together.",
    })
    setEmail("")
  }

  return (
    <section className="w-full border-t">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
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
          <form onSubmit={onSubmit} className="flex w-full flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
            />
            <Button type="submit" className="whitespace-nowrap">
              Start the conversation
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
