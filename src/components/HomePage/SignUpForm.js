import { Input } from "@/components/ui/input";
const SignUpForm = () => {
  return (
    <>
      <div className=" ">
        <form method="post" className="flex flex-col justify-center items-center gap-4">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="••••••••" />
        </form>
      </div>
    </>
  );
};
export default SignUpForm;
