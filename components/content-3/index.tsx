import React from "react";
import { Box, Typography } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export const ContentThree = () => {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box
        sx={{
          backgroundImage: `url(/assets/images/counterbg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "left",
          minHeight: "60vh",
          width: "100%",
        }}
      />
      <Box
        sx={{
          bgcolor: "#111E64",
          minHeight: "25vh",
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          alignItems: "center",
          gap: { xs: "2rem" },
          py: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            textAlign: { xs: "center", md: "inherit" },
          }}
        >
          <p
            className="soligant"
            style={{ fontSize: "2.5rem", color: "white" }}
          >
            4000 <AddOutlinedIcon />
          </p>
          <Typography variant="h3" sx={{ fontSize: "1.3rem" }}>
            CITIES
          </Typography>
          <Box sx={{ height: "0.1rem", bgcolor: "white", width: "100%" }} />
          <Typography variant="h3" sx={{ fontSize: "1rem" }}>
            Galley Cloud Experts 17
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            textAlign: { xs: "center", md: "inherit" },
          }}
        >
          <p
            className="soligant"
            style={{ fontSize: "2.5rem", color: "white" }}
          >
            7 <AddOutlinedIcon />
          </p>
          <Typography variant="h3" sx={{ fontSize: "1.3rem" }}>
            CONTINENTS
          </Typography>
          <Box sx={{ height: "0.1rem", bgcolor: "white", width: "100%" }} />
          <Typography variant="h3" sx={{ fontSize: "1rem" }}>
            7000+ Flight Attendants
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            textAlign: { xs: "center", md: "inherit" },
          }}
        >
          <p
            className="soligant"
            style={{ fontSize: "2.5rem", color: "white" }}
          >
            1500 <AddOutlinedIcon />
          </p>
          <Typography variant="h3" sx={{ fontSize: "1.3rem" }}>
            PARTNERS
          </Typography>
          <Box sx={{ height: "0.1rem", bgcolor: "white", width: "100%" }} />
          <Typography variant="h3" sx={{ fontSize: "1rem" }}>
            4200 Airports
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
