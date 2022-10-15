import React from 'react';
import homePicture from './Assets/Team-Building-Classic.jpg';
import { NavLink } from 'react-router-dom';



export default function Home() {

    
    return (
        <div className="home" style={{backgroundImage:`url(${homePicture})`,backgroundSize:"cover"}}>
            {/* <NavBar /> */}
            <div className="content">
                <h3>Fitness bonding Adventure</h3>
                <p><span style={{color:'white'}}>Achieve new fitness levels, bond, discover new places with us</span></p>
                <a className="btn"><NavLink className="nav-link" to='/gallery'>discover more</NavLink></a>
               
            
            </div>
        
            
        </div>
   
    );

}