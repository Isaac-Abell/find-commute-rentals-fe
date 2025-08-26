const styles = {
  // --- Existing Styles (Unchanged) ---
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
  textBlue600: { color: '#7e22ce' },
  textWhite: { color: 'white' },
  bgWhite: { backgroundColor: 'white' },
  bgGray50: { backgroundColor: '#F9FAFB' },
  bgBlue600: { backgroundColor: '#7e22ce' },
  bgBlue700: { backgroundColor: '#7e22ce' },

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
    borderColor: '#7e22ce',
    boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.1)'
  },
  button: {
    background: 'linear-gradient(to right, #7B00FF, #D80621)',
    color: 'white',
    fontWeight: '600',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontSize: '1rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s',
    transform: 'scale(1)'
  },
  buttonHover: {
    background: 'linear-gradient(to right, #6B00E0, #C0051B)',
    transform: 'scale(1.02)'
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
  },

  // --- NEWLY ADDED (from CSS) ---
  searchPage: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #faf5ff 0%, #ffffff 50%, #fef2f2 100%)',
    fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
    color: '#1f2937'
  },
  heroSection: {
    position: 'relative',
    overflow: 'hidden'
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to right, rgba(147, 51, 234, 0.1), rgba(220, 38, 38, 0.1))'
  },
  heroContent: {
    position: 'relative',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '4rem 1rem 6rem'
  },
  heroText: {
    textAlign: 'center',
    marginBottom: '4rem'
  },
  heroTitle: {
    fontSize: '3rem',
    lineHeight: 1.2,
    color: '#111827'
  },
  gradientText: {
    background: 'linear-gradient(to right, #7e22ce, #dc2626)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  heroParagraph: {
    fontSize: '1.25rem',
    maxWidth: '48rem',
    margin: '1.5rem auto',
    color: '#4b5563'
  },
  supportedRegions: {
    marginTop: '2rem'
  },
  supportedRegionsText: {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: '#6b7280',
    marginBottom: '1rem'
  },
  regionsList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '0.5rem'
  },
  regionTag: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    background: 'white',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: 500,
    color: '#374151',
    border: '1px solid #e5e7eb',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
    transition: 'box-shadow 0.2s ease'
  },
  regionDot: {
    width: '0.5rem',
    height: '0.5rem',
    background: 'linear-gradient(to right, #a855f7, #f87171)',
    borderRadius: '50%',
    marginRight: '0.5rem'
  },
  searchForm: {
    maxWidth: '64rem',
    margin: '0 auto',
    background: 'white',
    borderRadius: '1rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
    padding: '2rem',
    border: '1px solid #f3f4f6'
  },
  searchLabel: {
    display: 'block',
    fontSize: '1.125rem',
    fontWeight: 600,
    color: '#1f2937',
    marginBottom: '1rem'
  },
  howItWorks: {
    padding: '5rem 1rem',
    background: 'white',
    textAlign: 'center'
  },
  sectionTitle: {
    fontSize: '2.25rem',
    color: '#111827'
  },
  sectionParagraph: {
    fontSize: '1.25rem',
    maxWidth: '36rem',
    margin: '0 auto 2rem'
  },
  steps: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginTop: '3rem'
  },
  step: {
    textAlign: 'center'
  },
  stepNumber: {
    width: '4rem',
    height: '4rem',
    margin: '0 auto 1.5rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    fontWeight: 700
  },
  stepNumberPurple: {
    background: 'linear-gradient(to right, #f3e8ff, #e9d5ff)',
    color: '#7e22ce'
  },
  stepNumberRed: {
    background: 'linear-gradient(to right, #fee2e2, #fecaca)',
    color: '#dc2626'
  },
  stepNumberPurpleRed: {
    background: 'linear-gradient(to right, #f3e8ff, #fee2e2)',
    color: '#7e22ce'
  }
};

export default styles;