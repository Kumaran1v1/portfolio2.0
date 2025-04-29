import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Favorite, Share } from '@mui/icons-material'; // <-- Like and Share icons
import "./works.css";

const projectData = [
  {
    title: 'YouTube Clone',
    description: 'A YouTube-like frontend built with React, HTML, CSS, and React Bootstrap.',
    image: '/assets/images/works/youtube.png',
    link: 'https://statuesque-cascaron-ea76e8.netlify.app/',
  },
  {
    title: 'IPL Clone Website',
    description: 'A responsive IPL website featuring match schedules, team stats, and a vibrant UI.',
    image: '/assets/images/works/ipl.png',
    link: 'https://kumaran1v1.github.io/IPL/',
  },
  {
    title: 'Marceto',
    description: 'A sleek single-page website built with JavaScript, HTML5, CSS3, and MUI.',
    image: '/assets/images/works/marceto.png',
    link: 'https://marceto.vercel.app/',
  },
  {
    title: 'ARSHA Clone',
    description: 'My first responsive clone project using HTML, CSS, Bootstrap, and media queries.',
    image: '/assets/images/works/arsha.png',
    link: 'https://kumaran1v1.github.io/ARSHA/',
  },
  {
    title: 'VK-Tractors Website',
    description: 'Responsive front-end site for tractors using HTML, CSS, Ant Design, and JS.',
    image: '/assets/images/works/tractors.png',
    link: 'https://kumaran1v1.github.io/VK-TRACTORS/',
  },
  {
    title: 'NinjaClone',
    description: 'Stylish single-page website built using HTML, CSS, and Bootstrap.',
    image: '/assets/images/works/ninja.png',
    link: 'https://kumaran1v1.github.io/Ninjaclone/',
  },

  {
    title: 'Flipkart Add Product',
    description: 'Frontend clone of Flipkart\'s product add page using React, HTML, CSS, and JS.',
    image: '/assets/images/works/addcart.png',
    link: 'https://kumaran1v1.github.io/Flipkart/',
  },
];

const Projects: React.FC = () => {
  const theme = useTheme();
  const [likes, setLikes] = useState<number[]>(Array(projectData.length).fill(0));

  const handleLike = (index: number) => {
    const newLikes = [...likes];
    newLikes[index] = newLikes[index] ? 0 : 1; // toggle like
    setLikes(newLikes);
  };

  return (
    <Box
      id="works"
      sx={{
        py: 10,
        px: 3,
        backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#fafafa',
        color: theme.palette.text.primary,
        transition: 'background-color 0.3s ease',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              fontWeight: 'bold',
              borderBottom: `3px solid ${theme.palette.primary.main}`,
              display: 'inline-block',
            }}
          >
            Works
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projectData.map((project, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <motion.div
                style={{ position: 'relative', zIndex: 2 }}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier
                }}
                viewport={{ once: true }}
              >


                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: 3,
                    boxShadow: 6,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      boxShadow: 12,
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-150%',
                      width: '50%',
                      height: '100%',
                      background:
                        'linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)',
                      transform: 'skewX(-20deg)',
                      zIndex: 3,
                      transition: 'left 0.7s ease-in-out',
                    },
                    '&:hover::before': {
                      left: '150%',
                    },

                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      zIndex: 1,
                      height: 200,
                      objectFit: 'fill', // show the full image inside
                      backgroundColor: '#f0f0f0', // optional: gives a light background
                    }}
                  />
                  <CardContent
                    sx={{
                      position: 'relative',
                      zIndex: 2,
                      flexGrow: 1,
                      p: 3,
                      backgroundColor: theme.palette.mode === 'dark' ? '#2b2b2b' : '#ffffff',
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{
                          color: theme.palette.primary.main,
                          mb: 1,
                          textTransform: 'capitalize',
                        }}
                      >
                        {project.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          lineHeight: 1.6,
                          textAlign: 'justify',
                          fontSize: '0.9rem',
                        }}
                      >
                        {project.description}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <IconButton
                          onClick={() => handleLike(index)}
                          sx={{
                            color: likes[index] ? theme.palette.error.main : theme.palette.text.secondary,
                            '&:hover': {
                              color: theme.palette.error.main,
                              transform: 'scale(1.2)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <Favorite />
                        </IconButton>

                        <IconButton
                          onClick={() => navigator.share && navigator.share({ url: project.link, title: project.title })}
                          sx={{
                            color: theme.palette.text.secondary,
                            '&:hover': {
                              color: theme.palette.primary.main,
                              transform: 'scale(1.2)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <Share />
                        </IconButton>
                      </Box>

                      <Button
                        variant="contained"
                        href={project.link}
                        target="_blank"
                        sx={{
                          background: `linear-gradient(135deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                          color: '#fff',
                          fontWeight: 'bold',
                          px: 3,
                          py: 1,
                          borderRadius: 20,
                          boxShadow: '0px 4px 10px rgba(0,0,0,0.25)',
                          transition: 'all 0.4s ease',
                          '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: '0px 6px 15px rgba(0,0,0,0.35)',
                          },
                        }}
                      >
                        View
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Projects;
