import { getPostData, getAllPostIds } from "@/lib/posts";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarkdownRenderer } from "@/components/markdown-renderer";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const { id } = resolvedParams;
  const post = await getPostData(id);
  if (!post) {
    return notFound();
  }
  return {
    title: `${post.title} — Recharge My Career`,
    description: post.excerpt,
  };
}

export default async function Post({ params }: { params: { id: string } }) {
  const resolvedParams = await Promise.resolve(params);
  const { id } = resolvedParams;
  const post = await getPostData(id);
  if (!post) {
    return notFound();
  }

  return (
    <section className="w-full py-12 md:py-20">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <article>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {post.title}
          </h1>
          <p className="text-muted-foreground mt-2">{post.date}</p>
          <MarkdownRenderer content={post.content} />
        </article>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}
