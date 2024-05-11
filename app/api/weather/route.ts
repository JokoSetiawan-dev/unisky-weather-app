import axios from "axios";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest){
    try {

        const apiKey = process.env.OPENWEATHERMAP_API_KEY
        const latitude = 0.53333
        const longitude = 101.46667
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`

        const res =  await axios.get(url)
        
        return NextResponse.json(res.data)
        
    } catch (error) {
        console.log("Error fetching forecast data:", error);

        return new Response("Error fetching forecast data", {status:500}); 
    }
}