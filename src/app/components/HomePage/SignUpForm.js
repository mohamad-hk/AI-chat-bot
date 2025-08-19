import { Input } from "../ui/input";
import { Button } from "../ui/button";
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
          <Button type="submit">sign up</Button>
        </form>
      </div>
    </>
  );
};
export default SignUpForm;
