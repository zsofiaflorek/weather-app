import './Summary.css'
import imageSunny from './Clear.png'

export const Summary = ({temperature, date, location, weatherLabel}) => {
    return (
        <div className='summaryPanel'>
            <div> <img src={imageSunny} alt='Weather icon'/> </div>
            <div className='temperature'>{Math.round(temperature)}<small>°C</small></div>
            <div className='weatherLabel'>{weatherLabel}</div>
            <div>Today {date}</div>
            <div>{location}</div>
        </div>
    )

}