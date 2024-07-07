import { AnyObject } from "antd/es/_util/type";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  // defaultValues: AnyObject;
};

const PHForm = ({ onSubmit, children, defaultValues }: TFormProps) => {
  const methods = useForm({defaultValues});
  console.log(defaultValues);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default PHForm;
