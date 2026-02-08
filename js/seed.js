(function () {
  var S = window.PulseDeskStorage;
  if (!S) return;
  var existing = S.getTickets();
  if (existing && existing.length > 0) return;
  function rid() {
    return "t_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }
  function iso(d) {
    return d.toISOString();
  }
  var now = new Date();
  var tickets = [
    {
      id: rid(),
      title: "Login issue on mobile",
      customer: "Acme Corp",
      priority: "urgent",
      status: "open",
      assignee: "Alex Johnson",
      createdAt: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 2)),
      description: "Users report being unable to login on iOS devices.",
      comments: [],
      history: [{ at: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 2)), action: "created" }]
    },
    {
      id: rid(),
      title: "Billing invoice mismatch",
      customer: "Globex",
      priority: "high",
      status: "in_progress",
      assignee: "Maria Lee",
      createdAt: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 3)),
      description: "Customer reports invoice totals do not match usage.",
      comments: [],
      history: [{ at: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 3)), action: "created" }]
    },
    {
      id: rid(),
      title: "Feature request: dark mode",
      customer: "Stark Industries",
      priority: "medium",
      status: "open",
      assignee: "Priya Patel",
      createdAt: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 7)),
      description: "Request to add dark mode to the dashboard.",
      comments: [],
      history: [{ at: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 7)), action: "created" }]
    },
    {
      id: rid(),
      title: "API latency spikes",
      customer: "Wayne Enterprises",
      priority: "high",
      status: "open",
      assignee: "Chen Wu",
      createdAt: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 1)),
      description: "Intermittent latency spikes observed in region us-east-1.",
      comments: [],
      history: [{ at: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 1)), action: "created" }]
    },
    {
      id: rid(),
      title: "CSV export broken",
      customer: "Umbrella Ltd",
      priority: "low",
      status: "resolved",
      assignee: "Sara Kim",
      createdAt: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 10)),
      description: "CSV export produced malformed files.",
      comments: [],
      history: [
        { at: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 10)), action: "created" },
        { at: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 8)), action: "resolved" }
      ]
    },
    {
      id: rid(),
      title: "Onboarding emails not sent",
      customer: "Initech",
      priority: "medium",
      status: "in_progress",
      assignee: "Tom Baker",
      createdAt: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 4)),
      description: "New users do not receive onboarding emails.",
      comments: [],
      history: [{ at: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 4)), action: "created" }]
    }
  ];
  S.saveTickets(tickets);
})();
