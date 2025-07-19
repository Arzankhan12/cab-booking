// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]); // Trigger when pathname changes

//   return null; // This component does not render anything
// }

// export default ScrollToTop;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Delay added for iPhone browsers
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Extra Fix for iPhone browsers
      if (
        navigator.userAgent.includes("iPhone") ||
        navigator.userAgent.includes("iPad")
      ) {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    }, 100);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
