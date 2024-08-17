import { AnyObject } from "antd/es/_util/type";
import { baseApi } from "../../api/baseApi";

const academicFacultyApi = baseApi.injectEndpoints({
  endpoints: (builder: AnyObject) => ({
    createFaculty: builder.mutation({
      query: (payload: AnyObject) => {
        console.log("🚀 ~ payload:", payload);
        return {
          url: "/academic-faculties/create-academic-faculty",
          method: "POST",
          body: payload,
        };
      },
    }),
    getFaculties: builder.query({
      query: () => ({
        url: "academic-faculties",
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateFacultyMutation, useGetFacultiesQuery } =
  academicFacultyApi;
