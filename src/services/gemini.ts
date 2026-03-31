import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY, // ✅ TO‘G‘RI
});
export const getChatResponse = async (message: string, history: { role: "user" | "model", parts: { text: string }[] }[]) => {
  const chat = ai.chats.create({
    model: "gemini-3.1-pro-preview",
    config: {
      systemInstruction: "Siz Muxammadaziz Raximjonovning portfolio saytidagi AI yordamchisiz. Foydalanuvchilarga Muxammadazizning tajribasi, ko'nikmalari va loyihalari haqida ma'lumot bering. Muxammadaziz - Andijonlik Junior dasturchi, 1 yillik tajribaga ega. 5 tadan ortiq real loyihalar ustida ishlagan. Ko'nikmalari: HTML, CSS, JS, React, Next.js, Firebase (Backend sifatida faqat Firebase ishlatadi), Tailwind, Git, GitHub, Bootstrap, SCSS, Sass, Redux. Aloqa: muxmammad@gmail.com, +998 93 571 26 02.",
    },
  });

  const response = await chat.sendMessage({ message });
  return response.text;
};

export const getFastResponse = async (prompt: string) => {
  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite-preview",
    contents: prompt,
  });
  return response.text;
};
