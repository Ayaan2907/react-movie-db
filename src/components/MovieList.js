import React from "react";
// import { Component } from "react/cjs/react.production.min";
import "../styles/movielist.css";
import MovieCard from "./MovieCard";

export default function MovieList({ movieList, isLoading }) {
   if (isLoading) {
      return "    ... Loading movies and lists ";
   } else {
      return (
         <div className="movieList">
               {movieList.map((e) => (
                  <MovieCard movie={e} key={e.imdbID} />
               ))}
         </div>
      );
   }
}
