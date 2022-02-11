import React from "react";
import '../styles/movieCard.css'
export default function MovieCard({ movie }) {
   return (
      <div className="movieCard">
           <img src={movie.Poster} alt="movie image"/>
           <p> { movie.Title}</p>
           <p> Year: { movie.Year }</p>
      </div>
   );
}
