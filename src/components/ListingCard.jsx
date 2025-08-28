import React, { useState } from 'react';
import { Bed, Bath, MapPin, Clock } from 'lucide-react';
import styles from './styles.jsx';

const ListingCard = ({ listing, commuteType }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Format price as USD currency
  const formatPrice = (price) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);

  // Format commute time
  const formatTime = (min, commuteType) => {
    let commute = '';
    if (commuteType === 'walking') commute = 'walk';
    else if (commuteType === 'bicycling') commute = 'bike';
    else if (commuteType === 'transit') commute = 'by public transit';
    else if (commuteType === 'driving') commute = 'drive';

    if (min < 60) return `${Math.round(min)} min ${commute}`;
    return `${Math.floor(min / 60)} hr ${Math.round(min % 60)} min ${commute}`;
  };

  // Format distance
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
        {/* Address */}
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
              {listing.city}
            </p>
          </div>
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
          {formatPrice(listing.list_price)}/month
        </div>

        {/* Info Grid */}
        <div
          style={{
            ...styles.grid,
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0.5rem',
            marginBottom: '1rem',
          }}
        >
          <div style={{ ...styles.flex, ...styles.alignCenter, color: '#6B7280' }}>
            <Bed size={16} style={{ marginRight: '0.25rem' }} />
            <span style={styles.textSm}>
              {listing.beds} {listing.beds > 1 ? 'beds' : 'bed'}
            </span>
          </div>

          <div style={{ ...styles.flex, ...styles.alignCenter, color: '#6B7280' }}>
            <Bath size={16} style={{ marginRight: '0.25rem' }} />
            <span style={styles.textSm}>
              {totalBaths} {totalBaths > 1 ? 'baths' : 'bath'}
            </span>
          </div>

          <div style={{ ...styles.flex, ...styles.alignCenter, color: '#6B7280' }}>
            <MapPin size={16} style={{ marginRight: '0.25rem' }} />
            <span style={styles.textSm}>{formatDistance(listing.distance_kilometers)}</span>
          </div>

          <div style={{ ...styles.flex, ...styles.alignCenter, color: '#6B7280' }}>
            <Clock size={16} style={{ marginRight: '0.25rem' }} />
            <span style={styles.textSm}>
              {formatTime(listing.commute_minutes, commuteType)}
            </span>
          </div>
        </div>

        {/* See Commute Route Button */}
        {listing.commute_url && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.open(listing.commute_url, '_blank');
            }}
            style={{
              ...styles.button,
            }}
          >
            See Commute Route
          </button>
        )}
      </div>
    </div>
  );
};

export default ListingCard;