import styles from "./DailyWeatherCard.module.css";
import hailIcon from './Hail.png'
import heavyCloudIcon from './HeavyCloud.png'
import clearIcon from './Clear.png'
import heavyRainIcon from './HeavyRain.png'
import lightCloudIcon from './LightCloud.png'
import lightRainIcon from './LightRain.png'
import showerIcon from './Shower.png'
import sleetIcon from './Sleet.png'
import snowIcon from './Snow.png'
import thunderstormIcon from './Thunderstorm.png'

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
                    month: "short",
                    day: "numeric",
                })}
            </div>
            <div className={styles.weatherLabel}><img src={getIconForWeatherLabel(weatherLabel)} alt={weatherLabel}/></div>
            <div className={styles.temperatures}>
                <span>{Math.round(minTemperature)}°C</span>
                <span className={styles.maxTemperature}>
                    {Math.round(maxTemperature)}°C
                </span>
            </div>
        </div>
    );
};

function getIconForWeatherLabel(weatherLabel) {
    //return icon;
    if (weatherLabel === 'Showers'){
        return showerIcon;
    }
    if (weatherLabel === 'LightRain'){
        return lightRainIcon;
    }
    if (weatherLabel === 'Sleet'){
        return sleetIcon;
    }
    if (weatherLabel === 'Snow'){
        return snowIcon;
    }
    if (weatherLabel === 'Thunderstorm'){
        return thunderstormIcon;
    }
    if (weatherLabel === 'LightCloud'){
        return lightCloudIcon;
    }
    if (weatherLabel === 'HeavyRain'){
        return heavyRainIcon;
    }
    if (weatherLabel === 'Hail'){
        return hailIcon;
    }
    if (weatherLabel === 'Clear'){
        return clearIcon;
    }
    return heavyCloudIcon;

}

