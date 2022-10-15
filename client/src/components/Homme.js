import React from 'react';
// import homePicture from './Assets/Team-Building-Classic.jpg';
import { Link } from 'react-router-dom';



export default function Homme() {

    
    return (
        <div className="home" 
        // style={{backgroundImage:`url(${homePicture})`,backgroundSize:"cover"}}
        >
           
            <div className="content">
                <h3>Fitness bonding Adventure</h3>
                <p><span style={{color:'white'}}>Achieve new fitness levels, bond, discover new places with us</span></p>
                <button className="btn"><Link className="nav-link" to='/gallery'>discover more</Link></button>
            </div>
        
            
        </div>
   
    );

}