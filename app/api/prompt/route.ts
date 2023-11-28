import { NextResponse, NextRequest } from "next/server";
import { ConnectDB } from "@/utils/database";
import Prompt from "@/models/promptModel";

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    await ConnectDB();
    const prompts = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
