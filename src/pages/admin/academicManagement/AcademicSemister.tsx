import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";

import { useGetAllSemesterQuery } from "../../../redux/features/Admin/academicManagement.api";
import { TQueryParams } from "../../../types";
import { TAcademicSemester } from "../../../types/academicManagement.types";

export type TTableData = Pick<
  TAcademicSemester,
  "_id" | "name" | "year" | "startMonth" | "endMonth"
>;

const AcademicSemester = () => {
  const [params, setParams] = useState<TQueryParams[]>([]);

  const { data: semesterData, isFetching } = useGetAllSemesterQuery(params);

  // console.log(isLoading, isFetching);

  console.log("academicSemester =>", semesterData?.data?.result);

  const tableData = semesterData?.data?.result?.map(
    ({ _id, name, startMonth, endMonth, year }: TAcademicSemester) => ({
      key: _id,
      name,
      startMonth,
      endMonth,
      year,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "Summer",
          value: "Summer",
        },
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Fall",
          value: "Fall",
        },
      ],
    },
    {
      title: "Year",
      key: "year",
      dataIndex: "year",
      filters: [
        {
          text: "2024",
          value: "2024",
        },
        {
          text: "2025",
          value: "2025",
        },
        {
          text: "2027",
          value: "2027",
        },
        {
          text: "2028",
          value: "2028",
        },
        {
          text: "2029",
          value: "2029",
        },
        {
          text: "2030",
          value: "2030",
        },
        {
          text: "20231",
          value: "20231",
        },
      ],
    },
    {
      title: "Start Month",
      key: "start-month",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      key: "end-month",
      dataIndex: "endMonth",
    },
    {
      title: "Action",
      key: "Actions",
      render: () => (
        <div>
          <Button>Update</Button>
        </div>
      ),
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    console.log("params", filters, extra);

    if (extra.action === "filter") {
      const queryParams: TQueryParams[] = [];

      filters?.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );
      filters?.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item })
      );
      setParams(queryParams);
      console.log(params);
    }
  };

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData && tableData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicSemester;
