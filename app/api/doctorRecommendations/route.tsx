import { openai } from "@/config/openAiModel";
import { AIDoctorAssistants } from "@/public/asset";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { symptoms } = await req.json();
    
    if (!symptoms) {
      return NextResponse.json({ recommendation: "[]" });
    }

    const completion = await openai.chat.completions.create({
      model: "meta-llama/llama-3.2-3b-instruct:free",
      messages: [
        { 
          role: "system", 
          content: `You are a medical assistant. Based on patient symptoms, select the most relevant doctors from this list: ${JSON.stringify(AIDoctorAssistants)}. Return ONLY a valid JSON array of the selected doctor objects. No explanations.` 
        },
        { 
          role: "user", 
          content: `Patient symptoms: ${symptoms}` 
        }
      ],
      max_tokens: 800,
      temperature: 0.1
    });

    const rawResponse = completion.choices[0]?.message?.content?.trim() || "[]";
    return NextResponse.json({ recommendation: rawResponse });
    
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ recommendation: "[]" });
  }
}
