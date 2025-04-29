import React from 'react';
import { Box, List, ListItemText, Avatar, IconButton, Typography, useTheme } from '@mui/material';
import { ListItemButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';

interface SideNavBarProps {
  closeDrawer: () => void;
}

const SideNavBar: React.FC<SideNavBarProps> = ({ closeDrawer }) => {
  const theme = useTheme();

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // smooth scroll
    }
    closeDrawer(); // close sidebar after navigation
  };

  return (
    <Box
      width={250}
      role="presentation"
      sx={{
        p: 2,
        backgroundColor: theme.palette.background.paper,
        height: '100%',
        color: theme.palette.text.primary,
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.2)', // Add a shadow for a sleek look
      }}
    >
      {/* Close Button */}
      <Box display="flex" justifyContent="flex-end">
        <IconButton onClick={closeDrawer} sx={{ color: theme.palette.text.primary }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Profile Section */}
      <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
        <Avatar
          alt="Profile"
          src="/assets/images/profile/profile.jpeg"
          sx={{ width: 100, height: 100, borderRadius: '50%', border: `2px solid ${theme.palette.primary.main}` }}
        />
        <Typography variant="h6" mt={1} fontWeight="bold">
          KUMARAN V
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Frontend React Developer
        </Typography>
        <Box mt={1} display="flex" gap={1}>
          <IconButton href="https://github.com/Kumaran1v1" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/kumaran-v-4b513b319/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </IconButton>
          <IconButton href="https://wa.me/916380251936" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
          </IconButton>
          <IconButton href="mailto:kumaranv11302@gmail.com" target="_blank" rel="noopener noreferrer">
            <EmailIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Navigation Links */}
      <List>
        {['Home', 'About', 'Skills', 'Experience', 'Works', 'Contact'].map((text) => (
          <ListItemButton
            key={text}
            sx={{
              textAlign: 'center',
              '&:hover': {
                backgroundColor: theme.palette.primary.light,
              },
              mb: 1,
              borderRadius: 1,
            }}
            onClick={() => handleNavClick(text.toLowerCase())} // ✅ Now click closes
          >
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default SideNavBar;
