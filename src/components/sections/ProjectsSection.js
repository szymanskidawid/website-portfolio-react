import SectionHeaders from "./SectionHeaders"
import { useContext } from 'react'
import { LightModeContext } from '../contexts/LightModeContext';
import { websiteLinks } from '../helpers/websiteLinks'

import Project1_GIF_1 from '../../assets/gifs/project1-1.gif'
import Project1_GIF_2 from '../../assets/gifs/project1-2.gif'
import Project1_GIF_3 from '../../assets/gifs/project1-3.gif'
import Project2_GIF_1 from '../../assets/gifs/project2-1.gif'
import Project2_GIF_2 from '../../assets/gifs/project2-2.gif'
import Project2_GIF_3 from '../../assets/gifs/project2-3.gif'

const ProjectsSection = ( {className} ) => {
  const { lightMode } = useContext(LightModeContext);

  return (
    <>
      <SectionHeaders text="Projects" />
      <section className={`section projects-section ${lightMode && "light-mode-sections"}`}>
        <div id="project-1" className="project">
          <div className="project-top-section">
            <h2 className="project-header text-underline lang-toggle" data-key="project1Header">
              Portfolio Website
            </h2>
            <div id="repo-btn-1" className={`all-btns project-repo-button ${lightMode && "light-mode-cv-link"}`} onClick={() => websiteLinks("repoProject1")}>
              <i className="repo-icon fa-brands fa-github fa-xl"></i>
              <p className="project-repo-button-text">GitHub Repo</p>
            </div>
          </div>
          <div className="project-text-section">
            <p className="lang-toggle" data-key="project1Text1">
              I have created this very website to display my Front-End Development skills 
              and have my own place to add everything that involve my employment history 
              and current programming abilities.
            </p>
            <p className="project-paragraphs lang-toggle" data-key="project1Text2">
              My focus was on using basic Web Development languages such as HTML, CSS and 
              JavaScript. Additionally, I have used a Font Awesome library for icons with various
              animation and Google Fonts. Additionally I have focused on making all of these features 
              work together for a Responsive Web Design which is a staple of Web Development.
            </p>
            <p className="project-paragraphs lang-toggle" data-key="project1Text3">
              This website contains light/dark mode switch and language change which are
              common practices that help appeal to wider range of users. 
            </p>
          </div>
          <div className="project-gifs-section">
            <div className="project-gif">
              <img src={Project1_GIF_1} alt="Project 1 GIF-1" />
              <p className="project-gif-label lang-toggle" data-key="project1Label1">
                Dark/Light Mode
              </p>
            </div>
            <div className="project-gif">
              <img src={Project1_GIF_2} alt="Project 1 GIF-2" />
              <p className="project-gif-label lang-toggle" data-key="project1Label2">
                Two Languages
              </p>
            </div> 
            <div className="project-gif">
              <img src={Project1_GIF_3} alt="Project 1 GIF-3" />
              <p className="project-gif-label lang-toggle" data-key="project1Label3">
                Hyperlink Buttons
              </p>
            </div> 
          </div>
          <div className="project-bottom-section">
            <div className="project-technologies">
              <h3 className="project-technologies-header lang-toggle" data-key="project1Tech">
                Technologies used for this Project:
              </h3>
              <div className="project-technologies-text-container">
                <p className="project-technologies-text">HTML</p>
                <p className="project-technologies-text">CSS</p>
                <p className="project-technologies-text">JavaScript</p>
                <p className="project-technologies-text">JSON</p>
              </div>
            </div>
            <div className={`project-zoom-info lang-toggle ${lightMode && "light-mode-cv-link"}`} data-key="projectHoverInfo">
              <p>Hover over GIFs for zoom.</p>
            </div> 
          </div>
        </div>
        <div className="project-buttons">
          <div className="all-btns project-button-1">
            <div className="project-button-icon">
              <i className="fa-solid fa-globe fa-2xl"></i>
            </div>
            <h5 className="project-button-text lang-toggle" data-key="projectBtn1">Portfolio Website</h5>
          </div>
          <div className="all-btns project-button-2">
            <div className="project-button-icon">
              <i className="fa-solid fa-database fa-2xl"></i>
            </div>
            <h5 className="project-button-text lang-toggle" data-key="projectBtn2">Employee Management App</h5>
          </div>          
        </div>
      </section>
    </>
  )
}

export default ProjectsSection