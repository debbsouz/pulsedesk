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
  function timeAgo(iso){
    var t = new Date(iso).getTime();
    if (isNaN(t)) return "";
    var diff = Date.now() - t;
    var s = Math.floor(diff/1000);
    var m = Math.floor(s/60);
    var h = Math.floor(m/60);
    var d = Math.floor(h/24);
    if (d > 0) return d + "d ago";
    if (h > 0) return h + "h ago";
    if (m > 0) return m + "m ago";
    return s + "s ago";
  }
  function withinLastDays(iso, days){
    if (!iso) return false;
    var t = new Date(iso).getTime();
    if (isNaN(t)) return false;
    var since = new Date();
    since.setDate(since.getDate() - Number(days||0));
    return t >= since.getTime();
  }
  w.PulseDeskUtils = { formatDuration, daysAgoISO, timeAgo, withinLastDays };
})(window);
