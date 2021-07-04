import React from "react";
import {Link} from "react-router-dom";

export const SearchPage = () => {
    return(
      <div>
        <input type="text" placeholder="search location"/>
        <ul>
          <li>
            <Link to="/weather/615702">Paris</Link>
            <Link to="/weather/862592">Oslo</Link>
            <Link to="/weather/628886">Toulouse</Link>
          </li>
        </ul>
      </div>
    )
};
