import { faker } from "@faker-js/faker";
import { NextResponse } from "next/server";
import { getThread, threadMocks } from "../mock";
import { delay } from "@/lib/utils";
import { ChatThread } from "@/app/(home)/types";
interface Params {
  [key: string]: any;
}
export async function GET(req: Request, attr: Params) {
  const threadId = attr.params.id;
  try {
    const response = getThread(threadId);
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      {
        error: "No thread found or could be a internal server error",
      },
      { status: 404, statusText: "invalid thread ID" }
    );
  }
}

export async function POST(req: Request, attr: Params) {
  const message = await req.json();
  const threadId = attr.params.id;
  try {
    const thread = getThread(threadId) as ChatThread;
    if (!thread.messages) throw Error();
    thread.messages.push(message);

    await delay(3000);

    const response = {
      id: Date.now().toString(),
      sentAt: Date.now().toString(),
      sender: "AI",
      content: faker.lorem.lines({
        min: 5,
        max: Math.max(5, Math.round(Math.random() * 100)),
      }),
    };

    thread.messages.push(response);
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      {
        error: "No thread found or could be a internal server error",
      },
      { status: 404, statusText: "invalid thread ID" }
    );
  }
}
