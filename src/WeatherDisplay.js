import { Summary } from "./Summary";
import { DailyWeatherCard } from "./DailyWeatherCard";
import { ForecastPanel } from "./ForecastPanel";
import { HighlightCard } from "./HighlightCard";
import styles from "./WeatherDisplay.module.css";
import { HighlightCardPanel } from "./HighlightCardPanel";
import { UnitButtons } from "./UnitButtons";
import { useState } from "react";

export const WeatherDisplay = ({ weather }) => {
    const [unit, setUnit] = useState("celsius");
    const currentWeather = weather.consolidated_weather[0];
    return (
        <div>
            <div className={styles.summaryPanel}>
                <Summary
                    date={currentWeather.applicable_date}
                    temperature={currentWeather.the_temp}
                    location={weather.title}
                    weatherLabel={currentWeather.weather_state_name}
                />
                <UnitButtons
                    containerClassName={styles.unitButtons}
                    unit={unit}
                    onUnitChange={(newValue) => {
                        setUnit(newValue);
                    }}
                />
            </div>
            <ForecastPanel>
                {weather.consolidated_weather
                    .slice(1)
                    .map((consolidatedWeatherElement) => (
                        <DailyWeatherCard
                            key={consolidatedWeatherElement.id}
                            date={consolidatedWeatherElement.applicable_date}
                            minTemperature={consolidatedWeatherElement.min_temp}
                            maxTemperature={consolidatedWeatherElement.max_temp}
                            weatherLabel={
                                consolidatedWeatherElement.weather_state_name
                            }
                        />
                    ))}
            </ForecastPanel>
            <HighlightCardPanel>
                <HighlightCard title="Wind status">
                    <div className={styles.unit}>
                        <span className={styles.measurements}>
                            {Math.floor(currentWeather.wind_speed)}
                        </span>{" "}
                        mph
                    </div>
                    <div>
                        <span>WSW</span>
                    </div>
                </HighlightCard>
                <HighlightCard title="Humidity">
                    <div className={styles.unit}>
                        <span className={styles.measurements}>
                            {currentWeather.humidity}
                        </span>{" "}
                        %
                    </div>
                </HighlightCard>
                <HighlightCard title="Visibility">
                    <div className={styles.unit}>
                        <span className={styles.measurements}>
                            {Math.round(currentWeather.visibility)}
                        </span>{" "}
                        miles
                    </div>
                </HighlightCard>
                <HighlightCard title="Air Pressure">
                    <div className={styles.unit}>
                        <span className={styles.measurements}>
                            {Math.floor(currentWeather.air_pressure)}
                        </span>{" "}
                        mb
                    </div>
                </HighlightCard>
            </HighlightCardPanel>
        </div>
    );
};
