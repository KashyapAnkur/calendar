import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Calendarr from './May5/Assignment/Calendar';
import DisableCalendarTiles from './May5/Assignment/DisableCalendarTiles';
import DisableDateRanges from './May5/Assignment/DisableDateRanges';

function App() {
 
  return (
    <div className="App">
      Task2:<br />
      <Calendarr />
      Task3:<br />
      <DisableCalendarTiles />
      Task4:<br />
      <DisableDateRanges />
    </div>
  );
}

export default App;
