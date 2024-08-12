import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import arrayReducer from './arraySlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        array: arrayReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store