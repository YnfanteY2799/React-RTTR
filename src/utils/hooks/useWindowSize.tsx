import { useEffect, useState } from "react";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function handleWindowResize() {
    setWindowSize(getWindowSize());
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return windowSize;
}
