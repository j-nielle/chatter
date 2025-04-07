import React, { useState } from "react";

import { useChatbot } from "../hooks/useChatbot";
import useChatScroll from "../hooks/useChatScroll";
import MessageBox from "./message-box";
import InputBox from "./input-box";
import ButtonSend from "./button-send";

interface ChatBoxProps {
  title: string;
  icon?: React.ReactNode;
}

export const ChatBox = ({ title, icon }: ChatBoxProps) => {
  const { messages, sendMessage, isLoading } = useChatbot();
  const ref = useChatScroll(messages);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim() && !isLoading) {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-[80vh] bg-white">
      <h2 className="p-4 font-semibold text-lg text-center bg-gray-800 flex text-white justify-center items-center gap-2">
        {title} {icon}
      </h2>
      <MessageBox ref={ref} messages={messages} />
      <div className="flex items-center gap-4 p-4 bg-gray-50">
        <InputBox
          value={input}
          isLoading={isLoading}
          onChange={handleInput}
          onKeyDown={handleEnter}
        />
        <ButtonSend onClick={handleSend} isLoading={isLoading} />
      </div>
    </div>
  );
};
