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
            console.log(dailyRes.data)

        } catch (error) {
            console.log("Failed to fetch daily data", error.message)
        }
    }

    useEffect(() => {
        fetchForecast()
        fetchDaily()
    }, [])

    return(
        <GlobalContext.Provider value={{
            forecast, dailyForecast
        }}>
            <GlobalContextUpdate.Provider>
                {children}
            </GlobalContextUpdate.Provider>
        </GlobalContext.Provider>
    )

}

export const useGlobalContext = () => useContext(GlobalContext)
export const useGlobalContextupdate = () => useContext(GlobalContextUpdate)