import { createStore,applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import weatherAppReducer from './reducers/weatherAppReducer'

let preloadedState = {
    updated: false,
    fetching: false,
}

export default function configureStore() {
    return createStore(
        weatherAppReducer,
        preloadedState,//{},
        applyMiddleware(
            thunkMiddleware
        )
    )
}