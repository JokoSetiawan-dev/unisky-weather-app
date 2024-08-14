"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamic imports
const CurrentWeather = dynamic(() => import("./Components/CurrentWeather"), {
  ssr: false,
});
const DailyForecast = dynamic(() => import("./Components/DailyForecast"), {
  ssr: false,
});
const Footer = dynamic(() => import("./Components/Footer"), { ssr: false });
const HumidityIndex = dynamic(() => import("./Components/HumidityIndex"), {
  ssr: false,
});
const Navbar = dynamic(() => import("./Components/Navbar"), { ssr: false });
const Pressure = dynamic(() => import("./Components/Pressure"), { ssr: false });
const SunriseSet = dynamic(() => import("./Components/SunriseSet"), {
  ssr: false,
});
const UvIndex = dynamic(() => import("./Components/UvIndex"), { ssr: false });
const WeeklyForecast = dynamic(() => import("./Components/WeeklyForecast"), {
  ssr: false,
});
const IntroductionPage = dynamic(
  () => import("./Components/introductionPage"),
  { ssr: false }
);
const WindSpeed = dynamic(() => import("./Components/WindSpeed"), {
  ssr: false,
});
const WeatherMap = dynamic(() => import("./Components/WeatherMap"), {
  ssr: false,
});

export default function Home() {
  const [showIntroduction, setShowIntroduction] = useState(true);
  const [geoLocationAllowed, setGeoLocationAllowed] = useState(false);
  const [geoLocationError, setGeoLocationError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const timer = setTimeout(() => {
        setShowIntroduction(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && navigator.geolocation) {
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
          setGeoLocationError(error.message); // Set error message if geolocation fails
        }
      );
    }
  }, []);

  if (showIntroduction) {
    return <IntroductionPage onAllowLocation={() => {}} />;
  }

  if (!geoLocationAllowed && !geoLocationError) {
    return <IntroductionPage onAllowLocation={() => {}} />; // Continue showing the introduction page until location is granted or denied
  }

  if (geoLocationError) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div>
          <h2 className="text-xl font-semibold text-red-500">
            Geolocation Error
          </h2>
          <p>{geoLocationError}</p>
        </div>
      </div>
    );
  }

  return (
    <main className="md:flex md:flex-col md:w-full md:justify-center ">
      <div className="md:p-7 lg:p-16 xl:p-24 ">
        <div className="md:flex lg:gap-8">
          <div className="md:w-[50%]">
            <Navbar />
            <CurrentWeather />
          </div>
          <div className="md:w-[50%] md:flex md:flex-col md:justify-between md:gap-5">
            <DailyForecast />
            <WeeklyForecast />
          </div>
        </div>
        <div className="flex lg:gap-8 lg:py-5">
          <div className="md:flex md:flex-col md:justify-start md:py-5 md:gap-5 lg:gap-10 lg:h-auto md:w-[50%]">
            <div className="flex w-full items-center justify-between p-5 md:p-0">
              <UvIndex />
              <HumidityIndex />
            </div>
            <div className="flex w-full items-center justify-between p-5 md:p-0">
              <WindSpeed />
              <Pressure />
            </div>
            <div className="flex items-center justify-center px-4 md:px-0">
              <SunriseSet />
            </div>
          </div>
          <div className="px-4 py-7 h-96 rounded-3xl md:w-[50%] md:h-auto md:py-5">
            <WeatherMap />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
