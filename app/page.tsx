"use client";
import React, { useState, useEffect } from "react";
import CurrentWeather from "./Components/CurrentWeather";
import DailyForecast from "./Components/DailyForecast";
import Footer from "./Components/Footer";
import HumidityIndex from "./Components/HumidityIndex";
import Navbar from "./Components/Navbar";
import Pressure from "./Components/Pressure";
import SunriseSet from "./Components/SunriseSet";
import UvIndex from "./Components/UvIndex";
import WeeklyForecast from "./Components/WeeklyForecast";
import IntroductionPage from "./Components/introductionPage";
import WindSpeed from "./Components/WindSpeed";

export default function Home() {
  const [showIntroduction, setShowIntroduction] = useState(true);
  const [geoLocationAllowed, setGeoLocationAllowed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntroduction(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Function to handle geolocation permission
  const handleAllowLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(
            "Location:",
            position.coords.latitude,
            position.coords.longitude
          );
          setGeoLocationAllowed(true);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <main className="md:p-10">
      {showIntroduction ? (
        <IntroductionPage onAllowLocation={handleAllowLocation} />
      ) : geoLocationAllowed ? (
        <>
          <div className="md:flex">
            <div className="md:w-[50%]">
              <Navbar />
              <CurrentWeather />
            </div>
            <div className="md:w-[50%] md:flex md:flex-col md:justify-between md:gap-5">
              <DailyForecast />
              <WeeklyForecast />
            </div>
          </div>
          <div className="md:flex md:justify-start">
            <div className="flex w-full items-center justify-between md:justify-start p-5 md:w-[50%] md:p-0">
              <UvIndex />
              <HumidityIndex />
            </div>
            <div className="flex gap-5 items-center justify-center px-4 pb-4 md:flex-col md:w-[50%]">
              <div className="md:hidden">
                <WindSpeed />
              </div>
              <Pressure />
            </div>
            <div className="flex items-center justify-center px-4">
              <SunriseSet />
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <IntroductionPage onAllowLocation={handleAllowLocation} />
      )}
    </main>
  );
}
