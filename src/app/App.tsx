import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import {useSelector} from "react-redux";
import {selectorError, selectorStatus} from "../store/app-reducer/app-selector";
import {ErrorSnackBar} from "../components/auxiliaryComponents/ErrorSnackBar/ErrorSnackBar";
import Preloader from "../components/auxiliaryComponents/Preloder/Preloader";
import {Main} from "../components/Main/Main";


function App() {

    const status = useSelector(selectorStatus)
    const error = useSelector(selectorError)


    return (
            <div className="App">
                {error !== null && <ErrorSnackBar errorMessage={error}/>}
                {status === 'loading' && <Preloader/>}
                <Main />
            </div>
    );
}

export default App;
