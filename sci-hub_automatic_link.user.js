// ==UserScript==
// @name        sci-hub automatic link
// @website     http://fito.md
// @author      Rodolfo Marin
// @description Automatically turns each DOI link in pubmed into a new link to the corresponding document on sci-hub.cc. Original creation from Dorian Depriester http://blog.dorian-depriester.fr
// @downloadURL https://github.com/FitoDotNET/doi2scihub/raw/master/sci-hub_automatic_link.user.js
// @supportURL  https://github.com/FitoDotNET/doi2scihub/issues
// @version     1.0
// @grant       none
// @match        *://*.ncbi.nlm.nih.gov/*
// @run-at      document-idle
// ==/UserScript==
window.addEventListener('load', function() {
   var els = document.getElementsByTagName("A");
   for(var i = 0, l = els.length; i < l; i++) {
      var el = els[i];
      el.href = el.href.replace(/^((http(s|):\/\/|www\.)|)(dx.|)doi\.org\//gim, 'http://whereisscihub.now.sh/go/');
   }
}, false);
