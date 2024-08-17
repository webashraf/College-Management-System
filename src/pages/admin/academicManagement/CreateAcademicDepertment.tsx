import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import { departmentOptions } from "../../../constents/global";
import { useCreateAcademicDepartmentMutation } from "../../../redux/features/Admin/academicDepartment.api";
import { useGetFacultiesQuery } from "../../../redux/features/Admin/academicFaculty.api";
import { AcademicDepartmentSchema } from "../../../schemas/academicDepartment.schema";

const CreateAcademicDepertment = () => {
  const [createAcademicDepartment] = useCreateAcademicDepartmentMutation();
  const { data: faculties } = useGetFacultiesQuery();

  const facultiesForSelectField = faculties?.data?.map((faculty) => ({
    value: faculty._id,
    label: faculty.name,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    try {
      const res = await createAcademicDepartment(data).unwrap();
      if (res.success) {
        toast.success(res.message);
      }
      console.log(res);
    } catch (err: any) {
      console.log(err);
      if (err.data) {
        toast.error(err?.data?.message);
      }
    }
  };

  return (
    <Flex align="center" justify="center">
      <Col span={6}>
        <h2 style={{ paddingBottom: "10px" }}>Create Academic Faculty</h2>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(AcademicDepartmentSchema)}
        >
          <PHSelect
            name="name"
            label="Department Options"
            options={departmentOptions}
          />
          <PHSelect
            name="academicFaculty"
            label="Faculties"
            options={facultiesForSelectField}
          />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicDepertment;
