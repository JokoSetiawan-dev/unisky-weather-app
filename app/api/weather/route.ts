
export const dynamic = 'force-dynamic';
export const revalidate = 0;

import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        const apiKey = process.env.OPENWEATHERMAP_API_KEY;

        // Check if the API key is available
        if (!apiKey) {
            throw new Error('API key is missing');
        }

        const latitude = 0.53333;
        const longitude = 101.46667;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

        const res = await axios.get(url);

        return NextResponse.json(res.data);
    } catch (error) {
        console.error("Error fetching forecast data:", error);

        // Type guard to handle Axios errors
        if (axios.isAxiosError(error)) {
            const { status, data } = error.response!;
            return new Response(`Error fetching forecast data: ${data.message}`, { status });
        }

        // Handle other types of errors (network issues, etc.)
        if (error instanceof Error) {
            return new Response(`Error fetching forecast data: ${error.message}`, { status: 500 });
        }

        // Fallback for unknown error types
        return new Response("An unknown error occurred", { status: 500 });
    }
}
