import { useContext } from 'react'
import { LightModeContext } from '../contexts/LightModeContext';
import { RefsContext } from '../contexts/RefsContext';

const SectionHeaders = ({ text }) => {
  const { lightMode } = useContext(LightModeContext);
  const { sectionHeaderRef } = useContext(RefsContext);

  return (
    <h1 ref={sectionHeaderRef} className={`section-headers ${lightMode && 'light-mode-header-borders'} fa-fade`}>
        {text}
    </h1>
  )
}

export default SectionHeaders