import React, { useState } from 'react'
import "./Animal.css";

export default function Animal({name, imgUrl, description, species, habitat}) {

const [seen, setSeen]= useState(0)

    function handleSeenClicks() {
        setSeen(seen + 1);
    } 
    


  return (
    <div>
        <section className='animal-container'>
     <h2>{name}</h2> 
     <img src={imgUrl} alt={`an image of a ${name}`} title={name}></img>
     <p className="description">{description}</p>
     <p><span className="bold">Species:</span> {species}</p>
     <p><span className="bold">Habitat:</span> {habitat}</p>  
       <p> <span className="eyes" onClick={handleSeenClicks}>👀</span> Click the eyes if you have seen this animal in Norfolk.</p>
     <p>Times seen in Norfolk: {seen}</p>
     </section>
    </div>

  )
}
