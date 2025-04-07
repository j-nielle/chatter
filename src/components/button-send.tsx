import clsx from "clsx";
import { LuArrowUp, LuLoaderCircle } from "react-icons/lu";
import { sendButtonClassName } from "../lib/constants";

type ButtonSendProps = React.HTMLAttributes<HTMLButtonElement> & {
  isLoading: boolean;
};

export default function ButtonSend({
  isLoading,
  className,
  ...props
}: ButtonSendProps) {
  return (
    <button
      {...props}
      type="button"
      disabled={isLoading}
      aria-label="Send message"
      className={clsx(sendButtonClassName, className)}>
      {isLoading ? (
        <LuLoaderCircle size={25} className="animate-spin" />
      ) : (
        <LuArrowUp size={25} />
      )}
    </button>
  );
}
