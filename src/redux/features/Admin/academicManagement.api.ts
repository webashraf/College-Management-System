import { AnyObject } from "antd/es/_util/type";
import { TQueryParams, TResponseRedux } from "../../../types";
import { TAcademicSemester } from "../../../types/academicManagement.types";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder: AnyObject) => ({
    getAllSemester: builder.query({
      query: (args: TQueryParams[]) => {
        const params = new URLSearchParams();

        if (args) {
          args?.forEach((item: TQueryParams) =>
            params.append(item?.name, item.value as string)
          );
        }
        return {
          url: "/academic-semisters",
          method: "GET",
          params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicSemester>) => {
        console.log("inside redux", response);

        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAcademicSemester: builder.mutation({
      query: (data: AnyObject) => ({
        url: "/academic-semisters/create-academic-semister",
        method: "Post",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllSemesterQuery, useAddAcademicSemesterMutation } =
  academicManagementApi;
