import { useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import L from 'leaflet';
import Modal from 'react-modal';
import 'leaflet/dist/leaflet.css';

Modal.setAppElement('#root'); // needed for accessibility

const smallIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function LocationMarker({ onAddLocation }) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      const name = prompt('Enter location name:');
      if (name) {
        onAddLocation({ lat, lng, name, photos: [] });
      }
    },
  });
  return null;
}

export function TravelSection() {
  const [locations, setLocations] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [lightboxPhoto, setLightboxPhoto] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('travelLocations');
    if (stored) setLocations(JSON.parse(stored));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('travelLocations', JSON.stringify(locations));
  }, [locations]);

  const handleAddLocation = (location) => {
    setLocations((prev) => [...prev, location]);
  };

  const handleDeleteLocation = (idx) => {
    const updated = [...locations];
    updated.splice(idx, 1);
    setLocations(updated);
    setSelectedIndex(null);
  };

  const handlePhotoUpload = (event, index) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const newPhotos = [...locations[index].photos];
    for (let i = 0; i < files.length; i++) {
      const url = URL.createObjectURL(files[i]);
      newPhotos.push(url);
    }

    const updated = [...locations];
    updated[index].photos = newPhotos;
    setLocations(updated);
  };

  return (
    <section 
      id="travel" 
      className="py-24 px-4 relative"
    >
        <div className="p-4">
        <h1 className="text-2xl font-bold text-center mb-4">
            Travel Album (Click to Add)
        </h1>

        <MapContainer
            center={[35.5, 135.5]}
            zoom={5}
            style={{ height: '500px', width: '100%' }}
        >
            <TileLayer
            attribution='&copy; <a href=\"https://osm.org/copyright\">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <LocationMarker onAddLocation={handleAddLocation} />

            {locations.map((loc, idx) => (
            <Marker
                key={idx}
                icon={smallIcon}
                position={[loc.lat, loc.lng]}
                eventHandlers={{
                click: () => setSelectedIndex(idx),
                }}
            >
                <Popup>
                <div>
                    <strong>{loc.name}</strong>
                    <div className="mt-2">
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) => handlePhotoUpload(e, idx)}
                    />
                    </div>
                    <button
                    className="mt-2 text-red-600 text-sm underline"
                    onClick={() => handleDeleteLocation(idx)}
                    >
                    Delete This Location
                    </button>
                </div>
                </Popup>
            </Marker>
            ))}
        </MapContainer>

        {selectedIndex !== null && locations[selectedIndex] && (
            <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">
                {locations[selectedIndex].name} - Uploaded Photos
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 max-h-[60vh] overflow-y-auto">
                {locations[selectedIndex].photos.map((url, idx) => (
                <img
                    key={idx}
                    src={url}
                    alt={`Uploaded ${idx}`}
                    className="rounded object-cover w-full h-36 cursor-pointer"
                    onClick={() => setLightboxPhoto(url)}
                />
                ))}
            </div>
            </div>
        )}

        {/* Lightbox Modal */}
        <Modal
            isOpen={!!lightboxPhoto}
            onRequestClose={() => setLightboxPhoto(null)}
            style={{
            content: {
                background: 'transparent',
                border: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
            overlay: {
                backgroundColor: 'rgba(0,0,0,0.8)',
            },
            }}
        >
            {lightboxPhoto && (
            <img
                src={lightboxPhoto}
                alt="Fullscreen"
                className="max-w-full max-h-screen rounded"
                onClick={() => setLightboxPhoto(null)}
            />
            )}
        </Modal>
        </div>
        </section>
    );
  };
