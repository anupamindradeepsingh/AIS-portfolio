import { useEffect, useState } from "react";

/**
 * Types out a string character by character.
 * @param {string} text - text to type
 * @param {number} speed - ms per character
 * @param {number} startDelay - ms before typing starts
 */
export default function useTypingEffect(text, speed = 45, startDelay = 0) {
  const [output, setOutput] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setOutput("");
    setDone(false);
    let i = 0;
    let interval;

    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOutput(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return { output, done };
}
