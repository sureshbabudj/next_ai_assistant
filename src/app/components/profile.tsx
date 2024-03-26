"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useContext, useState } from "react";
import { UserContext } from "../(home)/user-provider";

export const Profile = () => {
  const user = useContext(UserContext);
  const [isOpen, setIsOpen] = useState<boolean | undefined>();
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };
  return (
    <div className="mx-2 my-1 cursor-pointer border-4 border-transparent border-solid hover:border-gray-300 rounded-full">
      <DropdownMenu onOpenChange={handleOpenChange}>
        <DropdownMenuTrigger asChild>
          <div className="flex flex-row">
            <Avatar>
              <AvatarImage src={user.avatar} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="py-2 px-1 hidden sm:block">
              <p>{user.name}</p>
            </span>
            <svg
              className={cn(
                "w-4 h-4 my-3 mx-1 text-gray-800 dark:text-white hidden sm:block",
                {
                  "rotate-180": isOpen,
                }
              )}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 9-7 7-7-7"
              />
            </svg>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
