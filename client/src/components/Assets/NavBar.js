import React from 'react';    
import { Link } from 'react-router-dom';


export default function NavBar() {

    const logo = 'https://drive.google.com/file/d/1haK6VQVBjQaaeXiCSWb0ps-dURaToysE/view?usp=sharing'
    return (
        <div className="navbar">
            <img className="App-logo" src={`${logo}`}/>
            <div className="navbar-inner">
                <a href="#">
                <Link className="nav-link " to='/'>Home</Link>
                </a>
                <a href="#">
                <Link className="nav-link " to='/gallery'>Gallery</Link>
                <Link className="nav-link " to='/login'>Login</Link>
                <Link className="nav-link " to='/addEvent'>Add Event</Link>
                </a>
            
            </div>
           
        </div>
    );
}