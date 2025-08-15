export default function ChatBubble({ text, sender = "user" }) {
  const isUser = sender === "user";

  return (
    <div className={`flex mb-4 ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-xs md:max-w-xl px-4 py-2 rounded-2xl ${
          isUser
            ? "bg-blue-500 text-white rounded-br-none shadow-md"
            : " bg-gray-200 text-gray-800 rounded-bl-none"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
