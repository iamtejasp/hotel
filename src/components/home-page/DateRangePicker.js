import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, isBefore, isAfter, isSameDay } from "date-fns";

const DateRangePicker = () => {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(addDays(new Date(), 1));
  const [selectingCheckIn, setSelectingCheckIn] = useState(true);

  const handleDateChange = (date) => {
    if (selectingCheckIn) {
      setCheckInDate(date);
      setSelectingCheckIn(false);
    } else {
      setCheckOutDate(date);
      setSelectingCheckIn(true);
    }
  };

  const highlightWithRanges = [
    {
      "react-datepicker__day--highlighted-custom-1": [
        checkInDate,
        checkOutDate,
      ],
    },
  ];

  const isDateInRange = (date) => {
    return isAfter(date, checkInDate) && isBefore(date, checkOutDate);
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <div className="flex space-x-4 mb-4">
        <button
          className={`flex-1 p-2 border rounded ${
            selectingCheckIn ? "border-blue-500" : ""
          }`}
          onClick={() => setSelectingCheckIn(true)}
        >
          Check-in: {checkInDate.toLocaleDateString()}
        </button>
        <button
          className={`flex-1 p-2 border rounded ${
            !selectingCheckIn ? "border-blue-500" : ""
          }`}
          onClick={() => setSelectingCheckIn(false)}
        >
          Check-out: {checkOutDate.toLocaleDateString()}
        </button>
      </div>

      <DatePicker
        selected={selectingCheckIn ? checkInDate : checkOutDate}
        onChange={handleDateChange}
        highlightDates={highlightWithRanges}
        inline
        monthsShown={2}
        minDate={new Date()}
        maxDate={addDays(selectingCheckIn ? new Date() : checkInDate, 30)}
        dayClassName={(date) =>
          isSameDay(date, checkInDate) || isSameDay(date, checkOutDate)
            ? "bg-blue-500 text-white rounded-full"
            : isDateInRange(date)
            ? "bg-blue-100 rounded-full"
            : undefined
        }
      />
    </div>
  );
};

export default DateRangePicker;
