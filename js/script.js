(function () {
  'use strict';

  var backTop = document.getElementById('backTop');
  if (backTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        backTop.classList.add('show');
      } else {
        backTop.classList.remove('show');
      }
    });
    backTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  var closeBar = document.querySelector('.btn-close-bar');
  if (closeBar) {
    closeBar.addEventListener('click', function () {
      var bar = document.querySelector('.top-bar');
      if (bar) bar.style.display = 'none';
    });
  }

  var nlForm = document.getElementById('newsletterForm');
  if (nlForm) {
    nlForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = nlForm.querySelector('input[type="email"]');
      var btn = nlForm.querySelector('button');
      if (input && input.value.trim() !== '') {
        var originalText = btn.textContent;
        btn.textContent = 'Thanks!';
        btn.disabled = true;
        input.value = '';
        setTimeout(function () {
          btn.textContent = originalText;
          btn.disabled = false;
        }, 2000);
      }
    });
  }

  var currencyLinks = document.querySelectorAll('.top-links .currency a');
  currencyLinks.forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      currencyLinks.forEach(function (x) { x.classList.remove('active'); });
      a.classList.add('active');
    });
  });

  var dots = document.querySelectorAll('.hero-dots .hd');
  if (dots.length) {
    var i = 0;
    setInterval(function () {
      dots.forEach(function (d) { d.classList.remove('active'); });
      i = (i + 1) % dots.length;
      dots[i].classList.add('active');
    }, 4000);
  }
})();
