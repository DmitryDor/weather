import React from "react";
import styles from './main.module.css'
import {CityName} from "../cityName/CityName";
import {WeatherInCity} from "../weatherInCity/WeatherInCity";


export const Main = () => {

    console.log('Main')

    return (
        <div className={styles.main}>
            <CityName />
            <WeatherInCity />
        </div>
    )
}