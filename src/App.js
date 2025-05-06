import { useRoutes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";
// import AOS from "aos";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect, useState } from "react";
import Loading from "./components/loading/Loading";
function App() {
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const myRoute = useRoutes(routes);
  return isLoaded ? <Loading onFinish={() => setIsLoaded(false)} /> : myRoute;
}
export default App;
