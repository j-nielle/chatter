import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const keys = ["PRIVATE_OPENAI_CHATTER_API_KEY"];

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const processEnv: Record<string, string | undefined> = {};
  keys.forEach((key) => (processEnv[key] = env[key]));
  return {
    define: {
      "process.env": processEnv,
    },
    plugins: [react(), tailwindcss()],
  };
});
