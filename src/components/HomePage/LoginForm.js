import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
const LoginForm = () => {
  return (
    <div className="">
      <form method="post" className="flex flex-col justify-center items-center gap-4">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="••••••••" />
        <Button type="submit" variant="link">login</Button>
      </form>
    </div>
  );
};
export default LoginForm;
