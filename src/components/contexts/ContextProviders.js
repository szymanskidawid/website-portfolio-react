import { LightModeContext } from './LightModeContext';
import { LanguageContext } from './LanguageContext';
import { ProjectContext } from './ProjectContext';

const ContextProviders = ({ children, lightMode, setLightMode, selectedProject, setSelectedProject, language, setLanguage }) => (
  <LightModeContext.Provider value={{ lightMode, setLightMode }}>
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <ProjectContext.Provider value={{ selectedProject, setSelectedProject }}>
        {children}
      </ProjectContext.Provider>
    </LanguageContext.Provider>
  </LightModeContext.Provider>
);

export default ContextProviders;