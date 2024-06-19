import React, { useState } from "react";
import { Button } from "@mui/material";
import { Box, Typography, Slide, Modal, Backdrop } from "@mui/material";
import BottomSheet from "./BottomSheet";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#007bff",
      },
      action: {
        selected: "#e6f0ff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Bottom Sheet
      </Button>
      <BottomSheet open={open} handleClose={handleClose} />
    </ThemeProvider>
  );
}
