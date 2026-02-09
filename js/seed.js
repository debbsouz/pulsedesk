(function () {
  var S = window.PulseDeskStorage;
  if (!S) return;
  function rid() {
    return "t_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }
  function iso(d) {
    return d.toISOString();
  }
  function buildDemo(){
    var now = new Date();
    return [
    {
      id: rid(),
      title: "Login issue on mobile",
      customer: "Acme Corp",
      priority: "urgent",
      status: "open",
      assignee: "",
      createdAt: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 2)),
      description: "Users report being unable to login on iOS devices.",
      comments: [
        { id: "c1", at: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 2 + 1000 * 60 * 30)), author: "Requester", text: "Cannot login on iPhone." },
        { id: "c2", at: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 2 + 1000 * 60 * 90)), author: "Agent", text: "We are investigating." }
      ],
      firstAgentReplyAt: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 2 + 1000 * 60 * 90)),
      attachments: [
        { id: "a1", name: "details.txt", type: "text/plain", size: 5, dataUrl: "data:text/plain;base64,SGVsbG8=", uploadedAt: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 2 + 1000 * 60 * 95)) }
      ],
      events: [
        { id: "e1", at: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 2)), type: "status", from: "Open", to: "Open" }
      ],
      history: [{ at: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 2)), action: "created" }]
    },
    {
      id: rid(),
      title: "Billing invoice mismatch",
      customer: "Globex",
      priority: "high",
      status: "in_progress",
      assignee: "John",
      createdAt: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 3)),
      description: "Customer reports invoice totals do not match usage.",
      comments: [
        { id: "c3", at: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 3 + 1000 * 60 * 15)), author: "Requester", text: "Totals seem wrong." },
        { id: "c4", at: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 3 + 1000 * 60 * 45)), author: "Agent", text: "Please share your invoice ID." }
      ],
      firstAgentReplyAt: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 3 + 1000 * 60 * 45)),
      events: [
        { id: "e2", at: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 3 + 1000 * 60 * 45)), type: "status", from: "Open", to: "Pending" },
        { id: "e3", at: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 2 + 1000 * 60 * 10)), type: "assignee", from: "Unassigned", to: "John" }
      ],
      history: [{ at: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 3)), action: "created" }]
    },
    {
      id: rid(),
      title: "Feature request: dark mode",
      customer: "Stark Industries",
      priority: "medium",
      status: "open",
      assignee: "",
      createdAt: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 7)),
      description: "Request to add dark mode to the dashboard.",
      comments: [{ id: "c5", at: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 6 + 1000 * 60 * 30)), author: "Requester", text: "Dark mode would be helpful." }],
      events: [{ id: "e4", at: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 6)), type: "priority", from: "Low", to: "Medium" }],
      history: [{ at: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 7)), action: "created" }]
    },
    {
      id: rid(),
      title: "API latency spikes",
      customer: "Wayne Enterprises",
      priority: "high",
      status: "open",
      assignee: "Sarah",
      createdAt: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 1)),
      description: "Intermittent latency spikes observed in region us-east-1.",
      comments: [{ id: "c6", at: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 1 + 1000 * 60 * 25)), author: "Agent", text: "Monitoring latency now." }],
      firstAgentReplyAt: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 1 + 1000 * 60 * 25)),
      events: [{ id: "e5", at: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 1 + 1000 * 60 * 25)), type: "assignee", from: "Unassigned", to: "Sarah" }],
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
      comments: [{ id: "c7", at: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 9)), author: "Agent", text: "Fix deployed, please verify." }],
      firstAgentReplyAt: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 9)),
      resolvedAt: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 8)),
      events: [
        { id: "e6", at: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 9)), type: "status", from: "Pending", to: "Resolved" }
      ],
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
      assignee: "Mike",
      createdAt: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 4)),
      description: "New users do not receive onboarding emails.",
      comments: [{ id: "c8", at: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 4 + 1000 * 60 * 60)), author: "Agent", text: "Resetting mail queue." }],
      events: [
        { id: "e7", at: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 4 + 1000 * 60 * 60)), type: "status", from: "Open", to: "Pending" },
        { id: "e8", at: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 3 + 1000 * 60 * 20)), type: "assignee", from: "Unassigned", to: "Mike" }
      ],
      history: [{ at: iso(new Date(now.getTime() - 1000 * 60 * 60 * 24 * 4)), action: "created" }]
    }
    ];
  }
  window.PulseDeskSeedCreate = function(){
    return buildDemo();
  };
  var existing = S.getTickets();
  if (existing && existing.length > 0) return;
  S.saveTickets(buildDemo());
})();
