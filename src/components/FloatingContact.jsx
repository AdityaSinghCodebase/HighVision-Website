import { Box, Fab } from "@mui/material";
import { motion } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";

const PHONE = "910000000000";
const MESSAGE = "Hi, I want to know about your plots";

function FloatingContact() {
  return (
    <Box
      sx={{
        position: "fixed",
        left: { xs: 16, md: 24 },
        bottom: 24,
        zIndex: 1050,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <Fab
          color="primary"
          aria-label="Call us"
          component="a"
          href={`tel:+${PHONE}`}
        >
          <PhoneIcon />
        </Fab>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.1 }}
      >
        <Fab
          aria-label="Chat on WhatsApp"
          component="a"
          href={`https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            bgcolor: "#25D366",
            color: "white",
            "&:hover": { bgcolor: "#1ebe5b" },
          }}
        >
          <WhatsAppIcon />
        </Fab>
      </motion.div>
    </Box>
  );
}

export default FloatingContact;
