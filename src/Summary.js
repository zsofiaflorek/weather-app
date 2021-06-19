import "./Summary.css";
import imageSunny from "./Clear.png";
import {calculateTemperature} from "./utils/temperature"

export const Summary = ({
    temperature,
    date,
    location,
    weatherLabel,
    unit,
}) => {
    return (
        <div className="summaryPanel">
            <img src={imageSunny} alt="Weather icon" />
            <div className="temperature">
                {calculateTemperature(unit, temperature)}
                <small>{unit === "celsius" ? "°C" : "°F"}</small>
            </div>
            <div className="weatherLabel">{weatherLabel}</div>
            <div>Today • {date}</div>
            <div>
                <i className="fas fa-map-marker-alt" /> {location}
            </div>
        </div>
    );
};
