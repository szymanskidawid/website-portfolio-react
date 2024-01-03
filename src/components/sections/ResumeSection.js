import SectionHeaders from "./SectionHeaders"
import { useContext } from 'react'
import { LightModeContext } from '../contexts/LightModeContext';

import cvENG from '../../assets/cv-files/Dawid-Szymanski-CV-ENG.pdf'
import cvPL from '../../assets/cv-files/Dawid-Szymanski-CV-PL.pdf'

const ResumeSection = ( {className} ) => {
  const { lightMode } = useContext(LightModeContext);

  return (
    <>
      <SectionHeaders text="Resume" />
      <section className={`section resume-section ${lightMode && "light-mode-sections"}`}>
      <div id="resume-eng" className="resume-section-left">
        <object className="resume-cv-container" data={cvENG} type="application/pdf" aria-label="CV" />
        <a href={cvENG} style={{textDecoration: "none"}} target="_blank">
          <p className={`resume-cv-link ${lightMode && "light-mode-cv-link"}`}>
            Click to open my CV in a new window (English version).
          </p>
        </a>
      </div>   
      <div className="resume-section-right">
        <p className="resume-section-text lang-toggle" data-key="resumeTextRight1">
          Throughout my programming journey I have accumulated knowledge of using various frameworks, languages and libraries:
        </p>
        <h4 className="text-underline lang-toggle" data-key="resumeListHeader1">
          Web Development
        </h4>
        <ul className="resume-section-lists">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>JSON</li>
          <li className="lang-toggle" data-key="resumeTextList1">SASS (basics)</li>
          <li className="lang-toggle" data-key="resumeTextList2">jQuery (basics)</li>
          <li className="lang-toggle" data-key="resumeTextList3">Bootstrap (basics)</li>
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
          Databases
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