import { createAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import MemberService from "./MemberService";

interface Member {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface MemberState {
  members: Member[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
  memberDetail: Member | null;
}

const initialState: MemberState = {
  members: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  memberDetail: null,
};

export const AddMembers = createAsyncThunk('/members/add',async (data: Member, thunkApi) => {
    try {
      return await MemberService.AddMembers(data);
    } catch (err) {
       
        return thunkApi.rejectWithValue(err);
      }
  }
);

export const GetMembers = createAsyncThunk('/members/all',async(_,thunkApi)=>{
    try{
        return await MemberService.GetMembers()
    }catch (err) {
       
        return thunkApi.rejectWithValue(err);
      }
})

export const EditMember = createAsyncThunk('/members/edit',async(data:Member,thunkApi)=>{
    try{
        return await MemberService.EditMember(data)
    }catch (err) {
       
        return thunkApi.rejectWithValue(err);
      }
})

export const DeleteMember = createAsyncThunk('/members/delete',async(id:string,thunkApi)=>{
    try{
        return await MemberService.DeleteMember(id)
    }catch (err) {
       
        return thunkApi.rejectWithValue(err);
      }
})

export const resetState = createAction('Reset_all');

export const MemberSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddMembers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AddMembers.fulfilled, (state, action: PayloadAction<Member>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.memberDetail = action.payload;
      })
      .addCase(AddMembers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.memberDetail = null;
        state.message = action.payload as string; 
      })

      .addCase(GetMembers.pending,(state)=>{
        state.isLoading=true
      })
      .addCase(GetMembers.fulfilled,(state,action:PayloadAction<Member[]>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.members = action.payload;
      })
      .addCase(GetMembers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.members = [];
        state.message = action.payload as string; 
      })

      .addCase(EditMember.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(EditMember.fulfilled, (state, action: PayloadAction<Member>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.memberDetail = action.payload;
      })
      .addCase(EditMember.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.memberDetail = null;
        state.message = action.payload as string; 
      })

      .addCase(DeleteMember.pending,(state)=>{
        state.isLoading=true
      })
      .addCase(DeleteMember.fulfilled,(state,action:PayloadAction<Member>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.memberDetail = action.payload;
      })
      .addCase(DeleteMember.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload as string; 
      })
  }
});

export default MemberSlice.reducer;
