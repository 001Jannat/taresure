import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  userData: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token, userData } = action.payload;
      state.token = token;
      state.userData = userData;
      state.isAuthenticated = true;
      // Store in localStorage for persistence
      localStorage.setItem('userToken', token);
      localStorage.setItem('userData', JSON.stringify(userData));
    },
    logout: (state) => {
      state.token = null;
      state.userData = null;
      state.isAuthenticated = false;
      // Clear localStorage
      localStorage.removeItem('userToken');
      localStorage.removeItem('userData');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer; 