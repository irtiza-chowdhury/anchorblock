import { ApiSlice } from '../api/ApiSlice';

export const usersApi = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users?page=1&per_page=12',
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
