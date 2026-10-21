import { useState } from "react";
import { Box, Container, Typography, Tabs, Tab } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const filters = ["All", "Ongoing", "Upcoming", "Completed"];

function Projects() {
  const [filter, setFilter] = useState("All");

  const visibleProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.status === filter);

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" sx={{ fontWeight: 700 }}>
          Our Projects
        </Typography>
        <Typography align="center" color="text.secondary" sx={{ mt: 1, mb: 4 }}>
          Browse our plots and societies
        </Typography>

        <Tabs
          value={filter}
          onChange={(event, newValue) => setFilter(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ mb: 4 }}
        >
          {filters.map((item) => (
            <Tab key={item} label={item} value={item} />
          ))}
        </Tabs>

        {visibleProjects.length === 0 ? (
          <Typography align="center" color="text.secondary">
            No projects in this category yet.
          </Typography>
        ) : (
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
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default Projects;
