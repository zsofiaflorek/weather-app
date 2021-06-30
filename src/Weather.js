import { WeatherDisplay } from "./WeatherDisplay";
import { useWeatherForecast } from "./utils/data-access";

export const Weather = () => {
    const { data } = useWeatherForecast("615702");
    if (data === undefined) {
        return <div>Loading</div>;
    }
    return <WeatherDisplay weather={data} />;
};
