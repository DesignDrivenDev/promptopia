import Prompt from "@/models/promptModel";
import { ConnectDB } from "@/utils/database";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest, { params }: any) => {
  try {
    await ConnectDB();

    const prompts = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts created by user", {
      status: 500,
    });
  }
};
