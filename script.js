/* Many Many Things — interactions */
(function () {
  "use strict";

  /* ---- year ---- */
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---- visitor counter (tasteful 2000s nod) ---- */
  try {
    var KEY = "mmt_visits";
    var base = 1247; // a friendly starting point
    var n = parseInt(localStorage.getItem(KEY) || "0", 10);
    if (!n) { n = base + Math.floor(Math.random() * 40); }
    n += 1;
    localStorage.setItem(KEY, String(n));
    var el = document.getElementById("visitorCount");
    if (el) {
      var s = n.toLocaleString("en-GB");
      el.textContent = (s.length < 6 ? "0".repeat(6 - s.length) : "") + s;
    }
  } catch (e) { /* private mode — never mind */ }

  /* ---- seamless ribbon (duplicate track so the 50% loop is gapless) ---- */
  var ribbon = document.getElementById("ribbon");
  if (ribbon) { ribbon.innerHTML += ribbon.innerHTML; }

  /* ---- copy email ---- */
  var copyBtn = document.getElementById("copyBtn");
  var toast = document.getElementById("toast");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var addr = "contact@manymanythings.co.uk";
      var done = function () {
        if (!toast) return;
        toast.classList.add("show");
        toast.textContent = "copied!";
        setTimeout(function () { toast.classList.remove("show"); }, 1500);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(addr).then(done).catch(done);
      } else {
        var t = document.createElement("textarea");
        t.value = addr; document.body.appendChild(t); t.select();
        try { document.execCommand("copy"); } catch (e) {}
        document.body.removeChild(t); done();
      }
    });
  }

  /* ---- reveal on scroll ---- */
  var motionOff = document.documentElement.getAttribute("data-motion") === "off";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = [].slice.call(document.querySelectorAll(".reveal"));
  if (motionOff || reduce || !("IntersectionObserver" in window)) {
    items.forEach(function (i) { i.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (i) { io.observe(i); });
  }

  /* ---- logo easter egg: click to reshuffle the little things ---- */
  var mark = document.getElementById("logoMark");
  if (mark) {
    var classes = ["sq", "ci", "di", "ri", "tr"];
    mark.addEventListener("click", function (ev) {
      ev.preventDefault();
      [].slice.call(mark.children).forEach(function (cell) {
        cell.className = classes[Math.floor(Math.random() * classes.length)];
      });
    });
  }
})();
