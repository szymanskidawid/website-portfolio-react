import englishMessages from './components/languages/english.json';
import polishMessages from './components/languages/polish.json';
import Header from './components/header-section/Header';
import Sections from './components/sections/Sections';
import Footer from './components/Footer';

import ContextProviders from './components/contexts/ContextProviders';
import { useState, useEffect } from 'react';
import { I18n } from 'react-polyglot';

function App() {
  const [lightMode, setLightMode] = useState(false);
  const [locale, setLocale] = useState("english");
  const [messages, setMessages] = useState({});

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