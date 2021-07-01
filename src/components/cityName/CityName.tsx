import React, {ChangeEvent, useState, KeyboardEvent, useEffect} from 'react'
import styles from './CityName.module.css'
import {useDispatch, useSelector} from "react-redux";
import {DataType, setCityAC, setCityTC, setIconTC} from "../../store/main-reducer/main-reducer";
import {AppRootStateType} from "../../store/store";
import {setCityAPI} from "../../api/instance";
import {log} from "util";


export const CityName = () => {

    const dispatch = useDispatch()
    const [city, setCity] = useState<string>('')


    const cityHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            dispatch(setCityTC(city))
        }
    }

    return (
        <div className={styles.cityName}>
            <input type="text" placeholder={"Enter city and press 'enter'"} value={city} onChange={cityHandler}
                   onKeyPress={onKeyPressHandler}/>
        </div>
    );
}

