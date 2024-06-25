"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        height: "6rem",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        position: "fixed",
        top: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? "#8686B7" : "transparent",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <Image src="/assets/images/logo.png" alt="Logo" width={100} height={70} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "3rem",
        }}
      >
        <Typography variant="h4">Home</Typography>
        <Typography variant="h4">About Us</Typography>
        <Typography variant="h4">Terms and Conditions</Typography>
        <Typography variant="h4">Privacy Policy</Typography>
        <Typography variant="h4">Contact</Typography>
        <Button className="register-btn">Registration</Button>
      </Box>
    </Box>
  );
};
