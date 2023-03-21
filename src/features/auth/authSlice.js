import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: undefined,
};

const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

export const { userLoggedIn } = AuthSlice.actions;
export default AuthSlice.reducer;
