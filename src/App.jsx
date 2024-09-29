import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Technologies from "./component/Technologies";
import Experience from "./component/Experience"
import Projects from "./component/Projects"
import Contact from "./component/Contact"

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background overlay */}
      <div className="fixed top-0 -z-10 h-full w-full">

      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      
      
      {/* Main content */}
      <div className="container mx-auto px-8">
        <Navbar /> {/* Correctly using the Navbar component */}
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
  
