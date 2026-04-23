document.documentElement.classList.add("js");

const cases = [
  {
    artifact: "Rosetta Stone",
    origin: "Egypt",
    museum: "British Museum (UK)",
    region: "europe",
    status: "ongoing",
    detail:
      "Taken after Napoleon’s campaign and transferred under the 1801 Treaty of Alexandria. Egypt has repeatedly called for return."
  },
  {
    artifact: "Parthenon Sculptures",
    origin: "Greece",
    museum: "British Museum (UK)",
    region: "europe",
    status: "ongoing",
    detail:
      "Removed in the early 19th century by agents of Lord Elgin during Ottoman rule; Greece maintains a sustained reunification campaign."
  },
  {
    artifact: "Benin Bronzes (multiple plaques and heads)",
    origin: "Nigeria",
    museum: "British Museum and others (UK/EU/US)",
    region: "europe",
    status: "progress",
    detail:
      "Looted in the 1897 British punitive expedition. Several institutions have returned pieces, while major holdings remain contested."
  },
  {
    artifact: "Koh-i-Noor Diamond",
    origin: "Punjab region (India claim)",
    museum: "Tower of London collection (UK)",
    region: "europe",
    status: "ongoing",
    detail:
      "Acquired by the British Crown in the colonial period under unequal power conditions, remaining one of the most symbolic ownership disputes."
  },
  {
    artifact: "Hoa Hakananai'a",
    origin: "Rapa Nui (Chile)",
    museum: "British Museum (UK)",
    region: "europe",
    status: "ongoing",
    detail:
      "Removed from Easter Island in 1868 by British naval officers. Rapa Nui representatives have repeatedly requested repatriation."
  },
  {
    artifact: "Bodhisattva and temple objects from Nepal",
    origin: "Kathmandu Valley, Nepal",
    museum: "Metropolitan Museum of Art (US) and private collections",
    region: "north-america",
    status: "progress",
    detail:
      "Investigations by Nepalese activists and scholars documented theft from shrines; multiple pieces have been returned in recent years."
  },
  {
    artifact: "Machu Picchu Collections",
    origin: "Peru",
    museum: "Historically at Yale Peabody Museum (US)",
    region: "north-america",
    status: "progress",
    detail:
      "Objects excavated under early 20th-century arrangements remained abroad for decades before large-scale return agreements."
  },
  {
    artifact: "Khmer antiquities linked to trafficking networks",
    origin: "Cambodia",
    museum: "The Met, Denver Art Museum, others (US)",
    region: "north-america",
    status: "progress",
    detail:
      "Smuggling networks tied to conflict-era looting moved sculptures into elite markets; institutions are now returning several works."
  }
];

const journeySteps = [
  {
    title: "Local Theft",
    copy: "Objects are removed from temples, tombs, or archaeological sites, often where records are weak and guardianship is underfunded."
  },
  {
    title: "Cross-Border Smuggling",
    copy: "Artifacts move through informal routes with falsified declarations, frequently broken into lots to reduce traceability."
  },
  {
    title: "Provenance Laundering",
    copy: "Intermediaries create partial ownership stories via shell collections, old invoices, and anonymous sales records."
  },
  {
    title: "Auction / Dealer Legitimization",
    copy: "High-end markets provide visibility and price discovery, converting opaque origin histories into market credibility."
  },
  {
    title: "Museum Acquisition",
    copy: "Institutional display reframes disputed objects as global heritage, often delaying scrutiny for years."
  },
  {
    title: "Activism and Repatriation",
    copy: "Source communities, journalists, and governments challenge documentation and force returns through diplomacy and public pressure."
  }
];

const timelineEvents = [
  {
    year: "1897",
    title: "Benin punitive expedition",
    detail: "Mass looting of royal artworks from Benin leads to rapid dispersal into Europe’s museum and auction circuits."
  },
  {
    year: "1970",
    title: "UNESCO Convention",
    detail: "Creates a global baseline against illicit import/export, though implementation differs across states and institutions."
  },
  {
    year: "1980s–1990s",
    title: "Conflict-era trafficking surges",
    detail: "Civil wars and weak border controls in parts of Asia and the Middle East fuel transnational antiquities networks."
  },
  {
    year: "2010s",
    title: "Digital provenance activism",
    detail: "Open image archives and social media investigations strengthen source-community claims and identify museum holdings."
  },
  {
    year: "2020s",
    title: "High-profile returns accelerate",
    detail: "US and European institutions increase returns to Nigeria, Cambodia, Nepal, and others amid intensifying public scrutiny."
  }
];

const trendData = [
  { year: "2010", pressure: 28, commitment: 12 },
  { year: "2012", pressure: 32, commitment: 14 },
  { year: "2014", pressure: 37, commitment: 18 },
  { year: "2016", pressure: 44, commitment: 21 },
  { year: "2018", pressure: 57, commitment: 29 },
  { year: "2020", pressure: 69, commitment: 40 },
  { year: "2022", pressure: 81, commitment: 61 },
  { year: "2025", pressure: 89, commitment: 75 }
];

function renderMetrics() {
  const total = cases.length;
  const ongoing = cases.filter((c) => c.status === "ongoing").length;
  const progress = cases.filter((c) => c.status === "progress").length;
  const institutions = new Set(cases.map((c) => c.museum.split(" (")[0])).size;

  const metrics = [
    { value: total, label: "documented featured cases" },
    { value: ongoing, label: "active dispute cases" },
    { value: progress, label: "with return progress" },
    { value: institutions, label: "institution clusters named" }
  ];

  const container = document.getElementById("heroMetrics");
  container.innerHTML = metrics
    .map(
      (item) =>
        `<article class="metric"><strong>${item.value}</strong><span>${item.label}</span></article>`
    )
    .join("");
}

function renderJourney() {
  const container = document.getElementById("journeySteps");
  container.innerHTML = journeySteps
    .map(
      (step, index) =>
        `<article class="step" data-step="Step ${index + 1}">
          <h3>${step.title}</h3>
          <p>${step.copy}</p>
        </article>`
    )
    .join("");
}

function renderCases(filter = "all") {
  const container = document.getElementById("caseGrid");
  const filtered = cases.filter((item) => {
    if (filter === "all") return true;
    if (filter === "ongoing" || filter === "progress") return item.status === filter;
    return item.region === filter;
  });

  container.innerHTML = filtered
    .map(
      (item) => `
      <article class="card">
        <div class="badges">
          <span class="badge">${item.origin}</span>
          <span class="badge">${item.region === "europe" ? "Europe" : "North America"}</span>
          <span class="badge ${item.status === "ongoing" ? "warn" : ""}">
            ${item.status === "ongoing" ? "Dispute Ongoing" : "Repatriation Progress"}
          </span>
        </div>
        <h3>${item.artifact}</h3>
        <p><strong>Current location:</strong> ${item.museum}</p>
        <p>${item.detail}</p>
      </article>
    `
    )
    .join("");
}

function renderTimeline() {
  const container = document.getElementById("timelineList");
  container.innerHTML = timelineEvents
    .map(
      (event, index) => `
        <li>
          <button class="${index === 0 ? "active" : ""}" data-index="${index}">
            <strong>${event.year}</strong> — ${event.title}
          </button>
        </li>
      `
    )
    .join("");

  updateTimelineDetail(0);
}

function updateTimelineDetail(index) {
  const detail = document.getElementById("timelineDetail");
  const event = timelineEvents[index];
  detail.innerHTML = `<h3>${event.year}: ${event.title}</h3><p>${event.detail}</p>`;
}

function renderChart() {
  const chart = document.getElementById("chart");
  chart.innerHTML = trendData
    .map(
      (item) => `
      <div class="bar-group">
        <div class="bar pressure" style="height:${item.pressure}%;" title="Activism pressure: ${item.pressure}"></div>
        <div class="bar commitment" style="height:${item.commitment}%;" title="Institution commitments: ${item.commitment}"></div>
        <div class="bar-label">${item.year}</div>
      </div>
    `
    )
    .join("");
}

function setupFilters() {
  const chips = [...document.querySelectorAll(".chip")];
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((btn) => btn.classList.remove("active"));
      chip.classList.add("active");
      renderCases(chip.dataset.filter);
    });
  });
}

function setupTimelineInteraction() {
  const container = document.getElementById("timelineList");
  container.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-index]");
    if (!btn) return;
    const buttons = container.querySelectorAll("button");
    buttons.forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");
    updateTimelineDetail(Number(btn.dataset.index));
  });
}

function setupExpandablePanels() {
  const toggles = document.querySelectorAll(".expand-toggle");
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const content = toggle.nextElementSibling;
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      content.style.maxHeight = expanded ? "0px" : `${content.scrollHeight + 16}px`;
    });
  });
}

function setupRevealAnimations() {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function setupNav() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("navList");
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

renderMetrics();
renderJourney();
renderCases();
renderTimeline();
renderChart();
setupFilters();
setupTimelineInteraction();
setupExpandablePanels();
setupRevealAnimations();
setupNav();
