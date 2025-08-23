import React, { useState } from 'react';
import { Bed, Bath, MapPin, Clock, ExternalLink } from 'lucide-react';
import styles from './styles.jsx';

const ListingCard = ({ listing }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Format price as USD currency
  const formatPrice = (price) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);

  // Format distance in meters or km
  const formatDistance = (km) => {
    if (km < 1) return `${Math.round(km * 1000)}m`;
    return `${km.toFixed(1)}km`;
  };

  // Calculate total baths
  const fullBaths = Number.isFinite(listing.full_baths) ? listing.full_baths : 0;
  const halfBaths = Number.isFinite(listing.half_baths) ? listing.half_baths : 0;
  const totalBaths = fullBaths + 0.5 * halfBaths;

  return (
    <div
      onClick={() => window.open(listing.property_url, '_blank')}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...styles.card,
        ...(isHovered ? styles.cardHover : {}),
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        flexWrap: 'wrap', // allows stacking on small screens
      }}
    >
      {/* Primary Photo */}
      <div
        style={{
          flex: '1 1 250px',
          minWidth: '200px',
          maxHeight: '40vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          borderRadius: '0.5rem',
        }}
      >
        {listing.primary_photo ? (
          <img
            src={listing.primary_photo}
            alt="Listing"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              objectPosition: 'center',
            }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#E5E7EB',
            }}
          />
        )}
      </div>

      {/* Text/Info */}
      <div
        style={{
          flex: '2 1 300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* Address and External Link */}
        <div
          style={{
            ...styles.flex,
            ...styles.justifyBetween,
            ...styles.alignCenter,
            marginBottom: '0.5rem',
          }}
        >
          <div style={{ flex: 1 }}>
            <h3
              style={{
                ...styles.textLg,
                ...styles.fontSemibold,
                ...styles.textGray900,
                marginBottom: '0.25rem',
              }}
            >
              {listing.formatted_address}
            </h3>
            <p style={{ ...styles.textSm, ...styles.textGray600 }}>
              {listing.city}, {listing.region}
            </p>
          </div>
          <ExternalLink
            size={16}
            style={{ color: '#9CA3AF', flexShrink: 0, marginLeft: '0.5rem' }}
          />
        </div>

        {/* Price */}
        <div
          style={{
            ...styles.text2xl,
            ...styles.fontBold,
            ...styles.textBlue600,
            marginBottom: '1rem',
          }}
        >
          {formatPrice(listing.list_price)}
        </div>

        {/* Info Grid */}
        <div
          style={{
            ...styles.grid,
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0.5rem',
          }}
        >
          <div style={{ ...styles.flex, ...styles.alignCenter, color: '#6B7280' }}>
            <Bed size={16} style={{ marginRight: '0.25rem' }} />
            <span style={styles.textSm}>{listing.beds} beds</span>
          </div>

          <div style={{ ...styles.flex, ...styles.alignCenter, color: '#6B7280' }}>
            <Bath size={16} style={{ marginRight: '0.25rem' }} />
            <span style={styles.textSm}>{totalBaths} baths</span>
          </div>

          <div style={{ ...styles.flex, ...styles.alignCenter, color: '#6B7280' }}>
            <MapPin size={16} style={{ marginRight: '0.25rem' }} />
            <span style={styles.textSm}>{formatDistance(listing.distance_kilometers)}</span>
          </div>

          <div style={{ ...styles.flex, ...styles.alignCenter, color: '#6B7280' }}>
            <Clock size={16} style={{ marginRight: '0.25rem' }} />
            <span style={styles.textSm}>{Math.round(listing.commute_minutes)} min</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;