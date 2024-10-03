import React, { useState, useRef, useEffect } from "react";

// List of months
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DateRangePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [checkInDate, setCheckInDate] = useState(new Date()); // Default to today
  const [checkOutDate, setCheckOutDate] = useState(
    new Date(new Date().setDate(new Date().getDate() + 1)) // Default to tomorrow
  );
  const [currentMonthIndex, setCurrentMonthIndex] = useState(
    checkInDate.getMonth()
  );
  const [currentYear, setCurrentYear] = useState(checkInDate.getFullYear());

  const rightPanelRef = useRef(null);
  const modalRef = useRef(null);

  // Handle month selection from the left panel and scroll the calendar to the selected month
  const handleMonthClick = (month, year) => {
    setCurrentMonthIndex(month);
    setCurrentYear(year);

    // Scroll the right panel to the corresponding month
    const scrollPos = calculateScrollPosition(month, year);
    rightPanelRef.current.scrollTo({
      top: scrollPos,
      behavior: "smooth",
    });
  };

  // Calculate the scroll position for the selected month in the right panel
  const calculateScrollPosition = (month, year) => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Calculate the number of months between the current date and the selected date
    const totalMonths = (year - currentYear) * 12 + (month - currentMonth);
    const calendarHeight = 300; // Approximate height of each month calendar in pixels
    return totalMonths * calendarHeight;
  };

  // Generate a list of months for the side panel (from current month to 2 years ahead)
  const generateMonthList = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    let monthList = [];
    for (let i = 0; i < 24; i++) {
      const month = (currentMonth + i) % 12;
      const year = currentYear + Math.floor((currentMonth + i) / 12);
      monthList.push({ month, year });
    }
    return monthList;
  };

  // Generate the calendar for the selected month
  const generateCalendar = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let calendar = [];
    let day = 1;

    for (let i = 0; i < 6; i++) {
      let week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          week.push(null);
        } else if (day > daysInMonth) {
          week.push(null);
        } else {
          week.push(new Date(year, month, day));
          day++;
        }
      }
      calendar.push(week);
      if (day > daysInMonth) break;
    }

    return calendar;
  };

  const handleDateClick = (date) => {
    if (selectedType === "checkIn") {
      setCheckInDate(date);
      setSelectedType("checkOut"); // Switch to check-out after selecting check-in

      // Auto-select check-out date (next day)
      const nextDay = new Date(date);
      nextDay.setDate(nextDay.getDate() + 1);
      setCheckOutDate(nextDay);
    } else if (selectedType === "checkOut") {
      const maxCheckOutDate = new Date(checkInDate);
      maxCheckOutDate.setDate(maxCheckOutDate.getDate() + 30);

      if (date >= checkInDate && date <= maxCheckOutDate) {
        setCheckOutDate(date);
        setIsOpen(false); // Close modal after selecting check-out date
        setSelectedType(null);
      }
    }
  };

  const getDateStyle = (date) => {
    if (!date) return "";
    const baseStyle = "w-8 h-8 rounded-full ";

    // Disable past dates
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) {
      return baseStyle + "text-gray-300 cursor-not-allowed";
    }

    // Highlight the selected check-in and check-out dates
    if (
      date.getTime() === checkInDate.getTime() ||
      date.getTime() === checkOutDate.getTime()
    ) {
      return baseStyle + "bg-red-500 text-white"; // Selected check-in/check-out dates
    }

    // Disable dates more than 30 days after check-in when selecting check-out
    if (selectedType === "checkOut") {
      const maxCheckOutDate = new Date(checkInDate);
      maxCheckOutDate.setDate(maxCheckOutDate.getDate() + 30);
      if (date > maxCheckOutDate) {
        return baseStyle + "text-gray-300 cursor-not-allowed";
      }
    }

    return baseStyle + "hover:bg-red-200"; // All other dates
  };

  // Close modal when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg max-w-xl">
      <div className="flex space-x-4 mb-4">
        <button
          className={`flex-1 p-2 border rounded ${
            selectedType === "checkIn" ? "border-blue-500" : ""
          }`}
          onClick={() => {
            setIsOpen(true);
            setSelectedType("checkIn");
            setCurrentMonthIndex(checkInDate.getMonth());
            setCurrentYear(checkInDate.getFullYear());
          }}
        >
          Check-in: {checkInDate.toLocaleDateString()}
        </button>
        <button
          className={`flex-1 p-2 border rounded ${
            selectedType === "checkOut" ? "border-blue-500" : ""
          }`}
          onClick={() => {
            setIsOpen(true);
            setSelectedType("checkOut");
            setCurrentMonthIndex(checkOutDate.getMonth());
            setCurrentYear(checkOutDate.getFullYear());
          }}
        >
          Check-out: {checkOutDate.toLocaleDateString()}
        </button>
      </div>

      {isOpen && (
        <div className="flex" ref={modalRef}>
          {/* Side month navigation */}
          <div className="w-1/4 pr-4 border-r h-96 overflow-y-auto">
            {generateMonthList().map(({ month, year }, index) => (
              <div
                key={index}
                className="cursor-pointer hover:bg-gray-100 p-2"
                onClick={() => handleMonthClick(month, year)}
              >
                {months[month]} {year}
              </div>
            ))}
          </div>

          {/* Calendar display */}
          <div className="w-3/4 pl-4 overflow-y-auto h-96" ref={rightPanelRef}>
            {generateMonthList().map(({ month, year }, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-bold text-center mb-2">
                  {months[month]} {year}
                </h3>
                <table className="w-full">
                  <thead>
                    <tr>
                      {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                        <th key={day} className="text-center">
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {generateCalendar(month, year).map((week, i) => (
                      <tr key={i}>
                        {week.map((date, j) => (
                          <td key={j} className="text-center p-1">
                            {date && (
                              <button
                                className={getDateStyle(date)}
                                onClick={() => handleDateClick(date)}
                                disabled={date < new Date()}
                              >
                                {date.getDate()}
                              </button>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
