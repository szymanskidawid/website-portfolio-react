import { useContext } from 'react'
import { LightModeContext } from './contexts/LightModeContext';

const Footer = () => {
  const { lightMode } = useContext(LightModeContext);

  return (
    <footer className={`footer-section ${lightMode && 'light-mode-footer'}`}> 
      <div className="footer-contacts">
        <div className="footer-contacts-mail">
          <div className="footer-btns">
            <i className="icon-mail fa-regular fa-envelope fa-xl"></i>
          </div>  
          <p>dawidszymanski.dev@outlook.com</p>
        </div>
        <div className="footer-contacts-github">
          <div className="footer-btns">
            <i className="icon-github fa-brands fa-github fa-xl"></i>
          </div>
          <p>szymanskidawid</p>
        </div>
        <div className="footer-contacts-linkedin">
          <div className="footer-btns">
            <i className="icon-linkedin fa-brands fa-linkedin fa-xl"></i>
          </div>
          <p>Dawid Szymański</p>
        </div>
      </div>
      <p className="footer-copyright">
        Copyright © 2023 Dawid Szymański
      </p> 
    </footer>
  )
}

export default Footer