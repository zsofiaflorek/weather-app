import styles from "./DailyWeatherCard.module.css";

export const DailyWeatherCard = ({
    date,
    minTemperature,
    maxTemperature,
    weatherLabel,
}) => {
    const year = Number(date.slice(0, 4));
    const month = Number(date.slice(5, 7));
    const day = Number(date.slice(8, 10));
    const parsedDate = new Date(year, month-1, day);
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
