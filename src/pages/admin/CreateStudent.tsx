import { Button } from "antd";
import PHForm from "../../components/form/PHForm";
import PHInput from "../../components/form/PHInput";

const CreateStudent = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <PHForm onSubmit={onSubmit}>
      <PHInput type="text" name="name" label="Name" />
      <Button htmlType="submit">Submit</Button>
    </PHForm>
  );
};

export default CreateStudent;
