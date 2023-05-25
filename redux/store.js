import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartIconSlice';

export default configureStore({
    reducer: {
        cart: cartReducer,
    }
})