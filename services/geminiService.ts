
import { GoogleGenAI, Type } from "@google/genai";
import { StyleRecommendation } from "../types";

// Note: To ensure we use the latest configuration, GoogleGenAI is initialized inside each function.

export async function getStyleRecommendation(userInput: string): Promise<StyleRecommendation> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Based on the following user preferences, recommend an interior design style and provide a structured JSON response: "${userInput}"`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          styleName: { type: Type.STRING },
          summary: { type: Type.STRING },
          colorPalette: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          keyElements: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          tips: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        },
        required: ["styleName", "summary", "colorPalette", "keyElements", "tips"]
      }
    }
  });

  // Recommended way to extract JSON text from property.
  return JSON.parse(response.text?.trim() || '{}');
}

export async function getDesignTrends(): Promise<{ text: string; sources: any[] }> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: 'What are the top 3 interior design trends in 2026? Provide them as a simple bulleted list with brief explanations.',
    config: {
        tools: [{googleSearch: {}}]
    }
  });

  // Mandatory: When using Google Search, extract URLs from groundingChunks.
  const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
  const sources = groundingChunks
    .map((chunk: any) => chunk.web)
    .filter(Boolean);

  return {
    text: response.text || '',
    sources: sources
  };
}
