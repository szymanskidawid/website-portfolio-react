import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/Variables.css'
import './styles/header-section/Header.css'
import './styles/website-sections/Sections.css'
import './styles/website-sections/WelcomeSection.css'
import './styles/website-sections/AboutSection.css'
import './styles/website-sections/ResumeSection.css'
import './styles/website-sections/ProjectsSection.css'
import './styles/Footer.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();
