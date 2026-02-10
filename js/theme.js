document.addEventListener("DOMContentLoaded", function () {
  var body = document.body;
  var btn = document.getElementById("themeToggle");
  function getSaved() {
    try { return localStorage.getItem("pulsedesk:theme"); } catch (e) { return null; }
  }
  function saveTheme(v) {
    try { localStorage.setItem("pulsedesk:theme", v); } catch (e) {}
  }
  function applyTheme(v) {
    var t = (v === "dark") ? "dark" : "light";
    body.setAttribute("data-theme", t);
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
