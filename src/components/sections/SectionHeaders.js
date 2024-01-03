import { useContext } from 'react'
import { LightModeContext } from '../contexts/LightModeContext';

const SectionHeaders = ({ text }) => {
  const { lightMode } = useContext(LightModeContext);

  return (
    <h1 class={`section-headers ${lightMode && 'light-mode-header-borders'} fa-fade lang-toggle`}>
        {text}
    </h1>
  )
}

export default SectionHeaders