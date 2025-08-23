// src/components/ErrorMessage.jsx
import React from 'react';
import { AlertCircle, RefreshCw, ArrowLeft } from 'lucide-react';
import styles from './styles.jsx';

const ErrorMessage = ({ message, onRetry, onBack }) => {

  return (
    <div style={{ ...styles.flex, ...styles.alignCenter, ...styles.justifyCenter, ...styles.py12 }}>
      <div style={{ ...styles.textCenter, ...styles.maxW }}>
        <AlertCircle size={48} style={{ ...styles.textRed500, margin: '0 auto', ...styles.mb4 }} />
        <h2 style={{ ...styles.textXl, ...styles.fontSemibold, ...styles.textGray900, ...styles.mb2 }}>
          Something went wrong
        </h2>
        <p style={{ ...styles.textGray600, ...styles.mb6 }}>
          {message || 'Unable to load properties. Please try again.'}
        </p>
        <div style={{ 
          ...styles.flex, 
          ...styles.flexCol, 
          ...styles.gap3, 
          ...styles.justifyCenter,
          '@media (min-width: 640px)': { flexDirection: 'row' }
        }}>
          <button
            onClick={onRetry}
            style={styles.button}
          >
            <RefreshCw size={16} style={styles.mr2} />
            Try Again
          </button>
          <button
            onClick={onBack}
            style={styles.buttonSecondary}
          >
            <ArrowLeft size={16} style={styles.mr2} />
            Back to Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;