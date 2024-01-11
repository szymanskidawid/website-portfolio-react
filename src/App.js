import Header from './components/header-section/Header'
import Sections from './components/sections/Sections';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import ContextProviders from './components/contexts/ContextProviders';
import { I18n } from 'react-polyglot';

import englishMessages from './components/languages/english.json';
import polishMessages from './components/languages/polish.json';

function App() {
  const [lightMode, setLightMode] = useState(false);
  const [locale, setLocale] = useState("english");
  const [messages, setMessages] = useState({});

  useEffect(() => {
    if (lightMode) {
      document.body.classList.add("light-mode-body");
    } else {
      document.body.classList.remove("light-mode-body");
    }
  }, [lightMode])

  const messagesByLocale = {
    english: englishMessages,
    polish: polishMessages,
  };
  
  useEffect(() => {
    const result = messagesByLocale[locale];
    setMessages(result);
  }, [locale]);

  return (
    <div className='App'>
      <I18n locale={locale} messages={messages}>
        <ContextProviders {...{ lightMode, setLightMode, locale, setLocale }}>
          <Header />
          <Sections />
          <Footer />
        </ContextProviders>
      </I18n> 
    </div>
  );
}

export default App;