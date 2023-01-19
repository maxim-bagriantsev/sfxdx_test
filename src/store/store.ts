import {combineReducers, configureStore} from "@reduxjs/toolkit";
import CountReducer from './reducers/CountSlice'
import UserReducer from './reducers/UserSlice'
import RemoveUserSlice from "./reducers/RemoveUserSlice";
import {postAPI} from "../serveces/PostService";

const rootReducer = combineReducers({
    CountReducer,
    UserReducer,
    RemoveUserSlice,
    [postAPI.reducerPath]: postAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
