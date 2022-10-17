import React,{ useState, useEffect } from "react";
import Homme from "./components/Homme";
import './App.css';
import { Routes,Route,Link } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Login from "./components/Login";



function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
      <div className="App">
        <NavBar user={user} setUser={setUser} />
        {user ? (
          <Routes>
            <Route path="/" element={<></>} />
          </Routes>
        ):(
          <Routes>
          <Route path="/" element={<Homme />} />
          <Route path="login" element={<Login setUser={setUser} />} />
        </Routes>
        )}
        
        
      

    </div>
    
    
  );
}

export default App;
