import WelcomePicture from '../../assets/pictures/myPicture.png'

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-section-text">
        <p className="welcome-section-text-top lang-toggle" data-key="welcomeText">
          Hi, I am <span className="text-highlights">Dawid Szymański</span>
        </p>
        <p className="welcome-section-text-bottom">
          Full Stack Developer
        </p>
        <div className="welcome-section-contact">
          <div className="all-btns mail-button">
            <i className="icon-mail fa-regular fa-envelope fa-2xl"></i>
          </div>   
          <div className="all-btns github-button">
            <i className="icon-github fa-brands fa-github fa-2xl"></i>
          </div>
          <div className="all-btns linkedin-button">
            <i className="icon-linkedin fa-brands fa-linkedin fa-2xl"></i>
          </div>
        </div>
      </div>
      <div className="welcome-section-image">
        <img src={WelcomePicture} />
      </div>
    </section>
  )
}

export default WelcomeSection