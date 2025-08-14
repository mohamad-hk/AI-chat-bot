import { NotebookPen } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const HistoryDesktop = () => {
  return (
    <>
      <div className="hidden md:flex flex-col bg-blue-100 h-screen">
        <div className="hidden md:flex md:flex-row items-center gap-4 w-[55%] mx-auto   px-2 mb-4 mt-1">
          <Image
            src="/images/privatekernel.svg"
            width={20}
            height={20}
            alt="image not found"
          />
          <h1 className="text-center">Private Kernel</h1>
        </div>
        <div className="flex flex-row justify-between items-center px-2">
          <p>New chat</p>
          <button>
            <NotebookPen size={18} />
          </button>
        </div>
        <Separator className="my-3" />
      </div>
    </>
  );
};
export default HistoryDesktop;
