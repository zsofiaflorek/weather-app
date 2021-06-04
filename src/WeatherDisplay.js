import { Summary } from "./Summary";
import { DailyWeatherCard } from "./DailyWeatherCard";
import styles from "./WeatherDisplay.module.css"


export const WeatherDisplay = ({ weather }) => {
    const currentWeather = weather.consolidated_weather[0];
    return (
        <div>
            <Summary
                date={currentWeather.applicable_date}
                temperature={currentWeather.the_temp}
                location={weather.title}
                weatherLabel={currentWeather.weather_state_name}
            />
            <div className={styles.forecastPanel}>
                {weather.consolidated_weather.slice(1).map(
                    (consolidatedWeatherElement) => (
                        <DailyWeatherCard
                            key={consolidatedWeatherElement.id}
                            date={consolidatedWeatherElement.applicable_date}
                            minTemperature={consolidatedWeatherElement.min_temp}
                            maxTemperature={consolidatedWeatherElement.max_temp}
                            weatherLabel={consolidatedWeatherElement.weather_state_name}
                        />
                    )
                )}
            </div>
        </div>
    );
};
