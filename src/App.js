import Header from './components/header-section/Header'
import Sections from './components/sections/Sections';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import ContextProviders from './components/contexts/ContextProviders';

function App() {
  const [lightMode, setLightMode] = useState(false);
  const [language, setLanguage] = useState("english");

  useEffect(() => {
    if (lightMode) {
      document.body.classList.add("light-mode-body");
    } else {
      document.body.classList.remove("light-mode-body");
    }
  })

  return (
    <div className='App'>
      <ContextProviders {...{ lightMode, setLightMode, language, setLanguage }}>
        <Header />
        <Sections />
        <Footer />
      </ContextProviders>
    </div>
  );
}

export default App;