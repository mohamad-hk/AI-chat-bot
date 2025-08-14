
import HistoryMobile from "./HistoryMobile";
import HistoryDesktop from "./HistoryDesktop";
const HistoryChat = () => {
  return (
    <>
      <div className="grid grid-cols-[180px_minmax(250px,1fr)] md:flex md:flex-col">
        <HistoryDesktop />
        <HistoryMobile />
      </div>
    </>
  );
};
export default HistoryChat;
