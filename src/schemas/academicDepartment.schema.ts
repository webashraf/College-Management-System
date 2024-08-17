import { z } from "zod";

export const AcademicDepartmentSchema = z.object({
  name: z.string({ required_error: "Name is required!!" }),
  academicFaculty: z.string({ required_error: "Year is required!!" }),
});
