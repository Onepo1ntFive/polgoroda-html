(function () {

  const dropdownBtns = document.querySelectorAll('.js-dropdown-show');
  const dropdownBlock = document.querySelector('.js-dropdown-menu');

  Array.prototype.forEach.call(dropdownBtns, function (el, i) {
    el.addEventListener('click', function () {
      if (el.classList.contains('active')) {
        el.classList.remove('active');
        dropdownBlock.classList.remove('active');
      } else {
        el.classList.add('active');
        dropdownBlock.classList.add('active');
      }
    }, false);
  });

})();