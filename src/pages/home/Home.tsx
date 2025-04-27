import React from 'react';
import { Box, Typography, Button, Grid, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';

const floatVariants = {
  animate: {
    y: [0, -4, 4, -2, 2, 0],
    x: [0, 2, -2, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const Home: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
    id="home"
    sx={{
      height: {
        xs: '82vh', // Set to auto for mobile (small screens)
        sm: '100vh', // 100vh for tablets and larger devices
      },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      px: 2,
      position: 'relative',
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      overflow: 'hidden',
    }}
  >
  
      {/* Floating Words */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        style={{
          position: 'absolute',
          top: isMobile ? '10%' : '15%',
          left: isMobile ? '5%' : '10%',
          fontSize: isMobile ? '1.8rem' : '2.5rem',
          color: theme.palette.primary.main,
          fontWeight: 700,
          opacity: 0.08,
          pointerEvents: 'none',
        }}
      >
        UI/UX
      </motion.div>

      <motion.div
        variants={floatVariants}
        animate="animate"
        style={{
          position: 'absolute',
          bottom: isMobile ? '10%' : '15%',
          right: isMobile ? '5%' : '10%',
          fontSize: isMobile ? '2rem' : '2.8rem',
          color: theme.palette.primary.main,
          fontWeight: 700,
          opacity: 0.08,
          pointerEvents: 'none',
        }}
      >
        React
      </motion.div>

      {/* Main Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ zIndex: 1, textAlign: 'center' }}
      >
        <Typography variant={isMobile ? 'h4' : 'h2'} fontWeight="bold" gutterBottom>
          Hi, I'm <span style={{ color: theme.palette.primary.main }}>Kumaran</span>
        </Typography>
        <Typography variant={isMobile ? 'h6' : 'h4'} gutterBottom>
          UI/UX & React Frontend Developer
        </Typography>
        {/* <Typography variant="body1" maxWidth={600} mx="auto" mb={4}>
          Crafting modern, fast, and responsive websites with stunning design and seamless transitions.
          Let’s build something amazing together!
        </Typography> */}
        <Typography variant="body1" maxWidth={600} mx="auto" mb={4}>
          I specialize in building high-performance, visually engaging, and fully responsive websites. With a strong focus on clean UI/UX and seamless interactions, I turn ideas into exceptional digital experiences.
        </Typography>

        {/* Using Grid for button layout */}
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ width: '100%' }}
        >
          <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ width: '100%' }}>
            <Grid size={{ xs: 6, md: 6 }}>
            <Button
  variant="contained"
  fullWidth
  size={isMobile ? 'small' : 'large'}
  href="/Kumaran_Resume.pdf"
  target="_blank"
  rel="noopener"
  sx={{
    borderRadius: 'xl',
    px: isMobile ? 2 : 4, // reduced horizontal padding
    py: isMobile ? 1 : 1.5, // reduced vertical padding
    fontWeight: 600,
    fontSize: isMobile ? '0.8rem' : '1rem', // smaller font size for mobile
    boxShadow: '0px 3px 10px rgba(25, 118, 210, 0.25)', 
    whiteSpace: 'nowrap', // make sure text stays in one line
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0px 6px 14px rgba(25, 118, 210, 0.35)',
    },
  }}
>Download CV</Button>

            </Grid>

            <Grid size={{ xs: 6, md: 6 }}>
            <Button
  variant="outlined"
  fullWidth
  size={isMobile ? 'small' : 'large'}
  href="mailto:kumaranv11302@gmail.com"
  sx={{
    borderRadius: 'xl',
    px: isMobile ? 2 : 4,  // reduced horizontal padding
    py: isMobile ? 1 : 1.5, // reduced vertical padding
    fontWeight: 600,
    fontSize: isMobile ? '0.8rem' : '1rem', // slightly smaller font
    whiteSpace: 'nowrap', // prevent text wrapping
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
    },
  }}
>
  Contact Me
</Button>

            </Grid>
          </Grid>

        </Grid>
      </motion.div>
    </Box>
  );
};

export default Home;