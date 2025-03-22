"use client"

import ErrorComponent from '@/components/ErrorComponet';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useMovieDetails } from '@/services/queries';
import { ChevronLeft } from 'lucide-react';
import { use } from "react";

export default function MovieDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const {data, isError, isPending, refetch} = useMovieDetails(id);

  if (isPending) return <LoadingSpinner />;
  if (isError) return <ErrorComponent message="Error fetching movie details" onRetry={refetch}/>

  return (
    <main className='flex flex-col items-center justify-between h-screen w-full relative pt-16 pb-20'>
      <ChevronLeft
        size={32}
        className='absolute top-20 left-6 cursor-pointer hover:opacity-80'
        onClick={() => window.history.back()}
      />
      <iframe src={`https://www.youtube.com/embed/${data[0].key}`} title={data[0].name}
        frameBorder={0}
        width="90%"
        height="90%"
        className='min-w-[90%] min-h-[90vh] rounded-2xl'></iframe>

      <div className='flex flex-row items-center justify-between w-[90%] p-4'>
        <p>{data[0].published_at.slice(0, 10)}</p>
        <p>{data[0].name}</p>
        <p>{data[0].type}</p>
      </div>
    </main>
  )
}
