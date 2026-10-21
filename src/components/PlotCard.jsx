import {
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const statusColors = {
  Available: "success",
  Booked: "warning",
  Sold: "default",
};

function PlotCard({ plot }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ height: "100%" }}
    >
      <Card variant="outlined" sx={{ height: "100%" }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Plot {plot.plotNumber}
            </Typography>
            <Chip
              label={plot.status}
              color={statusColors[plot.status]}
              size="small"
            />
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            {plot.project}
          </Typography>

          <Box sx={{ mt: 2, display: "grid", gap: 0.5 }}>
            <Typography variant="body2">Size: {plot.size} sq ft</Typography>
            <Typography variant="body2">Facing: {plot.facing}</Typography>
          </Box>

          <Typography
            variant="h6"
            sx={{ mt: 2, fontWeight: 700, color: "primary.main" }}
          >
            ₹{plot.price.toLocaleString("en-IN")}
          </Typography>

          <Button
            variant="contained"
            fullWidth
            component={Link}
            to="/contact"
            disabled={plot.status !== "Available"}
            sx={{ mt: 2 }}
          >
            {plot.status === "Available" ? "Enquire Now" : plot.status}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default PlotCard;
