import { useEffect, useState } from "react";

export function useWeatherForecast(locationId) {
    const [data, setData] = useState(undefined);

    useEffect(() => {
        async function importData() {
            // return fetch(
            //     "https://metaweatherproxy.azurewebsites.net/api/location/615702"
            // )
            //     .then((response) => {
            //         /*console.log(response);*/
            //         return response.json();
            //     })

            const response = await fetch(
                `https://metaweatherproxy.azurewebsites.net/api/location/${locationId}`
            );
            return await response.json();
        }
        importData().then((response) => {
            setData(response);
        });
    }, [locationId]);

    return { data };
}
