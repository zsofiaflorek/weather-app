import { Summary } from "./Summary";
import { DailyWeatherCard } from "./DailyWeatherCard";

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
            <div>
                {weather.consolidated_weather.map(
                    (consolidatedWeatherElement) => (
                        <DailyWeatherCard
                            key={consolidatedWeatherElement.id}
                            date={consolidatedWeatherElement.applicable_date}
                            minTemperature={consolidatedWeatherElement.min_temp}
                        />
                    )
                )}
            </div>
        </div>
    );
};
