"use client";

import Footer from "@/components/footer/Footer";
import DateRangePicker from "@/components/home-page/DateRangePicker2";
import HomeDestinations from "@/components/home-page/HomeDestinations";
import HomeFeatures from "@/components/home-page/HomeFeatures";
import HomeFilterSearch from "@/components/home-page/HomeFilterSearch";
import HomeNavbar from "@/components/home-page/HomeNavbar";
import HomeTravelBlog from "@/components/home-page/HomeTravelBlog";
import RoomBooking from "@/components/home-page/RoomSelect";

const HomePage = () => {
  return (
    <div style={{ backgroundColor: "#f2f1f0" }}>
      <HomeNavbar />
      <RoomBooking />
      {/* <HomeFilterSearch /> */}
      <DateRangePicker />
      <div style={{ maxWidth: "1000px", padding: "20px" }} className="mx-auto">
        {/* <RoomSelectorDialog /> */}
        {/* <HomeTravelBlog /> */}
        <hr style={{ borderTop: "1px solid #afafaf" }} />
        <HomeFeatures />
        <hr style={{ borderTop: "1px solid #afafaf" }} />
        <HomeDestinations />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
