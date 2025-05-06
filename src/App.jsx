
import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Technology from "./Components/Technology";
import Contact from "./Components/Contact";
function App() {
  return (
    <>
      <div className="overflow-x-hidden ">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        </div>

        <div>
          <Navbar></Navbar>
          <Hero></Hero>
          <About></About>
          <Technology></Technology>
          <Projects></Projects>
          <Contact></Contact>
        </div>
      </div>
    </>
  );
}

export default App;
