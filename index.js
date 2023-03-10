// ==UserScript==
// @name         9dm每日计算自动填入
// @namespace    http://tampermonkey.net/
// @version      2.3.1
// @description  9dm每日计算验证自动填入；旧的收藏页面域名com重定向到新的net；搜索计算自动验证
// @author       liuyubing
// @match        *://www.9dmdamaomod.com/*
// @match        *://www.9dmdamaomod.net/*
// @match        *://www.9damaogame.net/*
// @match        *://www.9damaogames.com/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  const { search, protocol, pathname } = window.location;
  if (/\/gonggao\//.test(pathname)) {
    // 如果pathname为/gonggao/则为com到net重定向地址
    window.open(protocol + "//www.9damaogames.com" + search ? "/forum.php" + search : "", "_self");
  }

  // 每日计算自动填入
  setTimeout(() => {
    if (document.getElementsByName("answer").length) {
      document.getElementsByName("answer")[0].value = document
        .querySelector("b")
        .innerText.replace(/[^0-9]/gi, ",")
        .split(",")
        .filter((i) => Number(i))
        .reduce((a, b) => Number(a) + Number(b));
      document.getElementsByName("secqsubmit")[0].click();
    }
  }, 100);

  // 搜索计算自动验证
  document.querySelector('.mask').style.display = 'none';
})();
