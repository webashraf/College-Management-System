import { AnyObject } from "antd/es/_util/type";
import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => {
        console.log("AuthAPi", userInfo);
        return {
          url: "/auth/login",
          method: "POST",
          body: userInfo,
        };
      },
    }),
  }),
});

export const { useLoginMutation }: AnyObject = authApi;
