import { baseApi } from "../../api/baseApi";

const academicDepartmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAcademicDepartment: builder.mutation({
      query: (payload) => ({
        url: "/academic-departments/create-academic-department",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useCreateAcademicDepartmentMutation } = academicDepartmentApi;
