import { Input } from "../ui/input";
import { Button } from "../ui/button";
import AnotherWay from "./ChooseAuthenticate";
const LoginForm = () => {
  return (
    <div className="">
      <form
        method="post"
        className="flex flex-col justify-center items-center gap-4 w-full"
      >
        <Input type="email" placeholder="Email" className="w-full" />
        <Input type="password" placeholder="••••••••" />
        <Button type="submit" variant="link" className="w-full rounded-2xl bg-blue-600 text-white my-2">
          login
        </Button>
      </form>
        <AnotherWay />
    </div>
  );
};
export default LoginForm;
