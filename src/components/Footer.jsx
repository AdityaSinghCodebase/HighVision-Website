import { Box, Container, Typography, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
  { label: "Plots", path: "/plots" },
  { label: "EMI Calculator", path: "/emi-calculator" },
  { label: "Area Converter", path: "/area-converter" },
];

function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "grey.900", color: "grey.300", mt: 8, py: 6 }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gap: 4,
            gridTemplateColumns: { xs: "1fr", md: "2fr 1fr 1fr" },
          }}
        >
          {/* Column 1: about */}
          <Box>
            <Typography variant="h6" sx={{ color: "white", fontWeight: 700 }}>
              HighVision
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Trusted plots and well-planned societies for your future home.
            </Typography>
          </Box>

          {/* Column 2: quick links */}
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ color: "white", fontWeight: 600 }}
            >
              Quick Links
            </Typography>
            {quickLinks.map((item) => (
              <MuiLink
                key={item.path}
                component={Link}
                to={item.path}
                underline="hover"
                color="inherit"
                sx={{ display: "block", mt: 1 }}
              >
                {item.label}
              </MuiLink>
            ))}
          </Box>

          {/* Column 3: contact */}
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ color: "white", fontWeight: 600 }}
            >
              Contact
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Your office address here
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              +91 00000 00000
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              info@yourcompany.com
            </Typography>
          </Box>
        </Box>

        <Typography variant="body2" align="center" sx={{ mt: 5 }}>
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
