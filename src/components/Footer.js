import { useContext } from 'react'
import { LightModeContext } from './contexts/LightModeContext';

const Footer = () => {
  const { lightMode } = useContext(LightModeContext);

  return (
    <footer class={`footer-section ${lightMode && 'light-mode-footer'}`}> 
      <div class="footer-contacts">
        <div class="footer-contacts-mail">
          <div class="footer-btns">
            <i class="icon-mail fa-regular fa-envelope fa-xl"></i>
          </div>  
          <p>dawidszymanski.dev@outlook.com</p>
        </div>
        <div class="footer-contacts-github">
          <div class="footer-btns">
            <i class="icon-github fa-brands fa-github fa-xl"></i>
          </div>
          <p>szymanskidawid</p>
        </div>
        <div class="footer-contacts-linkedin">
          <div class="footer-btns">
            <i class="icon-linkedin fa-brands fa-linkedin fa-xl"></i>
          </div>
          <p>Dawid Szymański</p>
        </div>
      </div>
      <p class="footer-copyright">
        Copyright © 2023 Dawid Szymański
      </p> 
    </footer>
  )
}

export default Footer