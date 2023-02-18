// DUCKS Pattern: Focusing on one slice 

import {createSlice} from "@reduxjs/toolkit";


interface CounterState {
    value: number,
}

const initialState: CounterState = {
    value: 0,
}

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers: {
        // reducers object contains reducer functions for updating the state.
        
        incremented(state) {
            // ES6 inline function, don't need a variable to store it

            state.value++;

            // in normal redux reducer it won't work as we are not making any copis and the UI won't know about the changes
            // But, here it's okay as Redux toolkit uses an Immer library:It wraps our state update and tracks of all the mutations that we do and automatically converts into an immutable state


        }

    }
})

// action creators: returns an action object
// slice creates an action creater for each of the different functions inside the reducer's field.

export const {incremented} = counterSlice.actions
export default counterSlice.reducer