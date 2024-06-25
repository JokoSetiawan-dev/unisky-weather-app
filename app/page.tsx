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
          console.log("Location:", position.coords.latitude, position.coords.longitude);
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
    <main>
      {showIntroduction ? (
        <IntroductionPage onAllowLocation={handleAllowLocation} />
      ) : geoLocationAllowed ? (
        <>
          <Navbar />
          <CurrentWeather />
          <DailyForecast />
          <WeeklyForecast />
          <div className="flex w-full items-center justify-between p-4">
            <UvIndex />
            <HumidityIndex />
          </div>
          <div className="flex gap-5 items-center justify-center p-4">
            <Pressure />
            <SunriseSet />
          </div>
          <Footer />
        </>
      ) : (
        <IntroductionPage onAllowLocation={handleAllowLocation} />
      )}
    </main>
  );
}
