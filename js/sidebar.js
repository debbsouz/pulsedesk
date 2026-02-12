;(function(){
  var body = document.body;
  var sidebar = document.querySelector(".sidebar");
  var toggle = document.getElementById("sidebar-toggle");
  var STORAGE_KEY = "pulsedesk:sidebar";
  if (!sidebar) return;
  function apply(state){
    var s = state === "collapsed" ? "collapsed" : "expanded";
    body.dataset.sidebar = s;
    sidebar.classList.toggle("is-collapsed", s === "collapsed");
    if (toggle) toggle.setAttribute("aria-expanded", s === "expanded" ? "true" : "false");
  }
  function getSaved(){
    try { return localStorage.getItem(STORAGE_KEY) || "expanded"; } catch(e){ return "expanded"; }
  }
  function save(state){
    try { localStorage.setItem(STORAGE_KEY, state); } catch(e){}
  }
  apply(getSaved());
  if (toggle){
    toggle.addEventListener("click", function(){
      if (window.innerWidth < 900) {
        var oc = body.dataset.offcanvas === "open" ? "closed" : "open";
        body.dataset.offcanvas = oc;
        return;
      }
      var next = (body.dataset.sidebar === "collapsed") ? "expanded" : "collapsed";
      apply(next);
      save(next);
    });
  }
  // no hover hacks
})(); 
