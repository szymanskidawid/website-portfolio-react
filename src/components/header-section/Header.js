import FlagUK from '../../assets/pictures/flag-uk.png'
import FlagPL from '../../assets/pictures/flag-pl.png'
import { useContext } from 'react'
import { LightModeContext } from '../contexts/LightModeContext';
import { pageScroll } from '../helpers/pageScroll';
import { LocaleContext } from '../contexts/LocaleContext';
import { useTranslate } from 'react-polyglot';

const Header = () => {
  const { lightMode, setLightMode } = useContext(LightModeContext);
  const { setLocale } = useContext(LocaleContext);
  const t = useTranslate();

  return (
    <header className={`nav-bar ${lightMode && 'light-mode-nav-bar'}`}>
      <div className="language-buttons">
        <div className="all-btns english-language-button" onClick={() => setLocale("english")}>
          <img src={FlagUK} className="fa-beat" />
        </div>
        <div className="all-btns polish-language-button inactive" onClick={() => setLocale("polish")}>
          <img src={FlagPL} className="fa-beat" />
        </div>  
      </div>
      <nav className="nav-bar-right">
        <div className="all-btns top-button">
          <div className="top-button-icon">
            <i className="fa-solid fa-arrow-up fa-bounce"></i>
          </div>
          <div className="top-button-text lang-toggle" onClick={() => pageScroll.topScroll()} data-key="topBtn">
            {t('topBtn')}
          </div>
        </div>
        <div className="all-btns about-button lang-toggle" onClick={() => pageScroll.navigationButtonsScroll("about")} data-key="aboutBtn">
          {t('aboutBtn')}
        </div>
        <div className="all-btns resume-button lang-toggle" onClick={() => pageScroll.navigationButtonsScroll("resume")} data-key="resumeBtn">
          {t('resumeBtn')}
        </div>
        <div className="all-btns projects-button lang-toggle" onClick={() => pageScroll.navigationButtonsScroll("projects")} data-key="projectsBtn">
          {t('projectsBtn')}
        </div>
        <div className="all-btns color-mode-button" onClick={() => setLightMode(!lightMode)}>
          <i className="icon-change fa fa-sun fa-beat"></i>
        </div>
      </nav>  
    </header>
  )
}

export default Header