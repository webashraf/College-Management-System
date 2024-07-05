import { useGetAllSemistersQuery } from "../../../redux/features/academicSemister/academicSemisterApi";

const AcademicSemister = () => {
  const { data } = useGetAllSemistersQuery(undefined);

  console.log('academicSemister =>', data);
  return (
    <div>
      <h1>Academic Semister</h1>
    </div>
  );
};

export default AcademicSemister;
