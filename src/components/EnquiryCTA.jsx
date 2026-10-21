import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const PHONE = "910000000000";

function EnquiryCTA() {
  return (
    <Box sx={{ py: 8, bgcolor: "primary.main", color: "white" }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h4" align="center" sx={{ fontWeight: 700 }}>
            Ready to Buy Your Plot?
          </Typography>
          <Typography align="center" sx={{ mt: 2 }}>
            Talk to our team, plan a site visit, and get all your questions
            answered.
          </Typography>

          <Box
            sx={{
              mt: 4,
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              color="inherit"
              size="large"
              startIcon={<PhoneIcon />}
              href={`tel:+${PHONE}`}
              sx={{ color: "primary.main" }}
            >
              Call Now
            </Button>

            <Button
              variant="contained"
              color="success"
              size="large"
              startIcon={<WhatsAppIcon />}
              href={`https://wa.me/${PHONE}?text=Hi, I want to know about your plots`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </Button>

            <Button
              variant="outlined"
              size="large"
              component={Link}
              to="/contact"
              sx={{ color: "white", borderColor: "white" }}
            >
              Send Enquiry
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

export default EnquiryCTA;
