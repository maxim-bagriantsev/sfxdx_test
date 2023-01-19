import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreators";

type UserStateType = {
    removeUser: { }
}

const initialState: UserStateType = {
    removeUser: {},
}

//slice в toolkit это тоже что и в redux функция reducer, который принимает в себя объект с опциями.
export const RemoveUserSlice = createSlice({
    name: 'removeUser', // обязательное уникалное имя
    initialState, // начальное состояние state

    //switch/case как в redux. Каждый case будет идти как отдельный reducer
    reducers: {
        // usersFetching(state) {
        //     state.isLoading = true
        // },
        // usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
        //     state.isLoading = false
        //     state.error = ''
        //     state.users = action.payload
        // },
        // usersFetchingError(state, action: PayloadAction<string>) {
        //     state.isLoading = false
        //     state.error = action.payload
        // }
        removeUser(state, action: PayloadAction<UserStateType>) {
            state.removeUser = action.payload
        }
    },
    // с помощью createAsyncThunk мы сделали тоже самое что и прописывали в reducers
    extraReducers: {
        // [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
        //     state.users = action.payload
        // },
        // [fetchUsers.pending.type]: (state) => {
        //     state.isLoading = true
        // },
        // [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
        //     state.isLoading = false
        //     state.error = action.payload
        // }
    }
})

// после создания slice мы можем вытащить из него отдельно reducer и отдельно action. Добавляем его в наш rootReducer и не забываем экспортировать из slice
export default RemoveUserSlice.reducer