/* Gut Save — site interactions. No dependencies. */
(function () {
  'use strict';
  var doc = document.documentElement;
  doc.classList.remove('no-js');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var store = {
    get: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem(k, v); } catch (e) {} },
    sget: function (k) { try { return window.sessionStorage.getItem(k); } catch (e) { return null; } },
    sset: function (k, v) { try { window.sessionStorage.setItem(k, v); } catch (e) {} }
  };

  /* Mobile navigation */
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('main-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); btn.focus();
      }
    });
  }

  /* Scroll reveal */
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else { items.forEach(function (el) { el.classList.add('in'); }); }

  /* Pointer tilt on hero bottle */
  var stage = document.querySelector('.hero-stage');
  var bottle = stage && stage.querySelector('.bottle-3d');
  if (stage && bottle && !reduce && window.matchMedia('(pointer:fine)').matches) {
    stage.addEventListener('pointermove', function (e) {
      var r = stage.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      bottle.style.transform = 'translate(-50%,-50%) rotateY(' + (x * 18).toFixed(2) + 'deg) rotateX(' + (-y * 12).toFixed(2) + 'deg)';
    });
    stage.addEventListener('pointerleave', function () { bottle.style.transform = 'translate(-50%,-50%)'; });
  }

  /* Centered promo modal: ~6s after load, once per 24h after dismissal */
  var modal = document.getElementById('promo-modal');
  var modalOpen = false, lastFocus = null;
  function focusables() { return modal.querySelectorAll('a[href],button:not([disabled])'); }
  function openModal() {
    if (!modal || modalOpen) return;
    lastFocus = document.activeElement; modalOpen = true;
    modal.hidden = false;
    requestAnimationFrame(function () { modal.classList.add('open'); });
    document.body.style.overflow = 'hidden';
    var f = focusables(); if (f.length) f[0].focus();
  }
  function closeModal() {
    if (!modal || !modalOpen) return;
    modalOpen = false; modal.classList.remove('open');
    document.body.style.overflow = '';
    store.set('gs_promo_closed', String(Date.now()));
    setTimeout(function () { modal.hidden = true; }, reduce ? 0 : 320);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  if (modal) {
    modal.addEventListener('click', function (e) { if (e.target === modal || e.target.closest('[data-close]')) closeModal(); });
    document.addEventListener('keydown', function (e) {
      if (!modalOpen) return;
      if (e.key === 'Escape') { closeModal(); return; }
      if (e.key === 'Tab') {
        var f = focusables(); var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    var closed = parseInt(store.get('gs_promo_closed') || '0', 10);
    if (!closed || Date.now() - closed > 864e5) {
      var schedule = function () { setTimeout(openModal, 6000); };
      if (document.readyState === 'complete') schedule(); else window.addEventListener('load', schedule);
    }
  }

  /* Sticky 6-bottle buy bar */
  var bar = document.getElementById('buybar');
  if (bar && store.sget('gs_bar_closed') !== '1') {
    var onScroll = function () {
      var show = window.scrollY > 600;
      bar.classList.toggle('show', show);
      document.body.classList.toggle('has-buybar', show);
    };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
    bar.querySelector('.x').addEventListener('click', function () {
      bar.classList.remove('show'); document.body.classList.remove('has-buybar');
      store.sset('gs_bar_closed', '1'); window.removeEventListener('scroll', onScroll);
    });
  }

  /* Bottom-left informational toast (no fabricated purchase activity) */
  var toast = document.getElementById('info-toast');
  if (toast && store.sget('gs_toast_closed') !== '1') {
    var msgs = [
      'Compare the three Gut Save packages — <a href="/order?package=6">see options</a>',
      'The seller offers a 60-day money-back guarantee on Gut Save.',
      'The 3- and 6-bottle packages include free US shipping.',
      'The 6-bottle package adds 3 digital bonus guides.',
      'One capsule each morning with a big glass of water.'
    ];
    var i = 0, timer = null, stopped = false;
    var text = toast.querySelector('p');
    var show = function () {
      if (stopped) return;
      if (modalOpen) { timer = setTimeout(show, 4000); return; }
      text.innerHTML = msgs[i % msgs.length]; i++;
      toast.classList.add('show');
      setTimeout(function () { toast.classList.remove('show'); }, 6000);
      timer = setTimeout(show, 6000 + 18000 + Math.random() * 8000);
    };
    timer = setTimeout(show, 15000);
    toast.querySelector('button').addEventListener('click', function () {
      stopped = true; clearTimeout(timer); toast.classList.remove('show'); store.sset('gs_toast_closed', '1');
    });
  }

  /* Order page: highlight requested package */
  var pkg = new URLSearchParams(window.location.search).get('package');
  if (pkg && /^(2|3|6)$/.test(pkg)) {
    var card = document.querySelector('[data-package="' + pkg + '"]');
    if (card) { card.classList.add('featured'); }
  }
})();
