import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

type Props = {
  title?: string
  excerpt?: string
  date?: string
  imageQuery?: string
  href?: string
}

export function BlogCard({
  title = "Untitled",
  excerpt = "A brief description of the post.",
  date = "2025-01-01",
  imageQuery = "minimal%20abstract%20pattern",
  href = "#",
}: Props) {
  return (
    <Card className="h-full overflow-hidden">
      <div className="relative">
        <Image
          src={`/abstract-geometric-shapes.png?height=700&width=1200&query=${imageQuery}`}
          alt={title}
          width={1200}
          height={700}
          className="h-40 w-full object-cover border-b bg-muted"
        />
      </div>
      <CardHeader className="pb-0">
        <time className="text-xs text-muted-foreground">{new Date(date).toLocaleDateString()}</time>
        <Link href={href} className="mt-1 text-base font-medium hover:underline underline-offset-4">
          {title}
        </Link>
      </CardHeader>
      <CardContent className="pt-3">
        <p className="text-sm text-muted-foreground">{excerpt}</p>
      </CardContent>
    </Card>
  )
}
