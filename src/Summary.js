import "./Summary.css";
import imageSunny from "./Clear.png";

export const Summary = ({ temperature, date, location, weatherLabel }) => {
    return (
        <div className="summaryPanel">
            <img src={imageSunny} alt="Weather icon" />
            <div className="temperature">
                {Math.round(temperature)}
                <small>°C</small>
            </div>
            <div className="weatherLabel">{weatherLabel}</div>
            <div>Today • {date}</div>
            <div>
                <i className="fas fa-map-marker-alt" /> {location}
            </div>
        </div>
    );
};
