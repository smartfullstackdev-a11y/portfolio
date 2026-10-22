import { useEffect } from "react";

export const useVH = () => {
  useEffect(() => {
    const handleResize = () => {
      const doc = document.documentElement
      doc.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
    };

    // Initial check
    handleResize();

    // Event listener for screen resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
}