import { useEffect, useState } from "react";

export const useBreakpoint = () => {
  const [media, setMedia] = useState({
    isMiniMobile: false,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  const calculateBreakpoint = () => {
    if (window.innerWidth < 400) {
      setMedia({
        isMiniMobile: true,
        isMobile: false,
        isTablet: false,
        isDesktop: false,
      });
    }
    if (window.innerWidth < 768) {
      setMedia({
        isMiniMobile: false,
        isMobile: true,
        isTablet: false,
        isDesktop: false,
      });
    } else if (window.innerWidth < 1024) {
      setMedia({
        isMiniMobile: false,
        isMobile: false,
        isTablet: true,
        isDesktop: false,
      });
    } else {
      setMedia({
        isMiniMobile: false,
        isMobile: false,
        isTablet: false,
        isDesktop: true,
      });
    }
  };

  useEffect(() => {
    calculateBreakpoint();
    const handleResize = () => {
      calculateBreakpoint();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    ...media,
  };
};
