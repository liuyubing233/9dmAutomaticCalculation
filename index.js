// ==UserScript==
// @name         9dm每日计算自动填入
// @namespace    http://tampermonkey.net/
// @version      2.1.0
// @description  9dm每日计算验证自动填入, com重定向到net, 可以直接跳转到旧的收藏页面了
// @author       super puffer fish
// @match        *://www.9dmdamaomod.com/*
// @match        *://www.9dmdamaomod.net/*
// @match        *://www.9damaogame.net/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict'
  const { search, protocol, pathname } = window.location
  if (/\/gonggao\//.test(pathname)) {
    // 如果pathname为/gonggao/则为com到net重定向地址
    window.open(protocol + '//www.9dmdamaomod.net' + search ? '/forum.php' + search : '', '_self')
  }

  var timeout = setTimeout(() => {
    clearTimeout(timeout)
    if (document.getElementsByName('answer').length) {
      document.getElementsByName('answer')[0].value = document.querySelector('b').innerText.replace(/[^0-9]/ig, ",").split(',').filter(i => Number(i)).reduce((a, b) => Number(a) + Number(b))
      document.getElementsByName('secqsubmit')[0].click()
    }
  }, 100)
})()
