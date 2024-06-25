import { Box } from "@mui/material";
import { Hero } from "../components/hero/index";
import { ContentOne } from "../components/content-1/index";
import { Testimonial } from "../components/testimonial/index";
import { ContentTwo } from "@/components/content-2";

export default function Home() {
  return (
    <Box>
      <Hero />
      <ContentOne />
      <Testimonial />
      <ContentTwo />
    </Box>
  );
}
