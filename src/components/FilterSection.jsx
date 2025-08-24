import React, { useState, useEffect } from 'react';
import { Filter, ChevronDown, Search } from 'lucide-react';
import styles from './styles.jsx';

// Your actual FilterSection component with updated colors
const FilterSection = ({
  filters,
  onFilterChange,
  commuteType,
  onCommuteTypeChange,
  sortBy,
  onSortByChange,
  ascending,
  onAscendingChange,
  compact = false,
  onSubmit,
}) => {
  const [isExpanded, setIsExpanded] = useState(!compact);
  const [isHovered, setIsHovered] = useState(false);

  // Local state for compact mode
  const [localFilters, setLocalFilters] = useState(filters);
  const [localCommuteType, setLocalCommuteType] = useState(commuteType);
  const [localSortBy, setLocalSortBy] = useState(sortBy);
  const [localAscending, setLocalAscending] = useState(ascending);

  // Update local state when props change (for non-compact mode or external updates)
  useEffect(() => {
    if (!compact) {
      setLocalFilters(filters);
      setLocalCommuteType(commuteType);
      setLocalSortBy(sortBy);
      setLocalAscending(ascending);
    }
  }, [filters, commuteType, sortBy, ascending, compact]);

  // Handle filter changes
  const handleFilterChange = (key, value) => {
    if (compact) {
      // In compact mode, only update local state
      setLocalFilters(prev => ({ ...prev, [key]: value }));
    } else {
      // In normal mode, update parent immediately
      onFilterChange(key, value);
    }
  };

  const handleCommuteTypeChange = (value) => {
    if (compact) {
      setLocalCommuteType(value);
    } else {
      onCommuteTypeChange(value);
    }
  };

  const handleSortByChange = (value) => {
    if (compact) {
      setLocalSortBy(value);
    } else {
      onSortByChange(value);
    }
  };

  const handleAscendingChange = (value) => {
    if (compact) {
      setLocalAscending(value);
    } else {
      onAscendingChange(value);
    }
  };

  // Handle submit - update parent state and call onSubmit with local values
  const handleSubmit = () => {
    if (compact) {
      // Pass the local values directly to onSubmit instead of updating parent state first
      onSubmit({
        filters: localFilters,
        commuteType: localCommuteType,
        sortBy: localSortBy,
        ascending: localAscending
      });
    } else {
      onSubmit();
    }
  };

  // Use local values in compact mode, parent values in normal mode
  const currentFilters = compact ? localFilters : filters;
  const currentCommuteType = compact ? localCommuteType : commuteType;
  const currentSortBy = compact ? localSortBy : sortBy;
  const currentAscending = compact ? localAscending : ascending;

  const containerStyle = compact
    ? { ...styles.bgWhite, ...styles.roundedLg, ...styles.shadow, ...styles.border, ...styles.p4, ...styles.mb6 }
    : { borderTop: '1px solid #E5E7EB', paddingTop: '1.5rem' };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={{ ...styles.flex, ...styles.alignCenter, ...styles.justifyBetween, ...styles.mb4 }}>
        <h3 style={{ ...styles.fontMedium, ...styles.textGray800, ...styles.flex, ...styles.alignCenter }}>
          <Filter size={compact ? 16 : 20} style={styles.mr2} />
          Filters
        </h3>
        {compact && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            style={{ ...styles.p4, background: 'none', border: 'none', ...styles.cursorPointer }}
          >
            <ChevronDown
              size={16}
              style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
            />
          </button>
        )}
      </div>

      {/* Filter Inputs */}
      {(!compact || isExpanded) && (
        <>
          {/* Commute Type & Sort By */}
          <div style={{ ...styles.gap4, ...styles.mb4 }}>
            <div>
              <label style={{ display: 'block', ...styles.textSm, ...styles.fontMedium, ...styles.textGray700, ...styles.mb2 }}>
                Commute Type
              </label>
              <select
                value={currentCommuteType}
                onChange={(e) => handleCommuteTypeChange(e.target.value)}
                style={{ ...styles.input, ...(compact ? { fontSize: '0.875rem', padding: '0.5rem' } : {}) }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#7B00FF';
                  e.target.style.boxShadow = '0 0 0 3px rgba(123, 0, 255, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#D1D5DB';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <option value="WALK">Walking</option>
                <option value="DRIVE">Driving</option>
                <option value="TRANSIT">Public Transit</option>
                <option value="BICYCLE">Bicycling</option>
              </select>
            </div>
          </div>
          <div style={{ ...styles.gap4, ...styles.mb4 }}>
            <div>
              <label style={{ display: 'block', ...styles.textSm, ...styles.fontMedium, ...styles.textGray700, ...styles.mb2 }}>
                Sort By
              </label>
              <div style={{ ...styles.flex, gap: '0.5rem' }}>
                <select
                  value={currentSortBy}
                  onChange={(e) => handleSortByChange(e.target.value)}
                  style={{ ...styles.input, ...(compact ? { fontSize: '0.875rem', padding: '0.5rem' } : {}), flex: 1 }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#7B00FF';
                    e.target.style.boxShadow = '0 0 0 3px rgba(123, 0, 255, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#D1D5DB';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <option value="commute_time">Commute Time</option>
                  <option value="list_price">Price</option>
                  <option value="distance">Distance</option>
                  <option value="beds">Bedrooms</option>
                </select>
              </div>
            </div>
          </div>

          {/* Price, Beds, Baths */}
          <div style={{ ...styles.gap4, ...styles.mb4 }}>
            {/* Price */}
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', ...styles.fontMedium, ...styles.textGray700, ...styles.mb2 }}>
                Price
              </label>
              <div style={{ ...styles.flex, gap: '0.5rem' }}>
                <input
                  type="number"
                  placeholder="Max Price"
                  value={currentFilters.max_price || ''}
                  min="0"
                  onChange={(e) => {
                    const newMax = Math.max(0, Number(e.target.value));
                    handleFilterChange('max_price', newMax);
                  }}
                  style={{ ...styles.input, ...(compact ? { fontSize: '0.875rem', padding: '0.5rem' } : {}) }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#7B00FF';
                    e.target.style.boxShadow = '0 0 0 3px rgba(123, 0, 255, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#D1D5DB';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Bedrooms */}
          <div style={{ ...styles.gap4, ...styles.mb4 }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', ...styles.fontMedium, ...styles.textGray700, ...styles.mb2 }}>
                Bedrooms
              </label>
              <div style={{ ...styles.flex, gap: '0.5rem' }}>
                <input
                  type="number"
                  placeholder="Min Beds"
                  value={currentFilters.min_beds || ''}
                  onChange={(e) => {
                    const newMin = Math.max(0, Number(e.target.value));
                    handleFilterChange('min_beds', newMin);
                  }}
                  style={{ ...styles.input, ...(compact ? { fontSize: '0.875rem', padding: '0.5rem' } : {}) }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#7B00FF';
                    e.target.style.boxShadow = '0 0 0 3px rgba(123, 0, 255, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#D1D5DB';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Bathrooms */}
          <div style={{ ...styles.gap4, ...styles.mb4 }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', ...styles.fontMedium, ...styles.textGray700, ...styles.mb2 }}>
                Bathrooms
              </label>
              <div style={{ ...styles.flex, gap: '0.5rem' }}>
                <input
                  type="number"
                  step="0.5"
                  placeholder="Min Bathrooms"
                  value={currentFilters.min_baths || ''}
                  onChange={(e) => {
                    const newMin = Math.max(0, Number(e.target.value));
                    handleFilterChange('min_baths', newMin);
                  }}
                  style={{ ...styles.input, ...(compact ? { fontSize: '0.875rem', padding: '0.5rem' } : {}) }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#7B00FF';
                    e.target.style.boxShadow = '0 0 0 3px rgba(123, 0, 255, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#D1D5DB';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
            </div>
          </div>
          <div style={{ marginTop: '1rem', textAlign: 'right' }}>
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
        </>
      )
      }
    </div >
  );
};

export default FilterSection;