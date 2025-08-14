"use client";
import AnotherWay from "./AnotherWay";
import Logo from "./Logo";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white w-[400px] mx-auto translate-y-[50%] rounded-lg shadow-lg py-4">
        <p>sign up</p>
        <Logo />
        <SignUpForm />
        <AnotherWay />
      </div>
    </>
  );
};
export default SignUpPage;
