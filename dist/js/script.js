window.addEventListener('DOMContentLoaded', () => {
  function menu() {
    const openBtn = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const infoBlock = document.querySelector('.promo__info-block');

    openBtn.addEventListener('click', () => {
      menu.classList.add('active');
      infoBlock.classList.add('active');
    });

    menu.addEventListener('click', (e) => {
      let target = e.target;
      if (
        (target && target === menu) ||
        target.parentNode.className === 'menu__close' ||
        target.parentNode.parentNode.className === 'menu__close' ||
        target.className === 'menu__overlay'
      ) {
        menu.classList.remove('active');
        infoBlock.classList.remove('active');
      }
    });

    document.addEventListener('keydown', (evt) => {
      if (evt.code === 'Escape' && menu.classList.contains('active')) {
        menu.classList.remove('active');
        infoBlock.classList.remove('active');
      }
    });
  }
  menu();

  function promoLinks() {
    const linksWrap = document.querySelector('.promo__links');
    const links = document.querySelectorAll('.promo__link');

    linksWrap.addEventListener('click', (e) => {
      let target = e.target;
      if (target && target.classList.contains('promo__link')) {
        links.forEach((link) => {
          if (target === link) {
            if (!target.classList.contains('promo__link--active')) {
              links.forEach((item) => {
                item.classList.remove('promo__link--active');
              });
              link.classList.add('promo__link--active');
            }
          }
        });
      }
    });
  }
  promoLinks();
});
