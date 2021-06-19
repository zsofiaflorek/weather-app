import styles from "./UnitButtons.module.css";
import { useState } from "react";

export function UnitButtons({ containerClassName }) {
    const [unit, setUnit] = useState("celsius");
    return (
        <div className={containerClassName}>
            <button
                className={
                    unit === "celsius"
                        ? `${styles.unitButton} ${styles.active}`
                        : styles.unitButton
                }
                onClick={() => {
                    setUnit("celsius");
                }}
            >
                °C
            </button>
            <button
                className={
                    unit === "fahrenheit"
                        ? `${styles.unitButton} ${styles.active}`
                        : styles.unitButton
                }
                onClick={() => {
                    setUnit("fahrenheit");
                }}
            >
                °F
            </button>
        </div>
    );
}
