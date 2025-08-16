import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Props {
  title: string
  excerpt: string
  date: string
  href: string
}

export function BlogCard({ title, excerpt, date, href }: Props) {
  return (
    <Link href={href}>
      <Card className="h-full overflow-hidden">
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{excerpt}</p>
          <p className="text-xs text-muted-foreground mt-2">{date}</p>
        </CardContent>
      </Card>
    </Link>
  )
}

