import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axiosInstance';

export const login = createAsyncThunk('auth/login', async ({email , password}) => {
  const response = await axiosInstance.post('auth/login', {
    email , password
  });
  return response.data;
});

export const registration = createAsyncThunk('auth/registration', async ({email , password , name}) => {
  const response = await axiosInstance.post('auth/registration', {
    email , password , name
  });
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
      });
    builder
      .addCase(registration.pending, (state) => {
        state.loading = true;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(registration.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
