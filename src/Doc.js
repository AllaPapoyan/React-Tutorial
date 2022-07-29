import React, { useState } from 'react'

function Doc() {
    let [count,setCount]=useState(0)
    let [show,setShow]=useState(true)
  return (
    <div>
        { show
        ?
        <div>
        <h1>{count}</h1>
        <button onClick={()=>{
            setCount(count+1)
            
        }}>+1</button>
        <button onClick={()=>{
            setCount(count-1)
        }}>-1</button>
        <button onClick={()=>{
            setCount(count+5)
        }}>+5</button>
         <button onClick={()=>{
            setCount(count-5)
        }}>-5</button>
        </div>
        :
        <h1>No COunt</h1>
        }
        <button onClick={()=>{
          setShow(!show)
        }}>click</button>
    </div>
  )
}

export default Doc