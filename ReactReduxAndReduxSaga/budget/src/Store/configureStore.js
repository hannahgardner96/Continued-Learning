import { createStore, combineReducers } from "redux"
import { reducer } from "../Reducers/entries.reducers"
import { composeWithDevTools } from 'redux-devtools-extension'
import { modalsReducer } from "../Reducers/modals.reducers"

export const configureStore = () => {
    return createStore(
        combineReducers({
            entries: reducer,
            modals: modalsReducer,
        }), 
        composeWithDevTools()
    )
}