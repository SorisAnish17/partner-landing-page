import { createTheme } from "@mui/material";
import { TextField } from "@mui/material";

export const theme = createTheme({
  typography: {
    h1: {
      fontSize: "4.3rem",
      fontFamily: "STSong, serif",
    },
    h2: {
      fontFamily: "STSong, serif",
      fontSize: "1.8rem",
    },
    h4: {
      color: "#FFFFFF",
      fontSize: "1.125rem",
      fontFamily: "STSong, serif",
    },
    h5: {
      color: "#FFFFFF",
      fontSize: "1.300rem",
      fontFamily: "STSong, serif",
    },
    h3: {
      color: "#FFFFFF",
      fontSize: "1.8rem",
      fontFamily: "STSong, serif",
    },
    h6: {
      color: "#000000",
      fontFamily: "STSong, serif",
      fontSize: "1.2rem",
    },
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          padding: "0.5rem", // Reduce padding to 0.5rem
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#000000", // Default border color
            },
            "&:hover fieldset": {
              borderColor: "#000000", // Border color on hover (same as default)
            },
            "&.Mui-focused fieldset": {
              borderColor: "#111E64", // Border color when focused
            },
          },
        },
      },
    },
  },
});
