import { createSlice } from '@reduxjs/toolkit';


/**
    returns true if it's between 6am and 6pm.
**/
export const isDaytime = () => {
    const date = new Date();
    const hour = date.getHours();
    return hour >= 6 && hour <= 18;
};

const headerSlice = createSlice({
    name: 'header',
    initialState: {activeHamburger: false, activeLightmode: isDaytime()},
    reducers: {
        hamburger: (state, action) => {
            console.log(`toggleH: ${action.payload}`);
            state.activeHamburger = action.payload;
        },
        lightmode: (state, action) => {
            console.log(`toggleLightMode: ${action.payload}`);
            state.activeLightmode = action.payload;
        } 
    }
});

export const selectToggle = (state) => state.header;
export const { hamburger, lightmode } = headerSlice.actions;
export default headerSlice.reducer;