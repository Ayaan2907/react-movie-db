import React from "react";
import "../styles/navbar.css";
export default function NavBar({ search, setSearchBarVal }) {
   // remember to use{} while passing props inside function
   return (
      <div className="navBar">
         <span className="header">Ayaan Movie DB</span>
         <input
            onChange={(e) => {
               setSearchBarVal(e.target.value);
               // basically it is giving us a front-end event, we have to bind that event with certain action
               // now we have to get input value from this event.
            }}
            onKeyUp={search}
            autoFocus
            type="text"
            className="searchBar"
            placeholder=" search here..."
         />
      </div>
   );
}
