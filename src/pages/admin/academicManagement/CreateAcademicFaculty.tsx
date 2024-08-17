import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import { facultiesOption } from "../../../constents/global";
import { useCreateFacultyMutation } from "../../../redux/features/Admin/academicFaculty.api";

const CreateAcademicFaculty = () => {
  const [createAcademicFaculty] = useCreateFacultyMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    try {
      const res = await createAcademicFaculty(data).unwrap();
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
        <PHForm onSubmit={onSubmit}>
          <PHSelect
            name="name"
            label="Faculties Option"
            options={facultiesOption}
          />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicFaculty;
