"use client";

export const dynamic = "force-dynamic";
export const revalidate = 0;

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const TemperatureMap = () => {
  const API_KEY = process.env.OPENWEATHERMAP_API_KEY;
  const position: [number, number] = [51.505, -0.09]; // Default center of the map

  return (
    <MapContainer
      center={position}
      zoom={5}
      style={{ height: "100%", width: "100%", borderRadius: "24px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Unisky'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default TemperatureMap;
