import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  IconButton,
  Card,
  CardContent,
  Snackbar,
  Alert,
  useTheme,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Instagram as InstagramIcon,
  Phone as PhoneIcon,
  LocationOn as LocationOnIcon,
} from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./contact.css";

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: 'success' as 'success' | 'error',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
      setSnackbar({
        open: true,
        severity: 'error',
        message: 'Please fill in all required fields',
      });
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setSnackbar({
        open: true,
        severity: 'success',
        message: 'Message sent successfully!',
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const socialLinks = [
    { icon: <GitHubIcon />, url: 'https://github.com/Kumaran1v1', label: 'GitHub' },
    { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/kumaran-v-4b513b319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: <InstagramIcon />, url: 'https://www.instagram.com/k_u_m_a_r_a_n.v?igsh=MW1iZ2Ntbmxzc2s4Zw==', label: 'Instagram' },
    { icon: <WhatsAppIcon />, url: 'https://wa.me/916380251936', label: 'Whatsapp' },
    { icon: <EmailIcon />, url: 'mailto:kumaranv11302@gmail.com', label: 'Email' },
  ];

  return (
<Box
id="contact"
  sx={{
    py: 8,
    background: theme.palette.mode === 'dark'
      ? theme.palette.background.default
      : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  }}
>

      <Container maxWidth="lg">
        <Card elevation={8} sx={{ borderRadius: 4, overflow: 'hidden' }}>
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
<Box sx={{textAlign:'center'}}>
<Typography
              variant="h4"
              component="h1"
              align="center"
              gutterBottom
              sx={{
                borderBottom: `3px solid ${theme.palette.primary.main}`,
                display: 'inline-block',
                mb: 4,
              }}
            >
              Contact Us
            </Typography>
</Box>

            <Grid container spacing={6}>
              {/* Contact Information */}
              <Grid size={{xs:12,md:4}}>
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Get in Touch
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography>kumaranv11302@gmail.com</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PhoneIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography>+91 6380251936</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                    <LocationOnIcon sx={{ mr: 2, mt: 0.5, color: 'primary.main' }} />
                    <Typography>
                      2/5 Mariyamman kovil street<br />
                      pidagam(post) 605 401 <br/>
                      Villupuram 
                    </Typography>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Follow Us
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    {socialLinks.map((link, index) => (
                      <IconButton
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        sx={{
                          color: 'primary.main',
                          '&:hover': {
                            backgroundColor: 'primary.main',
                            color: 'white',
                          },
                        }}
                      >
                        {link.icon}
                      </IconButton>
                    ))}
                  </Box>
                </Box>
              </Grid>

              {/* Contact Form */}
              <Grid size={{xs:12,md:8}}>
                <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Grid container spacing={2}>
                    <Grid size={{xs:12}}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid size={{xs:12}}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid size={{xs:12}}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid size={{xs:12}}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                  </Grid>

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      mt: 2,
                      py: 1.5,
                      px: 4,
                      alignSelf: 'flex-start',
                      borderRadius: 2,
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;