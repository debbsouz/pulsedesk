;(function(){
  var body = document.body;
  var sidebar = document.querySelector(".sidebar");
  var toggle = document.getElementById("sidebar-toggle");
  if (!sidebar) return;
  var lock = false;
  function setExpanded(expanded){
    if (!expanded) lock = false;
    body.classList.toggle("is-expanded", !!expanded);
    if (toggle) toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
  }
  // Theme handled by theme.js
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
