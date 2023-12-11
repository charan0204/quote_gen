import React, { useState } from 'react'



function Card() {
    const [value,setValue]=useState("hey there");
  return (
    <div>
        <h2 className='text-white font-sans text-lg'>{value}</h2>
        <br />
    <button className='bg-white text-black' onClick={()=>{
        fetch('http://api.quotable.io/random')
        .then(res => res.json()).then(data=>{
            console.log(data.content);
            setValue(data.content);
        }).catch(()=> alert("error in loading!"));
    }}>Generate</button>
    </div>
  )
}

export default Card