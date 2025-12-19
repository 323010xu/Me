import { GoogleGenAI } from "@google/genai";

// 声明 process 变量以避免 TypeScript 报错 "Cannot find name 'process'"
// 这对于确保 npm run build (tsc) 成功至关重要
declare const process: {
  env: {
    API_KEY: string;
    [key: string]: string | undefined;
  }
};

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateIdeaExpansion = async (topic: string): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    const prompt = `
      我正在构思关于 "${topic}" 的想法。
      请作为一个富有远见的各种技术专家，为我提供一段关于这个主题的深入见解。
      
      要求：
      1. 分析该想法的可行性。
      2. 提出3个潜在的创新点。
      3. 指出1个可能面临的主要挑战。
      
      请用Markdown格式输出，保持条理清晰，语气专业且充满鼓励。
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster response on this simple task
      }
    });

    return response.text || "抱歉，暂时无法生成想法，请稍后再试。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "生成失败，请检查API Key或网络连接。";
  }
};