import { useState } from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import PlotCard from "../components/PlotCard";
import { plots } from "../data/plots";

const projectOptions = ["All", ...new Set(plots.map((plot) => plot.project))];
const facingOptions = ["All", "East", "West", "North", "South"];

const sizeOptions = [
  { value: "all", label: "All sizes", min: 0, max: Infinity },
  { value: "small", label: "Up to 1000 sq ft", min: 0, max: 1000 },
  { value: "medium", label: "1000 - 2000 sq ft", min: 1000, max: 2000 },
  { value: "large", label: "Above 2000 sq ft", min: 2000, max: Infinity },
];

const priceOptions = [
  { value: "all", label: "All prices", min: 0, max: Infinity },
  { value: "low", label: "Up to ₹10 Lakh", min: 0, max: 1000000 },
  { value: "mid", label: "₹10 - 20 Lakh", min: 1000000, max: 2000000 },
  { value: "high", label: "₹20 - 40 Lakh", min: 2000000, max: 4000000 },
  { value: "premium", label: "Above ₹40 Lakh", min: 4000000, max: Infinity },
];

const startingFilters = {
  project: "All",
  facing: "All",
  size: "all",
  price: "all",
};

function Plots() {
  const [filters, setFilters] = useState(startingFilters);

  const handleChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  const sizeRange = sizeOptions.find((option) => option.value === filters.size);
  const priceRange = priceOptions.find(
    (option) => option.value === filters.price,
  );

  const visiblePlots = plots.filter((plot) => {
    const projectMatch =
      filters.project === "All" || plot.project === filters.project;
    const facingMatch =
      filters.facing === "All" || plot.facing === filters.facing;
    const sizeMatch = plot.size >= sizeRange.min && plot.size <= sizeRange.max;
    const priceMatch =
      plot.price >= priceRange.min && plot.price <= priceRange.max;

    return projectMatch && facingMatch && sizeMatch && priceMatch;
  });

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" sx={{ fontWeight: 700 }}>
          Available Plots
        </Typography>
        <Typography align="center" color="text.secondary" sx={{ mt: 1, mb: 4 }}>
          Choose the plot that suits your budget and needs
        </Typography>

        {/* Filters */}
        <Box
          sx={{
            display: "grid",
            gap: 2,
            mb: 3,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "repeat(4, 1fr) auto",
            },
            alignItems: "center",
          }}
        >
          <TextField
            select
            label="Project"
            name="project"
            value={filters.project}
            onChange={handleChange}
            slotProps={{ select: { native: true } }}
          >
            {projectOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </TextField>

          <TextField
            select
            label="Facing"
            name="facing"
            value={filters.facing}
            onChange={handleChange}
            slotProps={{ select: { native: true } }}
          >
            {facingOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </TextField>

          <TextField
            select
            label="Size"
            name="size"
            value={filters.size}
            onChange={handleChange}
            slotProps={{ select: { native: true } }}
          >
            {sizeOptions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </TextField>

          <TextField
            select
            label="Price"
            name="price"
            value={filters.price}
            onChange={handleChange}
            slotProps={{ select: { native: true } }}
          >
            {priceOptions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </TextField>

          <Button
            variant="outlined"
            onClick={() => setFilters(startingFilters)}
          >
            Reset
          </Button>
        </Box>

        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Showing {visiblePlots.length} of {plots.length} plots
        </Typography>

        {visiblePlots.length === 0 ? (
          <Typography align="center" color="text.secondary" sx={{ py: 6 }}>
            No plots match your filters. Try changing or resetting them.
          </Typography>
        ) : (
          <Box
            sx={{
              display: "grid",
              gap: 3,
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
            }}
          >
            {visiblePlots.map((plot) => (
              <PlotCard key={plot.id} plot={plot} />
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default Plots;
