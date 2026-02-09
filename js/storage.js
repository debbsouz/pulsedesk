(function (w) {
  const KEY = "pulseDesk:tickets";
  const SETTINGS_KEY = "pulseDesk:settings";
  function getTickets() {
    const s = localStorage.getItem(KEY);
    if (!s) return [];
    try {
      const v = JSON.parse(s);
      return Array.isArray(v) ? v : [];
    } catch (e) {
      return [];
    }
  }
  function saveTickets(list) {
    const data = Array.isArray(list) ? list : [];
    localStorage.setItem(KEY, JSON.stringify(data));
    return data;
  }
  function clearTickets(){
    localStorage.setItem(KEY, JSON.stringify([]));
    return [];
  }
  function addTicket(ticket) {
    const arr = getTickets();
    arr.push(ticket);
    saveTickets(arr);
    return ticket;
  }
  function getTicketById(id) {
    const arr = getTickets();
    const v = arr.find(function (t) { return String(t && t.id) === String(id); });
    return v || null;
  }
  function updateTicket(updated) {
    const arr = getTickets();
    const idx = arr.findIndex(function (t) { return String(t && t.id) === String(updated && updated.id); });
    if (idx === -1) return null;
    const prev = arr[idx] || {};
    const next = Object.assign({}, prev, updated);
    const prevStatus = String(prev.status || "");
    const nextStatus = String(next.status || "");
    if (nextStatus === "resolved" && !next.resolvedAt) {
      next.resolvedAt = new Date().toISOString();
    }
    if (prevStatus === "resolved" && nextStatus !== "resolved" && next.resolvedAt) {
      next.resolvedAt = null;
    }
    arr[idx] = next;
    saveTickets(arr);
    return arr[idx];
  }
  function getRecentEvents(limit) {
    const list = getTickets();
    const evts = [];
    list.forEach(function (t) {
      const events = Array.isArray(t.events) ? t.events : [];
      events.forEach(function (e) {
        evts.push(Object.assign({ ticketId: t.id }, e));
      });
    });
    evts.sort(function (a, b) {
      return new Date(b.at).getTime() - new Date(a.at).getTime();
    });
    return (limit && limit > 0) ? evts.slice(0, limit) : evts;
  }
  function getSettings(){
    const s = localStorage.getItem(SETTINGS_KEY);
    if (!s) return { agentName: "You", agentEmail: "", theme: "light" };
    try {
      const v = JSON.parse(s);
      return {
        agentName: String(v && v.agentName || "You"),
        agentEmail: String(v && v.agentEmail || ""),
        theme: (v && v.theme)==="dark" ? "dark" : "light"
      };
    } catch (e){
      return { agentName: "You", agentEmail: "", theme: "light" };
    }
  }
  function saveSettings(settings){
    const s = Object.assign({ agentName: "You", agentEmail: "", theme: "light" }, settings||{});
    if (s.theme!=="dark") s.theme = "light";
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
    return s;
  }
  function getTheme(){ return getSettings().theme; }
  function setTheme(theme){
    const cur = getSettings();
    cur.theme = theme==="dark" ? "dark" : "light";
    return saveSettings(cur);
  }
  function createDemoData(){
    const list = getTickets();
    if (list && list.length>0) return false;
    if (typeof w.PulseDeskSeedCreate === "function"){
      const demo = w.PulseDeskSeedCreate();
      saveTickets(demo);
      return true;
    }
    return false;
  }
  w.PulseDeskStorage = { KEY, getTickets, saveTickets, addTicket, getTicketById, updateTicket, getRecentEvents, clearTickets, getSettings, saveSettings, getTheme, setTheme, createDemoData };
})(window);
