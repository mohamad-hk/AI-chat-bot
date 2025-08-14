import { MoveUp } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import ChatBubble from "./ChatBubble";

const ChatBox = () => {
  return (
    <div className="bg-white flex flex-col items-center">
      <div className=" h-[87vh] overflow-y-auto w-[90%] md:w-[90%] lg:w-[90%] xl:w-[60%] mx-auto pb-32 pt-4 ">
        <ChatBubble sender="bot" text="" />
        <ChatBubble sender="user" text="" />
      </div>
      <div className="bg-gray-100  w-[98%] md:w-[60%] lg:w-[60%] xl:w-[50%] mx-auto h-[100px] px-10 py-8 rounded-2xl shadow-md fixed bottom-2 md:right-[5vw] xl:right-[16vw] lg:0">
        <form className=" flex flex-row items-center gap-4">
          <Input type="text" className="border-none h-[50px]" placeholder="Enter yor message" />
          <Button type="submit" className="rounded-3xl">
            <MoveUp />
          </Button>
        </form>
      </div>
    </div>
  );
};
export default ChatBox;
