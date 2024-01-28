import englishMessages from './components/languages/english.json';
import polishMessages from './components/languages/polish.json';
import { useState, useEffect } from 'react';
import { I18n } from 'react-polyglot';
import ContextProviders from './components/contexts/ContextProviders';
import { Router } from './components/helpers/Router';

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

  useEffect(() => {
    const messagesByLocale = {
      english: englishMessages,
      polish: polishMessages,
    };

    const result = messagesByLocale[locale];
    setMessages(result);
  }, [locale]);

  return (
    <div className='App'>
      <I18n locale={locale} messages={messages}>
        <ContextProviders {...{ lightMode, setLightMode, locale, setLocale }}>
          <Router />
        </ContextProviders>
      </I18n> 
    </div>
  );
}

export default App;