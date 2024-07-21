import { LightModeContext } from './LightModeContext';
import { LocaleContext } from './LocaleContext';
import { RefsContext } from './RefsContext';


const ContextProviders = ({ children, lightMode, setLightMode, locale, setLocale, navBarRef, sectionHeaderRef, aboutRef, resumeRef, projectsRef }) => (
  <LightModeContext.Provider value={{ lightMode, setLightMode }}>
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <RefsContext.Provider value={{ navBarRef, sectionHeaderRef, aboutRef, resumeRef, projectsRef }}>
        {children}
      </RefsContext.Provider>
    </LocaleContext.Provider>
  </LightModeContext.Provider>
);

export default ContextProviders;