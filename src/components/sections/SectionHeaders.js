import { useContext } from 'react'
import { LightModeContext } from '../contexts/LightModeContext';

const SectionHeaders = ({ text }) => {
  const { lightMode } = useContext(LightModeContext);

  return (
    <h1 className={`section-headers ${lightMode && 'light-mode-header-borders'} fa-fade`}>
        {text}
    </h1>
  )
}

export default SectionHeaders