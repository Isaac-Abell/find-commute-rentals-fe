import React, { useState } from 'react'
import { MapPin } from 'lucide-react';
import FilterSection from './FilterSection';
import styles from './styles.jsx';
import { Search } from 'lucide-react';


const SearchPage = ({ onSearch }) => {
  const [address, setAddress] = useState('');
  const [filters, setFilters] = useState({});
  const [commuteType, setCommuteType] = useState('DRIVE');
  const [sortBy, setSortBy] = useState('list_price');
  const [ascending, setAscending] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSubmit = () => {
    if (!address.trim()) return;
    
    const searchParams = {
      user_address: address,
      commute_type: commuteType,
      filters: Object.fromEntries(
        Object.entries(filters).filter(([_, v]) => v !== '')
      ),
      sort_by: sortBy,
      ascending
    };
    
    onSearch(searchParams);
  };

  return (
    <div style={styles.searchContainer}>
      <div style={styles.searchCard}>
        <div style={{ ...styles.textCenter, ...styles.mb8 }}>
          <h1 style={{ ...styles.text4xl, ...styles.fontBold, ...styles.textGray800, ...styles.mb2 }}>
            Find Your Perfect Home
          </h1>
          <p style={styles.textGray600}>
            Search for Rentals near your desired location
          </p>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', ...styles.textSm, ...styles.fontMedium, ...styles.textGray700, ...styles.mb2 }}>
              Address
            </label>
            <div style={{ position: 'relative' }}>
              <MapPin size={20} style={{ position: 'absolute', left: '0.75rem', top: '0.75rem', color: '#9CA3AF' }} />
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={{ ...styles.input, paddingLeft: '2.5rem' }}
                placeholder="Enter your address..."
                required
              />
            </div>
          </div>

          <FilterSection
            filters={filters}
            onFilterChange={handleFilterChange}
            commuteType={commuteType}
            onCommuteTypeChange={setCommuteType}
            sortBy={sortBy}
            onSortByChange={setSortBy}
            ascending={ascending}
            onAscendingChange={setAscending}
          />

          <button
            onClick={handleSubmit}
            style={{
              ...styles.button,
              width: '100%',
              ...(isHovered ? styles.buttonHover : {})
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Search size={20} style={styles.mr2} />
            Search Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;