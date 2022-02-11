import React from "react";
// import { Component } from "react/cjs/react.production.min";
import "../styles/movielist.css";
import MovieCard from "./MovieCard";

export default function MovieList({ movieList, isLoading }) {
   if (isLoading) {
      return <p>loading</p>;
   } else {
      return (
         <div className="movieList">
            <p>
               {movieList.map((e) => (
                  <MovieCard movie={e} key={e.imdbID} />
               ))}
            </p>
         </div>
      );
   }
}
