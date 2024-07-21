import SectionHeaders from "./SectionHeaders"
import { useContext } from 'react'
import { useTranslate } from 'react-polyglot';
import { LightModeContext } from '../contexts/LightModeContext';
import { htmlSanitizer } from '../helpers/htmlSanitizer';
import { RefsContext } from "../contexts/RefsContext";

const AboutSection = () => {
  const { lightMode } = useContext(LightModeContext);
  const { aboutRef } = useContext(RefsContext);

  const t = useTranslate();

  return (
    <>
      <SectionHeaders text={t('aboutMeHeader')} />
      <section ref={aboutRef} className={`section about-section ${lightMode && "light-mode-sections"}`}>
        <p className="about-section-text" dangerouslySetInnerHTML={{ __html: htmlSanitizer(t('aboutMeText1')) }} />
        <p className="about-section-text" dangerouslySetInnerHTML={{ __html: htmlSanitizer(t('aboutMeText2')) }} />
        <p className="about-section-text" dangerouslySetInnerHTML={{ __html: htmlSanitizer(t('aboutMeText3')) }} />
      </section>
    </>
  )
}

export default AboutSection