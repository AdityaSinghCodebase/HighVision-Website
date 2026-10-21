import { Box } from "@mui/material";

function MapEmbed({ src, title, height = 350 }) {
  return (
    <Box
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <iframe
        src={src}
        title={title}
        width="100%"
        height={height}
        style={{ border: 0, display: "block" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </Box>
  );
}

export default MapEmbed;
