import {useState, useEffect} from "react";

export const Weather = () => {

    useEffect(() => {
        fetch('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/615702')
            .then((response) => {
                /*console.log(response);*/
                return response.json();
            })
            .then(serverData => {
                setData(serverData);
            });
    }, [])
    const [data, setData] = useState(undefined)
    if (data === undefined){
        return (<div>Loading</div>)
    }
    return <div>{data.consolidated_weather[0].weather_state_name}</div>

};