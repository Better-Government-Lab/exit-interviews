"use client";

type CarouselItemProps = {
  content: string;
}

export const CarouselItem = ({
  content
}: CarouselItemProps) => {
  return (
    <div className="carousel-item">
      {content}
    </div>
  );
};