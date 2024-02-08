import { LightModeContext } from './LightModeContext';
import { LocaleContext } from './LocaleContext';

const ContextProviders = ({ children, lightMode, setLightMode, locale, setLocale }) => (
  <LightModeContext.Provider value={{ lightMode, setLightMode }}>
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  </LightModeContext.Provider>
);

export default ContextProviders;