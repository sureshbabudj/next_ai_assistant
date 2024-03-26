"use client";

import { TypewriterProps, useTypewriter } from "react-simple-typewriter";

export const Typewriter = ({
  words,
  loop = 1,
  typeSpeed = 80,
  deleteSpeed = 50,
  delaySpeed = 1500,
  onLoopDone,
  onType,
  onDelay,
  onDelete,
}: TypewriterProps): JSX.Element | null => {
  const [text, helper] = useTypewriter({
    words,
    loop,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
    onType,
    onDelay,
    onDelete,
  });

  const { isDone } = helper;

  if (isDone && onLoopDone) {
    onLoopDone();
  }

  if (!words) return null;

  return <span>{text}</span>;
};
