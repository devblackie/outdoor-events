import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Gallpad({image, location, amount}) {

  return (
    <div className="Gallpad">
        <div className="box">
             <img src={image} alt="Next one"/>
             <div className="content">
                <h3 className="Location">{location}</h3>
                <h3 className=" ">ksh {amount}</h3>
                <button className="btn-1">
                    <NavLink className="nav-link" to='/book'>Click to book Event</NavLink>
                </button>         
             </div>
        </div>     
    </div>
  )
}