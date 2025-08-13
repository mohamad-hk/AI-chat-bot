import { Input } from "@/components/ui/input";
const LoginForm = () => {
  return (
    <div className="flex flex-column justify-center items-center">
      <form method="post">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="••••••••" />
      </form>
    </div>
  );
};
export default LoginForm;
