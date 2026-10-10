/*
  Progressive enhancement for the municipal survey pages. The page works without this file:
  every answer is shown in full and every candidate can be opened and closed natively.
  With JavaScript:
    1. Answers taller than 7em (about four lines) are collapsed and get a "Read more" button.
    2. Prev / Next / hash links open the candidate they point to.
*/
(function () {
  "use strict";

  var LIMIT_EM = 7;

  function setCollapsed(answer, button, collapsed) {
    answer.classList.toggle("is-collapsed", collapsed);
    button.firstChild.nodeValue = collapsed ? "Read more" : "Show less";
  }

  function makeButton(answer) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "sv-readmore";
    button.setAttribute("aria-controls", answer.id);
    button.appendChild(document.createTextNode("Read more"));
    var hint = document.createElement("span");
    hint.className = "sv-sr";
    hint.textContent = " of answer to question " + (answer.getAttribute("data-q") || "");
    button.appendChild(hint);
    button.addEventListener("click", function () {
      setCollapsed(answer, button, !answer.classList.contains("is-collapsed"));
    });
    return button;
  }

  // Measure one answer. Answers inside a closed <details> have no height, so they are skipped
  // until the candidate is opened.
  function enhanceAnswer(answer) {
    if (!answer.offsetHeight && !answer.classList.contains("is-collapsed")) return;
    var limit = LIMIT_EM * parseFloat(window.getComputedStyle(answer).fontSize);
    var tooTall = answer.scrollHeight > limit + 1;
    var button = answer.nextElementSibling;
    if (button && !button.classList.contains("sv-readmore")) button = null;

    if (tooTall && !button) {
      button = makeButton(answer);
      answer.parentNode.insertBefore(button, answer.nextSibling);
      setCollapsed(answer, button, true);
    } else if (!tooTall && button) {
      answer.classList.remove("is-collapsed");
      button.parentNode.removeChild(button);
    }
  }

  function enhanceOpen() {
    var open = document.querySelectorAll("details.sv-cand[open] .sv-answer");
    for (var i = 0; i < open.length; i++) enhanceAnswer(open[i]);
  }

  function openTarget(hash) {
    if (!hash || hash.length < 2) return;
    var el;
    try {
      el = document.getElementById(decodeURIComponent(hash.slice(1)));
    } catch (e) {
      return;
    }
    var details = el && el.closest("details");
    if (details && !details.open) details.open = true;
  }

  var timer;
  window.addEventListener("resize", function () {
    window.clearTimeout(timer);
    timer = window.setTimeout(enhanceOpen, 150);
  });
  window.addEventListener("load", enhanceOpen);
  window.addEventListener("hashchange", function () {
    openTarget(window.location.hash);
  });
  document.addEventListener("toggle", function (event) {
    if (event.target.open) enhanceOpen();
  }, true);
  document.addEventListener("click", function (event) {
    var link = event.target.closest && event.target.closest('a[href^="#"]');
    if (link) openTarget(link.getAttribute("href"));
  });

  openTarget(window.location.hash);
  enhanceOpen();
})();
