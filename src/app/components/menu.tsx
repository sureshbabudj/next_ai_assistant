"use client";

import * as React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type NavItem = {
  title: string;
  href: string;
  active?: boolean;
  children?: NavItem[];
  icon?: React.ReactNode;
};

const links: NavItem[] = [
  {
    title: "Chats",
    href: "/",
    active: true,
    icon: (
      <svg
        className="w-5 h-5 me-2 "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "Pricing",
    href: "/",
    icon: (
      <svg
        className="w-5 h-5 me-2 "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm2-2a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Zm0 3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Zm-6 4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-6Zm8 1v1h-2v-1h2Zm0 3h-2v1h2v-1Zm-4-3v1H9v-1h2Zm0 3H9v1h2v-1Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    children: [
      {
        title: "Enterprise Solution",
        href: "/",
      },
      {
        title: "Commercial Variant",
        href: "/",
      },
      {
        title: "Trial Edition",
        href: "/",
      },
      {
        title: "Free Edition",
        href: "/",
      },
    ],
  },
  {
    title: "About",
    href: "/",
    icon: (
      <svg
        className="w-5 h-5 me-2 "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    children: [
      {
        title: "Team",
        href: "/",
      },
      {
        title: "Concept",
        href: "/",
      },
      {
        title: "Investors",
        href: "/",
      },
    ],
  },
  {
    title: "Help",
    href: "/",
    icon: (
      <svg
        className="w-5 h-5 me-2 "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.008-3.018a1.502 1.502 0 0 1 2.522 1.159v.024a1.44 1.44 0 0 1-1.493 1.418 1 1 0 0 0-1.037.999V14a1 1 0 1 0 2 0v-.539a3.44 3.44 0 0 0 2.529-3.256 3.502 3.502 0 0 0-7-.255 1 1 0 0 0 2 .076c.014-.398.187-.774.48-1.044Zm.982 7.026a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2h-.01Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    children: [
      {
        title: "FAQ",
        href: "/",
      },
      {
        title: "Chat with us",
        href: "/",
      },
      {
        title: "Community & Forum",
        href: "/",
      },
    ],
  },
  {
    title: "Contact",
    href: "/",
    icon: (
      <svg
        className="w-5 h-5 me-2 "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
      </svg>
    ),
  },
];

interface MenuProps {
  className?: string;
  orientation?: "vertical" | "horizontal";
}

export function Menu({ className, orientation = "horizontal" }: MenuProps) {
  if (orientation === "vertical") {
    return (
      <div className={className}>
        {links.map((link) => (
          <ul key={link.title}>
            <li>
              <a
                className={cn(
                  "px-5 py-2 flex flex-row font-bol hover:text-blue-500",
                  {
                    "text-blue-500": link.active,
                  }
                )}
              >
                {link.icon && link.icon}
                {link.title}
              </a>
              {link.children && link.children.length > 0 && (
                <ul className="mx-6 text-gray-600">
                  <div className="grid gap-3 p-4">
                    {link.children.map((child) => (
                      <div key={child.title}>
                        <Link
                          className="block max-w-full hover:text-blue-600"
                          href={child.href}
                        >
                          {child.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </ul>
              )}
            </li>
          </ul>
        ))}
      </div>
    );
  }
  return (
    <div className={cn(className, "me-5 ")}>
      {links.map((link) => (
        <DropdownMenu key={link.title}>
          <DropdownMenuTrigger>
            <a
              className={cn(
                "px-5 py-4 flex flex-row  text-gray-500 hover:text-blue-500",
                { "text-blue-500": link.active }
              )}
            >
              {link.icon && link.icon}
              {link.title}
            </a>
          </DropdownMenuTrigger>
          {link.children && link.children.length > 0 && (
            <DropdownMenuContent>
              <div className="grid gap-3 p-4">
                {link.children.map((child) => (
                  <div key={child.title}>
                    <Link
                      className="my-1 p-2 max-w-full hover:text-blue-600"
                      href={child.href}
                    >
                      {child.title}
                    </Link>
                  </div>
                ))}
              </div>
            </DropdownMenuContent>
          )}
        </DropdownMenu>
      ))}
    </div>
  );
}
