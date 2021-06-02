import styles from "./DailyWeatherCard.module.css";

export const DailyWeatherCard = ({
    date,
    minTemperature,
    maxTemperature,
    weatherLabel,
}) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    const parsedDate = new Date(year, month, day);
    return (
        <div className={styles.weatherCard}>
            <div className={styles.date}>
                {parsedDate.toLocaleDateString("en-UK", {
                    weekday: "short",
                    month: "long",
                    day: "numeric",
                })}
            </div>
            <div className={styles.weatherLabel}>{weatherLabel}</div>
            <div className={styles.temperatures}>
                <span>{Math.round(minTemperature)}°C</span>
                <span className={styles.maxTemperature}>
                    {Math.round(maxTemperature)}°C
                </span>
            </div>
        </div>
    );
};
