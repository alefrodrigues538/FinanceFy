import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import userReducer from "./stock/userReducer";
import { useDispatch } from "react-redux";

const store = configureStore({
    reducer: {
        user: userReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type AppThunk = ThunkAction<void, RootState, null, Action<any>>