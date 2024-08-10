import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const latitude = searchParams.get("latitude");
    const longitude = searchParams.get("longitude");

    if (!latitude || !longitude) {
      throw new Error("Latitude and longitude are required");
    }

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=uv_index_max,uv_index_clear_sky_max&timezone=auto&forecast_days=1`;

    const res = await axios.get(url, {
      headers: {
        "Cache-Control": "public, max-age=900",
      },
    });

    const uvData = res.data;

    console.log("uv data", uvData);

    return NextResponse.json(uvData);
  } catch (error) {
    console.log("Error Getting Uv Data", error);
    return new Response("Error getting Uv Data", { status: 500 });
  }
}
