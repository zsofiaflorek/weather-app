import { useState, useEffect } from "react";
import { WeatherDisplay } from "./WeatherDisplay";

export const Weather = () => {
    const [data, setData] = useState(undefined);

    async function importData () {
        // return fetch(
        //     "https://metaweatherproxy.azurewebsites.net/api/location/615702"
        // )
        //     .then((response) => {
        //         /*console.log(response);*/
        //         return response.json();
        //     })

        const response = await fetch(
            "https://metaweatherproxy.azurewebsites.net/api/location/615702"
        );
        return await response.json();
    }


    useEffect( () => {
         importData()
             .then((response) => {
                 setData(response)
             })
    }, []);

    if (data === undefined) {
        return <div>Loading</div>;
    }

    return <WeatherDisplay weather={data} />;
};
