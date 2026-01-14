
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getDentalAdvice = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `You are Dr. Neemz's AI Dental Assistant. 
        Your goal is to provide helpful, professional dental advice and encourage users to book an appointment at Dr. Neemz Dentistry in Salem. 
        Always mention that actual diagnosis requires an in-person visit. 
        Promote our special "Flat ₹5000 OFF on Braces" offer where relevant.
        Keep responses concise, empathetic, and professional.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please call us directly for immediate assistance!";
  }
};
