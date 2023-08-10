import "./App.css";
import Info from "./components/Info";
import Experience from "./components/Experience";
import Jobrole from "./components/Jobrole";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";

function App() {
  return (
    <div className="App">
      <Info />
      <Experience />
      <Jobrole />
      <Skills />
      <Hobbies />
    </div>
  );
}

export default App;
