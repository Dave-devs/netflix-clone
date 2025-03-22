import MovieSlider from "@/components/MovieSlider";
import React from "react";

export default function Home() {
    return (
        <section className="flex-1 flex flex-col bg-dark-2 w-full min-h-screen pt-[130px] px-4 pb-8">
            <div className="flex flex-col items-start text-white gap-4 max-w-xl">
                <h1 className="font-extrabold font-inter text-5xl">Movies</h1>
                <p className="font-normal text-base font-inter md:text-wrap">Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>
            </div>
            {/* Add List of movies base on Category */}
            <main className="flex flex-col gap-y-16 py-14">
                <MovieSlider category={"top_rated"} headerTitle={"Blockbuster Movies"} />
                <MovieSlider category={"popular"} headerTitle={"Only on Netflix"} />
                <MovieSlider category={"upcoming"} headerTitle={"Upcoming"} />
                <MovieSlider category={"now_playing"} headerTitle={"Top Picks for You"} />
            </main>

        </section>
    );
}