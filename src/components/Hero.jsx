import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <Box
      sx={{
        minHeight: { xs: "70vh", md: "85vh" },
        display: "flex",
        alignItems: "center",
        color: "white",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(/hero.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{ fontWeight: 700, fontSize: { xs: "2.2rem", md: "3.5rem" } }}
          >
            Find Your Perfect Plot
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, maxWidth: 560 }}>
            Well-planned societies and verified plots in prime locations.
          </Typography>

          <Box sx={{ mt: 4, display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/projects"
            >
              View Projects
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              to="/contact"
              sx={{ color: "white", borderColor: "white" }}
            >
              Enquire Now
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Hero;
