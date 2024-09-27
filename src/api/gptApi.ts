import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_REACT_APP_GPT_KEY as string,
  dangerouslyAllowBrowser: true,
});

export const fetchGPTResponse = async (prompt: string): Promise<string> => {
  const completion = await openai.chat.completions.create({
    model: "gpt-4-0125-preview",
    messages: [{ role: "user", content: `"${prompt}"` }],
  });
  return completion.choices[0].message.content ?? "Tidak ada rekomendasi";
};
