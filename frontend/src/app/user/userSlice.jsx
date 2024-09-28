import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/config/axios";

export const fetchUser = createAsyncThunk("fetchUser", async () => {
  const res = await axiosInstance.get("/user");
  return res.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.error = true;
    });
  },
  reducers: {
    // getUser: async (state) => {
    //   const res = await axiosInstance.get("/user");
    //   state.user = res.data.data;
    // },
  },
});

export const { getUser } = userSlice.actions;

export default userSlice.reducer;
