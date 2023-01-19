import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type CountStateType = {
    count: number
}

const initialState: CountStateType = {
    count: 0
}

//slice в toolkit это тоже что и в redux функция reducer, который принимает в себя объект с опциями.
export const countSlice = createSlice({
    name: 'count', // обязательное уникалное имя
    initialState, // начальное состояние state

    //switch/case как в redux. Каждый case будет идти как отдельный reducer
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.count += action.payload
        },
        decrement(state, action: PayloadAction<number>) {
            state.count -= action.payload
        },
    }
})

// после создания slice мы можем вытащить из него отдельно reducer и отдельно action. Добавляем его в наш rootReducer и не забываем экспортировать из slice
export default countSlice.reducer