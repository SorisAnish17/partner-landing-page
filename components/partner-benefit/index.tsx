import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export const PartnerBenefit = () => {
  return (
    <Box sx={{ minHeight: "80vh", bgcolor: "#EDF1FF", p: "2rem" }}>
      <Box>
        <p
          className="eb-garamond-regular"
          style={{ fontSize: "2.5rem", textAlign: "center" }}
        >
          Galley Cloud Partnership Benefits Your Business
        </p>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            width: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
            p: "1rem",
          }}
        >
          <Box>
            <Image
              src={"/assets/images/Frame1.png"}
              alt="Logo"
              width={50}
              height={50}
            />
          </Box>
          <Typography variant="h2" sx={{ fontSize: "1.5rem" }}>
            Cloud Solutions Expertise
          </Typography>
          <Typography
            align="center"
            sx={{
              fontFamily: "STSong,Serif",
              color: "#00000099",
              fontSize: "1.2rem",
            }}
          >
            Galley Cloud provides specialised cloud solutions that can help
            businesses streamline their operations,improve scalability,and
            enhance overall efficiency. Our expertise in cloud technologies can
            be valuable for businesses looking to leverage the cloud for growth
            going forward.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
            p: "1rem",
          }}
        >
          <Box>
            <Image
              src={"/assets/images/Frame2.png"}
              alt="Logo"
              width={50}
              height={50}
            />
          </Box>
          <Typography variant="h2" sx={{ fontSize: "1.5rem" }}>
            Cost Efficiency
          </Typography>
          <Typography
            align="center"
            sx={{
              fontFamily: "STSong,Serif",
              color: "#00000099",
              fontSize: "1.2rem",
            }}
          >
            Partnering with Galley Cloud allows businesses to potentially reduce
            their IT infrastructure costs therefore, eliminating the need for
            significant upfront investments in hardware to reduce ongoing
            maintenance costs.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
            p: "1rem",
          }}
        >
          <Image
            src={"/assets/images/Frame3.png"}
            alt="Logo"
            width={50}
            height={50}
          />
          <Typography variant="h2" sx={{ fontSize: "1.5rem" }}>
            Scalability
          </Typography>
          <Typography
            align="center"
            sx={{
              fontFamily: "STSong,Serif",
              color: "#00000099",
              fontSize: "1.2rem",
            }}
          >
            Galley Cloud digital solutions are designed to scale with your
            business. Whether you experience rapid growth or seasonal
            fluctuations, our cloud infrastructure can adapt to your changing
            needs without the hassle of significant menu reconfigurations.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          mt: "1rem",
        }}
      >
        <Box
          sx={{
            width: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
            p: "1rem",
          }}
        >
          <Image
            src={"/assets/images/Frame4.png"}
            alt="Logo"
            width={50}
            height={50}
          />
          <Typography variant="h2" sx={{ fontSize: "1.5rem" }}>
            Security and Compliance
          </Typography>
          <Typography
            align="center"
            sx={{
              fontFamily: "STSong,Serif",
              color: "#00000099",
              fontSize: "1.2rem",
            }}
          >
            Galley Cloud provides specialised cloud solutions that can help
            businesses streamline their operations, improve scalability, and
            enhance overall efficiency. Our expertise in cloud technologies can
            be valuable for businesses looking to leverage the cloud for growth
            going forward.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
            p: "1rem",
          }}
        >
          <Image
            src={"/assets/images/Frame5.png"}
            alt="Logo"
            width={50}
            height={50}
          />
          <Typography variant="h2" sx={{ fontSize: "1.5rem" }}>
            Innovation & Competitive Edge
          </Typography>
          <Typography
            align="center"
            sx={{
              fontFamily: "STSong,Serif",
              color: "#00000099",
              fontSize: "1.2rem",
            }}
          >
            Cloud technology can help your business innovate faster by providing
            access to the latest tools and technologies in the marketplace.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
            p: "1rem",
          }}
        >
          <Image
            src={"/assets/images/Frame6.png"}
            alt="Logo"
            width={50}
            height={50}
          />
          <Typography variant="h2" sx={{ fontSize: "1.5rem" }}>
            Focus on Core Business
          </Typography>
          <Typography
            align="center"
            sx={{
              fontFamily: "STSong,Serif",
              color: "#00000099",
              fontSize: "1.2rem",
            }}
          >
            Relying on our order ordering system allows your team to focus more
            on your core business activities rather than managing multiple
            orders and communications infrastructure.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
