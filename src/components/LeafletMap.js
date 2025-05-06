import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { PiBuildingOfficeDuotone } from "react-icons/pi";
import ReactDOMServer from "react-dom/server";

function LeafletMap() {
  const position = [35.6908, 51.389];
  const customIcon = new L.DivIcon({
    html: ReactDOMServer.renderToString(<PiBuildingOfficeDuotone size={40} />),
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  return (
    <div className="position-relative z-2 mt-5">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "500px", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"} />
        <Marker icon={customIcon} position={position}>
          <Popup className="playFair-font-semi">we are here!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default LeafletMap;
