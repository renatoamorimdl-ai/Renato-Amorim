(function () {
  'use strict';

  /* ====== CONFIGURAÇÃO — edite aqui ====== */
  var WHATSAPP = '5581995701768'; // DDI + DDD + número, só dígitos
  /* ======================================= */

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Menu mobile
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Botão flutuante do WhatsApp
  var wa = document.getElementById('waFloat');
  if (wa) {
    var msg = 'Olá! Vim pelo site e gostaria de um diagnóstico de tráfego para o meu negócio.';
    wa.href = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(msg);
  }

  // Formulário -> WhatsApp
  var form = document.getElementById('leadForm');
  var err = document.getElementById('formError');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var nome = (d.get('nome') || '').toString().trim();
      var empresa = (d.get('empresa') || '').toString().trim();
      var verba = (d.get('verba') || '').toString();
      var objetivo = (d.get('objetivo') || '').toString();

      if (!nome || !empresa || !verba || !objetivo) {
        if (err) err.hidden = false;
        return;
      }
      if (err) err.hidden = true;

      var text =
        'Olá! Meu nome é ' + nome + '.\n' +
        'Empresa/segmento: ' + empresa + '\n' +
        'Investimento mensal em anúncios: ' + verba + '\n' +
        'Objetivo: ' + objetivo + '\n\n' +
        'Gostaria de um diagnóstico gratuito.';

      window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
    });
  }

  // Contadores animados
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    var dur = 1400;
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var counters = document.querySelectorAll('[data-count]');

  if ('IntersectionObserver' in window && !reduce) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          animateCount(en.target);
          co.unobserve(en.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(function (c) { co.observe(c); });

    // Reveal on scroll
    var targets = document.querySelectorAll('.stat, .card, .feat, .steps li, .flow__step, .ladder li, .faq details, .pains li');
    targets.forEach(function (t) { t.classList.add('reveal'); });
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('is-in');
          ro.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (t) { ro.observe(t); });
  } else {
    counters.forEach(function (c) {
      c.textContent = c.getAttribute('data-count') + (c.getAttribute('data-suffix') || '');
    });
  }
})();
