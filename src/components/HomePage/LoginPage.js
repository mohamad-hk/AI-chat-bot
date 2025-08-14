import LoginForm from "./LoginForm";
import Logo from "./Logo";
import AnotherWay from "./AnotherWay";

const LoginPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white w-[400px] mx-auto translate-y-[50%] rounded-lg shadow-lg py-4">
        <p>login</p>
        <Logo />
        <LoginForm />
      <AnotherWay />
      </div>
    </>
  );
};
export default LoginPage;
