"use client";
import { MoveUp } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import ChatBubble from "./ChatBubble";
import { useState } from "react";

const ChatBox = () => {
let temp_prompt={}
  const [prompt, setPrompt] = useState("");
  const [messages, setMessage] = useState([
    { id: 1, sender: 0, text: "lorem fekfjewopfjwe" },
    { id: 2, sender: 0, text: "lofjewopfjwe" },
    { id: 3, sender: 1, text: "lorem fekwe" },
  ]);

  const formhandler = async (e) => {
    e.preventDefault();
    temp_prompt={sender:1,text:prompt}
    setMessage([...messages, temp_prompt]);
    setPrompt("")
  };
  return (
    <div className="bg-white flex flex-col items-center">
      <div className=" h-[87vh] overflow-y-auto w-[90%] md:w-[90%] lg:w-[90%] xl:w-[60%] mx-auto pb-32 pt-4 ">
        {messages.map((item) => {
          if (item.sender == 0) {
            return <ChatBubble sender="bot" text={item.text} />;
          } else if (item.sender == 1) {
            return <ChatBubble sender="user" text={item.text} />;
          }
        })}
      </div>
      <div className="bg-gray-100  w-[98%] md:w-[60%] lg:w-[60%] xl:w-[50%] mx-auto h-[100px] px-10 py-8 rounded-2xl shadow-md fixed bottom-2 md:right-[5vw] xl:right-[16vw] lg:0">
        <form
          onSubmit={formhandler}
          className=" flex flex-row items-center gap-4"
        >
          <Input
            type="text"
            className="border-none h-[50px]"
            placeholder="Enter yor message"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button type="submit" className="rounded-3xl">
            <MoveUp />
          </Button>
        </form>
      </div>
    </div>
  );
};
export default ChatBox;
