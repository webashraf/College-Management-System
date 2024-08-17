import { Table, TableColumnsType } from "antd";
import { useGetAllDepartmentsQuery } from "../../../redux/features/Admin/academicDepartment.api";
import { TTableData } from "./AcademicSemister";

const AcademicDepartment = () => {
  const { data: departments, isFetching } = useGetAllDepartmentsQuery();
  console.log("🚀 ~ AcademicDepartment ~ departments:", departments);

  const departmentTableData = departments?.data?.map(
    ({ _id, name }: { _id: string; name: string }) => ({ key: _id, name })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
  ];

  return (
    <div>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={departments && departmentTableData}
      />
    </div>
  );
};

export default AcademicDepartment;
