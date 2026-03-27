import React from "react";
import MarkerComponent from "./MarkerComponent";
import { LatLngExpression } from "leaflet";

// Tipos
type MetroStop = {
  name: string;
  coords: LatLngExpression;
};

type Apartment = {
  coords: LatLngExpression;
};

type MetroMarkersProps = {
  selectedApartment?: Apartment | null;
  metroStops: MetroStop[];
};

function MetroMarkers({ selectedApartment, metroStops }: MetroMarkersProps) {
  // Función para calcular distancia (km)
  const getDistance = (
    coord1: LatLngExpression,
    coord2: LatLngExpression
  ): number => {
    const [lat1, lng1] = coord1 as [number, number];
    const [lat2, lng2] = coord2 as [number, number];

    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  // Filtrar metros cercanos si hay apartamento seleccionado
  let nearbyMetro: MetroStop[] = [];

  if (selectedApartment) {
    nearbyMetro = metroStops.filter(
      (stop) =>
        getDistance(selectedApartment.coords, stop.coords) < 1
    );
  }

  return (
    <>
      {nearbyMetro.map((stop, i) => (
        <MarkerComponent
          key={`metro-${i}`}
          position={stop.coords}
          name={`🚇 ${stop.name}`}
          type="metro"
        />
      ))}
    </>
  );
}

export default MetroMarkers;