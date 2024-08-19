import {
  Button,
  Pagination,
  Space,
  Table,
  TableColumnsType,
  TableProps,
} from "antd";
import { useState } from "react";
import { useGetStudentsQuery } from "../../../redux/features/Admin/userManagement.api";
import { TQueryParams, TStudents } from "../../../types";

export type TTableData = Pick<
  TStudents,
  "_id" | "fullName" | "id" | "gender" | "email" | "academicDepartment"
>;

const StudentsData = () => {
  const [params, setParams] = useState<TQueryParams[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { data: students, isFetching } = useGetStudentsQuery([
    { name: "limit", value: limit },
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);
  const { data: paginateStudents } = useGetStudentsQuery(undefined, {
    skip: isFetching,
  });
  console.log(students);

  const tableData = students?.data?.map(
    ({ _id, fullName, id, gender, email, academicDepartment }: TTableData) => ({
      key: _id,
      fullName,
      id,
      gender,
      email,
      academicDepartment: academicDepartment.name,
    })
  );
  // console.log(tableData);
  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "fullName",
      dataIndex: "fullName",
      showSorterTooltip: { target: "full-header" },
    },
    {
      title: "Gender",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "Roll Number",
      key: "Roll Number",
      dataIndex: "Roll Number",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Academic Department",
      key: "academicDepartment",
      dataIndex: "academicDepartment",
    },
    {
      title: "Action",
      key: "Actions",
      render: () => (
        <Space>
          <Button>Details</Button>
          <Button>Update</Button>
          <Button>Block</Button>
        </Space>
      ),
      width: "1%",
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
    <>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData && tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
        pagination={false}
      />
      <Pagination
        onChange={(value) => setPage(value)}
        pageSize={limit}
        defaultCurrent={3}
        total={paginateStudents?.data?.length}
      />
    </>
  );
};

export default StudentsData;
