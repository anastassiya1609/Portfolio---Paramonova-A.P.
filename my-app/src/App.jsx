import React from "react";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import theme from "./theme";
import "./assets/style.css";

import Navbar from "./componens/Navbar";
import HeroSection from "./componens/HeroSection";
import Portfolio from "./componens/Portfolio";
import Footer from "./componens/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />

      <HeroSection />
      <Portfolio />

      <Footer />
    </ThemeProvider>
  );
}

export default App;
