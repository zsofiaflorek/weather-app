import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
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

export function useLocationSearch(search) {
    const { data, error } = useSWR(
        search
            ? `https://metaweatherproxy.azurewebsites.net/api/location/search/?query=${search}`
            : null,
        fetcher
    );
    return { searchResult: data, isLoading: !error && !data, error };
}
