import React from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {selectorError, selectorStatus} from "../store/app-reducer/app-selector";
import {ErrorSnackBar} from "../components/auxiliaryComponents/ErrorSnackBar/ErrorSnackBar";
import {Main} from "../components/Main/Main";
import {CircularProgress} from "@material-ui/core";


export const App = () => {

    console.log('App')

    const status = useSelector(selectorStatus)
    const error = useSelector(selectorError)

    return (
            <div className="App">
                {error !== null && <ErrorSnackBar errorMessage={error}/>}
                {status === 'loading' && <CircularProgress />}
                <Main />
            </div>
    );

}


