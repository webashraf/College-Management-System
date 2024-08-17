import { AnyObject } from "antd/es/_util/type";
import { baseApi } from "../../api/baseApi";
import { TUser } from "./authSlice";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder: AnyObject) => ({
    login: builder.mutation({
      query: (userInfo: TUser) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: userInfo,
        };
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
