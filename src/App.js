import { computeHeadingLevel } from "@testing-library/react";
import React, { useEffect } from "react";

const data = {
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
  Title: "Superman, Spiderman or Batman",
  Type: "movie",
  Year: "2011",
  imdbID: "tt2084949",
};

const API_URL = "http://www.omdbapi.com/?apikey=c4e7100a";

const App = () => {
  const [movies, setMovies] = React.useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const jsonResponse = await response.json();
    setMovies(jsonResponse.Search);
    console.log(movies);
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="bg-slate-800">
      <h1 className="text-3xl font-bold text-center text-white">
        My Movie Website
      </h1>
      <input className="block mx-auto my-5" type="text" />
      <div>
        {movies.map((movie) => {
          return (
            <div className="text-white border-solid" key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.title} />
              <h2>{movie.Title}</h2>
              <p>{movie.Year}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
