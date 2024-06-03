import React from 'react'
import Singlepassenger from './Singlepassenger'

const Passenger = ({passenger}) => {
    // console.log(passenger);
    
    const singlepassengerArr = passenger.map((item,id) => {
        return <Singlepassenger passengerdetails={item} key={id}/>
    })
    
  return (
    <div className='passenger'>{singlepassengerArr}</div>
  )
}

export default Passenger