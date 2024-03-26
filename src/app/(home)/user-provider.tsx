"use client";

import { faker } from "@faker-js/faker";
import { createContext } from "react";

interface User {
  name: string;
  role: string;
  plan: string;
  avatar?: string;
}

const user = {
  name: "John Doe",
  role: "user",
  plan: "free",
  avatar: faker.image.avatar(),
};

export const UserContext = createContext<User>(user);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
