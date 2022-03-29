import { createTheme } from "@mui/material";

// colors
const primary = "#7dd7f5";
const secondary = "#FFFFFF";
const black = "#282c34";
const blackDark = "#15191e";
const blackLight = "#33373E";

// breakpoints
const breakpoints = {
  // for responsiveness
  values: {
    xs: 0,
    xms: 380,
    sm: 600, // Phone
    md: 900, // Tablet/Laptop
    lg: 1200, // Desktop
    xl: 1536,
  },
};

const theme = createTheme({
  breakpoints: breakpoints,
  palette: {
    primary: {
      main: primary,
      contrastText: black,
    },
    secondary: {
      main: secondary,
      contrastText: black,
    },
    background: {
      default: blackDark,
      paper: black,
    },
    text: {
      primary: secondary,
      secondary: primary,
    },
  },
  typography: {
    fontFamily: "'Titillium Web', sans-serif",
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderColor: blackLight,
            borderWidth: "2px",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: `${primary}44`,
          },
          "&:hover.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: primary,
          },
        },
      },
    },
  },
});

export default theme;
