import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Pnrinput from './components/Pnrinput';
import Result from './components/Result'
import Passenger from './components/Passenger';

function App() {
  const [data, setData] = useState([]);
  const [flag,setFlag] = useState(false);
  const [journeyDetails,setJourneyDetails]=useState({
    trainName: "",
    trainNo: "",
    journeyStartDate: "",
    journeyEndDate:"",
    boardStation: "",
    departTime: "",
    deststation: "",
    arrivalTime: ""
  })
  // console.log(data);

  function handleData(pnr) {
    // console.log(pnr);
    if(pnr===""){
      window.alert("PNR NUMBER CAN NOT BE BLANK");
      return;
    }

    const url = `https://irctc1.p.rapidapi.com/api/v3/getPNRStatus?pnrNumber=${pnr}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a8fbeb9542msh458ee30491423aep16d147jsn64b9e303464c',
		    'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
      }
    };

    try {
      const getData = async function(){
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);
        console.log(result.hasOwnProperty('errors'));
        if(result.hasOwnProperty('errors')){
          window.alert("ENTER CORRECT PNR NUMBER");
          return;
        }
        else{
          setData(result.data.PassengerStatus);
          setJourneyDetails({
            trainName:result.data.TrainName,
            trainNo:result.data.TrainNo,
            journeyStartDate:result.data.SourceDoj,
            journeyEndDate : result.data.DestinationDoj,
            boardStation:result.data.BoardingStationName,
            departTime:result.data.DepartureTime,
            deststation:result.data.ReservationUptoName,
            arrivalTime:result.data.ArrivalTime
          })
          setFlag(true);
        }
      }
      getData();
    }
    catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='main-container'>
      <div className='container'>
        <Pnrinput handleData={handleData} />
        {flag && <Result journeyDetails={journeyDetails}/>}
        <Passenger passenger={data} />
      </div>
    </div>
  );
}

export default App;
