import { signIn } from "next-auth/react";
import Image from "next/image";

const Options = () => {


  return (
    <div className="flex flex-row items-center gap-4">
      <div
        className="shadow-2xl bg-gray-100 p-1 rounded-md border-1 hover:bg-gray-200 cursor-pointer transition-all duration-300 ease-in-out"
        onClick={() => signIn("facebook", { callbackUrl: "/chat" })}
      >
        <Image
          src="/images/facebook.svg"
          width={30}
          height={30}
          alt="iamge not found"
        />
      </div>
      <div
        className=" shadow-2xl bg-gray-100 p-1 rounded-md border-1 hover:bg-gray-200 cursor-pointer transition-all duration-300 ease-in-out"
        onClick={() => signIn("github", { callbackUrl: "/chat" })}
      >
        <Image
          src="/images/github.svg"
          width={30}
          height={30}
          alt="iamge not found"
        />
      </div>
      <div
        className=" shadow-2xl bg-gray-100 p-1 rounded-md border-1 hover:bg-gray-200 cursor-pointer transition-all duration-300 ease-in-out"
        onClick={() => signIn("google", { callbackUrl: "/chat" })}
      >
        <Image
          src="/images/google.svg"
          width={30}
          height={30}
          alt="iamge not found"
        />
      </div>
      <div
        className=" shadow-2xl bg-gray-100 p-1 rounded-md border-1 hover:bg-gray-200 cursor-pointer transition-all duration-300 ease-in-out"
        onClick={() => signIn("linkedin", { callbackUrl: "/chat" })}
      >
        <Image
          src="/images/linkedin.svg"
          width={30}
          height={30}
          alt="iamge not found"
        />
      </div>{" "}
      <div
        className=" shadow-2xl bg-gray-100 p-1 rounded-md border-1 hover:bg-gray-200 cursor-pointer transition-all duration-300 ease-in-out"
        onClick={() => signIn("microsoft-entra-id", { callbackUrl: "/chat" })}
      >
        <Image
          src="/images/microsoft.svg"
          width={30}
          height={30}
          alt="iamge not found"
        />
      </div>
    </div>
  );
};
export default Options;
