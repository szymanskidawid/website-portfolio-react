export const pageScroll = {
  topScroll: () => {
          window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  },

  navigationButtonsScroll: (name) => {
    const CalculateNavBarHeight = () => {
      return document.querySelector(".nav-bar").offsetHeight;
    };
  
    const CalculateSectionHeaderHeight = () => {
      return document.querySelector(".section-headers").offsetHeight;
    };
  
    const navBarHeight = CalculateNavBarHeight();
    const sectionHeaderHeight = CalculateSectionHeaderHeight();
    const position = document.querySelector(`.${name}-section`);
  
    if (position) {
      window.scrollTo({
        top: position.offsetTop - navBarHeight - sectionHeaderHeight,
        behavior: "smooth"
      });
    }
  }
};