import styles from "./DailyWeatherCard.module.css";
import { calculateTemperature, formatUnit } from "./utils/temperature";
import { getIconForWeatherLabel } from "./utils/icons";

export const DailyWeatherCard = ({
    date,
    minTemperature,
    maxTemperature,
    weatherLabel,
    unit,
}) => {
    const year = Number(date.slice(0, 4));
    const month = Number(date.slice(5, 7));
    const day = Number(date.slice(8, 10));
    const parsedDate = new Date(year, month - 1, day);
    return (
        <div className={styles.weatherCard}>
            <div className={styles.date}>
                {parsedDate.toLocaleDateString("en-UK", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                })}
            </div>
            <div className={styles.weatherLabel}>
                <img
                    src={getIconForWeatherLabel(weatherLabel)}
                    alt={weatherLabel}
                />
            </div>
            <div className={styles.temperatures}>
                <span>
                    {calculateTemperature(unit, maxTemperature)}
                    {formatUnit(unit)}
                </span>
                <span className={styles.minTemperature}>
                    {calculateTemperature(unit, minTemperature)}
                    {formatUnit(unit)}
                </span>
            </div>
        </div>
    );
};
