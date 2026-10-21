import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";

function EnquiryForm({ projectName }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Connects a field to the form so MUI's TextField works with it
  const field = (name, rules) => {
    const { ref, ...rest } = register(name, rules);
    return { inputRef: ref, ...rest };
  };

  const onSubmit = (data) => {
    setSubmitted(true);
    reset();
  };

  return (
    <Paper variant="outlined" sx={{ p: { xs: 2, md: 4 } }}>
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        {projectName === "General Enquiry"
          ? "Send Us an Enquiry"
          : `Enquire about ${projectName}`}
      </Typography>
      <Typography color="text.secondary" sx={{ mt: 1, mb: 3 }}>
        Fill in your details and our team will call you back.
      </Typography>

      {submitted && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Thank you! We will contact you soon.
        </Alert>
      )}

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{ display: "grid", gap: 2 }}
      >
        <TextField
          label="Your Name"
          fullWidth
          {...field("name", { required: "Please enter your name" })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />

        <TextField
          label="Phone Number"
          fullWidth
          {...field("phone", {
            required: "Please enter your phone number",
            pattern: {
              value: /^[6-9]\d{9}$/,
              message: "Enter a valid 10-digit mobile number",
            },
          })}
          error={!!errors.phone}
          helperText={errors.phone?.message}
        />

        <TextField
          label="Email (optional)"
          fullWidth
          {...field("email", {
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Enter a valid email address",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          label="Message"
          fullWidth
          multiline
          rows={3}
          {...field("message")}
        />

        <Button type="submit" variant="contained" size="large">
          Send Enquiry
        </Button>
      </Box>
    </Paper>
  );
}

export default EnquiryForm;
