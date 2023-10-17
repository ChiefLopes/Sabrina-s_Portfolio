import Hero from "./Components/Home/Hero";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";

function App() {
  return (
    <div className="App">
          <Router>
    <Routes>
                  <Route path="/" element={<Hero />} />
                  
    </Routes>
   </Router>
    </div>
  );
}

export default App;
