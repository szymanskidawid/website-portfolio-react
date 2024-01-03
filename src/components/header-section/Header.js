import FlagUK from '../../assets/pictures/flag-uk.png'
import FlagPL from '../../assets/pictures/flag-pl.png'
import { useContext } from 'react'
import { LightModeContext } from '../contexts/LightModeContext';

const Header = () => {
  const { lightMode, setLightMode } = useContext(LightModeContext);

  return (
    <header className={`nav-bar ${lightMode && 'light-mode-nav-bar'}`}>
      <div className="language-buttons">
        <div className="all-btns english-language-button">
          <img src={FlagUK} className="fa-beat" />
        </div>
        <div className="all-btns polish-language-button inactive">
          <img src={FlagPL} className="fa-beat" />
        </div>  
      </div>
      <nav className="nav-bar-right">
        <div className="all-btns top-button">
          <div className="top-button-icon">
            <i className="fa-solid fa-arrow-up fa-bounce"></i>
          </div>
          <div className="top-button-text lang-toggle" data-key="topBtn">
            Top
          </div>
        </div>
        <div className="all-btns about-button lang-toggle" data-key="aboutBtn">
          About
        </div>
        <div className="all-btns resume-button lang-toggle" data-key="resumeBtn">
          Resume
        </div>
        <div className="all-btns projects-button lang-toggle" data-key="projectsBtn">
          Projects
        </div>
        <div className="all-btns color-mode-button" onClick={() => setLightMode(!lightMode)}>
          <i className="icon-change fa fa-sun fa-beat"></i>
        </div>
      </nav>  
    </header>
  )
}

export default Header