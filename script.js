(function () {
  'use strict';

  /* ====== CONFIGURAÇÃO ====== */
  var WHATSAPP = '5581995701768'; // DDI + DDD + número, só dígitos
  var DEFAULT_MSG = 'Olá! Vim pelo site e gostaria de um diagnóstico de tráfego para o meu negócio.';
  /* ========================== */

  function waLink(text) {
    return 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(text);
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Links de WhatsApp (botão flutuante e rodapé)
  Array.prototype.forEach.call(document.querySelectorAll('[data-wa]'), function (a) {
    a.href = waLink(DEFAULT_MSG);
  });

  // Menu mobile
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  function closeMenu() {
    if (!nav || !burger) return;
    nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Abrir menu');
  }
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') closeMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
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

      window.open(waLink(text), '_blank', 'noopener');
    });
  }
})();
