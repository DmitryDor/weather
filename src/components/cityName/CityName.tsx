import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import styles from './CityName.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setCityTC} from "../../store/main-reducer/main-reducer";


export const CityName = () => {

    console.log('CityName')

    const dispatch = useDispatch()
    const [city, setCity] = useState<string>('')


    const cityHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            dispatch(setCityTC(city))
            setCity('')
        }
    }

    return (
        <div className={styles.cityName}>
            <input type="text" placeholder={"Enter city and press 'enter'"} value={city} onChange={cityHandler}
                   onKeyPress={onKeyPressHandler}/>
        </div>
    );
}

