import { createTheme } from '@mui/material';

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
    direction: 'rtl'
});

export default theme;