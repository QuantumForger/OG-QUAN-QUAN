export const theme = {
  colors: {
    deepSpaceBlue: '#0B2447',
    eliteNavy: '#19376D',
    quantumPurple: '#7C3AED',
    successGreen: '#059669',
  },
  gradients: {
    primaryPower: 'linear-gradient(to right, #0B2447, #19376D)',
    conversion: 'linear-gradient(to right, #19376D, #7C3AED)',
  },
  backgrounds: {
    neuralOverlay: 'url("/images/neural-overlay.png")',
    quantumGrid: 'url("/images/quantum-grid.png")',
  },
  typography: {
    headline: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      lineHeight: 1.2,
    },
    subheading: {
      fontSize: '1.5rem',
      fontWeight: 'semibold',
      lineHeight: 1.4,
    },
    body: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  spacing: {
    section: '4rem',
    paragraph: '1.5rem',
  },
}

export type Theme = typeof theme

