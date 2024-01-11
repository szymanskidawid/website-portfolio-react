import SectionHeaders from "./SectionHeaders"
import { useContext } from 'react'
import { LightModeContext } from '../contexts/LightModeContext';

import cvENG from '../../assets/cv-files/Dawid-Szymanski-CV-ENG.pdf'
import cvPL from '../../assets/cv-files/Dawid-Szymanski-CV-PL.pdf'
import { LocaleContext } from "../contexts/LocaleContext";
import { useTranslate } from 'react-polyglot';

const ResumeSection = () => {
  const { lightMode } = useContext(LightModeContext);
  const { locale } = useContext(LocaleContext);
  const t = useTranslate();

  return (
    <>
      <SectionHeaders text={t('resumeHeader')} />
      <section className={`section resume-section ${lightMode && "light-mode-sections"}`}>
      <div id="resume-eng" className="resume-section-left">
        <object className="resume-cv-container" data={locale === "english" ? cvENG : cvPL} type="application/pdf" aria-label="CV" />
        <a href={cvENG} style={{textDecoration: "none"}} target="_blank">
          <p className={`resume-cv-link ${lightMode && "light-mode-cv-link"}`}>
            Click to open my CV in a new window (English version).
          </p>
        </a>
      </div>   
      <div className="resume-section-right">
        <p className="resume-section-text lang-toggle" data-key="resumeTextRight1">
          {t('resumeTextRight1')}
        </p>
        <h4 className="text-underline lang-toggle" data-key="resumeListHeader1">
          {t('resumeListHeader1')}
        </h4>
        <ul className="resume-section-lists">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>JSON</li>
          <li>{t('resumeTextList1')}</li>
          <li>{t('resumeTextList2')}</li>
          <li>{t('resumeTextList3')}</li>
        </ul>
        <h4 className="text-underline">
          .NET Framework
        </h4>
        <ul className="resume-section-lists">
          <li>C#</li>
          <li>Windows Forms</li>
          <li>C++</li>
        </ul>
        <h4 className="text-underline lang-toggle" data-key="resumeListHeader2">
          {t('resumeListHeader2')}
        </h4>
        <ul className="resume-section-lists">
          <li>SQL</li>
        </ul>
      </div>
    </section>
    </>
    
  )
}

export default ResumeSection