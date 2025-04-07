import { useState } from "react";
import axios from "axios";
import { apiKey, delay } from "../lib/constants";
import { IMessage } from "../lib/types";

export const useChatbot = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (message: string) => {
    await delay(1000);

    const newMessages: IMessage[] = [
      ...messages,
      { text: message, sender: "user" },
    ];

    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4o-mini",
          store: true,
          messages: [{ role: "user", content: message }],
        },
        {
          headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      const text = response.data.choices[0].message.content;
      setMessages([...newMessages, { text, sender: "bot" }]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setMessages((prev) => [
        ...prev,
        { text: "Error: Unable to fetch response", sender: "bot" },
      ]);
    }
  };

  return { messages, sendMessage, isLoading };
};
