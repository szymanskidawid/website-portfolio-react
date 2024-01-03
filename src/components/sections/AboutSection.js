import SectionHeaders from "./SectionHeaders"
import { useContext } from 'react'
import { LightModeContext } from '../contexts/LightModeContext';

const AboutSection = ( {className} ) => {
  const { lightMode } = useContext(LightModeContext);

  return (
    <>
      <SectionHeaders text="About Me" />
      <section class={`section about-section ${lightMode && "light-mode-sections"}`}>
        <p class="about-section-text lang-toggle" data-key="aboutMeText1">
          I am a 26 year old curently living and working in <span class="text-highlights">Warsaw</span>, 
          together with my girlfriend and two dogs.  
        </p>
        <p class="about-section-text lang-toggle" data-key="aboutMeText2">
          I have spend majority of my teenage years living abroad in 
          <span class="text-highlights">United Kingdom</span> where I learned <span class="text-highlights">english</span> 
          and studied software development at <span class="text-highlights">Uxbridge College</span>. 
        </p>
        <p class="about-section-text lang-toggle" data-key="aboutMeText3">
          My last 6 months were focused on spending most of my free time to study programming and build 
          my own projects in order to achieve my <span class="text-highlights">goal of a career in programming</span>.
        </p>
      </section>
    </>
  )
}

export default AboutSection