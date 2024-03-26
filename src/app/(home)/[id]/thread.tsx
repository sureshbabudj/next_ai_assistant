"use client";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useContext, useEffect, useRef, useState } from "react";
import { ChatMessage } from "../types";
import { Typewriter } from "../../components/typewriter";
import { useInterval } from "../../hooks/useInterval";
import axios from "axios";
import { UserContext } from "../user-provider";
import { Loading } from "@/app/components/loading";

interface ThreadProps {
  lastMessage: ChatMessage | null;
  threadId: string;
}

export const Thread = ({ threadId, lastMessage }: ThreadProps) => {
  const user = useContext(UserContext);
  const [chats, setChats] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  function scroll() {
    if (!document) return;
    const end = document.getElementById("end")!;
    end.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  const delayRef = useRef<number | null>(null);

  const lastMessageRef = useRef<string | null>(null);
  const intervalRef = useInterval(scroll, delayRef.current);

  async function getThread() {
    axios
      .get(`/api/threads/${threadId}`)
      .then(function (response) {
        console.log(response.data.messages);
        setChats(response.data.messages);
        setLoading(false);
        scroll();
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  }

  function clearLastMessage() {
    lastMessageRef.current = null;
    setTimeout(() => {
      delayRef.current = null;
      window.clearInterval(intervalRef.current ?? "");
    }, 500);
  }

  useEffect(() => {
    getThread();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (lastMessage) {
      setChats([...chats, lastMessage]);
      lastMessageRef.current = lastMessage.content;
      delayRef.current = 1000;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastMessage]);

  return (
    <>
      <div id="chat-container" className="max-w-[1200px] mx-auto">
        {loading && <Loading className="h-32 items-center justify-center" />}
        {chats.map((chat, i) => (
          <div key={i} className={cn("mb-10")}>
            <div className={cn("flex flex-row items-center mb-1")}>
              <Avatar className="me-2">
                {/* TODO: need auth for user */}
                {chat.sender.toLowerCase() === user.name.toLowerCase() ? (
                  <>
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{chat.sender}</AvatarFallback>
                  </>
                ) : (
                  <>
                    <AvatarFallback className="bg-green-400 text-white">
                      {chat.sender}
                    </AvatarFallback>
                  </>
                )}
              </Avatar>
              <span className="font-bold">{chat.sender}</span>
            </div>

            <div className="ms-12 mt-1 mb-5">
              {lastMessageRef.current &&
              i === chats.length - 1 &&
              chat.sender === "AI" ? (
                <Typewriter
                  words={[chat.content]}
                  typeSpeed={5}
                  loop={1}
                  onLoopDone={clearLastMessage}
                />
              ) : (
                chat.content
              )}
            </div>
          </div>
        ))}
      </div>
      <div id="end"></div>
    </>
  );
};
