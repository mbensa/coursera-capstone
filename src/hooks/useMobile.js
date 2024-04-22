import { useState, useEffect, useCallback } from "react";

export default function useMobile() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const isMobile = windowWidth < 1024;
  const isDesktop = windowWidth >= 1280;

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  return {
    isMobile,
    isDesktop,
  };
}
