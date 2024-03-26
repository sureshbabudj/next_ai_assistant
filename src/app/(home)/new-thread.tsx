"use client";
import { useRouter } from "next/navigation";
import { SendIcon } from "lucide-react";
import { useContext, useRef, useState } from "react";
import { ChatMessage } from "./types";
import { UserContext } from "./user-provider";

export const NewThread = () => {
  const user = useContext(UserContext);
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const message = useRef<any>(null);
  const handleMessage = () => {
    if (!message.current?.value) {
      return;
    }
    const content = String(message.current.value);
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      sentAt: Date.now().toString(),
      content,
      sender: user.name,
    };

    createThread(newMessage);
  };
  async function createThread(newMessage: ChatMessage) {
    setLoading(true);
    try {
      const response = await fetch(`/api/threads`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(newMessage),
      });
      const thread = await response.json();
      if (thread.id) router.push(`/${thread.id}`, { scroll: false });
      setLoading(false);
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
  }
  return (
    <div className="dark:bg-gray-800">
      <div className="dark:bg-transparent">
        <div className="mx-auto flex flex-col items-center py-12 sm:py-24">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-center text-gray-800 dark:text-white font-black leading-10">
              Revolutionize Your{" "}
              <span className="text-violet-800 dark:text-violet-500">
                {" "}
                Productivity{" "}
              </span>{" "}
              with AI. 🚀
            </h1>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 dark:text-gray-300 font-normal text-center text-xl">
              Smart Assistance at Your Fingertips...
            </p>
          </div>
          <div className="flex w-11/12 md:w-8/12 xl:w-6/12">
            <div className="flex rounded-md w-full">
              <input
                type="text"
                ref={message}
                name="q"
                className="w-full p-3 rounded-md rounded-r-none border-2 border-gray-300 placeholder-slate-500 dark:bg-gray-500  dark:text-gray-300 dark:border-none "
                placeholder="Ask me anything"
              />
              <button
                onClick={handleMessage}
                className="inline-flex items-center gap-2 bg-violet-700 text-white text-lg font-semibold py-3 px-6 rounded-r-md hover:bg-violet-600"
              >
                <SendIcon />
                <span>Send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
