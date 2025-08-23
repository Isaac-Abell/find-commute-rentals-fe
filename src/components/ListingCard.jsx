import styles from './styles.jsx';
import { Bed, Bath, MapPin, Clock, ExternalLink } from 'lucide-react';
import React, { useState } from 'react';

const ListingCard = ({ listing }) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  const formatDistance = (meters) => {
    if (meters < 1000) {
      return `${Math.round(meters)}m`;
    }
    return `${(meters / 1000).toFixed(1)}km`;
  };

  const fullBaths = Number.isFinite(listing.full_baths) ? listing.full_baths : 0;
  const halfBaths = Number.isFinite(listing.half_baths) ? listing.half_baths : 0;

  const totalBaths = fullBaths + (halfBaths * 0.5);
  return (
    <div 
      onClick={() => window.open(listing.property_url, '_blank')}
      style={{
        ...styles.card,
        ...(isHovered ? styles.cardHover : {})
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ ...styles.flex, ...styles.justifyBetween, ...styles.alignCenter, ...styles.mb4 }}>
        <div style={styles.flex1}>
          <h3 style={{ ...styles.textLg, ...styles.fontSemibold, ...styles.textGray900, ...styles.mb2 }}>
            {listing.formatted_address}
          </h3>
          <p style={{ ...styles.textSm, ...styles.textGray600 }}>
            {listing.city}, {listing.region}
          </p>
        </div>
        <ExternalLink size={16} style={{ color: '#9CA3AF', flexShrink: 0, marginLeft: '0.5rem' }} />
      </div>
      
      <div style={{ ...styles.text2xl, ...styles.fontBold, ...styles.textBlue600, ...styles.mb4 }}>
        {formatPrice(listing.list_price)}
      </div>
      
      <div style={{ ...styles.grid, ...styles.gridCols2, ...styles.gap4, ...styles.mb4 }}>
        <div style={{ ...styles.flex, ...styles.alignCenter, color: '#6B7280' }}>
          <Bed size={16} style={styles.mr2} />
          <span style={styles.textSm}>{listing.beds} beds</span>
        </div>
        
        <div style={{ ...styles.flex, ...styles.alignCenter, color: '#6B7280' }}>
          <Bath size={16} style={styles.mr2} />
          <span style={styles.textSm}>{totalBaths} baths</span>
        </div>
        
        <div style={{ ...styles.flex, ...styles.alignCenter, color: '#6B7280' }}>
          <MapPin size={16} style={styles.mr2} />
          <span style={styles.textSm}>{formatDistance(listing.distance_meters)}</span>
        </div>
        
        <div style={{ ...styles.flex, ...styles.alignCenter, color: '#6B7280' }}>
          <Clock size={16} style={styles.mr2} />
          <span style={styles.textSm}>{Math.round(listing.commute_minutes)} min</span>
        </div>
      </div>
    </div>
  );
};
export default ListingCard;