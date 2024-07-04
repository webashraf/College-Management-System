import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      pass: "admin",
    },
  });

  const [login, { error }] = useLoginMutation();

  console.log(error);
  const onSubmit = async (data: { id: string; pass: string }) => {
    const userInfo = {
      id: data.id,
      password: data.pass,
    };
    const res = await login(userInfo).unwrap();

    console.log(res.data.accessToken);

    const user = verifyToken(res.data.accessToken);
    dispatch(setUser({ user: user, token: res.data.accessToken }));
    console.log(user);
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
