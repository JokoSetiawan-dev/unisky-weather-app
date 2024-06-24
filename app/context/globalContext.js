"use client";
import axios from "axios";
import React, { useContext, createContext, useEffect, useState } from "react";

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [forecast, setForecast] = useState({});
  const [dailyForecast, setDailyForecast] = useState({});
  const [uvForecast, setUvForecast] = useState({});

  const fetchForecast = async (latitude, longitude) => {
    try {
      const res = await axios.get("/api/weather", {
        params: { latitude, longitude },
      });

      setForecast(res.data);
      console.log(res);
    } catch (error) {
      console.log("Failed to fetch forecast data", error.message);
    }
  };

  const fetchDaily = async (latitude, longitude) => {
    try {
      const dailyRes = await axios.get("/api/fiveDay", {
        params: { latitude, longitude },
      });

      setDailyForecast(dailyRes.data);
      console.log("api daily", dailyRes.data);
    } catch (error) {
      console.log("Failed to fetch daily data", error.message);
    }
  };

  const uvIndex = async (latitude, longitude) => {
    try {
      const uvData = await axios.get("/api/uv", {
        params: { latitude, longitude },
      });

      setUvForecast(uvData.data);
      console.log("api uv", uvData.data);
    } catch (error) {
      console.log("Failed to fetch uv data", error.message);
    }
  };

  useEffect(() => {
    const getLocationAndFetchWeather = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            console.log("Location:", latitude, longitude);

            await fetchForecast(latitude, longitude);
            await fetchDaily(latitude, longitude);
            await uvIndex(latitude, longitude);
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getLocationAndFetchWeather();
  }, []);

  return (
    <GlobalContext.Provider value={{ forecast, dailyForecast, uvForecast }}>
      <GlobalContextUpdate.Provider value={{ fetchForecast, fetchDaily, uvIndex }}>
        {children}
      </GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
