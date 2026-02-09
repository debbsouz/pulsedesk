;(function(w, d){
  var S = w.PulseDeskStorage;
  if (!S) return;
  function applyTheme(theme){
    var t = theme==="dark" ? "dark" : "light";
    d.documentElement.setAttribute("data-theme", t);
  }
  function initTheme(){
    var settings = S.getSettings();
    applyTheme(settings.theme);
  }
  function ensureToggle(){
    var right = d.querySelector(".topbar-right");
    if (!right) return;
    var btn = d.getElementById("theme-toggle");
    if (!btn){
      btn = d.createElement("button");
      btn.id = "theme-toggle";
      btn.className = "button secondary";
      btn.type = "button";
      btn.title = "Toggle theme";
      right.insertBefore(btn, right.firstChild);
    }
    function syncLabel(){
      var theme = S.getTheme();
      btn.textContent = theme==="dark" ? "Light" : "Dark";
    }
    syncLabel();
    btn.addEventListener("click", function(){
      var next = S.getTheme()==="dark" ? "light" : "dark";
      S.setTheme(next);
      applyTheme(next);
      syncLabel();
    });
  }
  function highlightNav(){
    var path = (location.pathname||"").toLowerCase();
    var nav = d.querySelector(".nav");
    if (!nav) return;
    Array.prototype.forEach.call(nav.querySelectorAll("a"), function(a){
      a.classList.remove("active");
      var href = (a.getAttribute("href")||"").toLowerCase();
      if (href && path.indexOf(href.toLowerCase()) !== -1){
        a.classList.add("active");
      }
    });
  }
  function init(){
    initTheme();
    ensureToggle();
    highlightNav();
  }
  if (d.readyState === "loading") d.addEventListener("DOMContentLoaded", init);
  else init();
})(window, document);
