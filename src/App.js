import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";




function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  )
}


export default  App;