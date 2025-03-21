import { useState, useEffect, useRef } from 'react';
import { MapContainer, GeoJSON, TileLayer, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import mockGeoJSON from '../../data/mockGeoJSON';

export default function ElectionMap({ data, onStateSelect, selectedState }) {
  const [geoJSONData, setGeoJSONData] = useState(null);
  const geoJSONLayer = useRef(null);
  
  useEffect(() => {
    // Try to fetch the actual GeoJSON file first
    fetch('/data/india-states.geojson')
      .then(response => {
        if (!response.ok) {
          // If file not found, use our mock data
          throw new Error('GeoJSON file not found');
        }
        return response.json();
      })
      .then(data => {
        setGeoJSONData(data);
      })
      .catch(error => {
        console.log('Using mock GeoJSON data:', error);
        setGeoJSONData(mockGeoJSON);
      });
  }, []);
  
  // Style for each state based on election data
  const getStateStyle = (feature) => {
    const stateName = feature.properties.name;
    const stateData = data.states.find(s => s.name === stateName);
    
    let fillColor = '#CCCCCC'; // Default color
    
    if (stateData) {
      const leadingParty = stateData.results[0]?.party;
      
      switch(leadingParty) {
        case 'BJP':
          fillColor = '#FF9933'; // Saffron
          break;
        case 'INC':
          fillColor = '#00BFFF'; // Blue
          break;
        case 'AAP':
          fillColor = '#2AAA8A'; // Teal
          break;
        case 'SP':
          fillColor = '#FF0000'; // Red
          break;
        case 'TMC':
          fillColor = '#2E8B57'; // Green
          break;
        default:
          fillColor = '#A0A0A0'; // Gray for others
      }
    }
    
    return {
      fillColor,
      weight: selectedState === feature.properties.name ? 3 : 1,
      opacity: 1,
      color: 'white',
      dashArray: '',
      fillOpacity: 0.7
    };
  };

  const onEachFeature = (feature, layer) => {
    const stateName = feature.properties.name;
    const stateData = data.states.find(s => s.name === stateName);
    
    layer.on({
      mouseover: (e) => {
        const layer = e.target;
        layer.setStyle({
          weight: 3,
          color: '#666',
          dashArray: '',
          fillOpacity: 0.7
        });
        layer.bringToFront();
      },
      mouseout: (e) => {
        if (geoJSONLayer.current) {
          geoJSONLayer.current.resetStyle(e.target);
        }
      },
      click: () => {
        onStateSelect(stateName);
      }
    });
    
    if (stateData) {
      const leadingParty = stateData.results[0]?.party;
      const leadingVotes = stateData.results[0]?.votes.toLocaleString();
      
      layer.bindTooltip(`
        <strong>${stateName}</strong><br/>
        Leading: ${leadingParty || 'N/A'}<br/>
        Votes: ${leadingVotes || 'N/A'}
      `, { sticky: true });
    }
  };
  
  // Remember to properly handle the case when geoJSONData is still null
  if (!geoJSONData) {
    return (
      <div className="bg-white rounded-lg shadow h-full flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-neutral-dark">Loading map data...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg shadow h-full">
      <MapContainer
        center={[20.5937, 78.9629]} // Center of India
        zoom={5}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <GeoJSON
          data={geoJSONData}
          style={getStateStyle}
          onEachFeature={onEachFeature}
          ref={geoJSONLayer}
        />
      </MapContainer>
    </div>
  );
}
