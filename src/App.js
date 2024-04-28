import './App.css';
import Navbar from './components/navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <section id="home">Home</section>
      <section id="aboutme">About Me</section>
      <section id="experience">Experiences</section>
      <section id="project">Projects</section>
      <section id="blogs">Blogs</section>
      <section id="contacts">Contact</section>
    </div>
  );
}

export default App;
