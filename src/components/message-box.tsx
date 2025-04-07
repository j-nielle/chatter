import React from "react";
import { IMessage } from "../lib/types";
import clsx from "clsx";

interface MessageBoxProps {
  ref: React.RefObject<HTMLDivElement | null>;
  className?: string;
  messages: IMessage[];
}

export default function MessageBox({
  ref,
  className,
  messages,
}: MessageBoxProps) {
  return (
    <div
      ref={ref}
      className={clsx("flex-1 overflow-y-auto p-4 space-y-2", className)}>
      {messages.map((msg, index) => (
        <div
          key={index}
          className={clsx("p-4 rounded-lg max-w-xs", {
            "bg-blue-500 text-white ml-auto": msg.sender === "user",
            "bg-gray-300 text-gray-800": msg.sender !== "user",
          })}>
          <p>{msg.text}</p>
        </div>
      ))}
    </div>
  );
}
