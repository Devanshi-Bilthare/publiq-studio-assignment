import { configureStore } from "@reduxjs/toolkit"
import MemberReducer from '../features/Members/MemberSlice'

export const store = configureStore({
    reducer:{
        member:MemberReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
