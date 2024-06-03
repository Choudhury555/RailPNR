import React from 'react'
import {useState} from 'react'

const Pnrinput = ({handleData}) => {
    const [pnr, setPnr] = useState("");
    
    function callParent(){
      handleData(pnr);
    }
  return (
    <div className='inut-box'>
      <input placeholder={"Enter PNR Number"} value={pnr} type='text' onChange={(e)=>setPnr(e.target.value)}/>
      <button className='btn' onClick={callParent}>Submit</button>
    </div>
  )
}

export default Pnrinput