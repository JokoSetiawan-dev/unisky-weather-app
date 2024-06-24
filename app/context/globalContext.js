"use client"
import axios from "axios"
import React, { useContext, createContext, useEffect } from "react"
import { useState } from "react"

const GlobalContext = createContext()
const GlobalContextUpdate = createContext()

export const GlobalContextProvider = ({children}) => {

    const [forecast, setForecast] = useState({})

    const fetchForecast = async () => {
        try {
            
            const res = await axios.get("api/weather")

            setForecast(res.data)
            console.log(res)

        } catch (error) {
            console.log("Failed to fetch forecast data", error.message)
        }
    }

    const [dailyForecast, setDailyForecast] = useState({})

    const fetchDaily = async () => {
        try {
            
            const dailyRes = await axios.get("api/fiveDay")

            setDailyForecast(dailyRes.data)
            console.log("api daily",dailyRes.data)

        } catch (error) {
            console.log("Failed to fetch daily data", error.message)
        }
    }

    const [uvForecast, setUvForecast] = useState({})

    const uvIndex = async () => {
        try {
            
            const uvData = await axios.get("api/uv")

            setUvForecast(uvData.data)
            console.log("api uv",uvData.data)

        } catch (error) {
            console.log("Failed to fetch uv data", error.message)
        }
    }

    useEffect(() => {
        fetchForecast()
        fetchDaily()
        uvIndex()
    }, [])

    return(
        <GlobalContext.Provider value={{
            forecast, dailyForecast, uvForecast
        }}>
            <GlobalContextUpdate.Provider>
                {children}
            </GlobalContextUpdate.Provider>
        </GlobalContext.Provider>
    )

}

export const useGlobalContext = () => useContext(GlobalContext)
export const useGlobalContextupdate = () => useContext(GlobalContextUpdate)