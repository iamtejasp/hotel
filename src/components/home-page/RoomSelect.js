import React, { useState } from "react";

const RoomSelectorDialog = () => {
  const [rooms, setRooms] = useState([{ adults: 2, children: [] }]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const maxRooms = 9;

  // Toggle dialog visibility
  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  // Add a new room
  const addRoom = () => {
    if (rooms.length < maxRooms) {
      setRooms([...rooms, { adults: 2, children: [] }]);
    }
  };

  // Remove a room
  const removeRoom = (index) => {
    const updatedRooms = rooms.filter((_, i) => i !== index);
    setRooms(updatedRooms);
  };

  // Update adults or children in a room
  const updateRoom = (index, key, value) => {
    const updatedRooms = [...rooms];
    updatedRooms[index][key] = value;
    setRooms(updatedRooms);
  };

  // Add a child to a room
  const addChild = (index) => {
    const updatedRooms = [...rooms];
    updatedRooms[index].children.push(0); // Default age 0 for a new child
    setRooms(updatedRooms);
  };

  // Update a child's age
  const updateChildAge = (roomIndex, childIndex, age) => {
    const updatedRooms = [...rooms];
    updatedRooms[roomIndex].children[childIndex] = age;
    setRooms(updatedRooms);
  };

  // Remove a child
  const removeChild = (roomIndex, childIndex) => {
    const updatedRooms = [...rooms];
    updatedRooms[roomIndex].children.splice(childIndex, 1);
    setRooms(updatedRooms);
  };

  // Calculate total number of guests
  const totalGuests = rooms.reduce((total, room) => {
    return total + room.adults + room.children.length;
  }, 0);

  return (
    <div className="relative">
      {/* Button to open dialog */}
      <button
        onClick={toggleDialog}
        className="px-4 py-2 border border-gray-400 rounded-md text-sm text-gray-900 bg-white flex items-center"
      >
        {rooms.length} room{rooms.length > 1 ? "s" : ""} for {totalGuests} guest
        {totalGuests > 1 ? "s" : ""}
        <span className="ml-2">{isDialogOpen ? "▲" : "▼"}</span>
      </button>

      {/* Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">
              Select Rooms and Guests
            </h2>

            {/* Room List */}
            {rooms.map((room, roomIndex) => (
              <div key={roomIndex} className="mb-4 border-b pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-md font-semibold">
                    Room {roomIndex + 1}
                  </h3>
                  {roomIndex !== 0 && (
                    <button
                      onClick={() => removeRoom(roomIndex)}
                      className="text-red-600 text-sm"
                    >
                      Remove
                    </button>
                  )}
                </div>

                {/* Adults */}
                <div className="mb-2">
                  <label className="block text-sm">Adults</label>
                  <input
                    type="number"
                    min="1"
                    className="border border-gray-300 rounded p-1 w-full"
                    value={room.adults}
                    onChange={(e) =>
                      updateRoom(roomIndex, "adults", parseInt(e.target.value))
                    }
                  />
                </div>

                {/* Children */}
                <div>
                  <label className="block text-sm">Children</label>
                  {room.children.map((child, childIndex) => (
                    <div key={childIndex} className="flex items-center mt-2">
                      <select
                        value={child}
                        onChange={(e) =>
                          updateChildAge(
                            roomIndex,
                            childIndex,
                            parseInt(e.target.value)
                          )
                        }
                        className="border border-gray-300 p-1 rounded mr-2 w-full"
                      >
                        {Array.from({ length: 18 }, (_, i) => (
                          <option key={i} value={i}>
                            {i} years
                          </option>
                        ))}
                      </select>
                      <button
                        onClick={() => removeChild(roomIndex, childIndex)}
                        className="text-red-500 text-sm ml-2"
                      >
                        Remove
                      </button>
                    </div>
                  ))}

                  {/* Add child */}
                  <button
                    onClick={() => addChild(roomIndex)}
                    className="mt-2 text-blue-600 text-sm"
                  >
                    + Add a child
                  </button>
                </div>
              </div>
            ))}

            {/* Add Room Button */}
            {rooms.length < maxRooms && (
              <button
                onClick={addRoom}
                className="w-full text-blue-600 text-sm mt-4"
              >
                + Add another room
              </button>
            )}

            {/* Done Button */}
            <button
              onClick={toggleDialog}
              className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md text-sm"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomSelectorDialog;
