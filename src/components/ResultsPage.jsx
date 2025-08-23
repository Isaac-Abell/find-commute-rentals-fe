// src/components/ResultsPage.jsx
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ArrowLeft } from 'lucide-react';
import useRealEstateAPI from '../hooks/useRealEstateApi.js';
import FilterSection from './FilterSection';
import ListingCard from './ListingCard';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

import styles from './styles.jsx';

const ResultsPage = ({ searchParams, onBack }) => {
  const [listings, setListings] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [initialLoading, setInitialLoading] = useState(true);
  const [filters, setFilters] = useState(searchParams.filters || {});
  const [commuteType, setCommuteType] = useState(searchParams.commute_type);
  const [sortBy, setSortBy] = useState(searchParams.sort_by);
  const [ascending, setAscending] = useState(searchParams.ascending);

  const { searchListings, loading, error, clearError } = useRealEstateAPI();

    // Sort listings client-side when sortBy is commute_seconds
  const sortedListings = useMemo(() => {
    if (sortBy !== 'commute_time') {
      return listings;
    }

    // Create a copy to avoid mutating the original array
    const sorted = [...listings].sort((a, b) => {
      const aCommute = a.commute_minutes || Infinity;
      const bCommute = b.commute_minutes || Infinity;
      
      if (ascending) {
        return aCommute - bCommute;
      } else {
        return bCommute - aCommute;
      }
    });
    return sorted;
  }, [listings, sortBy, ascending]);

  const loadListings = useCallback(async (pageNum, reset = false) => {
    try {
      const params = {
        ...searchParams,
        filters,
        commute_type: commuteType,
        sort_by: sortBy,
        ascending,
        page: pageNum,
        page_size: 20
      };
      
      const response = await searchListings(params);
      
      if (reset) {
        setListings(response.results || []);
      } else {
        setListings(prev => [...prev, ...(response.results || [])]);
      }
      
      setHasMore((response.results || []).length === 20);
    } catch (err) {
      console.error('Error loading listings:', err);
      // Error is handled by the hook
    } finally {
      setInitialLoading(false);
    }
  }, [searchListings, searchParams, filters, commuteType, sortBy, ascending]);

  // Load initial results and reset when filters change
  useEffect(() => {
    loadListings(1, true);
    setPage(1);
  }, [filters, commuteType, sortBy, ascending]);

  // Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (loading || !hasMore) return;
      
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      if (scrollTop + clientHeight >= scrollHeight - 1000) {
        const nextPage = page + 1;
        setPage(nextPage);
        loadListings(nextPage);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore, page, loadListings]);

  const handleFilterChange = (key, value) => {
    clearError(); // Clear any previous errors when filters change
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleRetry = () => {
    clearError();
    setInitialLoading(true);
    loadListings(1, true);
    setPage(1);
  };

  if (initialLoading) {
    return (
      <div style={{ ...styles.minHeight, ...styles.bgGray50, ...styles.flex, ...styles.alignCenter, ...styles.justifyCenter }}>
        <LoadingSpinner />
      </div>
    );
  }

  if (error && listings.length === 0) {
    return (
      <div style={{ ...styles.minHeight, ...styles.bgGray50 }}>
        <div style={{ ...styles.bgWhite, ...styles.shadow, borderBottom: '1px solid #E5E7EB' }}>
          <div style={{ ...styles.container, ...styles.py4 }}>
            <button
              onClick={onBack}
              style={{ 
                ...styles.flex, 
                ...styles.alignCenter, 
                ...styles.textGray600, 
                background: 'none', 
                border: 'none', 
                padding: '0.5rem',
                ...styles.cursorPointer,
                ...styles.transition
              }}
            >
              <ArrowLeft size={20} style={styles.mr2} />
              Back to Search
            </button>
          </div>
        </div>
        <ErrorMessage 
          message={error} 
          onRetry={handleRetry}
          onBack={onBack}
        />
      </div>
    );
  }

  return (
    <div style={{ ...styles.minHeight, ...styles.bgGray50 }}>
      <div style={{ ...styles.bgWhite, ...styles.shadow, borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ ...styles.container, ...styles.py4 }}>
          <div style={{ ...styles.flex, ...styles.alignCenter, ...styles.justifyBetween, ...styles.mb4 }}>
            <button
              onClick={onBack}
              style={{ 
                ...styles.flex, 
                ...styles.alignCenter, 
                ...styles.textGray600,
                background: 'none', 
                border: 'none', 
                padding: '0.5rem',
                ...styles.cursorPointer,
                ...styles.transition
              }}
            >
              <ArrowLeft size={20} style={styles.mr2} />
              Back to Search
            </button>
            <h1 style={{ ...styles.textXl, ...styles.fontSemibold, ...styles.textGray900 }}>
              Properties near "{searchParams.user_address}"
            </h1>
            <div style={{ ...styles.textSm, ...styles.textGray600 }}>
              {sortedListings.length} properties found
            </div>
          </div>
        </div>
      </div>

      <div style={{ ...styles.container, ...styles.py6 }}>
        <FilterSection
          filters={filters}
          onFilterChange={handleFilterChange}
          commuteType={commuteType}
          onCommuteTypeChange={setCommuteType}
          sortBy={sortBy}
          onSortByChange={setSortBy}
          ascending={ascending}
          onAscendingChange={setAscending}
          compact={true}
        />

        {error && (
          <div style={{ 
            ...styles.mb4, 
            ...styles.p4, 
            ...styles.bgRed50, 
            ...styles.border, 
            ...styles.borderRed200, 
            ...styles.roundedLg 
          }}>
            <p style={{ ...styles.textRed700, ...styles.textSm }}>{error}</p>
            <button 
              onClick={() => clearError()} 
              style={{ 
                ...styles.textRed600, 
                ...styles.textSm, 
                textDecoration: 'underline',
                ...styles.mt4,
                background: 'none',
                border: 'none',
                ...styles.cursorPointer
              }}
            >
              Dismiss
            </button>
          </div>
        )}

        <div style={{ ...styles.grid, ...styles.gridAutoFill, ...styles.gap6 }}>
          {sortedListings.map((listing, index) => (
            <ListingCard key={`${listing.property_url}-${index}`} listing={listing} />
          ))}
        </div>

        {loading && <LoadingSpinner />}
        
        {!hasMore && listings.length > 0 && (
          <div style={{ ...styles.textCenter, ...styles.py8, ...styles.textGray600 }}>
            No more properties to load
          </div>
        )}

        {listings.length === 0 && !loading && !error && (
          <div style={{ ...styles.textCenter, ...styles.py12 }}>
            <p style={{ ...styles.textGray600, ...styles.textLg }}>
              No properties found matching your criteria
            </p>
            <button
              onClick={onBack}
              style={{ 
                ...styles.mt4, 
                ...styles.textBlue600, 
                ...styles.fontMedium,
                background: 'none',
                border: 'none',
                ...styles.cursorPointer
              }}
            >
              Try a different search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultsPage;