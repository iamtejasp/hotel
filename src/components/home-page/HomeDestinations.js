import React from "react";
import { FaRegCompass } from "react-icons/fa";

const destinationsData = [
  {
    id: 1,
    image:
      "https://cdn.worldota.net/t/x220/ostrota_mainpage/0e/f6/0ef6f230165e2e5531a234a3a8fee992c01f6e1f.jpeg",
    country: "United Arab Emirates",
    city: "Dubai",
    hotels: "Hotels in Dubai",
  },
  {
    id: 2,
    image:
      "https://cdn.worldota.net/t/x220/ostrota_mainpage/36/b9/36b9729a26298ddbb866965d6c988ad7524a37b4.jpeg",
    country: "United States of America",
    city: "New York",
    hotels: "Hotels in New York",
  },
  {
    id: 3,
    image:
      "https://cdn.worldota.net/t/x220/ostrota_mainpage/69/ee/69ee8ec2e5b38692284c67de958211feb0043064.jpeg",
    country: "United States of America",
    city: "Las Vegas",
    hotels: "Hotels in Las Vegas",
  },
  {
    id: 4,
    image:
      "https://cdn.worldota.net/t/x220/ostrota_mainpage/0d/a7/0da7d897762a716c583926dc276ba8d42745657b.jpeg",
    country: "Turkiye",
    city: "Alanya",
    hotels: "Hotels in Alanya",
  },
  {
    id: 5,
    image:
      "https://cdn.worldota.net/t/x220/ostrota_mainpage/0c/24/0c24c13da09c4f1d073d3320c1aeca436f260611.jpeg",
    country: "Turkiye",
    city: "Istanbul",
    hotels: "Hotels in Istanbul",
  },
  {
    id: 6,
    image:
      "https://cdn.worldota.net/t/x220/ostrota_mainpage/e2/87/e2877b3fba343aeccf884af931eb47e4f6cedc19.jpeg",
    country: "United States of America",
    city: "Orlando",
    hotels: "Hotels in Orlando",
  },
];

const DestinationCard = ({ destination }) => (
  <div className="bg-white rounded overflow-hidden shadow-md">
    <img
      src={destination.image}
      alt={destination.city}
      className="w-full h-44 object-cover"
    />
    <div className="p-4">
      <p className="text-[var(--text-secondary)] text-xs">
        {destination.country}
      </p>
      <h3 className="text-[var(--link)] font-normal mt-0">
        {destination.hotels}
      </h3>
    </div>
  </div>
);

const HomeDestinations = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-medium mb-6 flex items-center pl-10">
        <FaRegCompass size={20} style={{ marginRight: "10px" }} />
        Top destinations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {destinationsData.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default HomeDestinations;
