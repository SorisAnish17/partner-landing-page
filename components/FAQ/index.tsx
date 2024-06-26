"use client";
import React, { useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { faqData } from "./QA";

export const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = (index: any) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Box sx={{ height: "100%", mb: "3rem" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "4rem",
          pt: "4rem",
        }}
      >
        <Box sx={{ p: { xs: "1rem", md: "0rem" } }}>
          <p
            className="eb-garamond-regular"
            style={{ fontSize: "2.5rem", textAlign: "center" }}
          >
            Why Should I Partner FAQ
          </p>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(/assets/images/Rectangleflight.png)`,
              width: { xs: "300px", lg: "36.5rem" },
              height: { xs: "250px", lg: "38rem" },
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <Box
            sx={{
              width: { xs: "340px", lg: "36.5rem" },
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {faqData.map((faq, index) => (
              <Box
                key={index}
                sx={{ width: "100%", maxWidth: "36.5rem", mb: 2 }}
              >
                <Accordion
                  expanded={expanded === index}
                  onChange={() => toggleAccordion(index)}
                  sx={{ boxShadow: "none" }}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === index ? <CloseIcon /> : <AddIcon />
                    }
                    aria-controls={`panel${index + 1}-content`}
                    id={`panel${index + 1}-header`}
                  >
                    <Typography
                      sx={{ fontSize: "1.5rem", fontFamily: "STSong,Serif" }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        color: "#8C8C8C",
                        fontFamily: "STSong,Serif",
                        fontSize: "1.2rem",
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Divider />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
