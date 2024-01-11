import { LightModeContext } from './LightModeContext';
import { LocaleContext } from './LocaleContext';
import { ProjectContext } from './ProjectContext';

const ContextProviders = ({ children, lightMode, setLightMode, selectedProject, setSelectedProject, locale, setLocale }) => (
  <LightModeContext.Provider value={{ lightMode, setLightMode }}>
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <ProjectContext.Provider value={{ selectedProject, setSelectedProject }}>
        {children}
      </ProjectContext.Provider>
    </LocaleContext.Provider>
  </LightModeContext.Provider>
);

export default ContextProviders;