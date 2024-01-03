import FlagUK from '../../assets/pictures/flag-uk.png'
import FlagPL from '../../assets/pictures/flag-pl.png'
import { useContext } from 'react'
import { LightModeContext } from '../contexts/LightModeContext';

const Header = () => {
  const { lightMode, setLightMode } = useContext(LightModeContext);

  return (
    <header class={`nav-bar ${lightMode && 'light-mode-nav-bar'}`}>
      <div class="language-buttons">
        <div class="all-btns english-language-button">
          <img src={FlagUK} class="fa-beat" />
        </div>
        <div class="all-btns polish-language-button inactive">
          <img src={FlagPL} class="fa-beat" />
        </div>  
      </div>
      <nav class="nav-bar-right">
        <div class="all-btns top-button">
          <div class="top-button-icon">
            <i class="fa-solid fa-arrow-up fa-bounce"></i>
          </div>
          <div class="top-button-text lang-toggle" data-key="topBtn">
            Top
          </div>
        </div>
        <div class="all-btns about-button lang-toggle" data-key="aboutBtn">
          About
        </div>
        <div class="all-btns resume-button lang-toggle" data-key="resumeBtn">
          Resume
        </div>
        <div class="all-btns projects-button lang-toggle" data-key="projectsBtn">
          Projects
        </div>
        <div class="all-btns color-mode-button" onClick={() => setLightMode(!lightMode)}>
          <i class="icon-change fa fa-sun fa-beat"></i>
        </div>
      </nav>  
    </header>
  )
}

export default Header