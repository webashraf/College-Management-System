import { Button, Col, Divider, Row } from "antd";
import { AnyObject } from "antd/es/_util/type";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHDatePicker from "../../../components/form/PHDatePicker";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import PHSelect from "../../../components/form/PHSelect";
import { useGetAllDepartmentsQuery } from "../../../redux/features/Admin/academicDepartment.api";
import { useGetAllSemesterQuery } from "../../../redux/features/Admin/academicManagement.api";
import { useCreateStudentMutation } from "../../../redux/features/Admin/userManagement.api";

const CreateStudent = () => {
  const [createStudent, { data, error }] = useCreateStudentMutation();
  console.log({ data, error });
  const { data: sData, isLoading: sLoading } = useGetAllSemesterQuery();
  const sSelectData = sData?.data?.result?.map((data: AnyObject) => ({
    value: data?._id,
    label: data?.name + " " + data?.year,
  }));

  const { data: sDepartmentData, isLoading: dLoading } =
    useGetAllDepartmentsQuery(undefined, { skip: sLoading });

  const dSelectData = sDepartmentData?.data.map((data: AnyObject) => ({
    value: data._id,
    label: data.name,
  }));

  // const studentDummyData = {
  //   password: "",
  //   student: {
  //     name: {
  //       firstName: "Ali",
  //       middleName: "Ashraf",
  //       lastName: "Tamim",
  //     },
  //     gender: "Male",
  //     dateOfBirth: "1995-05-15",
  //     bloodGroup: "A+",
  //     age: 25,

  //     contactNumber: "1234567890",
  //     emergencyContactNo: "9876543210",
  //     email: "ali@example.com",
  //     presentAddress: "123 Main Street, City",
  //     permanentAddress: "456 Oak Avenue, Town",
  //     guardian: {
  //       name: "Jane Smith",
  //       occupation: "Doctor",
  //       contactNumber: "987654321",
  //       email: "jane@example.com",
  //     },
  //     profileImage: "https://example.com/profile.jpg",
  //     admissionSemester: "",
  //     academicDepartment: "",
  //   },
  // };

  // ! This is only for development purposes 🖥️
  //! Should be remove after development
  const studentDefaultValue = {
    name: {
      firstName: "Ali",
      middleName: "Ashraf",
      lastName: "Tamim",
    },
    gender: "Male",
    bloodGroup: "A+",
    age: 26,

    contactNumber: "1234567890",
    emergencyContactNo: "9876543210",
    email: "ali@example.com",
    presentAddress: "123 Main Street, City",
    permanentAddress: "456 Oak Avenue, Town",
    guardian: {
      name: "Jane Smith",
      occupation: "Doctor",
      contactNumber: "987654321",
      email: "jane@example.com",
    },
    profileImage: "https://example.com/profile.jpg",
    admissionSemester: "",
    academicDepartment: "",
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();
    console.log(data);
    formData.append("data", JSON.stringify(data));

    const studentData = { password: "helloStudent", student: data };

    createStudent(studentData);


  };

  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit} defaultValues={studentDefaultValue}>
          <Divider>Personal Info</Divider>
          <Row gutter={20}>
            <Col span={24} lg={{ span: 8 }}>
              <PHInput type="text" name="name.firstName" label="First Name" />
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <PHInput type="text" name="name.middleName" label="Middle Name" />
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <PHInput type="text" name="name.lastName" label="Last Name" />
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <PHInput type="text" name="gender" label="Gender" />
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <PHDatePicker name="dateOfBirth" label="Date of Birth" />
            </Col>

            <Col span={24} lg={{ span: 8 }}>
              <PHInput type="text" name="bloodGroup" label="Blood Group" />
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <PHInput type="text" name="age" label="Age" />
            </Col>
          </Row>

          <Divider>Contact Info</Divider>
          <Row gutter={20}>
            <Col span={24} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="contactNumber"
                label="Contact Number"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="emergencyContactNo"
                label="Emergency ContactNo"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <PHInput type="text" name="email" label="Email" />
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="presentAddress"
                label="Present Address"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="permanentAddress"
                label="Permanent Address"
              />
            </Col>
          </Row>

          <Divider>Guardian Info</Divider>
          <Row gutter={20}>
            <Col span={24} lg={{ span: 8 }}>
              <PHInput type="text" name="guardian.name" label="Guardian Name" />
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.occupation"
                label="Guardian Occupation"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.contactNumber"
                label="Guardian ContactNumber"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.email"
                label="Guardian Email"
              />
            </Col>
          </Row>
          <Divider>Academic Info</Divider>
          <Row gutter={20}>
            <Col span={24} lg={{ span: 8 }}>
              <PHSelect
                options={sSelectData && sSelectData}
                disabled={sLoading}
                name="admissionSemester"
                label="Admission Semester"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <PHSelect
                options={dSelectData && dSelectData}
                disabled={dLoading}
                name="academicDepartment"
                label="Academic Department"
              />
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;
