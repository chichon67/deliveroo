import { combineReducers, configureStore } from '@reduxjs/toolkit'
import basketReducer from './features/basketSlice'

const rootReducer = combineReducers({})

export default configureStore({
    reducer: {
        basket: basketReducer,

    },
})