import LoginForm from "./LoginForm";
import Image from "next/image";
import Options from "./OtherOptions/Options";

const LoginPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4  w-full h-full ">
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
        <LoginForm />
        <div className="flex flex-row items-center gap-4 border-1 relative py-4 px-2 rounded-sm  mt-10">
          <p className="absolute -top-2 bg-white left-24 text-[12px]">
            or continue with
          </p>
          <Options/>

        </div>
      </div>
    </>
  );
};
export default LoginPage;
