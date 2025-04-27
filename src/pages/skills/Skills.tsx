// import React from 'react';
// import { Box, Typography, useTheme } from '@mui/material';
// import {SiReact,SiRedux,SiMui,SiTailwindcss,SiTypescript,SiHtml5,SiCss3,SiNodedotjs,SiExpress,SiMongodb,SiGit,SiVite,SiPostman,} from 'react-icons/si';
// import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'; // Ant Design icons
// import { BsBootstrap } from 'react-icons/bs'; // Bootstrap icon

// const skillSet = [
//   { name: 'React', icon: <SiReact />, color: '#61DAFB' },
//   { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
//   { name: 'MUI', icon: <SiMui />, color: '#007FFF' },
//   { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38BDF8' },
//   { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
//   { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
//   { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
//   { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
//   { name: 'Express', icon: <SiExpress />, color: '#000000' },
//   { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
//   { name: 'Git', icon: <SiGit />, color: '#F05032' },
//   { name: 'Vite', icon: <SiVite />, color: '#646CFF' },
//   { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
//   { name: 'JavaScript', icon: <AiFillGithub />, color: '#F0DB4F' },  // JavaScript icon
//   { name: 'Bootstrap', icon: <BsBootstrap />, color: '#563D7C' },    // Bootstrap icon
//   { name: 'Ant Design', icon: <AiFillHtml5 />, color: '#1890FF' },   // Ant Design icon
// ];

// const Skills: React.FC = () => {
//   const theme = useTheme();

//   return (
//     <Box
//       id="skills"
//       sx={{
//         py: 10,
//         overflow: 'hidden',
//         backgroundColor: theme.palette.mode === 'dark' ? '#111' : '#fefefe',
//         textAlign: 'center',
//         position: 'relative',
//       }}
//     >
//       <Typography
//         variant="h4"
//         fontWeight="bold"
//         mb={6}
//         sx={{
//           borderBottom: `3px solid ${theme.palette.primary.main}`,
//           display: 'inline-block',
//         }}
//       >
//         Skills
//       </Typography>

//       <Box
//         sx={{
//           overflow: 'hidden',
//           position: 'relative',
//         }}
//       >
//         {/* Create a smooth infinite loop */}
//         <Box
//           sx={{
//             display: 'flex',
//             gap: '3rem',
//             whiteSpace: 'nowrap',
//             animation: 'scrollSkills 10s linear infinite', // Infinite smooth scroll
//             scrollBehavior: 'smooth',
//           }}
//         >
//           {skillSet.map((skill, i) => (
//             <Box
//               key={i}
//               sx={{
//                 minWidth: 120,
//                 textAlign: 'center',
//                 px: 2,
//                 py: 3,
//                 borderRadius: 3,
//                 position: 'relative',
//                 backgroundColor:
//                   theme.palette.mode === 'dark' ? '#1e1e1e' : '#f5f5f5',
//                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
//                 overflow: 'hidden',
//                 transition: 'transform 0.3s ease',
//                 '&:hover': {
//                   transform: 'scale(1.05)',
//                 },
//                 '&::before': {
//                   content: '""',
//                   position: 'absolute',
//                   top: 0,
//                   left: '-100%',
//                   width: '100%',
//                   height: '100%',
//                   background: `linear-gradient(120deg, transparent, ${skill.color}, transparent)`,
//                   transition: 'left 0.3s ease',
//                 },
//                 '&:hover::before': {
//                   left: '100%',
//                   transition: 'left 0.6s ease',
//                 },
//                 '&:hover svg': {
//                   color: skill.color,
//                 },
//               }}
//             >
//               <Box fontSize="2.5rem" mb={1}>
//                 {skill.icon}
//               </Box>
//               <Typography fontSize="1rem" fontWeight={500}>
//                 {skill.name}
//               </Typography>
//             </Box>
//           ))}
//           {/* Clone the items for infinite scrolling */}
//           {skillSet.map((skill, i) => (
//             <Box
//               key={i + skillSet.length} // Avoid duplicate keys
//               sx={{
//                 minWidth: 120,
//                 textAlign: 'center',
//                 px: 2,
//                 py: 3,
//                 borderRadius: 3,
//                 position: 'relative',
//                 backgroundColor:
//                   theme.palette.mode === 'dark' ? '#1e1e1e' : '#f5f5f5',
//                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
//                 overflow: 'hidden',
//                 transition: 'transform 0.3s ease',
//                 '&:hover': {
//                   transform: 'scale(1.05)',
//                 },
//                 '&::before': {
//                   content: '""',
//                   position: 'absolute',
//                   top: 0,
//                   left: '-100%',
//                   width: '100%',
//                   height: '100%',
//                   background: `linear-gradient(120deg, transparent, ${skill.color}, transparent)`,
//                   transition: 'left 0.3s ease',
//                 },
//                 '&:hover::before': {
//                   left: '100%',
//                   transition: 'left 0.6s ease',
//                 },
//                 '&:hover svg': {
//                   color: skill.color,
//                 },
//               }}
//             >
//               <Box fontSize="2.5rem" mb={1}>
//                 {skill.icon}
//               </Box>
//               <Typography fontSize="1rem" fontWeight={500}>
//                 {skill.name}
//               </Typography>
//             </Box>
//           ))}
//         </Box>
//       </Box>

//       {/* Add the CSS for the infinite scroll animation */}
//       <style>
//         {`
//           @keyframes scrollSkills {
//             0% {
//               transform: translateX(0);
//             }
//             100% {
//               transform: translateX(-50%);  /* Moves half of the container */
//             }
//           }
//         `}
//       </style>
//     </Box>
//   );
// };

// export default Skills;


import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { 
  SiReact, SiRedux, SiMui, SiTailwindcss, SiTypescript, SiHtml5, SiCss3, 
  SiNodedotjs, SiExpress, SiMongodb, SiGit, SiVite, SiPostman 
} from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { BsBootstrap } from 'react-icons/bs';
import type { FC, ReactElement } from 'react';
import "./skills.css";


const skillSet = [
  { name: 'React', icon: <SiReact />, color: '#61DAFB' },
  { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
  { name: 'MUI', icon: <SiMui />, color: '#007FFF' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38BDF8' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
  { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
  { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
  { name: 'Express', icon: <SiExpress />, color: '#000000' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  { name: 'Git', icon: <SiGit />, color: '#F05032' },
  { name: 'Vite', icon: <SiVite />, color: '#646CFF' },
  { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
  { name: 'GitHub', icon: <AiFillGithub />, color: '#181717' },
  { name: 'Bootstrap', icon: <BsBootstrap />, color: '#563D7C' },
];

const Skills: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      id="skills"
      sx={{
        py: 10,
        overflow: 'hidden',
        backgroundColor: theme.palette.mode === 'dark' ? '#111' : '#fefefe',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={6}
        sx={{
          borderBottom: `3px solid ${theme.palette.primary.main}`,
          display: 'inline-block',
        }}
      >
        Skills
      </Typography>

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            gap: '3rem',
            whiteSpace: 'nowrap',
            animation: 'scrollSkills 25s linear infinite',
          }}
        >
          {/* Normal Skills */}
          {skillSet.map((skill, i) => (
            <SkillCard key={i} skill={skill} />
          ))}
          {/* Duplicated Skills */}
          {skillSet.map((skill, i) => (
            <SkillCard key={i + skillSet.length} skill={skill} />
          ))}
        </Box>
      </Box>

      {/* Scroll animation */}
      <style>
        {`
          @keyframes scrollSkills {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </Box>
  );
};

// Separate small SkillCard component
const SkillCard: FC<{ skill: { name: string; icon: ReactElement; color: string } }> = ({ skill }) => { 

  const theme = useTheme();
  return (
    <Box
      sx={{
        minWidth: 120,
        textAlign: 'center',
        px: 2,
        py: 3,
        borderRadius: 3,
        backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#f5f5f5',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        transition: 'transform 0.3s ease',
        position: 'relative',
        '&:hover': {
          transform: 'scale(1.05)',
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background: `linear-gradient(120deg, transparent, ${skill.color}, transparent)`,
          transition: 'left 0.3s ease',
        },
        '&:hover::before': {
          left: '100%',
          transition: 'left 0.6s ease',
        },
        '&:hover svg': {
          color: skill.color,
        },
      }}
    >
      <Box fontSize="2.5rem" mb={1}>
        {skill.icon}
      </Box>
      <Typography fontSize="1rem" fontWeight={500}>
        {skill.name}
      </Typography>
    </Box>
  );
};

export default Skills;
