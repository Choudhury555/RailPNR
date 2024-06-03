import React from 'react'

const Result = ({journeyDetails}) => {
  const {trainName,trainNo,journeyStartDate,journeyEndDate,boardStation,departTime,deststation,arrivalTime}={...journeyDetails};//destructuring the object
  
  return (
    <div>
        <div className='traininfo'>
            <span className='t-name'>{trainName} :: </span><span className='t-name'>{trainNo}</span>
            <h4>Journey Start date : {journeyStartDate}</h4>
            <h4>Journey End date : {journeyEndDate}</h4>
            <h4>Boarding Station : {boardStation} (Departure Time : {departTime})</h4>
            <h4>Destination Station : {deststation} (Arrival Time : {arrivalTime})</h4>
        </div>
    </div>
  )
}

export default Result