import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export const ContentOne = () => {
  return (
    <Box sx={{ m: "8rem 0rem" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: "2.5rem",
              lg: "h1.fontSize",
              xl: "h1.fontSize",
            },
            textAlign: "center",
          }}
        >
          Why should you partner with Galley Cloud
        </Typography>
        <Typography
          sx={{
            color: "#00000099",
            textAlign: "center",
            fontFamily: "STSong, serif",
            fontSize: "1.3rem",
          }}
        >
          Galley Cloud enables you to increase your revenue, showcase your
          business <br />
          and boost your reach to the VIP aviation community.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: {
            xs: "2rem",
          },
          alignItems: "center",
          mt: "2.5rem",
        }}
      >
        <Box
          sx={{
            width: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Image
              src={"/assets/images/mask.png"}
              alt="Logo"
              width={50}
              height={50}
            />
          </Box>
          <Typography
            variant="h6"
            sx={{ fontSize: "1.5rem", textAlign: "center" }}
          >
            Grow your business
          </Typography>
          <Typography
            sx={{
              color: "#00000099",
              textAlign: "center",
              fontFamily: "STSong, serif",
              fontSize: "1.3rem",
            }}
          >
            Reach more customers and increase your sales. We give you ways to
            grow your business, because when you succeed, we do too.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Image
              src={"/assets/images/mask2.png"}
              alt="Logo"
              width={50}
              height={50}
            />
          </Box>
          <Typography
            variant="h6"
            sx={{ fontSize: "1.5rem", textAlign: "center" }}
          >
            Streamline your Processes
          </Typography>
          <Typography
            sx={{
              color: "#00000099",
              textAlign: "center",
              fontFamily: "STSong, serif",
              fontSize: "1.3rem",
            }}
          >
            Our software helps improve your business processes and customer
            communication. Together we will save you time and money in all areas
            of your business.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Image
              src={"/assets/images/mask3.png"}
              alt="Logo"
              width={50}
              height={50}
            />
          </Box>
          <Typography
            variant="h6"
            sx={{ fontSize: "1.5rem", textAlign: "center" }}
          >
            Reach more customers
          </Typography>
          <Typography
            sx={{
              color: "#00000099",
              textAlign: "center",
              fontFamily: "STSong, serif",
              fontSize: "1.3rem",
            }}
          >
            We have hundreds of aircraft operators and thousands of flight
            attendants searching for the finest private jet catering around the
            world. We take care of the connections, so you can take care of the
            kitchen.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
