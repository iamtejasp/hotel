import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(
    new Date(new Date().setDate(new Date().getDate() + 1))
  );
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [isMonthListOpen, setIsMonthListOpen] = useState(false);

  const calendarRef = useRef(null);

  useEffect(() => {
    if (isOpen && calendarRef.current) {
      calendarRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, selectedMonth, selectedYear]);

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

  const handleMonthSelect = (month, year) => {
    setSelectedMonth(month);
    setSelectedYear(year);
    setIsMonthListOpen(false);
  };

  const handleDateClick = (date) => {
    if (selectedType === "checkIn") {
      setCheckInDate(date);
      setSelectedType("checkOut");
    } else if (selectedType === "checkOut") {
      if (
        date > checkInDate &&
        date <= new Date(checkInDate.getTime() + 30 * 24 * 60 * 60 * 1000)
      ) {
        setCheckOutDate(date);
        setIsOpen(false);
        setSelectedType(null);
      }
    }
  };

  const isDateSelectable = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (date < today) return false;

    if (selectedType === "checkOut") {
      const maxDate = new Date(
        checkInDate.getTime() + 30 * 24 * 60 * 60 * 1000
      );
      return date > checkInDate && date <= maxDate;
    }

    return true;
  };

  const getDateStyle = (date) => {
    if (!date) return "";
    const baseStyle = "w-8 h-8 rounded-full ";
    if (!isDateSelectable(date))
      return baseStyle + "text-gray-300 cursor-not-allowed";
    if (date.getTime() === checkInDate.getTime() && selectedType === "checkIn")
      return baseStyle + "bg-blue-500 text-white border-2 border-blue-700";
    if (
      date.getTime() === checkOutDate.getTime() &&
      selectedType === "checkOut"
    )
      return baseStyle + "bg-blue-500 text-white border-2 border-blue-700";
    if (
      date.getTime() === checkInDate.getTime() ||
      date.getTime() === checkOutDate.getTime()
    )
      return baseStyle + "bg-blue-500 text-white";
    return baseStyle + "hover:bg-blue-200";
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <div className="flex space-x-4 mb-4">
        <button
          className={`flex-1 p-2 border rounded ${
            selectedType === "checkIn" ? "border-blue-500" : ""
          }`}
          onClick={() => {
            setIsOpen(true);
            setSelectedType("checkIn");
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
          }}
        >
          Check-out: {checkOutDate.toLocaleDateString()}
        </button>
      </div>

      {isOpen && (
        <div ref={calendarRef} className="mt-4">
          <div className="flex">
            <div className="w-1/3 pr-4 border-r">
              <div className="h-64 overflow-y-auto">
                {generateMonthList().map(({ month, year }, index) => (
                  <div
                    key={index}
                    className="cursor-pointer hover:bg-gray-100 p-1"
                    onClick={() => handleMonthSelect(month, year)}
                  >
                    {months[month]} {year}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-2/3 pl-4">
              <div className="mb-2">
                {months[selectedMonth]} {selectedYear}
              </div>
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
                  {generateCalendar(selectedMonth, selectedYear).map(
                    (week, i) => (
                      <tr key={i}>
                        {week.map((date, j) => (
                          <td key={j} className="text-center p-1">
                            {date && (
                              <button
                                className={getDateStyle(date)}
                                onClick={() =>
                                  isDateSelectable(date) &&
                                  handleDateClick(date)
                                }
                                disabled={!isDateSelectable(date)}
                              >
                                {date.getDate()}
                              </button>
                            )}
                          </td>
                        ))}
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
