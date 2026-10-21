import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ textDecoration: "none", color: "inherit", fontWeight: 700 }}
          >
            HighVision
          </Typography>

          {/* Desktop buttons */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navLinks.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                color="inherit"
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            sx={{ display: { xs: "inline-flex", md: "none" } }}
            onClick={(e) => {
              e.currentTarget.blur();
              setOpen(true);
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile side menu */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 220 }}>
          {navLinks.map((item) => (
            <ListItemButton
              key={item.path}
              component={Link}
              to={item.path}
              onClick={(e) => {
                e.currentTarget.blur();
                setOpen(false);
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
