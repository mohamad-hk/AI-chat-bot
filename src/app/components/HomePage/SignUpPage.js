import Image from "next/image";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4  h-full  w-full">
        <div className="flex flex-row items-center gap-2">
          <Image
            src="/images/logo.png"
            width={40}
            height={80}
            unoptimized
            alt="image not found"
          />
          <p className="text-[24px]">private Kernel</p>
        </div>
        <SignUpForm />
      </div>
    </>
  );
};
export default SignUpPage;
