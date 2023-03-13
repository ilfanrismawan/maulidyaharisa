"use client";

import InputForm from "../components/InputForm";
import MovieList from "../components/MovieList";

export default function Home() {
  return (
    <main className="py-20">
      <div>
        <InputForm />
      </div>
      <h1>Now Playing</h1>
      <MovieList />
    </main>
  );
}
