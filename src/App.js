import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Aboutme from './components/Aboutme';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <section id="home"><Home /></section>
      <section id="aboutme"><Aboutme /></section>
      <section id="skills">Skills</section>
      <section id="project">Projects</section>
      <section id="blogs">Blogs</section>
      <section id="contacts">Contact</section>
    </div>
  );
}

export default App;
