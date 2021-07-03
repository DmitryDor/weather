import React from 'react';
import styles from './WeatherInCity.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {selectorStatus} from "../../store/app-reducer/app-selector";


export const WeatherInCity = React.memo(() => {


    const city = useSelector<AppRootStateType, string>(state => state.main.sity)
    const temp = useSelector<AppRootStateType, number | null>(state => state.main.data.main.temp)
    const humidity = useSelector<AppRootStateType, number | null>(state => state.main.data.main.humidity)
    const main = useSelector<AppRootStateType, string | null>(state => state.main.data.weather[0].main)
    const icon = useSelector<AppRootStateType, string | null>(state => state.main.data.weather[0].icon)


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

