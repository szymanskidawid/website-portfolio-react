export const toggleLanguage = (language) => {
  fetch('languages.json').then(response => response.json()).then(data => {
    const elements = document.getElementsByClassName('lang-toggle');

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const key = element.getAttribute('data-key');
      const defaultText = data.english[key];
      const translatedText = data[language][key];

      if (translatedText) {
        element.innerHTML = translatedText;
      } else {
        element.textContent = defaultText;
      }
    }
  })
  .catch(error => console.error('Error fetching language data:', error));
}