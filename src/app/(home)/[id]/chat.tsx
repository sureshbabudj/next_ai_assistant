"use client";
import { Textarea } from "@/components/ui/textarea";
import { Thread } from "./thread";
import { useContext, useRef, useState } from "react";
import { ChatMessage } from "../types";
import { cn } from "@/lib/utils";
import { SendIcon } from "@/app/components/send-icon";
import { UserContext } from "../user-provider";

export const Chat = ({ threadId }: { threadId: string }) => {
  const user = useContext(UserContext);
  const [lastMsg, setLastMsg] = useState<ChatMessage | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const message = useRef<any>(null);

  async function getResponse(msg: ChatMessage) {
    setLoading(true);
    try {
      const response = await fetch(`/api/threads/${threadId}`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(msg),
      });
      const chat = await response.json();
      if (message.current) message.current.value = "";
      setLastMsg(chat);
      setLoading(false);
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
  }

  const handleMessage = () => {
    if (!message.current?.value) {
      return;
    }
    const content = String(message.current.value);
    const lastMessage: ChatMessage = {
      id: Date.now().toString(),
      sentAt: Date.now().toString(),
      content,
      sender: user.name,
    };
    setLastMsg(lastMessage);
    getResponse(lastMessage);
  };

  return (
    <div className="grow w-full flex flex-col overflow-hidden">
      <div className="grow p-5 overflow-auto">
        <Thread threadId={threadId} lastMessage={lastMsg} />
      </div>

      <div className="basis-20 bg-gray-50 border-t border-t-gray-300">
        <div
          className={cn("invisible text-center  font-extralight", {
            visible: loading,
          })}
        >
          <div className="h-1 text-sm animate-pulse rounded-full bg-gradient-to-r from-green-500 to-blue-500 w-full"></div>
          AI Assistant is thinking...
        </div>
        <div className="flex flex-row m-5 items-center max-w-[920px] mx-auto px-3">
          <Textarea
            placeholder="Type your message here."
            ref={message}
            disabled={loading}
          />
          <button
            onClick={handleMessage}
            disabled={loading}
            className="disabled:cursor-not-allowed disabled:opacity-50 flex felx-row ms-5 px-2 md:px-7  py-3 rounded-3xl bg-blue-800 items-center font-extrabold text-white hover:bg-blue-900"
          >
            <SendIcon />
            <span className="hidden md:inline">Send</span>
          </button>
        </div>
      </div>
    </div>
  );
};
