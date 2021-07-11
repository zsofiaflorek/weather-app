import React from "react";
import styles from "./Location.module.css";
import { Link } from "react-router-dom";
import classNames from "classnames";

export function LocationSearchButton({className}) {
    return (
        <Link to="/search" className={classNames(className,styles.Link)}>
          <i className="fas fa-search-location" />
            Pick location
        </Link>
    );
}
