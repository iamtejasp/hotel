import React, { useState, useRef } from "react";
import { DateRange } from "react-date-range";
import { addDays, format, startOfMonth } from "date-fns";
import "react-date-range/dist/styles.css"; // Main style file
import "react-date-range/dist/theme/default.css"; // Theme css file

const DateRangePicker = () => {
  const [selection, setSelection] = useState({
    startDate: new Date(),
    endDate: addDays(new Date(), 1),
    key: "selection",
  });

  const [isCalendarOpen, setIsCalendarOpen] = useState(false); // Control calendar visibility
  const [isCheckOutFocused, setIsCheckOutFocused] = useState(false); // Track if checkout is focused
  const [focusedMonth, setFocusedMonth] = useState(new Date()); // Track the selected month
  const checkOutRef = useRef(null);

  // Generate month list for the sidebar
  const generateMonths = () => {
    const months = [];
    const today = new Date();
    const twoYearsLater = addDays(today, 730); // 2 years from today

    let current = new Date(today.getFullYear(), today.getMonth(), 1);
    while (current <= twoYearsLater) {
      months.push({
        month: format(current, "MMMM yyyy"),
        date: current,
      });
      current.setMonth(current.getMonth() + 1);
    }
    return months;
  };

  const [monthsList] = useState(generateMonths());

  // Handle date selection and automatically focus on check-out after check-in is selected
  const handleDateSelect = (ranges) => {
    const { startDate, endDate } = ranges.selection;

    // If check-in date selected, stay open and focus on check-out
    if (!isCheckOutFocused) {
      setSelection({ ...selection, startDate });
      setIsCheckOutFocused(true);
      checkOutRef.current.focus(); // Focus the check-out input
    } else {
      // If check-out date selected, set end date and close calendar
      setSelection({ ...selection, endDate });
      setIsCheckOutFocused(false);
      setIsCalendarOpen(false); // Close the calendar after check-out is selected
    }
  };

  // Open calendar and focus on check-in or check-out accordingly
  const handleInputFocus = (isCheckIn) => {
    setIsCalendarOpen(true); // Open calendar
    if (isCheckIn) {
      setIsCheckOutFocused(false); // Focus check-in
    } else {
      setIsCheckOutFocused(true); // Focus check-out
    }
  };

  // Update calendar view when month is clicked from the sidebar
  const handleMonthClick = (monthDate) => {
    setFocusedMonth(monthDate); // Focus the selected month
  };

  return (
    <>
      {/* Input Fields */}
      <div className="input-container">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Check-in
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={format(selection.startDate, "MMM dd, yyyy")}
            readOnly
            onFocus={() => handleInputFocus(true)} // Open calendar and focus check-in
          />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Check-out
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ref={checkOutRef}
            value={
              selection.endDate ? format(selection.endDate, "MMM dd, yyyy") : ""
            }
            readOnly
            onFocus={() => handleInputFocus(false)} // Open calendar and focus check-out
          />
        </label>
      </div>

      {/* Calendar visibility based on input focus */}
      {isCalendarOpen && (
        <div className="calendar-container">
          {/* Left side: months list */}
          <div className="month-list">
            {monthsList.map((month, index) => (
              <div
                key={index}
                className={`month-item ${
                  format(focusedMonth, "MMMM yyyy") === month.month
                    ? "selected-month"
                    : ""
                }`}
                onClick={() => handleMonthClick(month.date)} // Update calendar on month click
              >
                {month.month}
              </div>
            ))}
          </div>

          {/* Right side: Date range picker */}
          <div className="calendar">
            <DateRange
              ranges={[selection]}
              onChange={handleDateSelect}
              minDate={new Date()} // Prevent past dates from being selected
              maxDate={addDays(new Date(), 730)} // 2 years max
              moveRangeOnFirstSelection={false}
              shownDate={focusedMonth} // Focus on the month selected from the sidebar
              showSelectionPreview={true}
              focusedRange={[0, isCheckOutFocused ? 1 : 0]} // Focus on check-in or check-out
              rangeColors={["#f33", "#3ecf8e", "#fed14c"]}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        .date-range-picker-container {
          display: flex;
          flex-direction: column;
          max-width: 800px;
          margin: 20px auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .input-container {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        label {
          display: flex;
          flex-direction: column;
          font-size: 14px;
          margin-right: 10px;
        }

        input {
          padding: 5px;
          border: 1px solid #ccc;
          border-radius: 4px;
          margin-top: 5px;
          width: 160px;
        }

        .calendar-container {
          display: flex;
          justify-content: space-between;
        }

        .month-list {
          flex: 1;
          max-height: 400px;
          overflow-y: scroll;
          border-right: 1px solid #ccc;
          padding-right: 20px;
          padding-left: 10px;
        }

        .month-item {
          padding: 10px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .month-item:hover {
          background-color: #f0f0f0;
        }

        .selected-month {
          font-weight: bold;
          background-color: #e6e6e6;
        }

        .calendar {
          flex: 2;
        }
      `}</style>
    </>
  );
};

export default DateRangePicker;
