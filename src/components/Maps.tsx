import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import MarkerComponent from "./MarkerComponent";
import MetroMarkers from "./MetroMarkers";
import "leaflet/dist/leaflet.css";
import type { LatLngExpression } from "leaflet";

// Tipos
type MetroStop = {
  name: string;
  coords: LatLngExpression;
};

type Apartment = {
  id: string | number;
  title: string;
  coords: LatLngExpression;
};

type ChangeViewProps = {
  center: LatLngExpression;
};

type MapProps = {
  apartments: Apartment[];
  selectedApartment?: Apartment | null;
};

const metroStops: MetroStop[] = [
  { name: "Plaça de Catalunya", coords: [41.387, 2.1699] },
  { name: "Passeig de Gràcia", coords: [41.3932, 2.1663] },
  { name: "Universitat", coords: [41.383, 2.1678] },
  { name: "Sants Estació", coords: [41.3809, 2.14] },
  { name: "Lesseps", coords: [41.4039, 2.1517] },
  { name: "Espanya", coords: [41.3756, 2.1497] },
  { name: "Diagonal", coords: [41.3951, 2.1605] },
  { name: "Clot", coords: [41.4138, 2.18] },
  { name: "Barceloneta", coords: [41.3804, 2.1932] },
  { name: "Marina", coords: [41.3907, 2.1952] },
];

// Centrar mapa en apartamento
function ChangeView({ center }: ChangeViewProps) {
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.setView(center, 15);
    }
  }, [center, map]);

  return null;
}

function Map({ apartments, selectedApartment }: MapProps) {
  return (
    <MapContainer
      center={[41.3795, 2.1915]}
      zoom={13}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {selectedApartment && (
        <ChangeView center={selectedApartment.coords} />
      )}

      {/* Marcadores de apartamentos */}
      {apartments.map((apt) => (
        <MarkerComponent
          key={apt.id}
          position={apt.coords}
          name={apt.title}
          type="apartment"
        />
      ))}

      {/* Marcadores de metro */}
      <MetroMarkers
        selectedApartment={selectedApartment}
        metroStops={metroStops}
      />
    </MapContainer>
  );
}

export default Map;