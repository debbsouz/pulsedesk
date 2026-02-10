document.addEventListener("DOMContentLoaded", function () {
  var body = document.body;
  var btn = document.getElementById("themeToggle");
  var ico = btn ? btn.querySelector(".theme-ico") : null;
  function getSaved() {
    try { return localStorage.getItem("pulsedesk:theme"); } catch (e) { return null; }
  }
  function saveTheme(v) {
    try { localStorage.setItem("pulsedesk:theme", v); } catch (e) {}
  }
  function applyTheme(v) {
    var t = (v === "dark") ? "dark" : "light";
    body.setAttribute("data-theme", t);
    if (ico) {
      if (t === "light") {
        ico.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
      } else {
        ico.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M21 12.5A8.5 8.5 0 0 1 11.5 3a7 7 0 1 0 9.5 9.5Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      }
    }
  }
  var initial = getSaved() || "dark";
  applyTheme(initial);
  if (btn) {
    btn.setAttribute("aria-label", "Toggle theme");
    btn.addEventListener("click", function () {
      var curr = body.getAttribute("data-theme") || "dark";
      var next = (curr === "dark") ? "light" : "dark";
      applyTheme(next);
      saveTheme(next);
    });
  }
}); 
