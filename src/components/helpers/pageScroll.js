export const pageScroll = {
  topScroll: () => {
          window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  },

  navigationButtonsScroll: (button) => {
    const CalculateNavBarHeight = () => {
      return document.querySelector(".nav-bar").offsetHeight;
    };
  
    const CalculateSectionHeaderHeight = () => {
      return document.querySelector(".section-headers").offsetHeight;
    };
  
    const navBarHeight = CalculateNavBarHeight();
    const sectionHeaderHeight = CalculateSectionHeaderHeight();
    const position = document.querySelector(`.${button}-section`);
  
    if (position) {
      window.scrollTo({
        top: position.offsetTop - navBarHeight - sectionHeaderHeight - 25,
        behavior: "smooth"
      });
    }
  }
};