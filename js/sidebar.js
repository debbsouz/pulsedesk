;(function(){
  var body = document.body;
  var sidebar = document.querySelector(".sidebar");
  var toggle = document.getElementById("sidebar-toggle");
  var themeBtn = null;
  if (!sidebar) return;
  var lock = false;
  function setExpanded(expanded){
    if (!expanded) lock = false;
    body.classList.toggle("is-expanded", !!expanded);
    if (toggle) toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
  }
  function getTheme(){
    try { return localStorage.getItem("pulsedesk:theme"); } catch(e){ return null; }
  }
  function setTheme(theme){
    var t = (theme==="dark") ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem("pulsedesk:theme", t); } catch(e){}
  }
  var t0 = getTheme();
  if (t0) setTheme(t0);
  themeBtn = sidebar.querySelector(".theme-btn");
  if (themeBtn){
    themeBtn.addEventListener("click", function(){
      var curr = document.documentElement.getAttribute("data-theme") || "light";
      setTheme(curr==="light" ? "dark" : "light");
    });
  }
  function containsFocus(root){
    var a = document.activeElement;
    return !!a && (root === a || root.contains(a));
  }
  setExpanded(false);
  sidebar.addEventListener("mouseenter", function(){
    if (!lock) setExpanded(true);
  });
  sidebar.addEventListener("mouseleave", function(){
    if (!lock) setExpanded(false);
  });
  sidebar.addEventListener("focusin", function(){
    setExpanded(true);
  });
  sidebar.addEventListener("focusout", function(){
    setTimeout(function(){
      if (!containsFocus(sidebar) && !lock) setExpanded(false);
    }, 0);
  });
  if (toggle){
    toggle.addEventListener("click", function(){
      lock = !lock;
      setExpanded(lock);
    });
  }
})(); 
