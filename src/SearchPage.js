import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useLocationSearch } from "./utils/data-access";
import styles from "./SearchPage.module.css";

export const SearchPage = () => {
    const [search, setSearch] = useState("");
    const { searchResult } = useLocationSearch(search);
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
