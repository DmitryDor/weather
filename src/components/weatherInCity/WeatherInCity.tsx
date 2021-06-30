import React from 'react';
import styles from './WeatherInCity.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {mainReducer} from "../../store/main-reducer/main-reducer";

export const WeatherInCity = () => {

    const city = useSelector<AppRootStateType, string>(state => state.main.sity)

    return (
        <div className={styles.weatherMain}>
            <div>
                <h2>{city}</h2>
            </div>
            <div>
                <h2>cloudy</h2>
            </div>
            <div>
                <img src="#" alt="img"/>
            </div>
        </div>
    )
}

