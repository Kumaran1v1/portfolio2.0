import React, { useMemo, useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Skills from './pages/skills/Skills';
import Experience from './pages/experience/Experience';
import Projects from './pages/works/Works';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true); // Set dark mode as default ✅

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
        primary: {
          main: '#1976d2',
        },
        background: {
          default: darkMode ? '#121212' : '#fff',
          paper: darkMode ? '#1e1e1e' : '#fff',
        },
      },
    }), [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={darkMode} />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer/>
    </ThemeProvider>
  );
};


export default App;