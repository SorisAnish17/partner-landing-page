import { Box, Container } from "@mui/material";
import { Hero } from "../components/hero/index";
import { ContentOne } from "../components/content-1/index";
import { Testimonial } from "../components/testimonial/index";
import { ContentTwo } from "../components/content-2";
import { ContentThree } from "../components/content-3";
import { PartnerBenefit } from "../components/partner-benefit";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <Box>
      <Hero />
      <ContentOne />
      <Testimonial />
      <ContentTwo />
      <ContentThree />
      <PartnerBenefit />
      <FAQ />
      <Footer />
    </Box>
  );
}
