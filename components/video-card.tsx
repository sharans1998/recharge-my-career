import { Card } from "@/components/ui/card";

type Props = {
  title?: string;
  youtubeId?: string;
};

export function VideoCard({
  title = "Video title",
  youtubeId = "dQw4w9WgXcQ",
}: Props) {
  const src = `https://www.youtube.com/embed/${youtubeId}?rel=0`;
  return (
    <Card className="overflow-hidden pt-0">
      <div className="aspect-video">
        <iframe
          title={title}
          src={src}
          className="h-full w-full"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
    </Card>
  );
}
