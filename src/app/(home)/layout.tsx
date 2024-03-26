import { Header } from "../components/header";
import UserProvider from "./user-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
      <main className="h-full flex w-full flex-col min-w-[380px] justify-between">
        <Header />
        {children}
      </main>
    </UserProvider>
  );
}
