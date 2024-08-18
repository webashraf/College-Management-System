import { AnyObject } from "antd/es/_util/type";
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
      query: () => ({
        url: "/students",
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateStudentMutation, useGetStudentsQuery } =
  userManagementApi;
