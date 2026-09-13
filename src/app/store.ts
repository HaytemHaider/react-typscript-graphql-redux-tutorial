import { configureStore, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

const organizationSlice = createSlice({
  name:"organization",
  initialState:{selectedId:"org-1"},
  reducers:{organizationSelected:(state, action:PayloadAction<string>)=>{state.selectedId=action.payload;}}
});
export const { organizationSelected } = organizationSlice.actions;
export const createAppStore = () => configureStore({reducer:{organization:organizationSlice.reducer}});
export const store = createAppStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
