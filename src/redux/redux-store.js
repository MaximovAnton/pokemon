import {createStore, combineReducers, applyMiddleware} from 'redux'
import pokemonReducer from './pokemon-reducer'
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    pokemonReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store