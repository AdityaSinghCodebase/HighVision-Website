import { Box, Container, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function FeaturedProjects() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" sx={{ fontWeight: 700 }}>
          Our Featured Projects
        </Typography>
        <Typography align="center" color="text.secondary" sx={{ mt: 1, mb: 5 }}>
          Explore our latest plots and societies
        </Typography>

        <Box
          sx={{
            display: "grid",
            gap: 4,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "repeat(3, 1fr)",
            },
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default FeaturedProjects;
