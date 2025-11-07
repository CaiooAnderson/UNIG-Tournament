// import { createContext, useContext, useEffect, useState } from "react";
// import type { ReactNode } from "react";

// interface Station {
//   id: string;
//   name: string;
//   location: { latitude: number; longitude: number };
// }

// interface TemperatureContextType {
//   temperature: number | null;
//   stationName: string | null;
//   loading: boolean;
//   error: string | null;
// }

// const TemperatureContext = createContext<TemperatureContextType>({
//   temperature: null,
//   stationName: null,
//   loading: true,
//   error: null,
// });

// export function TemperatureProvider({ children }: { children: ReactNode }) {
//   const [temperature, setTemperature] = useState<number | null>(null);
//   const [stationName, setStationName] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!navigator.geolocation) {
//       setError("Geolocalização não suportada.");
//       setLoading(false);
//       return;
//     }
//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         try {
//           const res = await fetch(
//             "https://api.data.gov.sg/v1/environment/air-temperature"
//           );
//           const data = await res.json();
//           const stations: Station[] = data.metadata.stations.map((s: any) => ({
//             id: s.id,
//             name: s.name,
//             location: {
//               latitude: s.location.latitude,
//               longitude: s.location.longitude,
//             },
//           }));
//           const readings = data.items[0].readings;
//           function getDistance(
//             lat1: number,
//             lon1: number,
//             lat2: number,
//             lon2: number
//           ) {
//             const toRad = (v: number) => (v * Math.PI) / 180;
//             const R = 6371;
//             const dLat = toRad(lat2 - lat1);
//             const dLon = toRad(lon2 - lon1);
//             const a =
//               Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//               Math.cos(toRad(lat1)) *
//                 Math.cos(toRad(lat2)) *
//                 Math.sin(dLon / 2) *
//                 Math.sin(dLon / 2);
//             const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//             return R * c;
//           }
//           const { latitude, longitude } = position.coords;
//           let minDist = Infinity;
//           let closestStation: Station | null = null;
//           for (const station of stations) {
//             const dist = getDistance(
//               latitude,
//               longitude,
//               station.location.latitude,
//               station.location.longitude
//             );
//             if (dist < minDist) {
//               minDist = dist;
//               closestStation = station;
//             }
//           }
//           if (closestStation) {
//             const reading = readings.find(
//               (r: any) => r.station_id === closestStation!.id
//             );
//             setTemperature(reading ? reading.value : null);
//             setStationName(closestStation.name);
//           } else {
//             setError("Não foi possível encontrar estação próxima.");
//           }
//         } catch (e) {
//           setError("Erro ao buscar dados da API.");
//         } finally {
//           setLoading(false);
//         }
//       },
//       () => {
//         setError("Não foi possível obter localização do usuário.");
//         setLoading(false);
//       }
//     );
//   }, []);

//   return (
//     <TemperatureContext.Provider
//       value={{ temperature, stationName, loading, error }}
//     >
//       {children}
//     </TemperatureContext.Provider>
//   );
// }

// export function useTemperature() {
//   return useContext(TemperatureContext);
// }
