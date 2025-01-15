import { createAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Taskservice from "./TaskService";

interface Task {
    id:string,
    title: string;
    deadline: string;
    assignTo: string;
    status:string;
    projId:string;
}

interface TaskState {
  tasks: Task[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
  taskDetail: Task | null;
}

const initialState: TaskState = {
  tasks: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  taskDetail: null,
};

export const AddTasks = createAsyncThunk('/tasks/add',async (data: Task, thunkApi) => {
    try {
      return await Taskservice.AddTasks(data);
    } catch (err) {
       
        return thunkApi.rejectWithValue(err);
      }
  }
);

export const GetTasks = createAsyncThunk('/tasks/all',async(_,thunkApi)=>{
    try{
        return await Taskservice.GetTasks()
    }catch (err) {
       
        return thunkApi.rejectWithValue(err);
      }
})


export const EditTask = createAsyncThunk('/tasks/edit',async(data:Task,thunkApi)=>{
    try{
        return await Taskservice.EditTask(data)
    }catch (err) {
       
        return thunkApi.rejectWithValue(err);
      }
})

export const DeleteTask = createAsyncThunk('/tasks/delete',async(id:string,thunkApi)=>{
    try{
        return await Taskservice.DeleteTask(id)
    }catch (err) {
       
        return thunkApi.rejectWithValue(err);
      }
})

export const resetState = createAction('Reset_all');

export const TaskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AddTasks.fulfilled, (state, action: PayloadAction<Task>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.taskDetail = action.payload;
      })
      .addCase(AddTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.taskDetail = null;
        state.message = action.payload as string; 
      })

      .addCase(GetTasks.pending,(state)=>{
        state.isLoading=true
      })
      .addCase(GetTasks.fulfilled,(state,action:PayloadAction<Task[]>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tasks = action.payload;
      })
      .addCase(GetTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.tasks = [];
        state.message = action.payload as string; 
      })

      .addCase(EditTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(EditTask.fulfilled, (state, action: PayloadAction<Task>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.taskDetail = action.payload;
      })
      .addCase(EditTask.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.taskDetail = null;
        state.message = action.payload as string; 
      })

      .addCase(DeleteTask.pending,(state)=>{
        state.isLoading=true
      })
      .addCase(DeleteTask.fulfilled,(state,action:PayloadAction<Task>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.taskDetail = action.payload;
      })
      .addCase(DeleteTask.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload as string; 
      })
  }
});

export default TaskSlice.reducer;
