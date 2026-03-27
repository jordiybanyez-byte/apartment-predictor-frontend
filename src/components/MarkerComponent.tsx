import { Marker, Popup } from "react-leaflet";
import L, { type LatLngExpression } from "leaflet";
import HouseIconImg from "../assets/House_Icon.png";
import MetroIconImg from "../assets/Metro_Icon.png";

type MarkerType = "metro" | "apartment" | string;

type MarkerComponentProps = {
  position: LatLngExpression;
  name: string;
  type: MarkerType;
};

function MarkerComponent({ position, name, type }: MarkerComponentProps) {
  const iconUrl = type === "metro" ? MetroIconImg : HouseIconImg;

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