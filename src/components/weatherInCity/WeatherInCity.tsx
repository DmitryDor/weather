import React from 'react';
import styles from './WeatherInCity.module.css'
import {useSelector} from "react-redux";
import {
    selectorCity,
    selectorHumidity,
    selectorIcon,
    selectorMain,
    selectorTemp
} from "../../store/app-reducer/app-selector";



export const WeatherInCity = React.memo(() => {

    console.log('WeatherInCity')

    const city = useSelector(selectorCity)
    const temp = useSelector(selectorTemp)
    const humidity = useSelector(selectorHumidity)
    const main = useSelector(selectorMain)
    const icon = useSelector(selectorIcon)

    return (

        <div className={styles.weatherMain}>
            <div>
                <h2>City: { city.toUpperCase()} - {temp ? temp : '__'} &deg;C</h2>
            </div>
            <div>
                <h2>Humidity:  {humidity ? humidity : '__'} %</h2>
            </div>
            <div>
                <h2>Main: {main}</h2>
            </div>
            <div>
                {icon && <img src={` https://openweathermap.org/img/wn/${icon}@2x.png`} />}
            </div>
        </div>
    )
})

