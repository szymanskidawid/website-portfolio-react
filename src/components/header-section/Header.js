import FlagUK from '../../assets/pictures/flag-uk.png'
import FlagPL from '../../assets/pictures/flag-pl.png'
import { useContext } from 'react'
import { LightModeContext } from '../contexts/LightModeContext';
import { LocaleContext } from '../contexts/LocaleContext';
import { RefsContext } from "../contexts/RefsContext";
import { useTranslate } from 'react-polyglot';

const Header = () => {
  const { lightMode, setLightMode } = useContext(LightModeContext);
  const { locale, setLocale } = useContext(LocaleContext);
  const { navBarRef, sectionHeaderRef, aboutRef, resumeRef, projectsRef } = useContext(RefsContext);

  const t = useTranslate();

  const topScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const sectionScroll = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop - sectionHeaderRef.current.offsetHeight - navBarRef.current.offsetHeight,
      behavior: "smooth"
    });
  }

  return (
    <header ref={navBarRef} className={`nav-bar ${lightMode && 'light-mode-nav-bar'}`}>
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
          <div className="top-button-text" onClick={() => topScroll()}>
            {t('topBtn')}
          </div>
        </div>
        <div className="all-btns about-button" onClick={() => sectionScroll(aboutRef)}>
          {t('aboutBtn')}
        </div>
        <div className="all-btns resume-button" onClick={() => sectionScroll(resumeRef)}>
          {t('resumeBtn')}
        </div>
        <div className="all-btns projects-button" onClick={() => sectionScroll(projectsRef)}>
          {t('projectsBtn')}
        </div>
        <div className="all-btns color-mode-button" onClick={() => setLightMode(!lightMode)}>
          <i className={`fa ${lightMode ? "fa-moon" : "fa-sun"} fa-beat`}></i>
        </div>
      </nav>  
    </header>
  )
}

export default Header