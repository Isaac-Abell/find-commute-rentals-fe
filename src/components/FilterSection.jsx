import React, { useState } from 'react';
import { Filter, ChevronDown, Search } from 'lucide-react';
import styles from './styles.jsx';

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
          <div style={{ ...styles.grid, ...styles.gridCols2, ...styles.gap4, ...styles.mb4 }}>
            <div>
              <label style={{ display: 'block', ...styles.textSm, ...styles.fontMedium, ...styles.textGray700, ...styles.mb2 }}>
                Commute Type
              </label>
              <select
                value={commuteType}
                onChange={(e) => onCommuteTypeChange(e.target.value)}
                style={{ ...styles.input, ...(compact ? { fontSize: '0.875rem', padding: '0.5rem' } : {}) }}
              >
                <option value="WALK">Walking</option>
                <option value="DRIVE">Driving</option>
                <option value="TRANSIT">Public Transit</option>
                <option value="BICYCLING">Bicycling</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', ...styles.textSm, ...styles.fontMedium, ...styles.textGray700, ...styles.mb2 }}>
                Sort By
              </label>
              <div style={{ ...styles.flex, gap: '0.5rem' }}>
                <select
                  value={sortBy}
                  onChange={(e) => onSortByChange(e.target.value)}
                  style={{ ...styles.input, ...(compact ? { fontSize: '0.875rem', padding: '0.5rem' } : {}), flex: 1 }}
                >
                  <option value="list_price">Price</option>
                  <option value="distance">Distance</option>
                  <option value="commute_seconds">Commute Time</option>
                  <option value="beds">Bedrooms</option>
                </select>
                <button
                  onClick={() => onAscendingChange(!ascending)}
                  style={{
                    ...styles.px4,
                    ...styles.py4,
                    ...styles.border,
                    ...styles.roundedLg,
                    background: 'white',
                    ...styles.cursorPointer,
                    ...(compact ? { padding: '0.5rem' } : {})
                  }}
                >
                  {ascending ? '↑' : '↓'}
                </button>
              </div>
            </div>
          </div>

          {/* Price, Beds, Baths */}
          <div style={{ ...styles.grid, ...styles.gridCols2, ...styles.gap4 }}>
            {/* Price */}
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', ...styles.fontMedium, ...styles.textGray700, ...styles.mb2 }}>
                Price Range
              </label>
              <div style={{ ...styles.flex, gap: '0.5rem' }}>
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.min_price || ''}
                  min="0"
                  onChange={(e) => {
                    const newMin = Math.max(0, Number(e.target.value));
                    onFilterChange('min_price', newMin);
                    if (filters.max_price !== '' && Number(filters.max_price) < newMin) onFilterChange('max_price', newMin);
                  }}
                  style={{ ...styles.input, ...(compact ? { fontSize: '0.875rem', padding: '0.5rem' } : {}) }}
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.max_price || ''}
                  min={filters.min_price || 0}
                  onChange={(e) => onFilterChange('max_price', Math.max(filters.min_price || 0, Number(e.target.value)))}
                  style={{ ...styles.input, ...(compact ? { fontSize: '0.875rem', padding: '0.5rem' } : {}) }}
                />
              </div>
            </div>

            {/* Bedrooms */}
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', ...styles.fontMedium, ...styles.textGray700, ...styles.mb2 }}>
                Bedrooms
              </label>
              <div style={{ ...styles.flex, gap: '0.5rem' }}>
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.min_beds || ''}
                  onChange={(e) => {
                    const newMin = Math.max(0, Number(e.target.value));
                    onFilterChange('min_beds', newMin);
                    if (filters.max_beds !== '' && Number(filters.max_beds) < newMin) onFilterChange('max_beds', newMin);
                  }}
                  style={{ ...styles.input, ...(compact ? { fontSize: '0.875rem', padding: '0.5rem' } : {}) }}
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.max_beds || ''}
                  onChange={(e) => onFilterChange('max_beds', Math.max(filters.min_beds || 0, Number(e.target.value)))}
                  style={{ ...styles.input, ...(compact ? { fontSize: '0.875rem', padding: '0.5rem' } : {}) }}
                />
              </div>
            </div>

            {/* Bathrooms */}
            <div style={{ gridColumn: compact ? 'span 2' : 'auto' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', ...styles.fontMedium, ...styles.textGray700, ...styles.mb2 }}>
                Bathrooms
              </label>
              <div style={{ ...styles.flex, gap: '0.5rem', maxWidth: compact ? '100%' : '24rem' }}>
                <input
                  type="number"
                  step="0.5"
                  placeholder="Min"
                  value={filters.min_baths || ''}
                  onChange={(e) => {
                    const newMin = Math.max(0, Number(e.target.value));
                    onFilterChange('min_baths', newMin);
                    if (filters.max_baths !== '' && Number(filters.max_baths) < newMin) onFilterChange('max_baths', newMin);
                  }}
                  style={{ ...styles.input, ...(compact ? { fontSize: '0.875rem', padding: '0.5rem' } : {}) }}
                />
                <input
                  type="number"
                  step="0.5"
                  placeholder="Max"
                  value={filters.max_baths || ''}
                  onChange={(e) => onFilterChange('max_baths', Math.max(filters.min_baths || 0, Number(e.target.value)))}
                  style={{ ...styles.input, ...(compact ? { fontSize: '0.875rem', padding: '0.5rem' } : {}) }}
                />
              </div>
            </div>
          </div>
          <div style={{ marginTop: '1rem', textAlign: 'right' }}>
            <button
              onClick={onSubmit}
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
      )}
    </div>
  );
};

export default FilterSection;