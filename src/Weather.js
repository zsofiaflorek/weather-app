import { useState, useEffect } from "react";
import { WeatherDisplay } from "./WeatherDisplay";

export const Weather = () => {
    const [data, setData] = useState(undefined);

    useEffect(() => {
        fetch(
            "https://metaweatherproxy.azurewebsites.net/api/location/615702"
        )
            .then((response) => {
                /*console.log(response);*/
                return response.json();
            })
            .then((serverData) => {
                setData(serverData);
            });
    }, []);

    if (data === undefined) {
        return <div>Loading</div>;
    }

    return <WeatherDisplay weather={data} />;
};
