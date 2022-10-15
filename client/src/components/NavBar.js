import React from 'react';    
import { Link } from 'react-router-dom';


export default function NavBar() {

    const logo = 'https://photos.google.com/photo/AF1QipMxfUTA_WSCyxDtRRoZHTL23VR5L2nA-zqrwNu-'
    return (
        <div className="navbar">
            <img className="App-logo" src={`${logo}`}/>
            <div className="navbar-inner">
                <a href="#">
                <Link className="nav-link " to='/'>Home</Link>
                </a>
                <a href="#">
                <Link className="nav-link " to='/gallery'>Gallery</Link>
                <Link className="nav-link " to='/addEvent'>Add Event</Link>
                </a>
            
            </div>
           
        </div>
    );
}