import React, { useState } from 'react'
import SearchPage from './SearchPage'
import ResultsPage from './ResultsPage'
import styles from './styles.jsx';

const RealEstateApp = () => {
  const [currentPage, setCurrentPage] = useState('search')
  const [searchParams, setSearchParams] = useState(null)

  const handleSearch = (params) => {
    setSearchParams(params)
    setCurrentPage('results')
  }

  const handleBack = () => {
    setCurrentPage('search')
  }

  return (
    <div>
      {currentPage === 'search' && (
        <SearchPage onSearch={handleSearch} />
      )}
      {currentPage === 'results' && searchParams && (
        <ResultsPage 
          searchParams={searchParams} 
          onBack={handleBack} 
        />
      )}
    </div>
  )
}

export default RealEstateApp