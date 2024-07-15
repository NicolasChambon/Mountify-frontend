import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import { RxEnterFullScreen } from 'react-icons/rx';

import { fetchMountains } from '../../../../actions/mountainActions';

import Mountify_Marker from '../../../../assets/Mountify_marker.svg';

import 'leaflet/dist/leaflet.css';
import './HomeMap.scss';

const HomeMap = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMountains());
  }, []);

  const mountains = useSelector((state) => state.mountain.mountainsList);

  const lat = 10;
  const lng = 23;

  const customIcon = L.icon({
    iconUrl: Mountify_Marker,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  return (
    <div className="HomeMap">
      <div className="HomeMap-header">
        <h2 className="HomeMap-header-title">
          Utiliser notre carte intéractive
        </h2>
        <Link className="HomeMap-header-icon" to="/map">
          <RxEnterFullScreen />
        </Link>
      </div>

      <MapContainer className="HomeMap-map" center={[lat, lng]} zoom={1}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {mountains.map((mountain) => (
          <Marker
            key={mountain.id}
            position={[mountain.latitude, mountain.longitude]}
            icon={customIcon}
          >
            <Popup className="HomeMap-map-marker-popup">{mountain.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default HomeMap;
