import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { useGetStudentsQuery } from "../../../redux/features/Admin/userManagement.api";
import { TQueryParams } from "../../../types";
import { TTableData } from "../academicManagement/AcademicSemister";

const StudentsData = () => {
  const { data: students, isFetching } = useGetStudentsQuery({});
  console.log(students?.data);

  const [params, setParams] = useState<TQueryParams[]>([]);

  const tableData = students?.data?.map(
    ({ _id, fullName, gender, email, academicDepartment }) => ({
      key: _id,
      fullName,
      gender,
      email,
      academicDepartment: academicDepartment.name,
    })
  );
  console.log(tableData);
  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
    },
    {
      title: "Gender",
      key: "gender",
      dataIndex: "gender",
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

export default StudentsData;
