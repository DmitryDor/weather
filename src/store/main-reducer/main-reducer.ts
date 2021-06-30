const initialState = {
    sity: 'Your city'
}

export const mainReducer = (state: MainInitialStateType = initialState, action: ActionsType): MainInitialStateType => {
    switch (action.type) {
        case "MAIN/SET_SITY": {
            return {...state, sity: action.sity}
        }

        default:
            return state
    }
}

export const setCityAC = (sity: string) =>
    ({type: 'MAIN/SET_SITY', sity} as const)


/*
export const getDoctors = () => async (dispatch: Dispatch) => {
    try {
        dispatch(setAppStatus('loading'))
        const res = await getEmployees() as Array<EmployeeType>
        dispatch(setAppStatus('succeeded'))
        dispatch(setEmployees(res))

    } catch (e) {
        dispatch(setAppStatus('succeeded'))
        dispatch(setAppError("Error from response"))
    }
}
*/


export type MainInitialStateType = typeof initialState

type ActionsType = ReturnType<typeof setCityAC>
