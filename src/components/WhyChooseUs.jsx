import { Box, Container, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaymentsIcon from "@mui/icons-material/Payments";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const reasons = [
  {
    icon: VerifiedUserIcon,
    title: "Clear & Legal Titles",
    text: "Every plot comes with verified documents and RERA registration.",
  },
  {
    icon: LocationOnIcon,
    title: "Prime Locations",
    text: "Projects near highways, schools, markets, and hospitals.",
  },
  {
    icon: PaymentsIcon,
    title: "Easy Payment Plans",
    text: "Flexible payment options and help with bank loans.",
  },
  {
    icon: SupportAgentIcon,
    title: "Dedicated Support",
    text: "Our team guides you from site visit to registry.",
  },
];

function WhyChooseUs() {
  return (
    <Box sx={{ py: 8, bgcolor: "grey.100" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" sx={{ fontWeight: 700 }}>
          Why Choose Us
        </Typography>
        <Typography align="center" color="text.secondary" sx={{ mt: 1, mb: 5 }}>
          Buying land is a big decision. We make it simple and safe.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "repeat(4, 1fr)",
            },
          }}
        >
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                style={{ height: "100%" }}
              >
                <Paper
                  elevation={0}
                  sx={{ p: 3, height: "100%", textAlign: "center" }}
                >
                  <Icon color="primary" sx={{ fontSize: 48 }} />
                  <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    {item.text}
                  </Typography>
                </Paper>
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

export default WhyChooseUs;
