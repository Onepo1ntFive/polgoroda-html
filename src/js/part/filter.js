(function () {

  //range
  if (document.querySelector('.js-range')) {
    let sliderSelectors = document.querySelectorAll('.js-range');
    let sliderSlider = null
    let sliderSliderMinInput = null
    let sliderSliderMsxInput = null
    let min = null
    let max = null
    let step = null


    Array.prototype.forEach.call(sliderSelectors, function (el, i) {
      sliderSlider = el.querySelector('.js-range-slider');
      sliderSliderMinInput = el.querySelector('.js-range-min');
      sliderSliderMsxInput = el.querySelector('.js-range-max');
      min = +el.dataset.min;
      max = +el.dataset.max;
      step = +el.dataset.step;

      noUiSlider.create(sliderSlider, {
        start: [min, max],
        step: step,
        connect: true,
        format: wNumb({
          decimals: 0,
        }),
        range: {
          'min': min,
          'max': max
        }
      });

      const snapValues = [
        sliderSliderMinInput,
        sliderSliderMsxInput
      ];
      sliderSlider.noUiSlider.on('update', function (values, handle) {
        snapValues[handle].value = values[handle];
      });

      sliderSliderMinInput.addEventListener('change', function () {
        sliderSlider.noUiSlider.set([this.value, null]);
      });
      sliderSliderMsxInput.addEventListener('change', function () {
        sliderSlider.noUiSlider.set([null, this.value]);
      });
    });
  }

  // acc 
  const accBtns = document.querySelectorAll('.js-acc-title');
  let accContent = null;
  Array.prototype.forEach.call(accBtns, function (el, i) {
    el.addEventListener('click', function (event) {
      event.preventDefault();

      el.classList.toggle('active');
      accContent = el.nextElementSibling;
      slideToggle(accContent, 300);
    }, false);
  });

  // sidebar
  const showSidebarBtns = document.querySelectorAll('.js-sidebar-filter-show');
  const hideSidebarBtns = document.querySelectorAll('.js-sidebar-filter-hide');
  const body = document.querySelector('body');
  let clickedEl = null;

  Array.prototype.forEach.call(showSidebarBtns, function (el, i) {
    el.addEventListener('click', (event) => {
      event.preventDefault();
      clickedEl = el;
      showSidebar();
    });
  });
  Array.prototype.forEach.call(hideSidebarBtns, function (el, i) {
    el.addEventListener('click', (event) => {
      event.preventDefault();
      hideSidebar();
    });
  });

  const sidebar = document.querySelector('.js-sidebar-filter');
  const sidebarBg = document.querySelector('.js-sidebar-filter-bg');

  function showSidebar() {
    sidebar.classList.add('active');
    sidebarBg.classList.add('active');
    clickedEl.classList.add('active');
    body.classList.add('ov-h')
  }
  function hideSidebar() {
    sidebar.classList.remove('active');
    sidebarBg.classList.remove('active');
    clickedEl.classList.remove('active');
    body.classList.remove('ov-h')
  }

})();