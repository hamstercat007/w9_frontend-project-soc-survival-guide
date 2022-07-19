import "./App.css";
import CategoryList from "../CategoryList";
import Quote from "../Quote";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mindset from "../Mindset";
import Resources from "../Resources";
import SelfCare from "../Selfcare";
import NavBar from "../NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CategoryList />
                <Quote />
              </>
            }
          />
          <Route path="/mindset" element={<Mindset />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/selfcare" element={<SelfCare />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
