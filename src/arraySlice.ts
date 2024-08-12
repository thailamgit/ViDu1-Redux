import { createSlice, PayloadAction} from '@reduxjs/toolkit'

interface ArrayState {
    arr: number[]
}

const initialState: ArrayState = ({
    arr: [],
})

const arraySlide = createSlice({
    name: 'array',
    initialState,
    reducers: {
        addArray: (state) => {
            state.arr.push(state.arr.length)
        },
        removeArray: (state) => {
            state.arr.pop()
        },
    }
})

export const {addArray, removeArray} = arraySlide.actions
export default arraySlide.reducer