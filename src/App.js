import "./styles/App.css";
import React, { useState } from "react";
import { NavBar, MovieList } from "./components";
import axios from "axios";

const BASE_API_URL = "http://www.omdbapi.com";
const API_KEY = "aa660442";

function App() {
    const [movies, setMovies] = useState([]);
    const [searchBarVal, setSearchBarVal] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    // rerendering components like this is not the best way, bcz if the inner level component data changes then all the levels between will also be rerendered
    // to improve this situation contextAPI and Redux are used(later)
    // console.log(searchBarVal)
    const search = async (e) => {
        if (e.code === "Enter") {
            setIsLoading(true);
            console.log("search called");
            const response = await axios.get(
                `${BASE_API_URL}/?s=${searchBarVal}&apikey=${API_KEY}`
            );
            // console.log(response.data.Search);
            setTimeout(() => {
                setIsLoading(false);
                setMovies(response.data.Search);
            }, 1000);
            //  console.log(movies)
        }
    };
    return (
        <div className="main">
            <NavBar search={search} setSearchBarVal={setSearchBarVal} />
            <MovieList movieList={movies} isLoading={isLoading} />
            {/* these two fun are use for storing the inputValue  and storing the state change on input value*/}
            {/* these two should be destructured as the props inside the navBar component */}
        </div>
    );
}

export default App;
