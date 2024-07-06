import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AnyObject } from "antd/es/_util/type";
import { logout, setUser } from "../features/auth/authSlice";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1/",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

const baseQueryWithExtraOptions = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  console.log("Base query", result);

  if (result?.error?.status === 401) {
    console.log("error = 401", result.error);
    const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);

    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;

      api.dispatch(setUser({ user, token: data?.data?.accessToken }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      console.log("Logout");
      api.dispatch(logout());
    }
  }
  return result;
};

export const baseApi: AnyObject = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithExtraOptions,
  endpoints: () => ({}),
});
