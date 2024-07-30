import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { CssBaseline, Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/system";
import SpicyRice from "./fonts/SpicyRice-Regular.ttf";
import Futura from "./fonts/Futura-Book-BT.ttf";
import FuturaLight from "./fonts/Futura-Light-BT.ttf";
import FuturaMedium from "./fonts/Futura-Medium-BT.ttf";
import FuturaBold from "./fonts/Futura-Heavy-BT.ttf";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const fontFaces = `
  @font-face {
    font-family: 'SpicyRice';
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: url(${SpicyRice}) format('truetype');
  }
  @font-face {
    font-family: 'Futura';
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: url(${Futura}) format('truetype');
  }
  @font-face {
    font-family: 'Futura-Light';
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: url(${FuturaLight}) format('truetype');
  }
  @font-face {
    font-family: 'Futura-Medium';
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: url(${FuturaMedium}) format('truetype');
  }
  @font-face {
    font-family: 'Futura-Bold';
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: url(${FuturaBold}) format('truetype');
  }
`;

const theme = createTheme({
  typography: {
    fontFamily: [
      "SpicyRice, Arial",
      "Futura, Arial",
      "Futura-Light, Arial",
      "Futura-Medium, Arial",
      "Futura-Bold, Arial",
    ].join(","),
  } as TypographyOptions,
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        ${fontFaces}
      `,
    },
  },
});

const styles = (): { [key: string]: SxProps<Theme> } => ({
  spicyRice: {
    fontSize: "36px",
    fontFamily: "SpicyRice",
    textAlign: "center",
  },
  futura: {
    fontSize: "36px",
    fontFamily: "Futura",
    textAlign: "center",
  },
  futuraLight: {
    fontSize: "36px",
    fontFamily: "Futura-Light",
    textAlign: "center",
  },
  futuraMedium: {
    fontSize: "36px",
    fontFamily: "Futura-Medium",
    textAlign: "center",
  },
  futuraBold: {
    fontSize: "36px",
    fontFamily: "Futura-Bold",
    textAlign: "center",
  },
});

export default function CustomStyles() {
  const classes = styles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography sx={classes.spicyRice}>SpicyRice Paragraph</Typography>

      <Typography sx={classes.futura}>Futura Paragraph</Typography>

      <Typography sx={classes.futuraLight}>Futura-Light Paragraph</Typography>

      <Typography sx={classes.futuraMedium}>Futura-Medium Paragraph</Typography>

      <Typography sx={classes.futuraBold}>Futura-Bold Paragraph</Typography>
    </ThemeProvider>
  );
}
