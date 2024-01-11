import SectionHeaders from "./SectionHeaders"
import { useContext } from 'react'
import { LightModeContext } from '../contexts/LightModeContext';
import { useTranslate } from 'react-polyglot';

const AboutSection = () => {
  const { lightMode } = useContext(LightModeContext);
  const t = useTranslate();

  return (
    <>
      <SectionHeaders text={t('aboutMeHeader')} />
      <section className={`section about-section ${lightMode && "light-mode-sections"}`}>
        <p className="about-section-text lang-toggle" data-key="aboutMeText1">
          {t('aboutMeText1')}
        </p>
        <p className="about-section-text lang-toggle" data-key="aboutMeText2">
          {t('aboutMeText2')}
        </p>
        <p className="about-section-text lang-toggle" data-key="aboutMeText3">
          {t('aboutMeText3')}
        </p>
      </section>
    </>
  )
}

export default AboutSection