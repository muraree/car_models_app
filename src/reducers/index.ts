import {combineReducers} from 'redux'
import vehicleReducer from './vehicle'

export default combineReducers({
    vehicle: vehicleReducer,
})