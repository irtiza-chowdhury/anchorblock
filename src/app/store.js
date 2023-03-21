import { configureStore } from '@reduxjs/toolkit';
import { ApiSlice } from '../features/api/ApiSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    [ApiSlice.reducerPath]: ApiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(ApiSlice.middleware),
});
