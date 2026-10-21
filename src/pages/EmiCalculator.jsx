import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Slider,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const formatRupees = (number) =>
  "₹" + Math.round(number).toLocaleString("en-IN");

function SliderField({ label, display, value, min, max, step, onChange }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>{label}</Typography>
        <Typography sx={{ fontWeight: 700 }}>{display}</Typography>
      </Box>
      <Slider
        aria-label={label}
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(event, newValue) => onChange(newValue)}
      />
    </Box>
  );
}

function EmiCalculator() {
  const [amount, setAmount] = useState(1000000);
  const [rate, setRate] = useState(9);
  const [years, setYears] = useState(10);

  const monthlyRate = rate / 12 / 100;
  const months = years * 12;
  const growth = Math.pow(1 + monthlyRate, months);

  const emi = (amount * monthlyRate * growth) / (growth - 1);
  const totalPayment = emi * months;
  const totalInterest = totalPayment - amount;

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 700 }}>
        EMI Calculator
      </Typography>
      <Typography align="center" color="text.secondary" sx={{ mt: 1, mb: 5 }}>
        Plan your plot loan before you buy
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 4,
          gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr" },
        }}
      >
        {/* Left: sliders */}
        <Paper variant="outlined" sx={{ p: 3 }}>
          <SliderField
            label="Loan Amount"
            display={formatRupees(amount)}
            value={amount}
            min={100000}
            max={10000000}
            step={50000}
            onChange={setAmount}
          />
          <SliderField
            label="Interest Rate (per year)"
            display={`${rate}%`}
            value={rate}
            min={1}
            max={20}
            step={0.1}
            onChange={setRate}
          />
          <SliderField
            label="Loan Period"
            display={`${years} years`}
            value={years}
            min={1}
            max={30}
            step={1}
            onChange={setYears}
          />
        </Paper>

        {/* Right: results */}
        <Paper sx={{ p: 3, bgcolor: "primary.main", color: "white" }}>
          <Typography>Monthly EMI</Typography>
          <Typography variant="h3" sx={{ fontWeight: 700, mt: 1 }}>
            {formatRupees(emi)}
          </Typography>

          <Box sx={{ mt: 4, display: "grid", gap: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Loan Amount</Typography>
              <Typography sx={{ fontWeight: 600 }}>
                {formatRupees(amount)}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Total Interest</Typography>
              <Typography sx={{ fontWeight: 600 }}>
                {formatRupees(totalInterest)}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Total Payment</Typography>
              <Typography sx={{ fontWeight: 600 }}>
                {formatRupees(totalPayment)}
              </Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            color="inherit"
            fullWidth
            component={Link}
            to="/contact"
            sx={{ mt: 4, color: "primary.main" }}
          >
            Enquire About a Plot
          </Button>
        </Paper>
      </Box>

      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ display: "block", mt: 3 }}
      >
        This is only an estimate. Actual EMI depends on your bank's rate and
        terms.
      </Typography>
    </Container>
  );
}

export default EmiCalculator;
