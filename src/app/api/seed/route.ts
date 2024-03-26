import { ChatMessage, ChatThread } from "@/app/(home)/types";
import { faker } from "@faker-js/faker";
import { NextResponse } from "next/server";

function addSecondsToDate(date: Date, seconds = 3): Date {
  const dateObj = new Date(date);
  return new Date(dateObj.setSeconds(dateObj.getSeconds() + seconds));
}

function createThreads(
  initDate: string,
  count = 7,
  user = "John Doe"
): ChatMessage[] {
  const uniqueIds = faker.helpers.uniqueArray(faker.commerce.isbn, count);
  const messages: ChatMessage[] = [];
  let prevMsgAt = new Date(initDate);
  for (let i = 0; i < count; i++) {
    const sentAt = addSecondsToDate(prevMsgAt, 3);
    const message: ChatMessage = {
      content: faker.lorem.lines({
        min: 2,
        max: Math.max(2, Math.round(Math.random() * 30)),
      }),
      id: `msg-${uniqueIds[i]}`,
      sender: i % 2 === 0 ? user : "AI",
      isEdited: false,
      sentAt: sentAt.toUTCString(),
    };
    prevMsgAt = sentAt;
    messages.push(message);
  }
  return messages;
}

function seedData(page = 1, limit = 5) {
  const topics = faker.helpers.uniqueArray(faker.lorem.sentence, limit);
  const uniqueIds = faker.helpers.uniqueArray(faker.commerce.isbn, limit);
  const response: ChatThread[] = [];

  for (let i = 0; i < limit; i++) {
    const topic = topics[i];
    const createdAt = faker.date
      .between({
        from: "2020-01-01T00:00:00.000Z",
        to: "2030-01-01T00:00:00.000Z",
      })
      .toUTCString();
    const chatThread: ChatThread = {
      topic,
      id: `thread-${uniqueIds[i]}`,
      createdAt: createdAt,
      messages: createThreads(
        createdAt,
        Math.max(3, Math.round(Math.random() * 10))
      ),
    };
    response.push(chatThread);
  }
  return response;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page"));
  const limit = Number(searchParams.get("limit"));
  const response = seedData(page, limit);
  return NextResponse.json(response);
}
