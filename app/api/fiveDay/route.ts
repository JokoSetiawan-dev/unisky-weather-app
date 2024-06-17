export const dynamic = "force-dynamic";
export const revalidate = 0;

import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.OPENWEATHERMAP_API_KEY;

    // Check if the API key is available
    if (!apiKey) {
      throw new Error("API key is missing");
    }

    const latitude = 0.53333;
    const longitude = 101.46667;
    const dailyUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    const dailyResponse = await axios.get(dailyUrl);

    return NextResponse.json(dailyResponse.data);

  } catch (error) {
    console.error("Error getting daily data", error);
    return NextResponse.json({ error: "Error getting daily data" }, { status: 500 });
  }
}
