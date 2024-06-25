"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { carousel } from "./data";

export const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carousel.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (index: any) => {
    setCurrentIndex(index);
  };

  return (
    <Box sx={{ bgcolor: "#EEF0FC", minHeight: "50vh", py: "4rem" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", lg: "row" },
          justifyContent: "center",
          gap: "5rem",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${carousel[currentIndex].img})`,
            backgroundSize: "cover",
            backgroundPosition: "left center",
            width: "700px",
            height: "500px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              bgcolor: "#111E64",
              width: "325px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              p: "1.5rem",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(/assets/images/Qotes.png)`,
                backgroundSize: "cover",
                width: "125px",
                height: "125px",
              }}
            />
            <Typography
              variant="h2"
              sx={{ color: "#FFFFFF", fontSize: "1.5rem", textAlign: "center" }}
            >
              {carousel[currentIndex].title}
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: "#FFFFFF", textAlign: "center" }}
            >
              {carousel[currentIndex].subtitle}
            </Typography>
            <Typography
              variant="h2"
              sx={{ color: "#FFFFFF", fontSize: "2.8rem", textAlign: "center" }}
            >
              {carousel[currentIndex].name}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "700px",
            height: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: "1.4rem",
                color: "#000000",
                fontFamily: "STSong, serif",
                textAlign: "center",
                mb: "1rem",
              }}
            >
              {carousel[currentIndex].review}
            </Typography>
            <Box
              sx={{
                backgroundImage: `url(/assets/images/stars.png)`,
                backgroundSize: "cover",
                width: "200px",
                height: "150px",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "4rem",
            }}
          >
            {carousel.map((item, index) => (
              <Box
                key={index}
                onClick={() => handleIndicatorClick(index)}
                sx={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor:
                    currentIndex === index ? "#111E64" : "#C5C5C5",
                  mx: "0.5rem",
                  cursor: "pointer",
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonial;
