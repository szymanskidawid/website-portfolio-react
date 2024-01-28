import { useState, useContext } from 'react'
import { useTranslate } from 'react-polyglot';
import { LightModeContext } from '../../contexts/LightModeContext';
import { websiteLinks } from '../../helpers/websiteLinks'
import { openECommerceStore } from '../../helpers/openECommerceStore';
import SectionHeaders from "../SectionHeaders"
import Projects from "./Projects";
import ProjectSelectionButton from './ProjectSelectionButton';

const ProjectsSection = () => {
  const { lightMode } = useContext(LightModeContext);
  const [ selectedProject, setSelectedProject ] = useState("project1");
  const t = useTranslate();

  const projects = Projects();
  const currentProject = projects[selectedProject];

  return (
    <>
      <SectionHeaders text="Projects" />
      <section className={`section projects-section ${lightMode && "light-mode-sections"}`}>
        <div className="project">
          <div className="project-top-section">
            <h2 className="project-header text-underline">
              {currentProject.header}
            </h2>
            <div className={`all-btns project-repo-button ${lightMode && "light-mode-cv-link"}`} onClick={() => websiteLinks(selectedProject)}>
              <i className="repo-icon fa-brands fa-github fa-xl"></i>
              <p className="project-repo-button-text">GitHub Repo</p>
            </div>
          </div>
          <div className="project-text-section">
            <p>
              {currentProject.text1}
            </p>
            <p className="project-paragraphs">
              {currentProject.text2}
            </p>
            <p className="project-paragraphs">
              {currentProject.text3}
            </p>
          </div>
          <div className="project-gifs-section">
            <div className="project-gif">
              <img src={currentProject.gifs[0].src} alt={currentProject.gifs[0].alt} />
              <p className="project-gif-label">
                {currentProject.gifs[0].label}
              </p>
            </div>
            <div className="project-gif">
              <img src={currentProject.gifs[1].src} alt={currentProject.gifs[1].alt} />
              <p className="project-gif-label">
                {currentProject.gifs[1].label}
              </p>
            </div> 
            <div className="project-gif">
              <img src={currentProject.gifs[2].src} alt={currentProject.gifs[2].alt} />
              <p className="project-gif-label">
                {currentProject.gifs[2].label}
              </p>
            </div> 
          </div>
          <div className="project-bottom-section">
            <div className="project-technologies">
              <h3 className="project-technologies-header">
                {t('projectTech')}
              </h3>
              <div className="project-technologies-text-container">
                <p className="project-technologies-text">{currentProject.technologies}</p>
              </div>
            </div>
            <div className={`project-zoom-info${lightMode && "light-mode-cv-link"}`}>
              {t('projectHoverInfo')}
            </div> 
          </div>
        </div>
        <div className="project-selection-buttons-container">
          <ProjectSelectionButton text={"Portfolio Website"} icon={"fa-globe"} onClick={() => setSelectedProject("project1")}/>
          <ProjectSelectionButton text={"Employee Management App"} icon={"fa-database"} onClick={() => setSelectedProject("project2")}/>
          <ProjectSelectionButton text={"E-Commerce Store"} icon={"fa-sack-dollar"} onClick={() => openECommerceStore()}/>         
        </div>
      </section>
    </>
  )
}

export default ProjectsSection