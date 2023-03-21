import { ApiSlice } from '../api/ApiSlice';

export const AuthApi = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: (data) => ({
        url: '/register',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;

          localStorage.setItem(
            'auth',
            JSON.stringify({
              accessToken: result.data.token,
            })
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),
    userLogin: builder.mutation({
      query: (data) => ({
        url: '/login',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useUserRegisterMutation, useUserLoginMutation } = AuthApi;
