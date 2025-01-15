"use client";

import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { LocationOn, Email, Phone, Print } from "@mui/icons-material";
import Header from "../../../../Shared/Navigation/Header";
import Footer from "../../../../Shared/Footer/Footer";

export default function ContactForm() {
  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "white",
          p: 3,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            maxWidth: 900,
            width: "100%",
            display: "flex",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Grid container>
            {/* Left Side - Contact Info */}
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                bgcolor: "#f1f5f9",
                color: "black",
                p: 4,
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Typography variant="h5" fontWeight={500} mb={3}>
                Contact Us
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <LocationOn />
                <Box>
                  <Typography>Bangladesh</Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Email />
                <Typography>hello@loremipsum.com</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Phone />
                <Typography>+017 36852 146</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Print />
                <Typography>+017 36852 147</Typography>
              </Box>
            </Grid>

            {/* Right Side - Form */}
            <Grid item xs={12} md={7} sx={{ p: 4 }}>
              <Typography variant="h5" color="primary" fontWeight={500} mb={1}>
                Get in Touch
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={4}>
                Feel free to drop us a line below!
              </Typography>

              <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column", gap: 3 }}
              >
                <TextField
                  fullWidth
                  placeholder="Your Name"
                  variant="outlined"
                  sx={{ bgcolor: "#f8f9fa" }}
                />
                <TextField
                  fullWidth
                  placeholder="Your Email"
                  variant="outlined"
                  sx={{ bgcolor: "#f8f9fa" }}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Typing your message here...."
                  variant="outlined"
                  sx={{ bgcolor: "#f8f9fa" }}
                />
                <Button
                  variant="contained"
                  sx={{
                    width: "fit-content",
                    px: 4,
                    py: 1,
                    borderRadius: "50px",
                    bgcolor: "primary",
                  }}
                >
                  SEND
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      <Footer />
    </>
  );
}
