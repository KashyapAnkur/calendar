import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { differenceInCalendarDays } from 'date-fns';


function isSameDay(a, b) {
    return differenceInCalendarDays(a, b) === 0;
}

let tomorrow = new Date().setDate(new Date().getDate() + 1);
let in3Days = new Date().setDate(new Date().getDate() + 3);
let in5Days = new Date().setDate(new Date().getDate() + 5);
const disabledDates = [tomorrow,in3Days,in5Days];

function tileDisabled({ date, view }) {
  // Disable tiles in month view only
  if (view === 'month') {
    // Check if a date React-Calendar wants to check is on the list of disabled dates
    return disabledDates.find(dDate => isSameDay(dDate, date));
  }
}

function DisableCalendarTiles() {
  const [date, onChange] = useState(new Date());

  return (
    <Calendar
      onChange={onChange}
      value={date}
      tileDisabled={tileDisabled}
    />
  );
}

export default DisableCalendarTiles;