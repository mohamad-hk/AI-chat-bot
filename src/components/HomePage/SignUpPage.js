"use client";
import AnotherWay from "./AnotherWay";
import Logo from "./Logo";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Logo />
        <SignUpForm />
      </div>
      <AnotherWay />
    </>
  );
};
export default SignUpPage;
