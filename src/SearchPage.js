import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocationSearch } from "./utils/data-access";

export const SearchPage = () => {
    const [search, setSearch] = useState("");
    const { searchResult } = useLocationSearch(search);
    return (
        <div>
            <input
                type="text"
                placeholder="search location"
                value={search}
                onChange={(e) => {
                    setSearch(e.currentTarget.value);
                }}
            />
            {searchResult !== undefined ? (
                <ul>
                    {searchResult.slice(0, 10).map((result) => {
                        return (
                            <li key={result.woeid}>
                                <Link to={`/weather/${result.woeid}`}>
                                    {result.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            ) : null}
        </div>
    );
};
