import { AnyObject } from "antd/es/_util/type";
import { TQueryParams } from "../../../types";
import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder: AnyObject) => ({
    createStudent: builder.mutation({
      query: (payload: AnyObject) => ({
        url: "/user/create-student",
        method: "POST",
        body: payload,
      }),
    }),
    getStudents: builder.query({
      query: (args: TQueryParams[]) => {
        const params = new URLSearchParams();
        console.log(args);
        if (args) {
          args?.forEach((item: TQueryParams) =>
            params.append(item?.name, item.value as string)
          );
        }
        return {
          url: "/students",
          method: "GET",
          params,
        };
      },
    }),
  }),
});

export const { useCreateStudentMutation, useGetStudentsQuery } =
  userManagementApi;
