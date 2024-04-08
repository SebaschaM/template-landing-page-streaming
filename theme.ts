import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    customBreak2: true;
    sm: true;
    customBreak1: true;
    md: true;
    customBreak3: true;
    lg: true;
    xl: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#941B0C",
    },
    error: {
      main: "#F44336",
    },
    warning: {
      main: "#FFC107",
    },
    info: {
      main: "#2196F3",
    },
    success: {
      main: "#4CAF50",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      customBreak2: 400,
      sm: 600,
      customBreak1: 820,
      md: 960,
      customBreak3: 1200,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontSize: "5.5rem",
      color: "white",
      fontWeight: 700,
    },
    h2: {
      fontSize: "3rem",
      color: "white",
      fontWeight: 700,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "white",
    },
    h4: {
      fontSize: "1.5rem",
      color: "white",
    },
    h5: {
      fontSize: "1.2rem",
      color: "black",
      fontWeight: 700,
    },
    h6: {
      fontSize: "1rem",
      color: "white",
    },
  },
});

export default theme;
