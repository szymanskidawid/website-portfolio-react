import WelcomePicture from '../../assets/pictures/myPicture.png'

const WelcomeSection = () => {
  return (
    <section class="welcome-section">
      <div class="welcome-section-text">
        <p class="welcome-section-text-top lang-toggle" data-key="welcomeText">
          Hi, I am <span class="text-highlights">Dawid Szymański</span>
        </p>
        <p class="welcome-section-text-bottom">
          Full Stack Developer
        </p>
        <div class="welcome-section-contact">
          <div class="all-btns mail-button">
            <i class="icon-mail fa-regular fa-envelope fa-2xl"></i>
          </div>   
          <div class="all-btns github-button">
            <i class="icon-github fa-brands fa-github fa-2xl"></i>
          </div>
          <div class="all-btns linkedin-button">
            <i class="icon-linkedin fa-brands fa-linkedin fa-2xl"></i>
          </div>
        </div>
      </div>
      <div class="welcome-section-image">
        <img src={WelcomePicture} />
      </div>
    </section>
  )
}

export default WelcomeSection