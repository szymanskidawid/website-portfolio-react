import { LightModeContext } from './LightModeContext';

const ContextProviders = ({ children, lightMode, setLightMode }) => (
  <LightModeContext.Provider value={{ lightMode, setLightMode }}>
    {children}
  </LightModeContext.Provider>
);

export default ContextProviders;