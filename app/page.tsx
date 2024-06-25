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
import IntroductionPage from "./Components/introPage";

export default function Home() {
  const [showIntroduction, setShowIntroduction] = useState(true);

  useEffect(() => {
    // Set a timer to hide the introduction page after 3 seconds (3000 ms)
    const timer = setTimeout(() => {
      setShowIntroduction(false);
    }, 3000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {showIntroduction ? (
        <IntroductionPage />
      ) : (
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
      )}
    </main>
  );
}
