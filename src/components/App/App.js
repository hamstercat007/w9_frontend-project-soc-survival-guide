import "./App.css";
import CategoryList from "../CategoryList";
import Quote from "../Quote";
import { useEffect } from "react";

function App() {
 

  return (
    <div className="App">
      <h1>SoC Survival Guide</h1>
      <p>Helping bootcampers get through the journey</p>
      <CategoryList />
      <Quote />
    </div>
  );
}

export default App;
