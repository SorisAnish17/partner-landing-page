import React from "react";
import { Box } from "@mui/material";
import { Header } from "./header";
import { Form } from "./form";

export const Hero = () => {
  return (
    <Box sx={{ position: "relative", height: "100%" }}>
      <Box
        sx={{
          width: "100%",
          height: "80vh",
          backgroundImage: `url(/assets/images/d0e74b5c51a0c2011e0dfd8d3842f380.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
        }}
        className="hero-bg"
      >
        <Header />
      </Box>
      <Box sx={{ position: "absolute", top: "15rem", right: "3rem" }}>
        <Form />
      </Box>
    </Box>
  );
};
