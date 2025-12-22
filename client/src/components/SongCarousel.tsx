import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { TabProps } from "../types/tab";

interface SongCarouselProps {
  tabs: TabProps[];
}

export const SongCarousel: React.FC<SongCarouselProps> = ({ tabs }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const width = carouselRef.current.offsetWidth;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      <button
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 btn btn-circle z-10"
        onClick={() => scroll("left")}
      >
        ❮
      </button>

      <div
        ref={carouselRef}
        className="flex gap-4 py-4 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {tabs.map((tab, index) => (
          <div
            key={index}
            className="
              flex-none shadow-lg
              basis-4/5
              sm:basis-1/2
              md:basis-1/3
              lg:basis-1/5
            "
          >
            <SongCard {...tab} />
          </div>
        ))}
      </div>

      <button
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 btn btn-circle z-10"
        onClick={() => scroll("right")}
      >
        ❯
      </button>
    </div>
  );
};

const SongCard: React.FC<TabProps> = ({
  id,
  songName,
  artist,
  album,
  thumbnailFileUrl,
}) => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      tabIndex={0}
      onClick={() => navigate(`/song/${id}`)}
      className="
        min-h-[280px] card cursor-pointer
        transition-transform duration-200 ease-out
        md:hover:scale-105
        focus-visible:scale-105
        focus:outline-none
        focus-visible:ring-2 focus-visible:ring-blue-500
      "
    >
      <figure className="relative h-55 overflow-hidden rounded-t-lg">
        {!imageLoaded && <div className="absolute inset-0 skeleton" />}

        <img
          src={thumbnailFileUrl}
          alt={`${songName} ${album}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover object-top transition-opacity duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </figure>

      <div className="card-body primary-color-bg surface-color px-5 py-8 rounded-b-lg">
        <h2 className="card-title text-white">{songName}</h2>
        <p className="text-md">{artist}</p>
      </div>
    </div>
  );
};