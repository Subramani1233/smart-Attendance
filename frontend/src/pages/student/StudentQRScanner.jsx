import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import {
  Camera,
  MapPin,
  CheckCircle,
  XCircle,
  Loader2,
} from "lucide-react";

const CLASSROOM_LOCATION = {
  latitude: 8.1833,
  longitude: 77.4119,
};

const ALLOWED_RADIUS = 50; // meters

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371000;

  const toRad = (value) => (value * Math.PI) / 180;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return Math.round(R * c);
}

export default function StudentQRScanner() {
  const [locationStatus, setLocationStatus] = useState("checking");
  const [location, setLocation] = useState(null);
  const [distance, setDistance] = useState(null);
  const [attendanceStatus, setAttendanceStatus] = useState("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const currentDistance = calculateDistance(
          lat,
          lng,
          CLASSROOM_LOCATION.latitude,
          CLASSROOM_LOCATION.longitude
        );

        setLocation({
          latitude: lat,
          longitude: lng,
        });

        setDistance(currentDistance);
        setLocationStatus(
          currentDistance <= ALLOWED_RADIUS ? "valid" : "invalid"
        );
      },
      () => {
        setLocationStatus("error");
        setMessage("Please allow location access.");
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      }
    );
  }, []);

  useEffect(() => {
    if (locationStatus === "error") return;

    const scanner = new Html5QrcodeScanner(
      "qr-reader",
      {
        fps: 10,
        qrbox: {
          width: 250,
          height: 250,
        },
      },
      false
    );

    scanner.render(
      (decodedText) => {
        handleQRScan(decodedText);
        scanner.clear().catch(() => {});
      },
      () => {}
    );

    return () => {
      scanner
        .clear()
        .catch(() => {});
    };
  }, [locationStatus]);

  const handleQRScan = (qrData) => {
    if (locationStatus !== "valid") {
      setAttendanceStatus("absent");
      setMessage(
        "You are outside the classroom attendance area."
      );
      return;
    }

    setAttendanceStatus("present");

    setMessage(
      "Attendance marked successfully!"
    );

    console.log("QR Data:", qrData);
    console.log("Student Location:", location);
    console.log("Distance:", distance);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-800">
            Scan Attendance
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Scan the faculty QR code to mark your attendance.
          </p>
        </div>

        {/* Location Card */}
        <div className="mb-6 rounded-2xl bg-white p-5 shadow-sm border border-slate-200">

          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-50 p-3">
              <MapPin className="text-blue-600" size={22} />
            </div>

            <div>
              <p className="font-semibold text-slate-800">
                Location Verification
              </p>

              {locationStatus === "checking" && (
                <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                  <Loader2 size={16} className="animate-spin" />
                  Checking your location...
                </div>
              )}

              {locationStatus === "valid" && (
                <p className="mt-1 text-sm text-green-600">
                  ✓ You are inside the classroom area
                  {distance !== null && ` (${distance}m away)`}
                </p>
              )}

              {locationStatus === "invalid" && (
                <p className="mt-1 text-sm text-red-600">
                  ✕ You are outside the classroom area
                  {distance !== null && ` (${distance}m away)`}
                </p>
              )}

              {locationStatus === "error" && (
                <p className="mt-1 text-sm text-red-600">
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Scanner */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">

          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl bg-purple-50 p-3">
              <Camera className="text-purple-600" size={22} />
            </div>

            <div>
              <h2 className="font-semibold text-slate-800">
                Scan Faculty QR
              </h2>

              <p className="text-sm text-slate-500">
                Point your camera at the QR code.
              </p>
            </div>
          </div>

          {locationStatus === "checking" ? (
            <div className="flex min-h-[300px] items-center justify-center">
              <div className="text-center">
                <Loader2
                  className="mx-auto mb-3 animate-spin text-blue-600"
                  size={35}
                />

                <p className="text-sm text-slate-500">
                  Getting your location...
                </p>
              </div>
            </div>
          ) : locationStatus === "error" ? (
            <div className="rounded-xl bg-red-50 p-6 text-center">
              <XCircle
                className="mx-auto mb-3 text-red-500"
                size={40}
              />

              <h3 className="font-semibold text-red-700">
                Location Access Required
              </h3>

              <p className="mt-1 text-sm text-red-600">
                Allow location access and try again.
              </p>
            </div>
          ) : (
            <div id="qr-reader"></div>
          )}
        </div>

        {/* Attendance Result */}
        {attendanceStatus !== "idle" && (
          <div
            className={`mt-6 rounded-2xl border p-6 ${
              attendanceStatus === "present"
                ? "border-green-200 bg-green-50"
                : "border-red-200 bg-red-50"
            }`}
          >
            <div className="flex items-center gap-3">

              {attendanceStatus === "present" ? (
                <CheckCircle
                  className="text-green-600"
                  size={32}
                />
              ) : (
                <XCircle
                  className="text-red-600"
                  size={32}
                />
              )}

              <div>
                <h3
                  className={`font-bold ${
                    attendanceStatus === "present"
                      ? "text-green-700"
                      : "text-red-700"
                  }`}
                >
                  {attendanceStatus === "present"
                    ? "Attendance Present"
                    : "Attendance Absent"}
                </h3>

                <p
                  className={`text-sm ${
                    attendanceStatus === "present"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {message}
                </p>
              </div>
            </div>

            {location && (
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">

                <div className="rounded-xl bg-white p-3">
                  <p className="text-xs text-slate-400">
                    Latitude
                  </p>

                  <p className="text-sm font-medium text-slate-700">
                    {location.latitude.toFixed(6)}
                  </p>
                </div>

                <div className="rounded-xl bg-white p-3">
                  <p className="text-xs text-slate-400">
                    Longitude
                  </p>

                  <p className="text-sm font-medium text-slate-700">
                    {location.longitude.toFixed(6)}
                  </p>
                </div>

                <div className="rounded-xl bg-white p-3">
                  <p className="text-xs text-slate-400">
                    Distance
                  </p>

                  <p className="text-sm font-medium text-slate-700">
                    {distance} meters
                  </p>
                </div>

              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}