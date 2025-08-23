import styles from './styles.jsx';

import { Filter, ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const FilterSection = ({ filters, onFilterChange, commuteType, onCommuteTypeChange, sortBy, onSortByChange, ascending, onAscendingChange, compact = false }) => {
  const [isExpanded, setIsExpanded] = useState(!compact);

  const containerStyle = compact 
    ? { ...styles.bgWhite, ...styles.roundedLg, ...styles.shadow, ...styles.border, ...styles.p4, ...styles.mb6 }
    : { borderTop: '1px solid #E5E7EB', paddingTop: '1.5rem' };

  return (
    <div style={containerStyle}>
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
            <ChevronDown size={16} style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
          </button>
        )}
      </div>
      
      {(!compact || isExpanded) && (
        <>
          <div style={{ ...styles.grid, ...(compact ? styles.gridCols2 : styles.gridCols2), ...styles.gap4, ...styles.mb4 }}>
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
          
          <div style={{ ...styles.grid, ...(compact ? styles.gridCols2 : styles.gridCols2), ...styles.gap4 }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', ...styles.fontMedium, ...styles.textGray700, ...styles.mb2 }}>
                Price Range
              </label>
              <div style={{ ...styles.flex, gap: '0.5rem' }}>
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.min_price || ''}
                  onChange={(e) => onFilterChange('min_price', e.target.value)}
                  style={{ ...styles.input, ...(compact ? { fontSize: '0.875rem', padding: '0.5rem' } : {}) }}
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.max_price || ''}
                  onChange={(e) => onFilterChange('max_price', e.target.value)}
                  style={{ ...styles.input, ...(compact ? { fontSize: '0.875rem', padding: '0.5rem' } : {}) }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', ...styles.fontMedium, ...styles.textGray700, ...styles.mb2 }}>
                Bedrooms
              </label>
              <div style={{ ...styles.flex, gap: '0.5rem' }}>
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.min_beds || ''}
                  onChange={(e) => onFilterChange('min_beds', e.target.value)}
                  style={{ ...styles.input, ...(compact ? { fontSize: '0.875rem', padding: '0.5rem' } : {}) }}
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.max_beds || ''}
                  onChange={(e) => onFilterChange('max_beds', e.target.value)}
                  style={{ ...styles.input, ...(compact ? { fontSize: '0.875rem', padding: '0.5rem' } : {}) }}
                />
              </div>
            </div>

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
                  onChange={(e) => onFilterChange('min_baths', e.target.value)}
                  style={{ ...styles.input, ...(compact ? { fontSize: '0.875rem', padding: '0.5rem' } : {}) }}
                />
                <input
                  type="number"
                  step="0.5"
                  placeholder="Max"
                  value={filters.max_baths || ''}
                  onChange={(e) => onFilterChange('max_baths', e.target.value)}
                  style={{ ...styles.input, ...(compact ? { fontSize: '0.875rem', padding: '0.5rem' } : {}) }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default FilterSection;