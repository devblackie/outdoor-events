import React from 'react';
import Gallpad from './Gallpad';
import homePicture from './Assets/Essentials/pexels-capture-blinks-285598.jpg';

export default function Gallery({events}) {
    

    const picture = events.map((event) => {
        return (
            <Gallpad
            key = {event.id}
                image={event.image}
                location={event.location}
                amount={event.amount}
            />
        );
    })

    // console.log(display)
    return (
        <div className="gallery" style={{ backgroundImage: `url(${homePicture})`, backgroundSize: "cover" }}>
            <h1 className="heading">

                <span>U</span>
                <span>P</span>
                <span>C</span>
                <span>O</span>
                <span>M</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>
                <span></span>
                <span>E</span>
                <span>V</span>
                <span>E</span>
                <span>N</span>
                <span>T</span>
                <span>S</span>

                <form className="search-bar-container">
                    <input type="text" id="search-bar-input" placeholder="Search"></input>
                </form>
            </h1>
            {picture}
        </div>
    );
}