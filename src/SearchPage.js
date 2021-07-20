import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useLocationSearch } from "./utils/data-access";
import styles from "./SearchPage.module.css";
import { useDebounce } from "use-debounce";
import icon from "./utils/icons/SearchPageIcon.png";

export const SearchPage = () => {
    const [search, setSearch] = useState("");
    const [debouncedSearch] = useDebounce(search, 500);
    const { searchResult } = useLocationSearch(debouncedSearch);
    const history = useHistory();

    return (
        <div className={styles.locationDisplay}>
            {history.action === "PUSH" ? (
                <i
                    className="fas fa-times"
                    onClick={() => {
                        history.goBack();
                    }}
                />
            ) : null}
            <img src={icon} alt="Weather app icon" />
            <div className={styles.title}>Weather App</div>
            <div className={styles.text}>Please choose your current city</div>
            <input
                type="text"
                placeholder="Search Location"
                value={search}
                onChange={(e) => {
                    setSearch(e.currentTarget.value);
                }}
            />
            {searchResult !== undefined ? (
                <ul className={styles.locationList}>
                    {searchResult.slice(0, 10).map((result) => {
                        return (
                            <li
                                key={result.woeid}
                                className={styles.locationListItem}
                            >
                                <Link
                                    to={`/weather/${result.woeid}`}
                                    className={styles.locationResult}
                                >
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
