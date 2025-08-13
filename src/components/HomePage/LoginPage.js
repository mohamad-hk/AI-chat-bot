import LoginForm from "./LoginForm";
import Logo from "./Logo";
import AnotherWay from "./AnotherWay";

const LoginPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <p>login</p>
        <Logo />
        <LoginForm />
      </div>
      <AnotherWay />
    </>
  );
};
export default LoginPage;
