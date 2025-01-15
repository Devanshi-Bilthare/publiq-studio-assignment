import { configureStore } from "@reduxjs/toolkit"
import MemberReducer from '../features/Members/MemberSlice'
import ProjectReducer from "../features/Projects/ProjectSlice";
import TaskReducer from "../features/Tasks/TaskSlice";

export const store = configureStore({
    reducer:{
        member:MemberReducer,
        project:ProjectReducer,
        task:TaskReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
