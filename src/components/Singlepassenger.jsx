import React from 'react'

const Singlepassenger = ({passengerdetails}) => {
    // console.log(passengerdetails);
    let substr=passengerdetails.CurrentStatus.substring(0,4);
  return (
    <div className='single-passenger'>
        <h4>Passenger {passengerdetails.Number}</h4>
        <h4>Booking Status({passengerdetails.BookingStatus})</h4>
        <h4>Current Status({passengerdetails.CurrentStatus})</h4>
        {passengerdetails.CurrentStatus==='CAN/MOD' ? <h4>(ALREADY CANCELLED)</h4> : substr==="GNWL" ? <h4>({passengerdetails.Prediction})</h4> : <h4>(ALREADY CONFIRMED)</h4>}
        <h4>{passengerdetails.currentCoach}</h4>
        <h4>{passengerdetails.currentBerthNo}</h4>
    </div>
  )
}

export default Singlepassenger