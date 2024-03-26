export const HamburgerMenu = () => {
  const handleClick = () => {
    console.log("Hamburger menu clicked!");
  };
  return (
    <button
      onClick={handleClick}
      className="border-r border-solid border-l-gray-500 p-3"
    >
      <svg
        className="w-7 h-7 text-gray-800 dark:text-white hover:text-black"
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
          d="M5 7h14M5 12h14M5 17h14"
        />
      </svg>
    </button>
  );
};
