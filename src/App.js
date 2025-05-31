import { useRoutes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";
// import AOS from "aos";
import "aos/dist/aos.css";
import Aos from "aos";
import { createContext, useEffect, useState } from "react";
import Loading from "./components/loading/Loading";
export const myContext = createContext();
function App({ children }) {
  const [isLoaded, setIsLoaded] = useState(true);
  const [cartCount, setCartCount] = useState(() => {
    const savedCount = localStorage.getItem("cartCount");
    return savedCount ? parseInt(savedCount, 10) : 0;
  });
  useEffect(() => {
    localStorage.setItem("cartCount", cartCount);
  }, [cartCount]);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const myRoute = useRoutes(routes);
  return (
    <myContext.Provider value={{ cartCount, setCartCount }}>
      {children}
      {isLoaded ? <Loading onFinish={() => setIsLoaded(false)} /> : myRoute}
    </myContext.Provider>
  );
}
export default App;
