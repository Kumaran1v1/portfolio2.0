// import React from 'react';
// import { Box, Grid, Typography, Avatar, IconButton, useTheme, Paper } from '@mui/material';
// import { motion } from 'framer-motion';
// import { GitHub, LinkedIn, Email } from '@mui/icons-material';
// import "./about.css";

// const About: React.FC = () => {
//   const theme = useTheme();

//   const fadeUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2, duration: 0.6 },
//     }),
//   };

//   return (
//     <Box
//       id="about"
//       sx={{
//         py: 12,
//         px: { xs: 2, md: 6 },
//         backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#fefefe',
//         color: theme.palette.text.primary,
//         transition: 'all 0.4s ease-in-out',
//       }}
//     >

//       {/* Title */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeUp}
//         custom={0}
//       >
//         <Typography
//           variant="h4"
//           align="center"
//           sx={{
//             fontWeight: 'bold',
//             mb: 6,
//             position: 'relative',
//             display: 'inline-block',
//             width: '100%',
//             '&::after': {
//               content: '""',
//               position: 'absolute',
//               width: '60px',
//               height: '4px',
//               background: theme.palette.primary.main,
//               bottom: -8,
//               left: '50%',
//               transform: 'translateX(-50%)',
//             },
//           }}
//         >
//           About Me
//         </Typography>
//       </motion.div>

//       {/* Content */}
//       <Grid container spacing={4} alignItems="center">
//         {/* Avatar + Icons */}
//         <Grid size={{ xs: 12, md: 4 }} textAlign="center">
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Avatar
//               alt="Kumaran V"
//               src="/assets/images/profile/profile.jpeg"
//               sx={{
//                 width: 160,
//                 height: 160,
//                 mx: 'auto',
//                 border: `4px solid ${theme.palette.primary.main}`,
//                 boxShadow:
//                   theme.palette.mode === 'dark'
//                     ? '0 0 20px rgba(25, 118, 210, 0.5)'
//                     : '0 8px 20px rgba(0,0,0,0.1)',
//               }}
//             />

//             {/* Social Icons */}
//             <Box mt={2}>
//               <IconButton
//                 href="https://www.linkedin.com/in/kumaran-v-4b513b319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'"
//                 target="_blank"
//                 rel="noopener"
//                 sx={{ color: theme.palette.primary.main }}
//               >
//                 <LinkedIn />
//               </IconButton>
//               <IconButton
//                 href="https://github.com/Kumaran1v1"
//                 target="_blank"
//                 rel="noopener"
//                 sx={{ color: theme.palette.primary.main }}
//               >
//                 <GitHub />
//               </IconButton>
//               <IconButton
//                 href="mailto:kumaranv11302@gmail.com"
//                 sx={{ color: theme.palette.primary.main }}
//               >
//                 <Email />
//               </IconButton>
//             </Box>
//           </motion.div>
//         </Grid>

//         {/* Bio Content */}
//         <Grid size={{ xs: 12, md: 8 }}>
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <Paper
//               elevation={4}
//               sx={{
//                 p: { xs: 3, md: 4 },
//                 borderRadius: 4,
//                 background: theme.palette.mode === 'dark' ? '#1f1f1f' : '#fdfdfd',
//                 boxShadow: theme.palette.mode === 'dark'
//                   ? '0 8px 30px rgba(25, 118, 210, 0.2)'
//                   : '0 8px 20px rgba(0, 0, 0, 0.08)',
//                 transition: 'all 0.4s ease-in-out',
//                 borderLeft: `6px solid ${theme.palette.primary.main}`,
//               }}
//             >
//               <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
//                 I'm <span style={{ color: theme.palette.primary.main }}>Kumaran</span> — Frontend React Developer
//               </Typography>

//               <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
//                 I'm passionate about building clean, responsive, and accessible interfaces.
//                 I love working with <strong style={{ color: theme.palette.primary.main }}>React</strong>,{' '}
//                 <strong style={{ color: theme.palette.primary.main }}>TypeScript</strong>, and{' '}
//                 <strong style={{ color: theme.palette.primary.main }}>MUI</strong> to craft seamless user experiences.
//               </Typography>

//               <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
//                 My focus is on delivering engaging UX, performance-optimized apps, and staying on top of the latest web trends.
//                 Whether it’s accessibility, animations, or architecture – I’m all in.
//               </Typography>
//             </Paper>
//           </motion.div>
//         </Grid>

//       </Grid>
//     </Box>
//   );
// };

// export default About;

import React from 'react';
import { Box, Grid, Typography, Avatar, IconButton, useTheme, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Email, School, EmojiEvents } from '@mui/icons-material';
import "./about.css";

const About: React.FC = () => {
  const theme = useTheme();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <Box
      id="about"
      sx={{
        py: 12,
        px: { xs: 2, md: 6 },
        backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#fefefe',
        color: theme.palette.text.primary,
        transition: 'all 0.4s ease-in-out',
      }}
    >

      {/* Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 'bold',
            mb: 6,
            position: 'relative',
            display: 'inline-block',
            width: '100%',
            '&::after': {
              content: '""',
              position: 'absolute',
              width: '60px',
              height: '4px',
              background: theme.palette.primary.main,
              bottom: -8,
              left: '50%',
              transform: 'translateX(-50%)',
            },
          }}
        >
          About Me
        </Typography>
      </motion.div>

      {/* Content */}
      <Grid container spacing={4} alignItems="center">
        {/* Avatar + Icons */}
        <Grid size={{xs:12,md:4}} textAlign="center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Avatar
              alt="Kumaran V"
              src="/assets/images/profile/profile.jpeg"
              sx={{
                width: 160,
                height: 160,
                mx: 'auto',
                border: `4px solid ${theme.palette.primary.main}`,
                boxShadow:
                  theme.palette.mode === 'dark'
                    ? '0 0 20px rgba(25, 118, 210, 0.5)'
                    : '0 8px 20px rgba(0,0,0,0.1)',
              }}
            />

            {/* Social Icons */}
            <Box mt={2}>
              <IconButton
                href="https://www.linkedin.com/in/kumaran-v-4b513b319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener"
                sx={{ color: theme.palette.primary.main }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                href="https://github.com/Kumaran1v1"
                target="_blank"
                rel="noopener"
                sx={{ color: theme.palette.primary.main }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                href="mailto:kumaranv11302@gmail.com"
                sx={{ color: theme.palette.primary.main }}
              >
                <Email />
              </IconButton>
            </Box>
          </motion.div>
        </Grid>

        {/* Bio Content */}
        <Grid size={{xs:12,md:8}}>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Paper
              elevation={4}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 4,
                background: theme.palette.mode === 'dark' ? '#1f1f1f' : '#fdfdfd',
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 8px 30px rgba(25, 118, 210, 0.2)'
                  : '0 8px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.4s ease-in-out',
                borderLeft: `6px solid ${theme.palette.primary.main}`,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                I'm <span style={{ color: theme.palette.primary.main }}>Kumaran</span> — Frontend React Developer
              </Typography>

              <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
                I'm passionate about building clean, responsive, and accessible interfaces.
                I love working with <strong style={{ color: theme.palette.primary.main }}>React</strong>,{' '}
                <strong style={{ color: theme.palette.primary.main }}>TypeScript</strong>, and{' '}
                <strong style={{ color: theme.palette.primary.main }}>MUI</strong> to craft seamless user experiences.
              </Typography>

              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                My focus is on delivering engaging UX, performance-optimized apps, and staying on top of the latest web trends.
                Whether it’s accessibility, animations, or architecture – I’m all in.
              </Typography>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>

      {/* --- Education Section --- */}
      <Box mt={8}>
  <Grid container spacing={4}>
    {/* Schooling Card */}
    <Grid size={{xs:12,md:6}}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Paper
          elevation={4}
          sx={{
            p: 4,
            borderRadius: 4,
            textAlign: 'center',
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.palette.mode === 'dark'
              ? '0 4px 20px rgba(25, 118, 210, 0.15)'
              : '0 4px 12px rgba(0,0,0,0.08)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            '&:hover': {
              transform: 'translateY(-8px) scale(1.02)',
              boxShadow: theme.palette.mode === 'dark'
                ? '0 8px 30px rgba(25,118,210,0.3)'
                : '0 8px 24px rgba(0,0,0,0.15)',
              backgroundColor: theme.palette.action.hover,
            },
          }}
        >
          <School sx={{ fontSize: 50, color: theme.palette.primary.main, mb: 2 }} />
          <Typography variant="h6" fontWeight="bold" mb={1}>
            Schooling
          </Typography>
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
  Completed schooling at <strong>Gandhi Memorial Higher Secondary School</strong>, focusing on Mathematics, Physics, and Computer Science.
</Typography>

        </Paper>
      </motion.div>
    </Grid>

    {/* Graduation Card */}
    <Grid size={{xs:12,md:6}}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Paper
          elevation={4}
          sx={{
            p: 4,
            borderRadius: 4,
            textAlign: 'center',
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.palette.mode === 'dark'
              ? '0 4px 20px rgba(25, 118, 210, 0.15)'
              : '0 4px 12px rgba(0,0,0,0.08)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            '&:hover': {
              transform: 'translateY(-8px) scale(1.02)',
              boxShadow: theme.palette.mode === 'dark'
                ? '0 8px 30px rgba(25,118,210,0.3)'
                : '0 8px 24px rgba(0,0,0,0.15)',
              backgroundColor: theme.palette.action.hover,
            },
          }}
        >
          <EmojiEvents sx={{ fontSize: 50, color: theme.palette.secondary.main, mb: 2 }} />
          <Typography variant="h6" fontWeight="bold" mb={1}>
            Graduation
          </Typography>
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
  Completed my Bachelor's in <strong>Computer Science</strong> from <strong>IFET College of Engineering</strong>, focusing on Frontend Development and UI/UX Design.
</Typography>

        </Paper>
      </motion.div>
    </Grid>
  </Grid>
</Box>


    </Box>
  );
};

export default About;
