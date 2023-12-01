// GET (read)
import { NextResponse, NextRequest } from "next/server";
import { ConnectDB } from "@/utils/database";
import Prompt from "@/models/promptModel";

export const GET = async (request: NextRequest, { params }: any) => {
  try {
    await ConnectDB();
    const prompt = await Prompt.findById(params.id).populate("creator");

    if (!prompt) return new Response("Prompt are not found", { status: 404 });
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};

// PATCH (update)
export const PATCH = async (request: NextRequest, { params }: any) => {
  const { prompt, tag } = await request.json();
  try {
    await ConnectDB();

    const existingPrompt = await Prompt.findById(params.id);
    if (!existingPrompt)
      return new Response("Prompt not found", { status: 404 });

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();
    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to update prompt", { status: 500 });
  }
};

// DELETE (delete)
export const DELETE = async (request: NextRequest, { params }: any) => {
  try {
    await ConnectDB();
    await Prompt.findByIdAndRemove(params.id);
    return new Response("Successfully deleted the prompt", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete the prompt", { status: 500 });
  }
};
