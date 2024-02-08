import WelcomePicture from '../../assets/pictures/myPicture.png'
import { websiteLinks } from '../helpers/websiteLinks'
import { useTranslate } from 'react-polyglot';
import { htmlSanitizer } from '../helpers/htmlSanitizer';

const WelcomeSection = () => {
  const t = useTranslate();

  return (
    <section className="welcome-section">
      <div className="welcome-section-text">
        <p className="welcome-section-text-top" dangerouslySetInnerHTML={{ __html: htmlSanitizer(t('welcomeText')) }} />
        <p className="welcome-section-text-bottom">
          Full Stack Developer
        </p>
        <div className="welcome-section-contact">
          <div className="all-btns mail-button" onClick={() => websiteLinks("mail")}>
            <i className="fa-regular fa-envelope fa-2xl" />
          </div>   
          <div className="all-btns github-button" onClick={() => websiteLinks("github")}>
            <i className="fa-brands fa-github fa-2xl" />
          </div>
          <div className="all-btns linkedin-button" onClick={() => websiteLinks("linkedin")}>
            <i className="fa-brands fa-linkedin fa-2xl" />
          </div>
        </div>
      </div>
      <div className="welcome-section-image">
        <img src={WelcomePicture} alt="welcomePicture"/>
      </div>
    </section>
  )
}

export default WelcomeSection