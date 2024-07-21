import englishMessages from './components/languages/english.json';
import polishMessages from './components/languages/polish.json';
import Header from './components/header-section/Header';
import Sections from './components/sections/Sections';
import Footer from './components/Footer';

import ContextProviders from './components/contexts/ContextProviders';
import { useState, useEffect, useRef } from 'react';
import { I18n } from 'react-polyglot';

function App() {
  const [lightMode, setLightMode] = useState(false);
  const [locale, setLocale] = useState("english");
  const [messages, setMessages] = useState(englishMessages);

  const navBarRef = useRef(null);
  const sectionHeaderRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const projectsRef = useRef(null);
  

  useEffect(() => {
    const messagesByLocale = {
      english: englishMessages,
      polish: polishMessages,
    };

    const result = messagesByLocale[locale];
    setMessages(result);
  }, [locale]);

  return (
    <div className={`App ${lightMode ? 'light-mode-app' : ''}`}>
      <I18n locale={locale} messages={messages}>
        <ContextProviders {...{ lightMode, setLightMode, locale, setLocale, navBarRef, sectionHeaderRef, aboutRef, resumeRef, projectsRef }}>
          <Header />
          <Sections />
          <Footer />
        </ContextProviders>
      </I18n> 
    </div>
  );
}

export default App;