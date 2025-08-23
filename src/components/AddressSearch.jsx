import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import styles from './styles.jsx';

const AddressSearch = ({ value, onChange }) => {
  const [suggestions, setSuggestions] = useState([]);

  // Fetch suggestions from OpenStreetMap Nominatim
  useEffect(() => {
    if (!value || value.length < 6) {
      setSuggestions([]);
      return;
    }

    const controller = new AbortController();

    const fetchSuggestions = async () => {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            value
          )}`,
          { signal: controller.signal }
        );
        const data = await res.json();
        setSuggestions(data);
      } catch (err) {
        if (err.name !== 'AbortError') console.error(err);
      }
    };

    fetchSuggestions();

    return () => controller.abort();
  }, [value]);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <label style={{ display: 'block', ...styles.textSm, ...styles.fontMedium, ...styles.textGray700, ...styles.mb2 }}>
        Address
      </label>
      <div style={{ position: 'relative', width: 'calc(100% - 2.5rem - 0.75rem)' }}>
        <MapPin size={20} style={{ position: 'absolute', left: '0.75rem', top: '0.75rem', color: '#9CA3AF' }} />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter your address..."
          style={{ ...styles.input, paddingLeft: '2.5rem', width: '100%' }}
          required
        />
        {suggestions.length > 0 && (
          <ul
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'white',
              border: '1px solid #ccc',
              maxHeight: '200px',
              overflowY: 'auto',
              zIndex: 1000,
            }}
          >
            {suggestions.map((s) => (
              <li
                key={s.place_id}
                onClick={() => {
                  onChange(s.display_name);
                  setSuggestions([]);
                }}
                style={{ padding: '0.5rem', cursor: 'pointer' }}
              >
                {s.display_name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AddressSearch;