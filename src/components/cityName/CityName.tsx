import React, {ChangeEvent, useState,  KeyboardEvent} from 'react'
import styles from './CityName.module.css'
import {useDispatch} from "react-redux";
import {setCityAC} from "../../store/main-reducer/main-reducer";


export const CityName = () => {

    let dispatch = useDispatch()
    const [city, setCity] = useState<string>('')


    const cityHandler = (e: ChangeEvent<HTMLInputElement>) => {
         setCity(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter"){
            dispatch(setCityAC(city))
        }
    }

    return (
        <div className={styles.cityName}>
            <input type="text" placeholder={"Enter city and press 'enter'"} value={city} onChange={cityHandler} onKeyPress={onKeyPressHandler}/>
        </div>
    );
}

