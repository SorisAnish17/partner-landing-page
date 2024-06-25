import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export const ContentTwo = () => {
  return (
    <Box
      sx={{
        height: "65vh",
        width: "100%",
        bgcolor: "#FFFFFF",
        mt: "3rem",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8rem" }}>
        <Typography
          variant="h1"
          sx={{ fontSize: "2.3rem", textAlign: "center" }}
        >
          How We Can Work Together
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.4rem",
            }}
          >
            <Image
              src={"/assets/images/step1.png"}
              alt="Logo"
              width={50}
              height={50}
            />
            <Typography
              variant="h4"
              sx={{ color: "black", fontSize: "1.5rem" }}
            >
              Step 1
            </Typography>
            <Typography
              sx={{
                fontFamily: "STSong, serif",
                textAlign: "center",
                fontSize: "1.3rem",
              }}
            >
              Register your business and submit your company documents
            </Typography>
          </Box>
          <Box
            sx={{
              width: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.4rem",
            }}
          >
            <Image
              src={"/assets/images/step2.png"}
              alt="Logo"
              width={50}
              height={50}
            />
            <Typography
              variant="h4"
              sx={{ color: "black", fontSize: "1.5rem" }}
            >
              Step 2
            </Typography>
            <Typography
              sx={{
                fontFamily: "STSong, serif",
                textAlign: "center",
                fontSize: "1.3rem",
              }}
            >
              Set up your account and create your kitchens. Showcase how amazing
              your business is to the aviation community
            </Typography>
          </Box>
          <Box
            sx={{
              width: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.4rem",
            }}
          >
            <Image
              src={"/assets/images/step3.png"}
              alt="Logo"
              width={50}
              height={50}
            />
            <Typography
              variant="h4"
              sx={{ color: "black", fontSize: "1.5rem" }}
            >
              Step 3
            </Typography>
            <Typography
              sx={{
                fontFamily: "STSong, serif",
                textAlign: "center",
                fontSize: "1.3rem",
              }}
            >
              Receive Orders via our platform with full support from our
              dedicated team
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
