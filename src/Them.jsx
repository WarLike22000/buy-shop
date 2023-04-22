import { createTheme } from '@mui/material';

import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

const theme = createTheme({
    typography: {
        fontFamily: `"Vazir", "Roboto"`,
        fontFamilyThin: 100,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        fontWeightBlack: 900,
    },
    direction: 'rtl',
    breakpoints: {
        values: {
            xs: 0,
            sm: 700,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    }
});

export {theme, cacheRtl};