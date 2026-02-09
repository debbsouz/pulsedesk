(function (w) {
  const KEY = "pulseDesk:tickets";
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
    arr[idx] = Object.assign({}, arr[idx], updated);
    saveTickets(arr);
    return arr[idx];
  }
  w.PulseDeskStorage = { KEY, getTickets, saveTickets, addTicket, getTicketById, updateTicket };
})(window);
