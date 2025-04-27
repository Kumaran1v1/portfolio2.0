import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import "./experience.css";

const experienceList = [
  {
    role: 'Junior Web Developer (Intern)',
    company: 'Nanlogical Services Pvt Ltd',
    date: 'Jan 2024 - Mar 2024',
    description:
      'Desenvolvimento de websites utilizando tecnologias como HTML, CSS, JavaScript e integração com APIs. Apoio na manutenção e otimização de aplicações web.',
  },
  {
    role: 'Freelance Web Designer (Part-Time)',
    company: 'Projetos Pessoais',
    date: '2023 - Present',
    description:
      'Atuação como freelancer em meio período desenvolvendo websites responsivos e personalizados para pequenas empresas e empreendedores, com foco em design moderno, UI/UX e SEO básico.',
  },
  {
    role: 'MERN Stack Certification',
    company: 'SkillUp Tech Solutions',
    date: 'Apr 2024 - Sep 2024',
    description:
      'Curso intensivo com foco em MongoDB, Express.js, React, e Node.js. Aprofundamento em criação de aplicações full-stack modernas e práticas de desenvolvimento escalável.',
  },
  {
    role: 'React Front-End Developer',
    company: 'Hepl',
    date: 'Oct 2023 - Apr 2024',
    description:
      'Desenvolvimento de interfaces modernas utilizando React, com foco em performance, responsividade e integração com APIs REST. Colaboração com equipes ágeis para entrega contínua.',
  }
];

const Experience: React.FC = () => {
  const theme = useTheme();

  return (
<Box
  id="experience"
  sx={{
    py: 10,
    px: 3,
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(135deg, #111 0%, #1e1e1e 100%)'
      : 'linear-gradient(135deg, #f9f9f9 0%, #fff 100%)',
    color: theme.palette.text.primary,
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    // Keyframes defined here
    '@keyframes shimmer': {
      '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
      '100%': { transform: 'translate(50%, 50%) rotate(360deg)' },
    },
  }}
>
  {/* Spark shimmer layer */}
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: 400,
      height: 400,
      background: `radial-gradient(
        circle,
        ${theme.palette.primary.main}33 0%,
        transparent 70%
      )`,
      animation: 'shimmer 10s linear infinite',
      zIndex: 0,
      filter: 'blur(60px)',
      opacity: 0.3,
      pointerEvents: 'none',
    }}
  />

      <Box
        sx={{
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: 'bold',
            borderBottom: `3px solid ${theme.palette.primary.main}`,
            display: 'inline-block',
          }}
        >
          Experiência
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ position: 'relative', zIndex: 2 }}>
        {experienceList.map((exp, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
         <motion.div style={{ position: 'relative', zIndex: 2 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Paper
                elevation={6}
                sx={{
                  p: 4,
                  borderLeft: `6px solid ${theme.palette.primary.main}`,
                  borderRadius: 3,
                  height: '100%',
                  backdropFilter: 'blur(4px)',
                  backgroundColor: theme.palette.mode === 'dark'
                    ? 'rgba(30,30,30,0.85)'
                    : 'rgba(255,255,255,0.9)',
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 10px 30px rgba(0, 0, 0, 0.5)'
                    : '0 10px 25px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  '&:hover': {
                    transform: 'translateY(-5px) scale(1.02)',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 15px 35px rgba(0, 0, 0, 0.6)'
                      : '0 15px 30px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {exp.role}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  {exp.company} — {exp.date}
                </Typography>
                <Typography variant="body2">{exp.description}</Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Experience;
