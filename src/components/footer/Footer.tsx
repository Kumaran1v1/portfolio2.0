import React from 'react';
import { Box, Typography, IconButton, useTheme, Container, useMediaQuery } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#fefefe',
        color: theme.palette.text.secondary,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent={isMobile ? 'center' : 'space-between'}
          alignItems="center"
          flexDirection={isMobile ? 'column' : 'row'}
        >
          <Typography variant="body2" sx={{ mb: isMobile ? 1 : 0 }}>
            © {new Date().getFullYear()} Kumaran V. All rights reserved.
          </Typography>
          <Box>
            <IconButton
              href="https://www.linkedin.com/in/kumaran-v-4b513b319/"
              target="_blank"
              rel="noopener"
              sx={{ color: theme.palette.primary.main, mx: 0.5 }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="https://github.com/Kumaran1v1"
              target="_blank"
              rel="noopener"
              sx={{ color: theme.palette.primary.main, mx: 0.5 }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="mailto:kumaranv11302@gmail.com"
              sx={{ color: theme.palette.primary.main, mx: 0.5 }}
            >
              <Email />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
