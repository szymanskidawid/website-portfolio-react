import cvENG from '../../assets/cv-files/Dawid-Szymanski-CV-ENG.pdf'
import cvPL from '../../assets/cv-files/Dawid-Szymanski-CV-PL.pdf'
import SectionHeaders from "./SectionHeaders"
import { useContext } from 'react'
import { LightModeContext } from '../contexts/LightModeContext';
import { LocaleContext } from "../contexts/LocaleContext";
import { useTranslate } from 'react-polyglot';
import { RefsContext } from "../contexts/RefsContext";

const ResumeSection = () => {
  const { lightMode } = useContext(LightModeContext);
  const { locale } = useContext(LocaleContext);
  const { resumeRef } = useContext(RefsContext);

  const t = useTranslate();

  return (
    <>
      <SectionHeaders text={t('resumeHeader')} />
    <section ref={resumeRef} className={`section resume-section ${lightMode && "light-mode-sections"}`}>
        <div id="resume-eng" className="resume-section-left">
          <object className="resume-cv-container" data={locale === "english" ? cvENG : cvPL} type="application/pdf" aria-label="CV" />
          <a href={cvENG} style={{textDecoration: "none"}} target="_blank" rel="noreferrer">
            <p className={`resume-cv-link ${lightMode && "light-mode-special-text"}`}>
              {t('resumeCVLink')}
            </p>
          </a>
        </div>   
        <div className="resume-section-right">
          <p className="resume-section-text">
            {t('resumeTextRight1')}
          </p>
          <h4 className="text-underline">
            {t('resumeListHeader1')}
          </h4>
          <ul className="resume-section-lists">
            <li>HTML + CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js + Express.js</li>
            <li>JSON</li>
            <li>{t('resumeTextList1')}</li>
          </ul>
          <h4 className="text-underline">
            .NET Framework
          </h4>
          <ul className="resume-section-lists">
            <li>C#</li>
            <li>Windows Forms</li>
          </ul>
          <h4 className="text-underline">
            {t('resumeListHeader2')}
          </h4>
          <ul className="resume-section-lists">
            <li>SQL (MySQL)</li>
            <li>Mongoose (MongoDB)</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default ResumeSection