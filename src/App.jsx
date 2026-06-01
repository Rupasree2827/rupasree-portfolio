import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Education from "./Components/Education";

function App() {

  return (

    <div
      style={{
        background:"#050816",
        minHeight:"100vh",
        color:"white",
        position:"relative",
        overflow:"hidden"
      }}
    >

      <div
        style={{
          position:"absolute",
          width:"500px",
          height:"500px",
          background:"#7e22ce",
          borderRadius:"50%",
          filter:"blur(180px)",
          opacity:"0.25",
          top:"-120px",
          left:"-120px"
        }}
      ></div>

      <div
        style={{
          position:"absolute",
          width:"450px",
          height:"450px",
          background:"#06b6d4",
          borderRadius:"50%",
          filter:"blur(180px)",
          opacity:"0.20",
          bottom:"-120px",
          right:"-120px"
        }}
      ></div>

      <Navbar/>

      <Hero/>

      <Skills/>
      <Projects/>
      <About/>
      <Education/>
      <Contact/>
      <Footer/>


    </div>
  )
}

export default App