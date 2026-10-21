import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Button,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const statusColors = {
  Ongoing: "success",
  Upcoming: "warning",
  Completed: "default",
};

function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      style={{ height: "100%" }}
    >
      <Card sx={{ height: "100%" }}>
        <CardMedia
          component="img"
          height="200"
          image={project.image}
          alt={project.name}
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {project.name}
            </Typography>
            <Chip
              label={project.status}
              color={statusColors[project.status]}
              size="small"
            />
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {project.location}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Plot sizes: {project.plotSizes}
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 600 }}>
            Starting {project.startingPrice}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {project.rera}
          </Typography>

          <Button
            variant="contained"
            fullWidth
            component={Link}
            to={`/projects/${project.id}`}
            sx={{ mt: 2 }}
          >
            View Details
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
