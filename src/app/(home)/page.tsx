import { PreviousThreads } from "./previous-threads";
import { NewThread } from "./new-thread";

export default function Home() {
  return (
    <>
      <NewThread />
      <PreviousThreads />
    </>
  );
}
