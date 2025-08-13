import ChatBox from "@/components/Chat/chatbox";
import HistoryChat from "@/components/Chat/history";

const Chat = () => {
  return (
    <div className=" flex flex-col md:grid grid-cols-[300px_minmax(400px,1fr)]">
      <HistoryChat />
      <ChatBox />
    </div>
  );
};
export default Chat;
