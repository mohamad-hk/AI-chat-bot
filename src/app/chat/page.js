import ChatBox from "@/components/Chat/chatbox";
import HistoryChat from "@/components/Chat/history";

const Chat = () => {
  return (
    <div className=" flex flex-col md:grid grid-cols-[280px_minmax(450px,1fr)] gap-10">
      <HistoryChat />
      <ChatBox />
    </div>
  );
};
export default Chat;
