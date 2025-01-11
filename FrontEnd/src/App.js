import { RingLoader } from "react-spinners";
import About from "./components/About";
import Contact from "./components/Contact";
import DotRing from "./components/DotRing/DotRing";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { useState, useEffect } from "react";
function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="loader">
          <RingLoader
            color={"#FFFFFF"}
            loading={true}
            cssOverride={false}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <h1>Loading...</h1>
        </div>
      ) : (
        <>
          <DotRing />
          <Navbar />
          <Home />
          <About />
          <Projects />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
