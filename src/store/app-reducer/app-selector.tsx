import {AppRootStateType} from "../store";
import {RequestStatusType} from "./app-reducer";
import {useSelector} from "react-redux";


export const selectorStatus = (state: AppRootStateType): RequestStatusType => state.app.status
export const selectorError = (state: AppRootStateType): string | null => state.app.error

export const selectorCity = (state: AppRootStateType): string => state.main.sity
export const selectorTemp = (state: AppRootStateType): number | null => state.main.data.main.temp
export const selectorHumidity = (state: AppRootStateType): number | null => state.main.data.main.humidity
export const selectorMain = (state: AppRootStateType): string | null => state.main.data.weather[0].main
export const selectorIcon = (state: AppRootStateType): string | null => state.main.data.weather[0].icon

