import React from "react";
import {
  Box,
  Divider,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Button,
} from "@mui/material";
import Image from "next/image";
import AccountCircle from "@mui/icons-material/AccountCircle";

export const Footer = () => {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "10rem",
          bgcolor: "#111E64",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          className="eb-garamond-regular"
          style={{
            fontSize: "2.5rem",
            color: "white",
          }}
        >
          BOOK A DEMO
        </p>
      </Box>
      <Box
        display="flex"
        justifyContent="space-around"
        sx={{
          m: "2rem 0rem",
          flexDirection: { xs: "column", md: "row", sm: "row" },
          alignItems: { md: "center" },
          gap: { xs: "2rem", md: "0rem" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
            p: { xs: "2rem", md: "0rem" },
          }}
        >
          <Typography variant="h4" sx={{ color: "black", fontSize: "2.5rem" }}>
            Ready To <br />
            Plan Food Order <br />
            For Your <br />
            Private Jet?
          </Typography>
          <Box sx={{ fontFamily: "STSong,Serif", fontSize: "1.5rem" }}>
            Get Started
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            p: { xs: "2rem", md: "0rem" },
          }}
        >
          <Typography variant="h4" sx={{ color: "black", fontSize: "2.5rem" }}>
            Looking For <br />
            The Perfect <br /> Venue?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              color: "#6C6C6C",
              fontFamily: "STSong,Serif",
              fontSize: "1rem",
            }}
          >
            Please leave us your email address below to access our list of the
            best,
            <br /> venues in the Tampa Bay area.
          </Typography>
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="Email">Email</InputLabel>
            <Input
              id="input-with-icon-adornment"
              endAdornment={
                <InputAdornment position="end">
                  <Typography
                    sx={{
                      bgcolor: "#111E64",
                      color: "white",
                      borderRadius: "0.2rem",
                      fontSize: "1rem",
                      fontFamily: "STSong,Serif",
                    }}
                  >
                    Get Started
                  </Typography>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
      </Box>
      <Divider sx={{ width: "100%" }} />
      <Box
        mt={4}
        mb={4}
        padding={1}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          textAlign: "center",
          gap: {
            xs: "1.5rem",
            sm: "1rem",
            md: "0rem",
          },
          p: { xs: "1rem", md: "0rem 7rem" },
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontSize: "1.4rem" }}>
            Catering
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h2" sx={{ fontSize: "1rem" }}>
              Our Catering Brands
            </Typography>
            <hr style={{ width: "100px", alignSelf: "center" }} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h2" sx={{ fontSize: "1rem" }}>
              Our Catering Brands
            </Typography>
            <hr style={{ width: "120px", alignSelf: "center" }} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h2" sx={{ fontSize: "1rem" }}>
              Our Catering Brands
            </Typography>
            <hr style={{ width: "120px", alignSelf: "center" }} />
          </Box>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontSize: "1.4rem" }}>
            Venues
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h2" sx={{ fontSize: "1rem" }}>
              Networks
            </Typography>
            <hr style={{ width: "80px", alignSelf: "center" }} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h2" sx={{ fontSize: "1rem" }}>
              Catering Service
            </Typography>
            <hr style={{ width: "80px", alignSelf: "center" }} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h2" sx={{ fontSize: "1rem" }}>
              Location
            </Typography>
            <hr style={{ width: "80px", alignSelf: "center" }} />
          </Box>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontSize: "1.4rem" }}>
            The Farm
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h2" sx={{ fontSize: "1rem" }}>
              Values
            </Typography>
            <hr style={{ width: "50px", alignSelf: "center" }} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h2" sx={{ fontSize: "1rem" }}>
              About
            </Typography>
            <hr style={{ width: "50px", alignSelf: "center" }} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h2" sx={{ fontSize: "1rem" }}>
              The Privacy
            </Typography>
            <hr style={{ width: "70px", alignSelf: "center" }} />
          </Box>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontSize: "1.4rem" }}>
            The Company
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h2" sx={{ fontSize: "1rem" }}>
              About
            </Typography>
            <hr style={{ width: "50px", alignSelf: "center" }} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h2" sx={{ fontSize: "1rem" }}>
              Blog
            </Typography>
            <hr style={{ width: "50px", alignSelf: "center" }} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h2" sx={{ fontSize: "1rem" }}>
              Terms and Condition
            </Typography>
            <hr style={{ width: "120px", alignSelf: "center" }} />
          </Box>
        </Box>
      </Box>
      <Divider sx={{ width: "100%" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: { xs: "1rem", md: "0rem 7rem" },
        }}
      >
        <Box mt={2}>
          <Typography sx={{ fontFamily: "STSong,Serif", fontSize: "1.5rem" }}>
            Contact Information
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "STSong,Serif",
              color: "black",
              fontSize: { md: "1rem", xs: "0.9rem" },
            }}
          >
            Galley Cloud, The One Tower, Internet City, Dubai, United Arab
            Emirates
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "STSong,Serif",
              color: "black",
              fontSize: { md: "1rem", xs: "0.9rem" },
            }}
          >
            partners@galleycloud.com
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "STSong,Serif",
              color: "black",
              fontSize: { md: "1rem", xs: "0.9rem" },
            }}
          >
            +971 04 548 2436
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "STSong,Serif",
              color: "black",
              fontSize: { md: "1rem", xs: "0.9rem" },
            }}
          >
            +971 04 (kitchen)
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="h5" sx={{ color: "black" }}>
            Follow Us
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "2rem",
              mt: "1rem",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Image
                src={"/assets/images/Instagram.png"}
                alt="insta Logo"
                width={20}
                height={20}
              />{" "}
              Instagram
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Image
                src={"/assets/images/facebook.png"}
                alt="insta Logo"
                width={20}
                height={20}
              />{" "}
              Facebook
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        mt={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "#111E64",
          p: "1rem",
          color: "white",
        }}
      >
        <Typography variant="body2" sx={{ fontFamily: "STSong,Serif" }}>
          © All rights reserved (Website Developed & Managed by GALLEYCLOUD)
        </Typography>
      </Box>
    </Box>
  );
};
