import { TAcademicDepartment } from "./global.types";

export type TStudents = {
  _id: string;
  id: string;
  user: string;
  name: TName;
  gender: string;
  dateOfBirth: string;
  email: string;
  age: number;
  contactNumber: string;
  emergencyContactNo: string;
  bloodGroup: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  profileImage: string;
  admissionSemester: TAdmissionSemester;
  isDeleted: boolean;
  academicDepartment: TAcademicDepartment;
  fullName: string;
};

export type TName = {
  firstName: string;
  middleName: string;
  lastName: string;
  _id: string;
};

export type TGuardian = {
  name: string;
  occupation: string;
  contactNumber: string;
  email: string;
  _id: string;
};

export type TAdmissionSemester = {
  _id: string;
  name: string;
  code: string;
  year: string;
  startMonth: string;
  endMonth: string;
  __v: number;
};
