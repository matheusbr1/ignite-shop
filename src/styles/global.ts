import { globalCss } from "@stitches/react";

export const GlobalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  body: {
    '-webkit-font-smoothing': 'antialised',
    'backgroundColor': '$gray900',
    color: '$gray100'
  },
  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400
  }
})