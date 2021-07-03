import {Dispatch} from "redux";
import {setCityAPI} from "../../api/instance";
import {setAppError, setAppStatus} from "../app-reducer/app-reducer";


const initialState = {
    sity: 'Your city',
    data: {
        main: {
            humidity: null as number | null,
            temp: null as number | null,
        },
        weather: [{
            main: null as string | null,
            icon: null as string | null
        }]
    } as DataType
}
export  type DataType = {
    main: {
        humidity: null | number
        temp: null | number
    },
    weather: Array<{
        main: null | string
        icon: null | string
    }>
}

export const mainReducer = (state: MainInitialStateType = initialState, action: ActionsType): MainInitialStateType => {
    switch (action.type) {
        case "MAIN/SET_SITY": {
            return {...state, sity: action.sity}
        }
        case "MAIN/SET_TEMP":
            return {
                ...state,
                data: {
                    ...state.data,
                    main: {
                        ...state.data.main,
                        temp: action.temp
                    }
                }
            }
        case "MAIN/SET_HUMIDITY":
            return {
                ...state,
                data: {
                    ...state.data,
                    main: {
                        ...state.data.main,
                        humidity: action.humidity
                    }
                }
            }

        case "MAIN/SET_MAIN":
            return {
                ...state,
                data: {
                    ...state.data,
                    weather: state.data.weather.map(el => {
                        return {...el, main: action.main}
                    })
                }
            }
        case "MAIN/SET_ICON":
            return {
                ...state,
                data: {
                    ...state.data,
                    weather: state.data.weather.map(el => {
                        return {...el, icon: action.icon}
                    })
                }
            }

        default:
            return state
    }
}

export const setCityAC = (sity: string) =>
    ({type: 'MAIN/SET_SITY', sity} as const)
export const setTempAC = (temp: number) =>
    ({type: 'MAIN/SET_TEMP', temp} as const)
export const setHumidityAC = (humidity: number) =>
    ({type: 'MAIN/SET_HUMIDITY', humidity} as const)
export const setMainAC = (main: string) =>
    ({type: 'MAIN/SET_MAIN', main} as const)
export const setIconAC = (icon: string) =>
    ({type: 'MAIN/SET_ICON', icon} as const)


/*export const setCityTC = (city: string) => (dispatch: Dispatch) => {
    return setCityAPI.setCity(city).then(res => {
            dispatch(setAppStatus('loading'))
            dispatch(setCityAC(city))
            dispatch(setTempAC(Math.round(res.data.main.temp - 272.1)))
            dispatch(setHumidityAC(res.data.main.humidity))
            dispatch(setMainAC(res.data.weather[0].main))
            dispatch(setIconAC(res.data.weather[0].icon))
            dispatch(setAppStatus('succeeded'))
        }
    )
}*/
export const setCityTC = (city: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(setAppStatus('loading'))
        let res = await setCityAPI.setCity(city)
        dispatch(setCityAC(city))
        dispatch(setTempAC(Math.round(res.data.main.temp - 272.1)))
        dispatch(setHumidityAC(res.data.main.humidity))
        dispatch(setMainAC(res.data.weather[0].main))
        dispatch(setIconAC(res.data.weather[0].icon))
        dispatch(setAppStatus('succeeded'))
    } catch (e) {
        dispatch(setAppStatus('succeeded'))
        dispatch(setAppError('City not found'))

    }
}


export const setIconTC = (icon: string) => (dispatch: Dispatch) => {
    return setCityAPI.setIcon(icon).then(res => {
        console.log(res)
    })
}


export type MainInitialStateType = typeof initialState

type ActionsType =
    | ReturnType<typeof setCityAC>
    | ReturnType<typeof setTempAC>
    | ReturnType<typeof setMainAC>
    | ReturnType<typeof setHumidityAC>
    | ReturnType<typeof setIconAC>
    | ReturnType<typeof setAppStatus>
