// ==UserScript==
// @name         vini follow
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*.instagram.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=instagram.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // Seguir automaticamente
  let contador = 0;

  document.addEventListener('keydown', function(event) {
    if (event.key === 's') {
      automaticFollow();
    }
  });

  function automaticFollow() {
    document.querySelectorAll('._acan._acap._acas').forEach((item, index) => {
      setTimeout(() => {
        if (!item.classList.contains('._aacl _aaco _aacw _aad6 _aade')) {
          const date = new Date().toLocaleTimeString();
          item.click();
          contador++;
          console.log(`[${date}] Seu BOT seguiu ${contador} pessoa(s)!`);
        } else {
          const date = new Date().toLocaleTimeString();
          console.log(`[${date}] Você já segue essa pessoa.`);
        }
      }, index * (Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000));
    });
  }
})();
