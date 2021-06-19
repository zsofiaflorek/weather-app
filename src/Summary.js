import "./Summary.css";
import imageSunny from "./Clear.png";

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

function calculateTemperature(unit, temperatureInCelsius) {
    if (unit === "celsius") {
        return Math.round(temperatureInCelsius);
    } else {
        return Math.round(temperatureInCelsius * 1.8 + 32);
    }
}
