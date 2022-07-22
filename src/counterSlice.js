import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    action: "Default"
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        increment: (state) => {
            state.value += 1;
            state.action = "Incrimenting";
        },
        decrement: (state) => {
            state.value -= 1;
            state.action = "Decrimenting";
        }
    }
});

export const { increment, decrement } = counterSlice.actions;

//export const selectCount = (state) => state.counter;

export default counterSlice.reducer;
