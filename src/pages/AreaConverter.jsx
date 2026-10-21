import { useState } from "react";
import { Box, Container, Typography, Paper, TextField } from "@mui/material";

const units = [
  { key: "sqft", label: "Square Feet (sq ft)", inSqFt: 1 },
  { key: "sqyd", label: "Square Yards (sq yd)", inSqFt: 9 },
  { key: "sqm", label: "Square Meters (sq m)", inSqFt: 10.7639 },
  { key: "gaj", label: "Gaj", inSqFt: 9 },
];

function AreaConverter() {
  const [value, setValue] = useState("1000");
  const [unit, setUnit] = useState("sqft");

  const number = parseFloat(value);
  const isValid = !isNaN(number) && number >= 0;

  const selectedUnit = units.find((item) => item.key === unit);
  const totalSqFt = isValid ? number * selectedUnit.inSqFt : 0;

  const convert = (item) =>
    (totalSqFt / item.inSqFt).toLocaleString("en-IN", {
      maximumFractionDigits: 2,
    });

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 700 }}>
        Plot Area Converter
      </Typography>
      <Typography align="center" color="text.secondary" sx={{ mt: 1, mb: 5 }}>
        Convert your plot size between common units
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 4,
          gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr" },
        }}
      >
        {/* Left: inputs */}
        <Paper
          variant="outlined"
          sx={{ p: 3, display: "grid", gap: 3, alignContent: "start" }}
        >
          <TextField
            label="Enter area"
            type="number"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            slotProps={{ htmlInput: { min: 0 } }}
            error={value !== "" && !isValid}
            helperText={
              value !== "" && !isValid ? "Enter a positive number" : ""
            }
          />

          <TextField
            select
            label="From unit"
            value={unit}
            onChange={(event) => setUnit(event.target.value)}
            slotProps={{ select: { native: true } }}
          >
            {units.map((item) => (
              <option key={item.key} value={item.key}>
                {item.label}
              </option>
            ))}
          </TextField>
        </Paper>

        {/* Right: all results in one box */}
        <Paper sx={{ p: 3, bgcolor: "primary.main", color: "white" }}>
          <Typography>Converted Area</Typography>

          <Box sx={{ mt: 2, display: "grid", gap: 2 }}>
            {units.map((item) => (
              <Box
                key={item.key}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  pb: 2,
                  borderBottom: "1px solid rgba(255,255,255,0.3)",
                }}
              >
                <Typography variant="body2">{item.label}</Typography>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {convert(item)}
                </Typography>
              </Box>
            ))}
          </Box>
        </Paper>
      </Box>

      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ display: "block", mt: 3 }}
      >
        1 gaj = 1 square yard = 9 sq ft. 1 sq m = 10.7639 sq ft.
      </Typography>
    </Container>
  );
}

export default AreaConverter;
