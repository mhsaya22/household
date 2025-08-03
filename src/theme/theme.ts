import { PropaneOutlined } from "@mui/icons-material";
import { createTheme, type PaletteColor, type PaletteColorOptions, type PaletteOptions } from "@mui/material";
import { blue, pink, purple } from "@mui/material/colors";

declare module '@mui/material/styles'{
interface Palette {
    incomeColor:PaletteColor;
    payColor:PaletteColor;
    balanceColor:PaletteColor;
}
interface PaletteOptions{
        incomeColor?:PaletteColorOptions;
        payColor?:PaletteColorOptions;
        balanceColor?:PaletteColorOptions;
}
}

export const theme = createTheme({
    typography: {
        fontFamily:
    '"Noto SansJP" , Roboto, "Helvetica Neue", Arial, sans-serif',
    fontWeightRegular:400,
    fontWeightMedium:500,
    fontWeightBold:700,
},
    palette: {
        incomeColor:{
            main: blue[500],
            light: blue[200],
            dark:blue[600],
        },
        payColor:{
            main: pink[500],
            light: pink[200],
            dark:pink[600],   
        },
        balanceColor:{
            main: purple[500],
            light: purple[200],
            dark:purple[600],
        }
    }

})

