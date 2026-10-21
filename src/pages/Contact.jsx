import { Box, Container, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EnquiryForm from "../components/EnquiryForm";
import MapEmbed from "../components/MapEmbed";

const officeDetails = [
  { icon: LocationOnIcon, label: "Address", value: "Your office address here" },
  { icon: PhoneIcon, label: "Phone", value: "+91 00000 00000" },
  { icon: EmailIcon, label: "Email", value: "info@yourcompany.com" },
  {
    icon: AccessTimeIcon,
    label: "Office Hours",
    value: "Mon - Sat, 10:00 AM - 7:00 PM",
  },
];

const officeMapUrl =
  "https://www.google.com/maps?q=India+Gate+New+Delhi&output=embed";

function Contact() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 700 }}>
        Contact Us
      </Typography>
      <Typography align="center" color="text.secondary" sx={{ mt: 1, mb: 5 }}>
        Visit our office, call us, or send an enquiry
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 4,
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        }}
      >
        {/* Left: office details */}
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
            Our Office
          </Typography>

          {officeDetails.map((item) => {
            const Icon = item.icon;
            return (
              <Box key={item.label} sx={{ display: "flex", gap: 2, mb: 3 }}>
                <Icon color="primary" />
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    {item.label}
                  </Typography>
                  <Typography>{item.value}</Typography>
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* Right: form */}
        <EnquiryForm projectName="General Enquiry" />
      </Box>

      <Typography variant="h5" sx={{ fontWeight: 600, mt: 6, mb: 2 }}>
        Find Us on the Map
      </Typography>
      <MapEmbed
        src={officeMapUrl}
        title="Our office location map"
        height={400}
      />
    </Container>
  );
}

export default Contact;
