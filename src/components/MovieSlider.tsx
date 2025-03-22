"use client"

import React, { useState } from 'react'
import MovieTile from './MovieTile'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Movie } from '@/types';
import { motion } from "framer-motion";
import { useMovies } from '@/services/queries';
import LoadingSpinner from './LoadingSpinner';
import ErrorComponent from './ErrorComponet';
import TitleCard from './TitleCard';
import Link from 'next/link';

const MOVIES_PER_PAGE = 5;
const TILE_WIDTH = 299 + 12; // Movie width + gap

interface MovieSliderProps {
  category: string;
  headerTitle: string;
}

export default function MovieSlider({ category, headerTitle }: MovieSliderProps) {
  const { data, isPending, isError, refetch } = useMovies(category);

  const [startIndex, setStartIndex] = useState(0);
  const totalMovies = data?.length ?? 0;

  const handleNext = () => {
    if (startIndex + MOVIES_PER_PAGE < totalMovies) {
      setStartIndex((prevIndex) => Math.min(prevIndex + MOVIES_PER_PAGE, totalMovies - MOVIES_PER_PAGE));
    }
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - MOVIES_PER_PAGE, 0));
  };

  if (isPending) return <LoadingSpinner />;
  if (isError) return <ErrorComponent message="Error fetching movies." onRetry={refetch} />;

  return (
    <section className='relative flex flex-col md:flex-row space-x-4 overflow-hidden'>
      {/* Left Scroll Button */}
      <button
        onClick={handlePrev}
        disabled={startIndex === 0}
        className={`absolute top-1/2 -translate-y-1/2 left-0 z-10 ${startIndex === 0 ? "hidden" : "block"}`}
      >
        <ChevronLeft size={30} className='text-[#e50914]' />
      </button>

      {/* Movies List & Category Title */}
      <div className='flex flex-col gap-3'>
        <TitleCard text={headerTitle} />
        
        {/* Movie List with Framer Motion Animation */}
        <motion.div
          className="flex flex-row space-x-3"
          animate={{ x: -startIndex * TILE_WIDTH }}
          transition={{ type: "spring", stiffness: 50, damping: 10 }}
        >
          {(data ?? []).map((movie: Movie) => (
            <Link href={`/${movie.id}`} key={movie.original_title}>
              <MovieTile title={movie.original_title} backdrop_path={movie.poster_path} />
            </Link>
            
          ))}
        </motion.div>
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={handleNext}
        disabled={startIndex + MOVIES_PER_PAGE >= totalMovies}
        className={`absolute top-1/2 -translate-y-1/2 right-0 z-10 ${startIndex + MOVIES_PER_PAGE >= totalMovies ? "hidden" : "block"}`}
      >
        <ChevronRight size={30} className='text-[#e50914]' />
      </button>
    </section>
  );
}