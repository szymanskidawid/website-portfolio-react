import SectionHeaders from "./SectionHeaders"

import Project1_GIF_1 from '../../assets/gifs/project1-1.gif'
import Project1_GIF_2 from '../../assets/gifs/project1-2.gif'
import Project1_GIF_3 from '../../assets/gifs/project1-3.gif'
import Project2_GIF_1 from '../../assets/gifs/project2-1.gif'
import Project2_GIF_2 from '../../assets/gifs/project2-2.gif'
import Project2_GIF_3 from '../../assets/gifs/project2-3.gif'

const ProjectsSection = () => {
  return (
    <>
      <SectionHeaders text="Projects" />
      <section class="section projects-section">
        <div id="project-1" class="project">
          <div class="project-top-section">
            <h2 class="project-header text-underline lang-toggle" data-key="project1Header">
              Portfolio Website
            </h2>
            <div id="repo-btn-1" class="all-btns project-repo-button">
              <i class="repo-icon fa-brands fa-github fa-xl"></i>
              <p class="project-repo-button-text">GitHub Repo</p>
            </div>
          </div>
          <div class="project-text-section">
            <p class="lang-toggle" data-key="project1Text1">
              I have created this very website to display my Front-End Development skills 
              and have my own place to add everything that involve my employment history 
              and current programming abilities.
            </p>
            <p class="project-paragraphs lang-toggle" data-key="project1Text2">
              My focus was on using basic Web Development languages such as HTML, CSS and 
              JavaScript. Additionally, I have used a Font Awesome library for icons with various
              animation and Google Fonts. Additionally I have focused on making all of these features 
              work together for a Responsive Web Design which is a staple of Web Development.
            </p>
            <p class="project-paragraphs lang-toggle" data-key="project1Text3">
              This website contains light/dark mode switch and language change which are
              common practices that help appeal to wider range of users. 
            </p>
          </div>
          <div class="project-gifs-section">
            <div class="project-gif">
              <img src={Project1_GIF_1} alt="Project 1 GIF-1" />
              <p class="project-gif-label lang-toggle" data-key="project1Label1">
                Dark/Light Mode
              </p>
            </div>
            <div class="project-gif">
              <img src={Project1_GIF_2} alt="Project 1 GIF-2" />
              <p class="project-gif-label lang-toggle" data-key="project1Label2">
                Two Languages
              </p>
            </div> 
            <div class="project-gif">
              <img src={Project1_GIF_3} alt="Project 1 GIF-3" />
              <p class="project-gif-label lang-toggle" data-key="project1Label3">
                Hyperlink Buttons
              </p>
            </div> 
          </div>
          <div class="project-bottom-section">
            <div class="project-technologies">
              <h3 class="project-technologies-header lang-toggle" data-key="project1Tech">
                Technologies used for this Project:
              </h3>
              <div class="project-technologies-text-container">
                <p class="project-technologies-text">HTML</p>
                <p class="project-technologies-text">CSS</p>
                <p class="project-technologies-text">JavaScript</p>
                <p class="project-technologies-text">JSON</p>
              </div>
            </div>
            <div class="project-zoom-info lang-toggle" data-key="projectHoverInfo">
              <p>Hover over GIFs for zoom.</p>
            </div> 
          </div>
        </div>
        <div class="project-buttons">
          <div class="all-btns project-button-1">
            <div class="project-button-icon">
              <i class="fa-solid fa-globe fa-2xl"></i>
            </div>
            <h5 class="project-button-text lang-toggle" data-key="projectBtn1">Portfolio Website</h5>
          </div>
          <div class="all-btns project-button-2">
            <div class="project-button-icon">
              <i class="fa-solid fa-database fa-2xl"></i>
            </div>
            <h5 class="project-button-text lang-toggle" data-key="projectBtn2">Employee Management App</h5>
          </div>          
        </div>
      </section>
    </>
  )
}

export default ProjectsSection