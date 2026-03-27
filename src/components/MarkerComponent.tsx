
import { Marker, Popup } from "react-leaflet";
import L, { type LatLngExpression } from "leaflet";

// Tipos
type MarkerType = "metro" | "apartment" | string;

type MarkerComponentProps = {
  position: LatLngExpression;
  name: string;
  type: MarkerType;
};

function MarkerComponent({ position, name, type }: MarkerComponentProps) {
  // Elegimos icono según tipo
  let iconUrl: string;

  if (type === "metro") {
    iconUrl = "./Metro_Icon.png";
  } else if (type === "apartment") {
    iconUrl = "./House_Icon.png";
  } else {
    iconUrl = "./House_icon.png";
  }

  const customIcon = new L.Icon({
    iconUrl,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <Marker position={position} icon={customIcon}>
      <Popup>{name}</Popup>
    </Marker>
  );
}

export default MarkerComponent;