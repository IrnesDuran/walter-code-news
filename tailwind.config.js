module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: '#333333',
        secondary:'#e2e2e2',
        tertiary: '#706c61'
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [],
}
