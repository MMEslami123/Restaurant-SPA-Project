import { useEffect, useState } from "react";
import "./Loading.css";
function Loading({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        onFinish();
      }, 500);
    }, 800);

    return () => clearTimeout(loadingTimer);
  }, [onFinish]);

  return (
    <div className={`loaderContainer ${fadeOut ? "fade-out" : ""}`}>
      <div className="loader"></div>
    </div>
  );
}

export default Loading;
