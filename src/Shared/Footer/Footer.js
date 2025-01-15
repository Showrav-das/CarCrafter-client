"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { NavLink } from "react-router-dom";

const FooterLink = styled(Typography)({
  color: "#666",
  fontSize: "14px",
  lineHeight: "2",
  cursor: "pointer",
  "&:hover": {
    color: "#333",
  },
});

const SectionTitle = styled(Typography)({
  color: "#666",
  fontSize: "16px",
  fontWeight: 600,
  marginBottom: "20px",
});

const BuyNowButton = styled(Button)({
  position: "fixed",
  bottom: "20px",
  right: "20px",
  borderRadius: "50%",
  width: "80px",
  height: "80px",
  backgroundColor: "#FF6B35",
  color: "white",
  "&:hover": {
    backgroundColor: "#ff8559",
  },
  display: "flex",
  flexDirection: "column",
  padding: "8px",
});

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#f5f5f5", py: 6, mt: "20px" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Description and Social Icons */}
          <Grid item xs={12} md={3}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Car crafter is the leading search car venture in Bangladesh, that
              helps users buy cars that are right for them.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                sx={{
                  bgcolor: "#3b5998",
                  color: "white",
                  "&:hover": { bgcolor: "#2d4373" },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: "#ff0000",
                  color: "white",
                  "&:hover": { bgcolor: "#cc0000" },
                }}
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: "#0077b5",
                  color: "white",
                  "&:hover": { bgcolor: "#005582" },
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: "#e4405f",
                  color: "white",
                  "&:hover": { bgcolor: "#d63146" },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: "#666666",
                  color: "white",
                  "&:hover": { bgcolor: "#4d4d4d" },
                }}
              >
                <EmailIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Services Column */}
          <Grid item xs={12} sm={6} md={3}>
            <SectionTitle>SERVICES</SectionTitle>
            <FooterLink>Buy Car</FooterLink>
          </Grid>

          {/* About Column */}
          <Grid item xs={12} sm={6} md={3}>
            <SectionTitle>ABOUT CAR CRAFTER</SectionTitle>
            <FooterLink>About Us</FooterLink>
            <NavLink to="/contact" style={{ textDecoration: "none" }}>
              <FooterLink>Contact Us</FooterLink>
            </NavLink>
            <FooterLink>Terms and Conditions</FooterLink>
            <FooterLink>Privacy Policy</FooterLink>
          </Grid>

          {/* More Column */}
          <Grid item xs={12} sm={6} md={3}>
            <SectionTitle>MORE</SectionTitle>
            <FooterLink>Car Compare</FooterLink>
            <FooterLink>Bike Compare</FooterLink>
            <FooterLink>News and Reviews</FooterLink>
            <FooterLink>Warranty and Flash Deal</FooterLink>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 4, borderTop: "1px solid #ddd", pt: 2 }}
        >
          Copyright © | Car crafter
        </Typography>
      </Container>
    </Box>
  );
}
