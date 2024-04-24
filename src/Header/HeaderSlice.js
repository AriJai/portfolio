import { createSlice } from '@reduxjs/toolkit';

export const isDaytime = () => {
    let date = new Date();
    let hour = date.getHours();
    if ( hour > 18 ) {
        return false;
    } else { return true; } 
};

const headerSlice = createSlice({
    name: 'header',
    initialState: {isToggle: false, isVisible: isDaytime()},
    reducers: {
        toggleH: (state, action) => {
            console.log(`toggleH: ${action.payload}`);
            state.isToggle = action.payload;
        },
        toggleV: (state, action) => {
            console.log(`toggleV: ${action.payload}`);
            state.isVisible = action.payload;
        } 
    }
})

export const selectToggle = (state) => state.header;
export const { toggleH, toggleV } = headerSlice.actions;
export default headerSlice.reducer;