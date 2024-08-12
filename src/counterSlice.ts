import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    value: number;
    name: string
}

const initialState: CounterState = {
    value: 0,
    name: ''
}

const counterSlide = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        addname: (state) => {
            state.name += 'a'
        }
    }
})


export const { increment, decrement, addname } = counterSlide.actions
export default counterSlide.reducer

