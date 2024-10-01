import React from "react";
import { DateSelect } from "./DateSelect";

const HomeFilterSearch = () => {
  return (
    <div className="min-h-[618px] ">
      {/* Main Content */}
      <main className="relative h-full">
        {/* Background Image */}
        <div
          className="absolute h-full inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/mainbg.png')",
            height: "540px",
          }}
        />

        {/* Content Overlay */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-white">
          <h1 className="text-[42px] font-medium mb-8 text-center">
            Find hotels, hostels, and apartments
          </h1>

          {/* Search Card */}
          <div className="bg-white mx-auto rounded-lg shadow-md p-6 max-w-5xl">
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full md:w-1/3 px-3 mb-4 md:mb-0">
                {/* <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="destination"
                >
                  Destination
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="destination"
                  type="text"
                  placeholder="New York, United States of America"
                /> */}
                <div class="relative mb-4">
                  <label
                    for="input-id"
                    class="absolute top-4 left-2 text-gray-500 text-sm transform -translate-y-4 bg-white px-1"
                  >
                    Label
                  </label>
                  <input
                    id="input-id"
                    type="text"
                    class="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                    placeholder=" "
                  />
                </div>
              </div>
              <div>{/* <DateSelect /> */}</div>
              <div className="w-full md:w-1/6 px-3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="guests"
                >
                  Guests
                </label>
                <select
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="guests"
                >
                  <option>9 rooms for 17 guests</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="leisure"
                  name="trip-type"
                  className="mr-2"
                />
                <label htmlFor="leisure" className="text-gray-700">
                  Leisure
                </label>
                <input
                  type="radio"
                  id="business"
                  name="trip-type"
                  className="ml-4 mr-2"
                />
                <label htmlFor="business" className="text-gray-700">
                  Business
                </label>
              </div>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeFilterSearch;
