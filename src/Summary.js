import "./Summary.css";
import { calculateTemperature, formatUnit } from "./utils/temperature";
import { getIconForWeatherLabel } from "./utils/icons";

export const Summary = ({
    temperature,
    date,
    location,
    weatherLabel,
    unit,
}) => {
    return (
        <div className="summaryPanel">
            <img
                src={getIconForWeatherLabel(weatherLabel)}
                alt="Weather icon"
            />
            <div className="temperature">
                {calculateTemperature(unit, temperature)}
                <small>{formatUnit(unit)}</small>
            </div>
            <div className="weatherLabel">{weatherLabel}</div>
            <div>Today • {date}</div>
            <div>
                <i className="fas fa-map-marker-alt" /> {location}
            </div>
        </div>
    );
};
