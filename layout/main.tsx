"use client";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../components/theme/index";

interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
