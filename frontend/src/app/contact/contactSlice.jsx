import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/config/axios";

export const fetchContact = createAsyncThunk("fetchContact", async () => {
  const res = await axiosInstance.post("/contact");
  return res.data.data;
});

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    loading: false,
    data: [""],
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContact.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchContact.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchContact.rejected, (state, action) => {
      state.error = true;
    });
  },
  reducers: {},
});

// export const { getUser } = contactSlice.actions;

export default contactSlice.reducer;
