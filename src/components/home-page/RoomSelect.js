import React, { useState } from "react";
import { PlusCircle, MinusCircle, ChevronDown, X } from "lucide-react";

const RoomBooking = () => {
  const [rooms, setRooms] = useState([{ adults: 2, children: [] }]);

  // Function to add a room, limited to 9 rooms
  const addRoom = () => {
    if (rooms.length < 9) {
      setRooms([...rooms, { adults: 2, children: [] }]);
    }
  };

  // Function to remove a room
  const removeRoom = (index) => {
    const newRooms = [...rooms];
    newRooms.splice(index, 1);
    setRooms(newRooms);
  };

  // Function to update the number of adults in a room, min 1, max 6 adults
  const updateAdults = (index, increment) => {
    const newRooms = [...rooms];
    const newAdultCount = newRooms[index].adults + increment;
    newRooms[index].adults = Math.max(1, Math.min(6, newAdultCount)); // Ensure at least 1 adult and at most 6 adults
    setRooms(newRooms);
  };

  // Function to add a child to a room, limited to 4 children per room
  const addChild = (roomIndex, age) => {
    const newRooms = [...rooms];
    if (newRooms[roomIndex].children.length < 4) {
      // Limit to 4 children
      newRooms[roomIndex].children.push(age);
      setRooms(newRooms);
    }
  };

  // Function to remove a child from a room
  const removeChild = (roomIndex, childIndex) => {
    const newRooms = [...rooms];
    newRooms[roomIndex].children.splice(childIndex, 1);
    setRooms(newRooms);
  };

  // Calculate total guests
  const totalGuests = rooms.reduce(
    (sum, room) => sum + room.adults + room.children.length,
    0
  );

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <div>Check-out Oct 16, 2024</div>
        <div className="relative">
          <button className="flex items-center bg-red-100 text-red-600 px-3 py-2 rounded">
            {rooms.length} rooms for {totalGuests} guests
            <ChevronDown size={20} className="ml-2" />
          </button>
        </div>
      </div>

      {rooms.map((room, roomIndex) => (
        <div key={roomIndex} className="mb-4 pb-4 border-b">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">Room {roomIndex + 1}</h3>
            {roomIndex > 0 && (
              <button
                onClick={() => removeRoom(roomIndex)}
                className="text-red-600"
              >
                Remove
              </button>
            )}
          </div>

          <div className="flex justify-between items-center mb-2">
            <div>
              <div className="font-semibold mb-1">Adults</div>
              <div className="flex items-center">
                <button
                  onClick={() => updateAdults(roomIndex, -1)}
                  className="text-gray-500"
                >
                  <MinusCircle size={24} />
                </button>
                <span className="mx-2">{room.adults}</span>
                <button
                  onClick={() => updateAdults(roomIndex, 1)}
                  className="text-gray-500"
                >
                  <PlusCircle size={24} />
                </button>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-1">Children</div>
              <div className="flex flex-wrap gap-2">
                {room.children.map((age, childIndex) => (
                  <div
                    key={childIndex}
                    className="bg-gray-100 px-2 py-1 rounded flex items-center"
                  >
                    {age} years
                    <button
                      onClick={() => removeChild(roomIndex, childIndex)}
                      className="ml-1 text-gray-500"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
                {room.children.length < 4 && ( // Show 'Add a child' if less than 4 children
                  <select
                    onChange={(e) => addChild(roomIndex, e.target.value)}
                    value=""
                    className="bg-gray-100 px-2 py-1 rounded"
                  >
                    <option value="">Add a child</option>
                    {[...Array(18)].map((_, i) => (
                      <option key={i} value={i}>
                        {i} years
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {rooms.length < 9 && ( // Show 'Add a room' button if less than 9 rooms
        <button onClick={addRoom} className="text-blue-600 flex items-center">
          <PlusCircle size={20} className="mr-2" /> Add a room
        </button>
      )}

      <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded w-full">
        Done
      </button>
    </div>
  );
};

export default RoomBooking;
