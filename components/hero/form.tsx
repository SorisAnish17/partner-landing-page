import React from "react";
import { Box, Typography, TextField, Checkbox } from "@mui/material";
import Image from "next/image";

export const Form = () => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "34.813rem",
        bgcolor: "white",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Box sx={{ bgcolor: "#111E64", textAlign: "center", p: "1rem" }}>
        <Typography variant="h5">Showcase your Business To</Typography>
        <Typography variant="h3">
          The Private Jet Community With Galley Cloud
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          p: "1.5rem",
        }}
      >
        <Box>
          <Typography variant="h6">First Name</Typography>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <TextField placeholder="First Name*" size="small" />
            <TextField placeholder="Sur Name*" size="small" />
          </Box>
        </Box>
        <Box>
          <Typography variant="h6">Business Email</Typography>
          <TextField placeholder="mail@abc.com*" fullWidth size="small" />
        </Box>
        <Box>
          <Typography variant="h6">Business Type</Typography>
          <TextField placeholder="Business Type" fullWidth size="small" />
        </Box>
        <Box>
          <Typography variant="h6">Phone Number</Typography>
          <TextField
            placeholder="Enter Your Phone Number"
            fullWidth
            type="number"
            size="small"
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Checkbox />
          <Typography sx={{ fontFamily: "STSong, serif" }}>
            Get updates via WhatsApp
          </Typography>
          <Image
            src="/assets/images/whatsapp.png"
            alt="Logo"
            width={30}
            height={30}
          />
        </Box>
        <Box
          sx={{
            bgcolor: "#ECEEFB",
            width: "75%",
            textAlign: "center",
            m: "auto",
            marginTop: "1rem",
            p: "0.7rem",
          }}
        >
          <Typography sx={{ fontFamily: "STSong, serif", fontSize: "1.5rem" }}>
            Get Started
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
