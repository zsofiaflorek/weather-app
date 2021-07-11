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

export function useLocationSearch(search) {
    const [data, setData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);

    useEffect(() => {
        setIsLoading(true);
        let isActive = true;

        fetch(
            `https://metaweatherproxy.azurewebsites.net/api/location/search/?query=${search}`
        )
            .then((response) => response.json())
            .then((result) => {
                if (isActive) {
                    setData(result);
                }
            })
            .catch((error) => {
                if (isActive) {
                    setError(error);
                }
            })
            .finally(() => {
                if (isActive) {
                    setIsLoading(false);
                }
            });

        return () => {
            isActive = false;
        };
    }, [search]);

    return { searchResult: data, isLoading, error };
}
