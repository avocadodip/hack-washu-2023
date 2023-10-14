import logo from "./logo.svg";
import "./App.css";
import Form from "../src/components/Form";
import World from "../src/components/World";

function App() {

  // State & GPT Stuff
  return (
    <div className="App">
      <Form /> {/* Rendering Form component */}
      <World /> {/* Rendering World component */}
    </div>
  );
}

export default App;
