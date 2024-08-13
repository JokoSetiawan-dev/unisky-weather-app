"use client";

export const dynamic = "force-dynamic";
export const revalidate = 0;

import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const TemperatureMap = () => {
  const [position, setPosition] = useState<[number, number] | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error("Error getting location:", error);
          // Set a default position if geolocation fails (optional)
          setPosition([0, 0]); // Center on equator
        }
      );
    }
  }, []);

  if (!position) {
    return <p>Loading map...</p>; // Show a loading message or spinner
  }

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
