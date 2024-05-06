import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Blogs from "./components/Blogs";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="aboutme">
        <Aboutme />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="blogs">
        <Blogs />
      </section>
      <section id="contacts">
        <ContactUs />
      </section>
    </div>
  );
}

export default App;
