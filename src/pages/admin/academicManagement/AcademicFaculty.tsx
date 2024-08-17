import { Table, TableProps } from "antd";
import { useGetFacultiesQuery } from "../../../redux/features/Admin/academicFaculty.api";

type ColumnsType<T extends object = object> = TableProps<T>["columns"];

interface DataType {
  name: {
    first: string;
    last: string;
  };
  gender: string;
  email: string;
  login: {
    uuid: string;
  };
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    width: "20%",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    width: "20%",
  },
];

const AcademicFaculty = () => {
  const { data: faculties, isFetching } = useGetFacultiesQuery();
  console.log(faculties?.data);

  const facultiesTableData = faculties?.data?.map(
    ({
      _id,
      name,
      createdAt,
    }: {
      _id: string;
      name: string;
      createdAt: string;
    }) => ({
      key: _id,
      name,
      createdAt,
    })
  );

  return (
    <div>
      <Table
        columns={columns}
        // rowKey={(record) => record.login.uuid}
        dataSource={faculties && facultiesTableData}
        loading={isFetching}
        // onChange={onChange}
      />
    </div>
  );
};

export default AcademicFaculty;
