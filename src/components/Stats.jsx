import { Box, Container, Typography } from "@mui/material";
import CountUp from "./CountUp";

const stats = [
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 25, suffix: "+", label: "Projects Completed" },
  { value: 500, suffix: "+", label: "Happy Families" },
  { value: 100, suffix: "%", label: "Legal & RERA Approved" },
];

function Stats() {
  return (
    <Box sx={{ py: 8, bgcolor: "grey.100" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gap: 4,
            textAlign: "center",
            gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
          }}
        >
          {stats.map((item) => (
            <Box key={item.label}>
              <Typography
                variant="h3"
                sx={{ fontWeight: 700, color: "primary.main" }}
              >
                <CountUp to={item.value} suffix={item.suffix} />
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 1 }}>
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Stats;
