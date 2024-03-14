import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";

const MapView = ({ setshowDetail, openDetail }) => {
  const state = useSelector((store) => store);
  return (
    <div>
      <MapContainer
        center={[39.82206, 34.808132]}
        zoom={7}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* her bir uçuş için erkanda uçağın konumuna denk gelen marker basma */}
        {state?.flights.map((fly) => (
          <Marker position={[fly.lat, fly.lan]} key={fly.id}>
            <Popup>
              <div className="popup">
                <span>Kod: {fly.code}</span>
                <button onClick={() => openDetail(fly.id)}>
                  Detay
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
