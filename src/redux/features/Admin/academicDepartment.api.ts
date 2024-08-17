import { AnyObject } from "antd/es/_util/type";
import { TAcademicDepartment } from "../../../types";
import { baseApi } from "../../api/baseApi";

const academicDepartmentApi = baseApi.injectEndpoints({
  endpoints: (builder: AnyObject) => ({
    createAcademicDepartment: builder.mutation({
      query: (payload: TAcademicDepartment) => ({
        url: "/academic-departments/create-academic-department",
        method: "POST",
        body: payload,
      }),
    }),
    getAllDepartments: builder.query({
      query: () => ({
        url: "/academic-departments",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateAcademicDepartmentMutation,
  useGetAllDepartmentsQuery,
} = academicDepartmentApi;
