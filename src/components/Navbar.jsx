import { useState, useRef } from "react";
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
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Popper,
  Paper,
  MenuList,
  MenuItem,
  ClickAwayListener,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LandscapeIcon from "@mui/icons-material/Landscape";
import CalculateIcon from "@mui/icons-material/Calculate";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link, useLocation } from "react-router-dom";

const mainLinks = [
  { label: "Home", path: "/", icon: HomeIcon },
  { label: "Projects", path: "/projects", icon: ApartmentIcon },
  { label: "About", path: "/about", icon: InfoIcon },
  { label: "Contact", path: "/contact", icon: ContactPhoneIcon },
];

const serviceLinks = [
  { label: "Plots", path: "/plots", icon: LandscapeIcon },
  { label: "EMI Calculator", path: "/emi-calculator", icon: CalculateIcon },
  { label: "Area Converter", path: "/area-converter", icon: SquareFootIcon },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesButtonRef = useRef(null);
  const { pathname } = useLocation();

  const isActive = (path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  const servicesActive = serviceLinks.some((item) => isActive(item.path));

  const tabStyle = (active) => ({
    height: "100%",
    borderRadius: 0,
    borderTop: "3px solid",
    borderBottom: "3px solid",
    borderColor: active ? "primary.main" : "transparent",
    color: active ? "primary.main" : "inherit",
  });

  const handleClickAway = (event) => {
    // Ignore clicks on the Services button itself, so it can toggle properly
    if (servicesButtonRef.current?.contains(event.target)) return;
    setServicesOpen(false);
  };

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
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignSelf: "stretch" }}
          >
            {mainLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  color="inherit"
                  startIcon={<Icon />}
                  sx={tabStyle(isActive(item.path))}
                >
                  {item.label}
                </Button>
              );
            })}

            <Button
              ref={servicesButtonRef}
              color="inherit"
              startIcon={<MiscellaneousServicesIcon />}
              endIcon={<KeyboardArrowDownIcon />}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((previous) => !previous)}
              sx={tabStyle(servicesActive)}
            >
              Services
            </Button>

            <Popper
              open={servicesOpen}
              anchorEl={servicesButtonRef.current}
              placement="bottom-start"
              sx={{ zIndex: 1200 }}
            >
              <ClickAwayListener onClickAway={handleClickAway}>
                <Paper elevation={4} sx={{ mt: 1, minWidth: 220 }}>
                  <MenuList
                    onKeyDown={(event) => {
                      if (event.key === "Escape") setServicesOpen(false);
                    }}
                  >
                    {serviceLinks.map((item) => {
                      const Icon = item.icon;
                      return (
                        <MenuItem
                          key={item.path}
                          component={Link}
                          to={item.path}
                          onClick={() => setServicesOpen(false)}
                        >
                          <ListItemIcon>
                            <Icon fontSize="small" color="primary" />
                          </ListItemIcon>
                          <ListItemText>{item.label}</ListItemText>
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </Paper>
              </ClickAwayListener>
            </Popper>
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            aria-label="Open menu"
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
        <List sx={{ width: 240 }}>
          {mainLinks.map((item) => {
            const Icon = item.icon;
            return (
              <ListItemButton
                key={item.path}
                component={Link}
                to={item.path}
                selected={isActive(item.path)}
                onClick={(e) => {
                  e.currentTarget.blur();
                  setOpen(false);
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Icon color="primary" />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            );
          })}

          <ListSubheader>Services</ListSubheader>

          {serviceLinks.map((item) => {
            const Icon = item.icon;
            return (
              <ListItemButton
                key={item.path}
                component={Link}
                to={item.path}
                selected={isActive(item.path)}
                onClick={(e) => {
                  e.currentTarget.blur();
                  setOpen(false);
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Icon color="primary" />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
