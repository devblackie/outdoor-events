import React,{ useState, useEffect } from "react";
import Homme from "./components/Homme";
import './App.css';
import { Routes,Route,Link } from 'react-router-dom';
import NavBar from "./components/NavBar";



function App() {
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Homme />} />
          {/* <Route path="about" element={<About />} /> */}
        </Routes>
        
      

    </div>
    
    
  );
}

export default App;
