import "./Summary.css";
import { calculateTemperature, formatUnit } from "./utils/temperature";
import showerIcon from "./Shower.png";
import lightRainIcon from "./LightRain.png";
import sleetIcon from "./Sleet.png";
import snowIcon from "./Snow.png";
import thunderstormIcon from "./Thunderstorm.png";
import lightCloudIcon from "./LightCloud.png";
import heavyRainIcon from "./HeavyRain.png";
import hailIcon from "./Hail.png";
import clearIcon from "./Clear.png";
import heavyCloudIcon from "./HeavyCloud.png";

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

const iconForLabel = {
    Showers: showerIcon,
    "Light Rain": lightRainIcon,
    Sleet: sleetIcon,
    Snow: snowIcon,
    Thunderstorm: thunderstormIcon,
    "Light Cloud": lightCloudIcon,
    "Heavy Rain": heavyRainIcon,
    Hail: hailIcon,
    Clear: clearIcon,
    HeavyCloud: heavyCloudIcon,
};

function getIconForWeatherLabel(weatherLabel) {
    return iconForLabel[weatherLabel] ?? heavyCloudIcon;
}
