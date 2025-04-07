import React from "react";
import clsx from "clsx";

type InputBoxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isLoading: boolean;
};

export default function InputBox({
  isLoading,
  className,
  ...props
}: InputBoxProps) {
  return (
    <input
      {...props}
      type="text"
      disabled={isLoading}
      className={clsx(
        "flex-1 p-2 border border-gray-400 rounded-lg focus:outline-none",
        className
      )}
      placeholder="Ask anything"
      autoComplete="off"
    />
  );
}
