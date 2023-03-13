import { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
};

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=aab497bec277d5c6aa4bc064b0621762&language=en-US&page=${page}`
      );
      setMovies(data.results);
    };
    fetchData();
  }, []);

  const fetchMoreData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=aab497bec277d5c6aa4bc064b0621762&language=en-US&page=${
        page + 1
      }`
    );
    setMovies((prevMovies) => [...prevMovies, ...data.results]);
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={fetchMoreData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      <div className="">
        <ul className="grid grid-cols-4">
          {movies.map((movie) => (
            <li key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.title}
                className="hover:brightness-90 active:brightness-75"
              />
              <h2>{movie.title}</h2>
              <p>{movie.release_date}</p>
            </li>
          ))}
        </ul>
      </div>
    </InfiniteScroll>
  );
};

export default MovieList;
