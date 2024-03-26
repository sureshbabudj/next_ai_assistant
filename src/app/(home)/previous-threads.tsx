"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChatThread } from "./types";
import { Loading } from "../components/loading";

export const PreviousThreads = ({ className }: { className?: string }) => {
  const [loading, setLoading] = useState(true);
  const [threads, setThreads] = useState<ChatThread[]>([]);
  const THREAD_LIMIT = 5;

  async function getThreads() {
    try {
      const response = await fetch(`/api/threads?page=1&limit=${THREAD_LIMIT}`);
      const threads = await response.json();
      setLoading(false);
      setThreads(threads);
    } catch (error) {
      setLoading(false);
      console.log({ error });
    }
  }

  useEffect(() => {
    getThreads();
  }, []);

  return (
    <div className={cn("mx-auto flex flex-col items-center p-1", className)}>
      <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
        Resume
      </p>
      <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9">
        Your previous interactions
      </h4>
      {loading ? (
        <Loading className="h-32 items-center justify-center" />
      ) : (
        <ul className="mt-8 space-y-3 font-medium">
          {threads.map((thread) => (
            <li key={thread.id}>
              <Link
                href={`/${thread.id}`}
                className="flex items-start lg:col-span-1 text-gray-600 hover:text-indigo-600"
              >
                <div className="flex-shrink-0">
                  <svg
                    className=" w-6 h-6 text-indigo-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544.356.35.559.829.559 1.331v9.25c0 .502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.868 1.868 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331ZM7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.556Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="ml-3 leading-">{thread.topic}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
