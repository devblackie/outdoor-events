import React,{ useState, useEffect } from "react";
import Header from "./components/Header";
import Homme from "./components/Homme";
import './App.css';
import { Routes,Route,Link } from 'react-router-dom';



function App() {
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
      <div className="App">
        <h1>Page Count: {count}</h1>
        <Routes>
          <Route path="/" element={<Homme />} />
          {/* <Route path="about" element={<About />} /> */}
        </Routes>
        
      

    </div>
    
    
  );
}

export default App;
