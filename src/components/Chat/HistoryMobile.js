import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, NotebookPen } from "lucide-react";
import Image from "next/image";
import { Separator } from "../ui/separator";

const HistoryMobile = () => {
  return (
    <>
      <div className="grid grid-cols-[50px_minmax(400px,1fr)] items-center md:hidden">
        <Sheet>
          <SheetTrigger className=" p-3 hover:text-gray-600 cursor-pointer transition-all duration-300 ease-in-out">
            <AlignJustify />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader className="p-0">
              <div className="flex flex-row items-center gap-4 w-[50%] mx-auto mb-4 mt-2">
                <Image
                  src="/images/privatekernel.svg"
                  width={20}
                  height={20}
                  alt="image not found"
                />
                <h1 className="text-center">Private Kernel</h1>
              </div>
              <div className="flex flex-row justify-between items-center px-2 mt-4 ">
                <p>New chat</p>
                <button>
                  <NotebookPen size={18} />
                </button>
              </div>
              <Separator className="my-3" />
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <div className=" w-[85vw]">
          <h1 className="text-center">Private Kernel</h1>
        </div>
      </div>
    </>
  );
};
export default HistoryMobile;
