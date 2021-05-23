import {Summary} from "./Summary";



export const WeatherDisplay = ({weather}) => {
    const currentWeather=weather.consolidated_weather[0];
    return (
        <div>
            <Summary date={currentWeather.applicable_date}
                     temperature={currentWeather.the_temp}
                     location={weather.title}
                     weatherLabel={currentWeather.weather_state_name}
            />
        </div>
    )
};

