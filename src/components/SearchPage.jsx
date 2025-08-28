import React, { useState } from 'react';
import AddressSearch from './AddressSearch';
import FilterSection from './FilterSection';
import styles from './styles.jsx';

const SearchPage = ({ onSearch }) => {
  const [address, setAddress] = useState('');
  const [filters, setFilters] = useState({});
  const [commuteType, setCommuteType] = useState('walking');
  const [sortBy, setSortBy] = useState('commute_time');
  const [ascending, setAscending] = useState(true);

  const supportedRegions = [
    'Bay Area',
    'Los Angeles',
    'New York City',
    'Seattle',
    'Boston',
    'Austin',
    'Denver',
    'Miami',
    'Chicago',
    'Washington, D.C.',
    'Phoenix',
    'Philadelphia',
    'Atlanta',
    'Salt Lake City',
  ];

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
    <div style={styles.searchPage}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <div style={styles.heroText}>
            <h1 style={styles.heroTitle}>
              Find Your Perfect{' '}
              <span style={styles.gradientText}>Rental</span>
            </h1>
            <p style={styles.heroParagraph}>
              Discover rental properties with built-in commute analysis.
              Make smarter decisions by knowing exactly how long it takes to get to work or school.
            </p>
            
            <div style={styles.supportedRegions}>
              <p style={styles.supportedRegionsText}>Available in these metro areas:</p>
              <div style={styles.regionsList}>
                {supportedRegions.map((region, index) => (
                  <span key={index} style={styles.regionTag}>
                    <span style={styles.regionDot}></span>
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Search Form */}
          <div style={styles.searchForm}>
            <div>
              <label style={styles.searchLabel}>Where do you want to be close to?</label>
              <AddressSearch value={address} onChange={setAddress} />
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
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <section style={styles.howItWorks}>
        <h2 style={styles.sectionTitle}>How It Works</h2>
        <p style={styles.sectionParagraph}>Three simple steps to find your ideal rental with perfect commute times</p>
        <div style={styles.steps}>
          <div style={styles.step}>
            <div style={{ ...styles.stepNumber, ...styles.stepNumberPurple }}>1</div>
            <h3>Enter Your Destination</h3>
            <p>Tell us where you work, study, or frequently visit. This will be our reference point for calculating commute times.</p>
          </div>
          <div style={styles.step}>
            <div style={{ ...styles.stepNumber, ...styles.stepNumberRed }}>2</div>
            <h3>Set Your Preferences</h3>
            <p>Filter by budget, bedrooms, commute type (driving, transit, walking, biking), and other preferences that matter to you.</p>
          </div>
          <div style={styles.step}>
            <div style={{ ...styles.stepNumber, ...styles.stepNumberPurpleRed }}>3</div>
            <h3>Discover Perfect Matches</h3>
            <p>Browse rentals ranked by your priorities, each showing approximate commute times and route details.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchPage;