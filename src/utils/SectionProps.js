import PropTypes from 'prop-types';

// Props shared by all sections
const SectionShared = {
  types: {
    topOuterDivider: PropTypes.bool,
    bottomOuterDivider: PropTypes.bool,    
    topDivider: PropTypes.bool,
    bottomDivider: PropTypes.bool,
    hasBgColor: PropTypes.bool,
    invertColor: PropTypes.bool
  },
  defaults: {
    topOuterDivider: false,
    bottomOuterDivider: false,    
    topDivider: false,
    bottomDivider: false,
    hasBgColor: false,
    invertColor: false
  }
}

// Default section props
export const SectionProps = {
  types: {
    ...SectionShared.types
  },
  defaults: {
    ...SectionShared.defaults
  }
}

// Section tiles props
export const SectionTilesProps = {
  types: {
    ...SectionShared.types,
    pushLeft: PropTypes.bool
  },
  defaults: {
    ...SectionShared.defaults,
    pushLeft: false
  }
}