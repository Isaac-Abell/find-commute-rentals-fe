// CSS Styles
const styles = {
  // Layout
  minHeight: { minHeight: '100vh' },
  flex: { display: 'flex' },
  flexColumn: { display: 'flex', flexDirection: 'column' },
  flexRow: { display: 'flex', flexDirection: 'row' },
  alignCenter: { alignItems: 'center' },
  justifyCenter: { justifyContent: 'center' },
  justifyBetween: { justifyContent: 'space-between' },
  flexWrap: { flexWrap: 'wrap' },
  flex1: { flex: 1 },
  
  // Spacing
  p4: { padding: '1rem' },
  p6: { padding: '1.5rem' },
  p8: { padding: '2rem' },
  py4: { paddingTop: '1rem', paddingBottom: '1rem' },
  py6: { paddingTop: '1.5rem', paddingBottom: '1.5rem' },
  py8: { paddingTop: '2rem', paddingBottom: '2rem' },
  py12: { paddingTop: '3rem', paddingBottom: '3rem' },
  px4: { paddingLeft: '1rem', paddingRight: '1rem' },
  mb2: { marginBottom: '0.5rem' },
  mb4: { marginBottom: '1rem' },
  mb6: { marginBottom: '1.5rem' },
  mb8: { marginBottom: '2rem' },
  mr2: { marginRight: '0.5rem' },
  ml2: { marginLeft: '0.5rem' },
  mt4: { marginTop: '1rem' },
  
  // Typography
  textCenter: { textAlign: 'center' },
  fontBold: { fontWeight: 'bold' },
  fontSemibold: { fontWeight: '600' },
  fontMedium: { fontWeight: '500' },
  textXSm: { fontSize: '0.7rem' },
  textSm: { fontSize: '0.875rem' },
  textBase: { fontSize: '1rem' },
  textLg: { fontSize: '1.125rem' },
  textXl: { fontSize: '1.25rem' },
  text2xl: { fontSize: '1.5rem' },
  text4xl: { fontSize: '2.25rem' },
  
  // Colors
  textGray600: { color: '#6B7280' },
  textGray700: { color: '#374151' },
  textGray800: { color: '#1F2937' },
  textGray900: { color: '#111827' },
  textBlue600: { color: '#2563EB' },
  textWhite: { color: 'white' },
  bgWhite: { backgroundColor: 'white' },
  bgGray50: { backgroundColor: '#F9FAFB' },
  bgBlue600: { backgroundColor: '#2563EB' },
  bgBlue700: { backgroundColor: '#1D4ED8' },
  
  // Borders and Shadows
  rounded: { borderRadius: '0.375rem' },
  roundedLg: { borderRadius: '0.5rem' },
  rounded2xl: { borderRadius: '1rem' },
  border: { border: '1px solid #D1D5DB' },
  shadow: { boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' },
  shadowMd: { boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' },
  shadow2xl: { boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' },
  
  // Interactive
  cursorPointer: { cursor: 'pointer' },
  transition: { transition: 'all 0.2s' },
  
  // Form elements
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #D1D5DB',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.2s'
  },
  inputFocus: {
    borderColor: '#2563EB',
    boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.1)'
  },
  button: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#2563EB',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonHover: {
    backgroundColor: '#1D4ED8'
  },
  
  // Grid
  grid: { display: 'grid' },
  gridCols1: { gridTemplateColumns: 'repeat(1, minmax(0, 1fr))' },
  gridCols2: { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
  gridCols3: { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' },
  gap4: { gap: '1rem' },
  gap6: { gap: '1.5rem' },
  
  // Specific components
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1rem'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    border: '1px solid #E5E7EB',
    padding: '1.5rem',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  cardHover: {
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  },
  searchContainer: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #EBF8FF 0%, #E0E7FF 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem'
  },
  searchCard: {
    backgroundColor: 'white',
    borderRadius: '1rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    padding: '2rem',
    width: '100%',
    maxWidth: '640px'
  }
};
export default styles;