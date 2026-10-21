import { useParams, Link } from "react-router-dom";
import { Box, Container, Typography, Chip, Button, Paper } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { projects } from "../data/projects";
import MapEmbed from "../components/MapEmbed";
import ProjectGallery from "../components/ProjectGallery";

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <Container sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h5">Project not found</Typography>
        <Button
          component={Link}
          to="/projects"
          sx={{ mt: 3 }}
          variant="contained"
        >
          Back to Projects
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <ProjectGallery images={project.gallery} name={project.name} />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mt: 3,
          flexWrap: "wrap",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          {project.name}
        </Typography>
        <Chip label={project.status} color="primary" />
      </Box>

      <Typography color="text.secondary" sx={{ mt: 1 }}>
        {project.location}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 2,
          mt: 4,
          gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
        }}
      >
        <Paper variant="outlined" sx={{ p: 2 }}>
          <Typography variant="caption" color="text.secondary">
            Starting Price
          </Typography>
          <Typography variant="h6">{project.startingPrice}</Typography>
        </Paper>
        <Paper variant="outlined" sx={{ p: 2 }}>
          <Typography variant="caption" color="text.secondary">
            Plot Sizes
          </Typography>
          <Typography variant="h6">{project.plotSizes}</Typography>
        </Paper>
        <Paper variant="outlined" sx={{ p: 2 }}>
          <Typography variant="caption" color="text.secondary">
            RERA Number
          </Typography>
          <Typography variant="h6">{project.rera}</Typography>
        </Paper>
      </Box>

      <Typography variant="h5" sx={{ mt: 5, fontWeight: 600 }}>
        About this Project
      </Typography>
      <Typography sx={{ mt: 1 }}>{project.description}</Typography>

      <Typography variant="h5" sx={{ mt: 5, fontWeight: 600 }}>
        Amenities
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 1.5,
          mt: 2,
          gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(3, 1fr)" },
        }}
      >
        {project.amenities.map((item) => (
          <Box
            key={item}
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <CheckCircleIcon color="success" fontSize="small" />
            <Typography>{item}</Typography>
          </Box>
        ))}
      </Box>
      <Typography variant="h5" sx={{ mt: 5, mb: 2, fontWeight: 600 }}>
        Location
      </Typography>
      <MapEmbed src={project.mapUrl} title={`${project.name} location map`} />
    </Container>
  );
}

export default ProjectDetails;
