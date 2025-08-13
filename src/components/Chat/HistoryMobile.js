import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

const HistoryMobile = () => {
  return (
    <>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className=" bg-gray-400 p-3 hover:bg-gray-200 cursor-pointer transition-all duration-300 ease-in-out">
            <AlignJustify />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Chat history</SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};
export default HistoryMobile;
