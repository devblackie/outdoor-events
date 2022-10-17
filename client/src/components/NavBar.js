import React from 'react';    
import { Link } from 'react-router-dom';


export default function NavBar({ user, setUser }) {

    const logo = 'https://photos.google.com/photo/AF1QipMxfUTA_WSCyxDtRRoZHTL23VR5L2nA-zqrwNu-'

    function logOut() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }
    return (
        <div className="navbar">
            <img className="App-logo" src={`${logo}`}/>
            <div className="navbar-inner">
            {user ? (
              <ul className="navbar-nav ms-auto">
                <li className="nav-item  mx-3">
                    <span style={{ textDecoration: "none" }}>
                      {user.username.toUpperCase()}
                    </span>
                </li>
                <li className="nav-item  mx-3">
                  <p onClick={logOut} className="" >
                    <Link to="/" > Log Out </Link>
                  </p>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <a href="#products" className=" ">
                    <Link to="/event">Events</Link>
                  </a>
                </li>
                <li>
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    <a href="#contact" className=" " >Post Event </a></Link>
                </li>
              </ul>
            )}
                <a href="#">
                  <Link className="nav-link " to='/'>Home</Link>
                </a>
                <a href="#">
                  <Link className="nav-link " to='/gallery'>Gallery</Link>
                  <Link className="nav-link" to="/login">Login</Link>
                  <Link className="nav-link " to="/signup">SignUp</Link>
                </a>
            
            </div>
           
        </div>
    );
}