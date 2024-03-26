import { ChatThread } from "@/app/(home)/types";
import { NextResponse } from "next/server";
import { createThread, getThreads } from "./mock";
import { faker } from "@faker-js/faker";
import { delay } from "@/lib/utils";

const ChatThreads: ChatThread[] = [];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page"));
  const limit = Number(searchParams.get("limit"));
  const response = getThreads(limit);
  return NextResponse.json(response);
}

export async function POST(req: Request) {
  const message = await req.json();

  try {
    const thread = createThread(message);

    await delay(3000);

    const response = {
      id: `msg-${faker.commerce.isbn()}`,
      sentAt: new Date().toUTCString(),
      sender: "AI",
      content: faker.lorem.lines({
        min: 5,
        max: Math.max(5, Math.round(Math.random() * 100)),
      }),
    };

    thread.messages.push(response);
    return NextResponse.json(thread);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          "can not create a thread found or could be a internal server error",
      },
      { status: 404, statusText: "invalid thread ID" }
    );
  }
}
