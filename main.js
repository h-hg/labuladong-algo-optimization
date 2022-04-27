// ==UserScript==
// @name         labuladong 算法小抄优化
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  无需其他操作，即可阅读
// @author       Hunter Hwang
// @license MIT
// @match        https://labuladong.github.io/algo/*
// @match        https://labuladong.gitee.io/algo/*
// @icon         https://labuladong.github.io/algo/images/avatar.png
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  document.getElementById('body-inner').style.maxHeight = 'none';
  document.getElementById('read_all_wrapper').style.display = 'none';
})();
