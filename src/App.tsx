import { LuMessageSquareText } from "react-icons/lu";
import { ChatBox } from "./components/chat-box";

const App = () => {
  return (
    <div className="flex flex-col items-center mx-auto bg-white overflow-hidden h-screen mt-0 pt-20">
      <div className="w-72 sm:w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <ChatBox title="AI Chatter" icon={<LuMessageSquareText size={25} />} />
      </div>
    </div>
  );
};

export default App;
