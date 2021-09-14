(function () {

  function setHeight(el, val) {
    if (typeof val === "function") val = val();
    if (typeof val === "string") el.style.height = val;
    else el.style.height = val + "px";
  }

  const mainLevel = document.querySelector('.js-menu-main');
  const menuAchors = document.querySelectorAll('.js-menu-item ins');
  const secondLevel = document.querySelectorAll('.js-menu-next');
  const sidebarLogo = document.querySelector('.js-menu-logo');
  const backBtn = document.querySelector('.js-menu-back');
  let nextLevel = null;
  let mainLevelHeight = mainLevel.offsetHeight;
  let nextLevelHeight = null;

  setHeight(mainLevel, mainLevelHeight);

  Array.prototype.forEach.call(menuAchors, function (el, i) {
    el.addEventListener('click', (event) => {
      event.preventDefault();
      nextLevel = el.parentNode.nextElementSibling;

      secondLevel.forEach(function (item, i) {
        item.classList.remove('active');
      });

      nextLevel.classList.add('active');
      mainLevel.classList.add('active');

      sidebarLogo.classList.remove('active');
      backBtn.classList.add('active');

      nextLevelHeight = nextLevel.offsetHeight;

      setHeight(mainLevel, nextLevelHeight);

    });
  });

  backBtn.addEventListener('click', (event) => {
    event.preventDefault();

    sidebarLogo.classList.add('active');
    backBtn.classList.remove('active');
    mainLevel.classList.remove('active');

    secondLevel.forEach(function (item, i) {
      item.classList.remove('active');
    });

    setHeight(mainLevel, mainLevelHeight);
  });

})();