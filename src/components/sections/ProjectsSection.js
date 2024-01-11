import SectionHeaders from "./SectionHeaders"
import { useState, useContext } from 'react'
import { LightModeContext } from '../contexts/LightModeContext';
import { ProjectContext } from '../contexts/ProjectContext';
import { websiteLinks } from '../helpers/websiteLinks'
import Projects from "./Projects";

const ProjectsSection = () => {
  const { lightMode } = useContext(LightModeContext);
  const [ selectedProject, setSelectedProject ] = useState("project1");

  const projects = Projects;
  const currentProject = projects[selectedProject];

  return (
    <>
      <SectionHeaders text="Projects" />
      <section className={`section projects-section ${lightMode && "light-mode-sections"}`}>
        <div className="project">
          <div className="project-top-section">
            <h2 className="project-header text-underline lang-toggle" data-key="project1Header">
              {currentProject.header}
            </h2>
            <div className={`all-btns project-repo-button ${lightMode && "light-mode-cv-link"}`} onClick={() => websiteLinks(selectedProject)}>
              <i className="repo-icon fa-brands fa-github fa-xl"></i>
              <p className="project-repo-button-text">GitHub Repo</p>
            </div>
          </div>
          <div className="project-text-section">
            <p data-key="project1Text1">
              {currentProject.text1}
            </p>
            <p className="project-paragraphs lang-toggle" data-key="project1Text2">
              {currentProject.text2}
            </p>
            <p className="project-paragraphs lang-toggle" data-key="project1Text3">
              {currentProject.text3}
            </p>
          </div>
          <div className="project-gifs-section">
            <div className="project-gif">
              <img src={currentProject.gifs[0].src} alt={currentProject.gifs[0].alt} />
              <p className="project-gif-label lang-toggle" data-key="project1Label1">
                {currentProject.gifs[0].label}
              </p>
            </div>
            <div className="project-gif">
              <img src={currentProject.gifs[1].src} alt={currentProject.gifs[1].alt} />
              <p className="project-gif-label lang-toggle" data-key="project1Label2">
                {currentProject.gifs[1].label}
              </p>
            </div> 
            <div className="project-gif">
              <img src={currentProject.gifs[2].src} alt={currentProject.gifs[2].alt} />
              <p className="project-gif-label lang-toggle" data-key="project1Label3">
                {currentProject.gifs[2].label}
              </p>
            </div> 
          </div>
          <div className="project-bottom-section">
            <div className="project-technologies">
              <h3 className="project-technologies-header lang-toggle" data-key="project1Tech">
                Technologies used for this Project:
              </h3>
              <div className="project-technologies-text-container">
                <p className="project-technologies-text">{currentProject.technologies}</p>
              </div>
            </div>
            <div className={`project-zoom-info lang-toggle ${lightMode && "light-mode-cv-link"}`} data-key="projectHoverInfo">
              <p>Hover over GIFs for zoom.</p>
            </div> 
          </div>
        </div>
        <div className="project-buttons">
          <div className="all-btns project-button-1" onClick={() => setSelectedProject("project1")}>
            <div className="project-button-icon">
              <i className="fa-solid fa-globe fa-2xl"></i>
            </div>
            <h5 className="project-button-text lang-toggle" data-key="projectBtn1">Portfolio Website</h5>
          </div>
          <div className="all-btns project-button-2" onClick={() => setSelectedProject("project2")}>
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