import { createAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Projectservice from "./ProjectService";

interface Project {
    id:string,
    projName: string;
    deadline: string;
    progress: number;
    tasks:string[]
}

interface ProjectState {
  projects: Project[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
  projectDetail: Project | null;
}

const initialState: ProjectState = {
  projects: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  projectDetail: null,
};

export const AddProjects = createAsyncThunk('/projects/add',async (data: Project, thunkApi) => {
    try {
      return await Projectservice.AddProjects(data);
    } catch (err) {
       
        return thunkApi.rejectWithValue(err);
      }
  }
);

export const GetProjects = createAsyncThunk('/projects/all',async(_,thunkApi)=>{
    try{
        return await Projectservice.GetProjects()
    }catch (err) {
       
        return thunkApi.rejectWithValue(err);
      }
})

export const EditProject = createAsyncThunk('/projects/edit',async(data:Project,thunkApi)=>{
    try{
        return await Projectservice.EditProject(data)
    }catch (err) {
       
        return thunkApi.rejectWithValue(err);
      }
})

export const DeleteProject = createAsyncThunk('/projects/delete',async(id:string,thunkApi)=>{
    try{
        return await Projectservice.DeleteProject(id)
    }catch (err) {
       
        return thunkApi.rejectWithValue(err);
      }
})

export const resetState = createAction('Reset_all');

export const ProjectSlice = createSlice({
  name: 'Projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddProjects.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AddProjects.fulfilled, (state, action: PayloadAction<Project>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.projectDetail = action.payload;
      })
      .addCase(AddProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.projectDetail = null;
        state.message = action.payload as string; 
      })

      .addCase(GetProjects.pending,(state)=>{
        state.isLoading=true
      })
      .addCase(GetProjects.fulfilled,(state,action:PayloadAction<Project[]>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.projects = action.payload;
      })
      .addCase(GetProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.projects = [];
        state.message = action.payload as string; 
      })

      .addCase(EditProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(EditProject.fulfilled, (state, action: PayloadAction<Project>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.projectDetail = action.payload;
      })
      .addCase(EditProject.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.projectDetail = null;
        state.message = action.payload as string; 
      })

      .addCase(DeleteProject.pending,(state)=>{
        state.isLoading=true
      })
      .addCase(DeleteProject.fulfilled,(state,action:PayloadAction<Project>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.projectDetail = action.payload;
      })
      .addCase(DeleteProject.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload as string; 
      })
  }
});

export default ProjectSlice.reducer;
