(function () {
  if (document.querySelector('.js-collapse-title')) {

    const collpaseTitle = document.querySelector('.js-collapse-title');
    const collpaseContent = document.querySelector('.js-collapse-content');
    let windowWidth = window.innerWidth;

    collpaseTitle.addEventListener('click', (event) => {
      windowWidth = window.innerWidth;

      if (windowWidth < 1200) {
        event.preventDefault();
        slideToggle(collpaseContent, 300);
        collpaseTitle.classList.toggle('collapse');
      }
    })
  }
})();