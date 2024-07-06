import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      pass: "admin",
    },
  });

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastLoding = toast.loading("Logging in");

    try {
      const userInfo = {
        id: data.id,
        password: data.pass,
      };
      const res = await login(userInfo).unwrap();

      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Loagged in!", { id: toastLoding, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error("Somehing went wrong", { id: toastLoding, duration: 2000 });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" placeholder="ID" {...register("id")} />
      </div>
      <div>
        <label htmlFor="pass">Password: </label>
        <input
          {...register("pass")}
          type="text"
          id="pass"
          placeholder="Password"
        />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
