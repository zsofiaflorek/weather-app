import styles from "./UnitButtons.module.css";
import classNames from "classnames";

export function UnitButtons({ containerClassName, unit, onUnitChange }) {
    return (
        <div className={containerClassName}>
            <button
                className={classNames(styles.unitButton, {
                    [styles.active]: unit === "celsius",
                })}
                onClick={() => {
                    onUnitChange("celsius");
                }}
            >
                °C
            </button>
            <button
                className={classNames(styles.unitButton, {
                    [styles.active]: unit === "fahrenheit",
                })}
                onClick={() => {
                    onUnitChange("fahrenheit");
                }}
            >
                °F
            </button>
        </div>
    );
}
