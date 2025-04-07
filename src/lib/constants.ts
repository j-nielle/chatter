export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const apiKey = process.env.PRIVATE_OPENAI_CHATTER_API_KEY;

export const sendButtonClassName = "p-2 bg-gray-800 text-white rounded-full cursor-pointer hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50"