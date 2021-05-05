import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { isWithinInterval } from "date-fns";


let in3Days = new Date().setDate(new Date().getDate() + 3);
let in5Days = new Date().setDate(new Date().getDate() + 5);
let in13Days = new Date().setDate(new Date().getDate() + 13);
let in15Days = new Date().setDate(new Date().getDate() + 15);

const disabledRanges = [
  [in3Days, in5Days],
  [in13Days, in15Days],
];

function isWithinRange(date, range) {
    return isWithinInterval(date, { start: range[0], end: range[1] });
}
  
function isWithinRanges(date, ranges) {
    return ranges.some(range => isWithinRange(date, range));
}

function tileDisabled({ date, view }) {
  // Add class to tiles in month view only
  if (view === 'month') {
    // Check if a date React-Calendar wants to check is within any of the ranges
    return isWithinRanges(date, disabledRanges);
  }
}

function DisableDateRanges() {
  const [date, onChange] = useState(new Date());

  return (
    <Calendar
      onChange={onChange}
      value={date}
      tileDisabled={tileDisabled}
    />
  );
}

export default DisableDateRanges;