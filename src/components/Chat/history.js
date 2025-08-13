import Image from "next/image";
import HistoryMobile from "./HistoryMobile";
import HistoryDesktop from "./HistoryDesktop";
const HistoryChat = () => {
  return (
    <>
      <div className="grid grid-cols-[250px_minmax(200px,1fr)]">
        <HistoryDesktop />
        <HistoryMobile />
        <div className="flex flex-col md:hidden">
          <Image
            src="/images/privatekernel.svg"
            width={20}
            height={20}
            alt="image not found"
          />
          <h1>Private Kernel</h1>
        </div>
      </div>
    </>
  );
};
export default HistoryChat;
