import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.llm7.io/v1",
  apiKey:
    "yjm6fOyn03NsS48I8gUQPBIa0ozO8XPnF8KbG8rRfIJKbY09I2aEqPCBO1yEd6GkrT9p+nlWsgVifWqUkz8+8ccMwJuQ1tIoQwiwlAxSw0NTtgWviL6HpeFLC3WNjko=",
});

export async function POST(req) {
  try {
    const body = await req.json();
    const userPrompt = body.prompt;

    const response = await client.chat.completions.create({
      model: "gpt-4.1-nano-2025-04-14",
      messages: [{ role: "user", content: userPrompt }],
    });

    return NextResponse.json({
      content: response.choices[0].message.content,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
