import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import { monthOptions } from "../../../constents/global";
import { semisterOptions } from "../../../constents/semister";
import { AcademicSemisterSchema } from "../../../schemas/academicManagement.schema";

const currentYear = new Date().getFullYear();
// // console.log("🚀 ~ currentYear:", currentYear)
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));
// console.log("🚀 ~ yearOptions ~ yearOptions:", yearOptions);

const CreateAcademicSemister = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const name = semisterOptions[Number(data.name) - 1]?.label;

    const semisterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    console.log(semisterData);
  };

  return (
    <Flex justify="center" align="center" style={{}}>
      <Col span={6}>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(AcademicSemisterSchema)}
        >
          <PHSelect label="Name" name="name" options={semisterOptions} />
          <PHSelect label="Year" name="year" options={yearOptions} />
          <PHSelect
            label="Start Month"
            name="startMonth"
            options={monthOptions}
          />
          <PHSelect label="End Month" name="endMonth" options={monthOptions} />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemister;
