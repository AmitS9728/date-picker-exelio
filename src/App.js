import { useState} from 'react';
import Calendar from 'react-calendar';
import './App.css';
import Time from './Time.js'

function App() {
 const [date, setDate] = useState(new Date())
 const [showTime, setShowTime] = useState(true)

  return (
    <div className="App">
      <h1 className="header">Appointment calendar</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
      </div>
      {date.length > 0 ? (
   <p>
     <span>Start:</span>
     {date[0].toDateString()}
     &nbsp; 
     &nbsp;
     <span>End:</span>{date[1].toDateString()}
   </p>
        ) : (
   <p>
     <span>Day of the selected appointment:</span>{date.toDateString()}
   </p>
        )}
     <Time showTime={showTime} date={date}/>   
    </div>
  );
}

export default App;
