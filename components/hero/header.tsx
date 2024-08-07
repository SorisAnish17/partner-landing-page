"use client";
import React, { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./drawer";

export const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsDrawerOpen(open);
    };

  return (
    <Box>
      <Box
        sx={{
          height: { xs: "4rem", md: "6rem" },
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "fixed",
          top: 0,
          zIndex: 1000,
          backgroundColor: "#111E64",
          paddingLeft: { xs: "1rem", md: "2rem" },
          paddingRight: { xs: "1rem", md: "2rem" },
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url('/assets/images/logo.png')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: { xs: "50px", md: "150px" },
            height: { xs: "50px", md: "75px" },
          }}
        />
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer(true)}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon sx={{ color: "white" }} />
        </IconButton>

        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            gap: { sm: "1rem", lg: "3rem" },
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "white", fontSize: { sm: "1rem", xl: "1.125rem" } }}
          >
            Home
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: "white", fontSize: { sm: "1rem", xl: "1.125rem" } }}
          >
            About Us
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: "white", fontSize: { sm: "1rem", xl: "1.125rem" } }}
          >
            Terms and Conditions
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: "white", fontSize: { sm: "1rem", xl: "1.125rem" } }}
          >
            Privacy Policy
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: "white", fontSize: { sm: "1rem", xl: "1.125rem" } }}
          >
            Contact
          </Typography>
          <Typography
            className="register-btn"
            sx={{
              fontSize: { sm: "1rem", xl: "1.125rem" },
              fontFamily: "STSong,Serif",
              p: { sm: "0.4rem" },
              borderRadius: "1rem",
            }}
          >
            Registration
          </Typography>
        </Box>
      </Box>
      <Sidebar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer(false)} />
    </Box>
  );
};
