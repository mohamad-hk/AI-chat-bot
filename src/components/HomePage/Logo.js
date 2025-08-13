import Image from "next/image";

const Logo = () => {
  return (
    <>
      <Image src="/images/privatekernel.svg" width={200} height={200} alt="image not found" />
      <h1>Private Kernel</h1>
    </>
  );
};
export default Logo;
