import { ChatGPTAPIBrowser } from "chatgpt";

export default async function ChatGBTAPI() {
  const api = new ChatGPTAPIBrowser({
    email: process.env.OPENAI_EMAIL,
    password: process.env.OPENAI_PASSWORD,
  });
  await api.initSession();
  const result = await api.sendMessage("Hello World!");

  return console.log(result.response);
}
