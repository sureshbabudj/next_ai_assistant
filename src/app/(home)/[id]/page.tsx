import { Chat } from "./chat";

export default function ChatThread({ params }: { params: { id: string } }) {
  return <Chat threadId={params.id}></Chat>;
}
