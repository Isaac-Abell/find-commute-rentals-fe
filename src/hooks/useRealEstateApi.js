// src/hooks/useRealEstateAPI.js
import { useState, useCallback } from 'react';

const useRealEstateAPI = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE_URL = 'https://giyykb323bu6rka6smjzr64ece0gdwbe.lambda-url.us-east-1.on.aws/';

  const searchListings = useCallback(async (searchParams) => {
    setLoading(true);
    setError(null);


    try {
        console.log(JSON.stringify(searchParams))
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(searchParams)
      });


      if (!response.ok) {
        throw new Error(`API Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();

      console.log(data)
      
      // Handle different response formats
      if (data.error) {
        throw new Error(data.error);
      }

      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    searchListings,
    loading,
    error,
    clearError
  };
};

export default useRealEstateAPI;