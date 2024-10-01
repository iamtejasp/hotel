import React from "react";
import { AiFillAlert } from "react-icons/ai";

const features = [
  {
    icon: AiFillAlert,
    title: "Best prices",
    description:
      "Our prices are under close control as we work with thousands of hotels and dozens of providers directly. This also means that we always have great offers for most destinations.",
  },
  {
    icon: AiFillAlert,
    title: "Hotels across the world",
    description:
      "We have over 2600000 options of accommodation around the world. This includes hotels, hostels, apartments, villas, and even campgrounds. Find suitable accommodation at any time of the year.",
  },
  {
    icon: AiFillAlert,
    title: "Flexible payment",
    description:
      "You can choose a payment method. We accept all major credit cards for online payment as well as PayPal. You can also pay upon arrival at the hotel.",
  },
  {
    icon: AiFillAlert,
    title: "24/7 Customer Care",
    description:
      "Our support specialists will help you to choose a hotel and book it. If you have a problem during your trip, our specialist will be online and find a solution in no time.",
  },
  {
    icon: AiFillAlert,
    title: "Reliable reviews",
    description:
      "We collect and publish travelers' reviews and add the ones from TripAdvisor. This way, you get even more information about hotels.",
  },
  {
    icon: AiFillAlert,
    title: "Free app",
    description:
      "The most important thing about our app is that it shows secret offers. Plus, it is extremely handy—book hotels on the subway, at work, or even at the airport.",
  },
];

const FeatureItem = ({ icon: Icon, title, description }) => (
  <div className="flex justify-start items-start p-4  rounded-lg ">
    <div className="pt-[2px] pr-1">
      <Icon className="w-[20px] h-[20px] " />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-2 text-[#292f37]">{title}</h3>
      <p className="text-sm text-[#292f37]">{description}</p>
    </div>
  </div>
);

const HomeFeatures = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}
      </div>
      {/* <div className="flex justify-center mt-8">
        <img
          src="/api/placeholder/150/50"
          alt="TripAdvisor"
          className="h-8 object-contain"
        />
      </div> */}
    </div>
  );
};

export default HomeFeatures;
