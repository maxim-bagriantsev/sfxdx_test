import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreators";

type UserStateType = {
    users: any[]
    isLoading: boolean
    error: string
    count: number
}

const initialState: UserStateType = {
    users: [],
    isLoading: false,
    error: '',
    count: 0
}

//slice в toolkit это тоже что и в redux функция reducer, который принимает в себя объект с опциями.
export const userSlice = createSlice({
    name: 'user', // обязательное уникалное имя
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
    },
    // с помощью createAsyncThunk мы сделали тоже самое что и прописывали в reducers
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.error = ''
            state.users = action.payload
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

// после создания slice мы можем вытащить из него отдельно reducer и отдельно action. Добавляем его в наш rootReducer и не забываем экспортировать из slice
export default userSlice.reducer