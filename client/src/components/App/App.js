import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import WeightTracker from "../../pages/WeightTracker.js";
import BMICalculator from "../../pages/BMICalculator.js";
import HomePage from "../../pages/HomePage.js";
import NavBar from "../NavBar.js";
import "../App/App.css"
import Footer from "../Footer.js";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/Weight-Tracker" element={<WeightTracker/>} />
          <Route path="/BMI-Calculator" element={<BMICalculator/>} />
        </Routes>
        <Footer/>
      </Router>
   
    </div>
  );
}

export default App;
