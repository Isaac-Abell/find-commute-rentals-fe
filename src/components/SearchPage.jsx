import React, { useState } from 'react';
import FilterSection from './FilterSection';
import AddressSearch from './AddressSearch';
import styles from './styles.jsx';

const SearchPage = ({ onSearch }) => {
  const [address, setAddress] = useState('');
  const [filters, setFilters] = useState({});
  const [commuteType, setCommuteType] = useState('DRIVE');
  const [sortBy, setSortBy] = useState('list_price');
  const [ascending, setAscending] = useState(true);

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
          <p style={{ ...styles.textGray600, ...styles.textBase }}>
            Search for Rentals near your desired location
          </p>
          <p style={{ ...styles.textGray600, ...styles.textXSm, marginTop: '4px' }}>
            Currently supports: Bay Area, Los Angeles, New York, Seattle, Boston, Austin, Denver
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <AddressSearch value={address} onChange={setAddress} />

          <FilterSection
            filters={filters}
            onFilterChange={handleFilterChange}
            commuteType={commuteType}
            onCommuteTypeChange={setCommuteType}
            sortBy={sortBy}
            onSortByChange={setSortBy}
            ascending={ascending}
            onAscendingChange={setAscending}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;