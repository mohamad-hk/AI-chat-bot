import { Input } from "../ui/input";
import { Button } from "../ui/button";
import AnotherWay from "./ChooseAuthenticate";
const SignUpForm = () => {
  return (
    <>
      <div className=" ">
        <form
          method="post"
          className="flex flex-col justify-center items-center gap-4"
        >
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="••••••••" />
          <Button type="submit" variant="link" className="w-full bg-blue-600 rounded-2xl text-white my-2">
            sign up
          </Button>
        <AnotherWay />

        </form>
      </div>
    </>
  );
};
export default SignUpForm;
