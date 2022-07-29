import React, { useState } from 'react'

function Cord() {
    let [isLoggedIn, setisLoggedIn] = useState(true)
  return (
    <div>
        User 
        <button onClick={()=>{
            setisLoggedIn(!isLoggedIn)
            
            console.log(isLoggedIn);
            
        }}>click </button>
        <b>{isLoggedIn 
        ? 
        <div>
            <h1>barev vonc es</h1>
            <h2>inchov es zbaxvum?</h2>
            <p>Adsffd fjtjgjg ffgjfgjyjn,fhdht</p>
            <hr />
        </div>
        :
        <div>
            <h1>oves Du?</h1>
        </div>
        }</b>
    </div>
  )
}

export default Cord