import FlagUK from '../../assets/pictures/flag-uk.png'
import FlagPL from '../../assets/pictures/flag-pl.png'
import { pageScroll } from '../helpers/pageScroll';
import { useContext } from 'react'
import { LightModeContext } from '../contexts/LightModeContext';
import { LocaleContext } from '../contexts/LocaleContext';
import { useTranslate } from 'react-polyglot';

const Header = () => {
  const { lightMode, setLightMode } = useContext(LightModeContext);
  const { locale, setLocale } = useContext(LocaleContext);
  const t = useTranslate();

  return (
    <header className={`nav-bar ${lightMode && 'light-mode-nav-bar'}`}>
      <div className="language-buttons">
        <div className={`all-btns english-language-button ${locale === "polish" && "inactive"}`} onClick={() => setLocale("english")}>
          <img src={FlagUK} className="fa-beat" alt="FlagUK"/>
        </div>
        <div className={`all-btns polish-language-button ${locale === "english" && "inactive"}`} onClick={() => setLocale("polish")}>
          <img src={FlagPL} className="fa-beat" alt="FlagPL"/>
        </div>  
      </div>
      <nav className="nav-bar-right">
        <div className="all-btns top-button">
          <div className="top-button-icon">
            <i className="fa-solid fa-arrow-up fa-bounce"></i>
          </div>
          <div className="top-button-text" onClick={() => pageScroll.topScroll()}>
            {t('topBtn')}
          </div>
        </div>
        <div className="all-btns about-button" onClick={() => pageScroll.navigationButtonsScroll("about")}>
          {t('aboutBtn')}
        </div>
        <div className="all-btns resume-button" onClick={() => pageScroll.navigationButtonsScroll("resume")}>
          {t('resumeBtn')}
        </div>
        <div className="all-btns projects-button" onClick={() => pageScroll.navigationButtonsScroll("projects")}>
          {t('projectsBtn')}
        </div>
        <div className="all-btns color-mode-button" onClick={() => setLightMode(!lightMode)}>
          <i className="fa fa-sun fa-beat"></i>
        </div>
      </nav>  
    </header>
  )
}

export default Header