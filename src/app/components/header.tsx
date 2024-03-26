import Link from "next/link";
import { SideDrawer } from "./SideDrawer";
import { Logo } from "./logo";
import { Menu } from "./menu";
import { Profile } from "./profile";

export const Header = () => {
  return (
    <>
      <header className="flex w-full flex-row justify-between xl:px-10 border-b border-b-gray-100">
        <div className="flex flex-row justify-around">
          <SideDrawer className="block lg:hidden" />
          <Link href="/" className="flex items-center px-2">
            <Logo />
          </Link>
          <a
            href="/"
            className="mx-3 my-2 px-3 py-2 rounded-xl flex flex-row items-center md:bg-gray-200 text-blue-600 font-bold hover:md:bg-gray-300 hover:text-black"
          >
            <span className="rounded-full bg-white text-dark w-6 h-6 flex items-center justify-center me-2 font-bold">
              +
            </span>
            <span className="hidden md:inline">Chat</span>
          </a>
        </div>
        <div className="flex flex-row justify-around">
          <Menu className="hidden lg:flex" />
          <Profile />
        </div>
      </header>
    </>
  );
};
