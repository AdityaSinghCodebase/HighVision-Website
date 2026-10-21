import { Box, Container, Typography, Paper, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FlagIcon from "@mui/icons-material/Flag";
import VerifiedIcon from "@mui/icons-material/Verified";

const vision = [
  {
    icon: VisibilityIcon,
    title: "Our Vision",
    text: "To create well-planned communities where every family can build a home with confidence.",
  },
  {
    icon: FlagIcon,
    title: "Our Mission",
    text: "To offer clear-title plots, honest pricing, and complete support from site visit to registry.",
  },
];

const team = [
  { name: "Full Name", role: "Founder & Director" },
  { name: "Full Name", role: "Sales Head" },
  { name: "Full Name", role: "Project Manager" },
];

const registrations = [
  "RERA Registered",
  "Approved Layout Plans",
  "Clear & Verified Land Titles",
  "GST Registered Company",
];

function About() {
  return (
    <Box>
      {/* Story */}
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h4" align="center" sx={{ fontWeight: 700 }}>
          About Us
        </Typography>
        <Typography sx={{ mt: 3 }}>
          Write your company story here. Tell visitors when you started, what
          kind of projects you build, and why families trust you.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Add a second short paragraph about your values, your team, and your
          promise to customers.
        </Typography>
      </Container>

      {/* Vision and mission */}
      <Box sx={{ py: 6, bgcolor: "grey.100" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gap: 3,
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            }}
          >
            {vision.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  style={{ height: "100%" }}
                >
                  <Paper elevation={0} sx={{ p: 4, height: "100%" }}>
                    <Icon color="primary" sx={{ fontSize: 44 }} />
                    <Typography variant="h5" sx={{ mt: 2, fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mt: 1 }}>
                      {item.text}
                    </Typography>
                  </Paper>
                </motion.div>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* Team */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 5 }}>
          Meet Our Team
        </Typography>
        <Box
          sx={{
            display: "grid",
            gap: 4,
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
            textAlign: "center",
          }}
        >
          {team.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  mx: "auto",
                  fontSize: 40,
                  bgcolor: "primary.main",
                }}
              >
                {person.name[0]}
              </Avatar>
              <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>
                {person.name}
              </Typography>
              <Typography color="text.secondary">{person.role}</Typography>
            </motion.div>
          ))}
        </Box>
      </Container>

      {/* Legal registrations */}
      <Box sx={{ py: 6, bgcolor: "grey.100" }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: 700, mb: 4 }}
          >
            Our Registrations
          </Typography>
          <Box
            sx={{
              display: "grid",
              gap: 2,
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            }}
          >
            {registrations.map((item) => (
              <Box
                key={item}
                sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
              >
                <VerifiedIcon color="success" />
                <Typography>{item}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default About;
