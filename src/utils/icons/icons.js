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

export function getIconForWeatherLabel(weatherLabel) {
    return iconForLabel[weatherLabel] ?? heavyCloudIcon;
}
