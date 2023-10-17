import Home from "./Components/Home/Home";
import About from "./Components/Pages/About";
import Hire_me from "./Components/Pages/Hire_me";
import How_it_works from "./Components/Pages/How_it_works";
import Portfolio from "./Components/Pages/Portfolio";
import Reviews from "./Components/Pages/Reviews";
import Services from "./Components/Pages/Services";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";

function App() {
  return (
    <div className="App">
          <Router>
    <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/hire_me" element={<Hire_me />} />
                  <Route path="/how_it_works" element={<How_it_works />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/reviews" element={<Reviews />} />
                  <Route path="/services" element={<Services />} />  
    </Routes>
   </Router>
    </div>
  );
}

export default App;
