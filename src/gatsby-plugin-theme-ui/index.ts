import { transparentize } from '@theme-ui/color'
import codeTheme from '@theme-ui/prism/presets/dracula.json'

export default {
  colors: {
    text: '#000000',
    background: '#f5f7fc',
    primary: '#e260d3',
    secondary: '#00cfff',
    darkRed: '#df3022',
    midRed: '#ff4a4a',
    darkSkin: '#d87148',
    midSkin: '#f49262',
    lightSkin: '#ffB297',
    lightBlue: '#c2d8ff',
    green: '#66cc4f',
    teal: '#29d6c6',
    grey: '#cccccc',
    white: '#ffffff',
    blueGreen: '#102738',
    accent: '#fdc449',
    highlight: '#f48be8',
    shadowBlue: '#dbe6fb',
    shadowAccent: '#c29e50',
    transparent: 'rgba(255, 255, 255, 0)',
    codeLineNumbers: '#5b68b3',
    codeBackground: '#282A36',
    oddTableRow: '#f7f7f7',
  },
  fonts: {
    body: 'Ruda',
    heading: 'Ruda',
    monospace: 'Menlo, monospace',
  },
  fontSizes: ['0.85rem', '1rem', '1.25rem', '1.75rem', '2rem', '2.25rem', '2.5rem', '3rem'],
  fontWeights: {
    body: 500,
    heading: 900,
    bold: 700,
  },
  lineHeights: {
    heading: 1,
    body: 2,
    code: 1.8,
  },
  radii: [8, 48],
  shadows: {
    header: '0px 0px 40px -5px rgba(0,0,0,0.25)',
    surface: '0px 0px 30px -2px rgba(0,0,0,0.10)',
    focus: '0px 0px 1px 3px rgba(0,0,255,0.90)',
  },
  sizes: {
    container: 1140,
    full: '100vw',
  },
  space: [0, 4, 8, 16, 32, 64, 96],
  zIndices: {
    hero: 998,
    header: 999,
  },
  styles: {
    root: {
      backgroundColor: 'background',
      fontSize: 1,
      fontFamily: 'body',
      lineHeight: 'body',
      minWidth: '320px',
      a: {
        variant: 'styles.a',
      },
      // GitHub readme top level div
      '.markdown-body': {
        pre: {
          variant: 'styles.pre',
        },
      },
    },
    header: {
      alignItems: 'center',
      position: 'fixed',
      top: 0,
      display: 'flex',
      mx: 'auto',
      py: 2,
      px: 2,
      width: 'full',
      zIndex: 'header',
    },
    h1: {
      fontSize: [4, 5, 7],
      m: 0,
    },
    h2: {
      fontSize: [4, 6],
      m: 0,
    },
    h3: {
      fontSize: [4, 5],
      m: 0,
    },
    h4: {
      fontSize: 4,
      m: 0,
    },
    h5: {
      fontSize: 3,
      m: 0,
    },
    h6: {
      fontSize: 2,
      m: 0,
    },
    p: {
      fontSize: 1,
      lineHeight: 'body',
      m: 0,
      mb: 2,
      // inline code
      code: {
        borderRadius: 0,
        padding: 2,
        backgroundColor: 'shadowBlue',
        fontSize: '1.1rem',
      },
    },
    a: {
      borderRadius: 0,
      cursor: 'pointer',
      color: 'primary',
      transition: '0.2s linear box-shadow',
      ':focus': {
        outline: 'none',
        boxShadow: 'focus',
      },
    },
    pre: {
      borderRadius: 0,
      m: 0,
      p: 3,
      overflow: 'scroll',
      ...codeTheme,
    },
    hr: {
      my: 3,
      color: 'transparent',
    },
  },

  buttons: {
    default: {
      alignItems: 'center',
      cursor: 'pointer',
      borderRadius: 0,
      display: 'inline-flex',
      textTransform: 'capitalize',
      textDecoration: 'none',
      fontSize: 0,
      fontWeight: 'body',
      px: 3,
      py: 2,
      ':focus': {
        outline: 'none',
        boxShadow: 'focus',
      },
    },
    primary: {
      variant: 'buttons.default',
    },
    secondary: {
      variant: 'buttons.default',
      backgroundColor: 'secondary',
      color: 'white',
    },
    accent: {
      variant: 'buttons.default',
      color: 'text',
      backgroundColor: 'accent',
    },
    ghost: {
      variant: 'buttons.default',
      color: 'secondary',
      backgroundColor: 'transparent',
    },
    icon: {
      cursor: 'pointer',
      ':focus': {
        outline: 'none',
        boxShadow: 'focus',
      },
    },
    close: {
      cursor: 'pointer',
      ':focus': {
        outline: 'none',
        boxShadow: 'focus',
      },
    },
  },

  links: {
    nav: {
      borderRadius: 0,
      cursor: 'pointer',
      color: 'text',
      fontSize: [0, 1],
      fontWeight: 'bold',
      p: 2,
      transition: '.2s linear background-color',
      textDecoration: 'none',
      ':hover': {
        backgroundColor: transparentize('text', 0.95),
      },
    },
  },
  input: {
    borderColor: 'transparent',
    fontSize: 0,
    py: 0,
    px: 2,
    ':focus': {
      outline: 'none',
      boxShadow: 'focus',
    },
  },
  select: {
    borderColor: 'transparent',
    cursor: 'pointer',
    fontSize: 0,
    py: 0,
    px: 2,
    ':focus': {
      outline: 'none',
      boxShadow: 'focus',
    },
  },
  cards: {
    primary: {
      borderRadius: 0,
      boxShadow: 'surface',
      padding: 3,
    },
  },
  layout: {
    container: {
      px: [3, 4],
    },
  },
}
