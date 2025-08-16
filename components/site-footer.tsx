import Link from "next/link"

const LINKS = [
  { name: "My Story", href: "/my-story" },
  { name: "Services", href: "/services" },
  { name: "Videos", href: "/videos" },
  { name: "Blog", href: "/blog" },
]

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container px-4 md:px-6 py-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="text-sm text-muted-foreground">
          {"© "}
          {new Date().getFullYear()} <span className="text-foreground">Career Strategising</span>. All rights reserved.
        </div>
        <nav className="sm:ml-auto flex flex-wrap gap-x-6 gap-y-2">
          {LINKS.map((l) => (
            <Link key={l.name} href={l.href} className="text-sm text-muted-foreground hover:text-foreground">
              {l.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
