import styles from './styles.jsx';

const LoadingSpinner = () => (
  <div style={{ ...styles.flex, ...styles.justifyCenter, ...styles.alignCenter, ...styles.py8 }}>
    <div style={{
      width: '2rem',
      height: '2rem',
      border: '2px solid #E5E7EB',
      borderTop: '2px solid #7e22ce',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }}></div>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

export default LoadingSpinner;
