;(function(w){
  function formatDuration(ms){
    ms = Number(ms||0);
    if (ms <= 0) return "0m";
    var sec = Math.floor(ms/1000);
    var min = Math.floor(sec/60);
    var hr = Math.floor(min/60);
    var day = Math.floor(hr/24);
    sec = sec % 60;
    min = min % 60;
    hr = hr % 24;
    if (day > 0) return day + "d " + hr + "h";
    if (hr > 0) return hr + "h " + min + "m";
    return min + "m " + sec + "s";
  }
  function daysAgoISO(n){
    var d = new Date();
    d.setHours(0,0,0,0);
    d.setDate(d.getDate() - Number(n||0));
    return d.toISOString();
  }
  w.PulseDeskUtils = { formatDuration, daysAgoISO };
})(window);
