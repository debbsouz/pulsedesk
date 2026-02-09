;(function(w, d){
  var S = w.PulseDeskStorage;
  if (!S) return;
  var UI = {};
  function applyTheme(theme){
    var t = theme==="dark" ? "dark" : "light";
    d.documentElement.setAttribute("data-theme", t);
  }
  function initTheme(){
    var settings = S.getSettings();
    applyTheme(settings.theme);
  }
  function ensureToast(){
    var c = d.getElementById("pd-toast");
    if (!c){
      c = d.createElement("div");
      c.id = "pd-toast";
      c.setAttribute("aria-live","polite");
      c.setAttribute("aria-atomic","true");
      d.body.appendChild(c);
    }
    UI.toast = function(msg, type){
      var cls = "toast";
      if (type==="error") cls += " toast-error";
      else cls += " toast-success";
      c.innerHTML = "<div class='"+cls+"'>"+String(msg||"")+"</div>";
      setTimeout(function(){ c.innerHTML=""; }, 2000);
    };
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
    ensureToast();
    ensureToggle();
    highlightNav();
    w.PulseDeskUI = UI;
  }
  if (d.readyState === "loading") d.addEventListener("DOMContentLoaded", init);
  else init();
})(window, document);
