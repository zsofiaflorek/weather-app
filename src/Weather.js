import { WeatherDisplay } from "./WeatherDisplay";
import { useWeatherForecast } from "./utils/data-access";
import {useParams} from "react-router-dom"

export const Weather = () => {
    const {locationId} = useParams();
    const { data } = useWeatherForecast(locationId);
    if (data === undefined) {
        return(
          <div>Loading</div>
        )
    }
    return <WeatherDisplay weather={data} />;
};
