import styles from "./UnitButtons.module.css";
import { useState } from "react";
import classNames from "classnames";

export function UnitButtons({ containerClassName }) {
    const [unit, setUnit] = useState("celsius");
    return (
        <div className={containerClassName}>
            <button
                className={classNames(styles.unitButton, {
                    [styles.active]: unit === "celsius",
                })}
                onClick={() => {
                    setUnit("celsius");
                }}
            >
                °C
            </button>
            <button
                className={classNames(styles.unitButton, {
                    [styles.active]: unit === "fahrenheit",
                })}
                onClick={() => {
                    setUnit("fahrenheit");
                }}
            >
                °F
            </button>
        </div>
    );
}
