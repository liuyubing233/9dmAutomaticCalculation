// ==UserScript==
// @name         9dm每日计算自动填入
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  9dm 每日计算验证自动填入
// @author       super puffer fish
// @match        *://www.9dmdamaomod.com/*
// @match        *://www.9dmdamaomod.net/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  var timeout = setTimeout(() => {
    clearTimeout(timeout)
    if (document.getElementsByName('answer').length) {
      document.getElementsByName('answer')[0].value = document.querySelector('b').innerText.replace(/[^0-9]/ig,",").split(',').filter(i => Number(i)).reduce((a, b) => Number(a) + Number(b))
      document.getElementsByName('secqsubmit')[0].click()
    }
  }, 100)
})();