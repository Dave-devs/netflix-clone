import React from "react";
import Image from "next/image"

interface MovieTileProps {
  id: number;
  backdrop_path: string;
  title: string;
}

export default function MovieTile({ id, title, backdrop_path }: MovieTileProps) {
  return (
    <section key={id} className="flex flex-col items-center justify-center gap-y-2 hover:cursor-pointer">
      <div className="">
        <Image
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt={`${title} thumbnail`}
          width={299}
          height={158}
          className="rounded-sm max-w-[299px] max-h-[168px]"
        />
      </div>
      <p className="text-sm max-w-[299px] truncate text-center w-full">{title}</p>
    </section>
  )
}