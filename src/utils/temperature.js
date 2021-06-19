export function calculateTemperature(unit, temperatureInCelsius) {
    if (unit === "celsius") {
        return Math.round(temperatureInCelsius);
    } else {
        return Math.round(temperatureInCelsius * 1.8 + 32);
    }
}
