/**
 * Existential Cloud Official Portal (www.existentialcloud.ccwu.cc)
 * High-performance SPA controller:
 * - Tab-based multi-view routing with URL hash synchronization
 * - UN 6-Language i18n engine with complete RTL support
 * - Token & dollar savings simulator
 * - Interactive BM25 tool routing playground
 * - Real-time telemetry event stream simulator & localhost probe
 * - Multi-IDE client configuration switcher
 * - GitHub metrics loader
 */

// Model Pricing (Input cost per 1M tokens in USD as of 2026)
const MODEL_PRICING = {
  "claude-35-sonnet": { name: "Claude 3.5 Sonnet / 3.7", costPerM: 3.00 },
  "gpt-4o": { name: "GPT-4o", costPerM: 2.50 },
  "claude-3-opus": { name: "Claude 3 Opus", costPerM: 15.00 },
  "gemini-15-pro": { name: "Gemini 1.5 / 2.0 Pro", costPerM: 1.25 },
  "gemini-15-flash": { name: "Gemini 1.5 / 2.0 Flash", costPerM: 0.15 },
  "deepseek-v3": { name: "DeepSeek-V3", costPerM: 0.14 },
};

// Configuration Snippets for Modern Agent Clients
const CONFIG_SNIPPETS = {
  claude: `// macOS: ~/Library/Application Support/Claude/claude_desktop_config.json
// Windows: %APPDATA%\\Claude\\claude_desktop_config.json
{
  "mcpServers": {
    "mcp-mesh": {
      "command": "python",
      "args": ["-m", "mcp_mesh.cli", "run", "--federate"]
    }
  }
}`,
  cursor: `// ~/.cursor/mcp.json (or workspace .cursor/mcp.json)
{
  "mcpServers": {
    "mcp-mesh": {
      "command": "mcp-mesh",
      "args": ["run", "--federate"]
    }
  }
}`,
  antigravity: `// ~/.gemini/config/mcp_config.json
{
  "mcpServers": {
    "mcp-mesh": {
      "command": "python",
      "args": ["-m", "mcp_mesh.cli", "run", "--federate"]
    }
  }
}`,
  cli: `# 1. Run instant zero-dependency gateway with auto-federation
uvx mcp-mesh run --federate

# 2. Test natural language tool search across all workstations
uvx mcp-mesh search "postgres query tables" --federate

# 3. View persistent SQLite token economy ledger
uvx mcp-mesh stats --db

# 4. Launch local observability web dashboard
uvx mcp-mesh-ui --port 8765`,
  python: `# Programmatic Embedded Gateway Usage
from mcp_mesh import Gateway

# Initialize gateway with automatic configuration federation
gw = Gateway.federate(auto_prewarm=True)

# Supervised meta-tool search
tools = gw.search_tools(query="audit phantom job postings", limit=3)
print("Matched tools:", [t["name"] for t in tools])

# Supervised execution with pipe drain and circuit breaker
result = gw.invoke_tool("ghost_hunter_audit_posting", {"url": "https://example.com/job/123"})
print("Execution result:", result)
gw.shutdown()`,
};

// Simulated Upstream Tool Catalog for BM25 Routing Playground
const PLAYGROUND_TOOLS = [
  { name: "github.create_pull_request", server: "github-mcp", keywords: ["github", "pr", "pull request", "branch", "git", "review"], tokens: 284, latency: "0.72ms" },
  { name: "github.search_repositories", server: "github-mcp", keywords: ["github", "repo", "search", "code", "stars", "git"], tokens: 215, latency: "0.65ms" },
  { name: "postgres.execute_query", server: "postgres-mcp", keywords: ["postgres", "sql", "query", "database", "select", "table"], tokens: 195, latency: "0.81ms" },
  { name: "postgres.list_tables", server: "postgres-mcp", keywords: ["postgres", "schema", "tables", "database", "columns", "sql"], tokens: 142, latency: "0.55ms" },
  { name: "ghost_hunter.audit_posting", server: "ghost-job-hunter", keywords: ["job", "posting", "audit", "career", "phantom", "scam", "ghost"], tokens: 310, latency: "0.94ms" },
  { name: "ghost_hunter.hunt", server: "ghost-job-hunter", keywords: ["job", "hunt", "search", "remote", "hacker news", "wwr", "career"], tokens: 245, latency: "0.88ms" },
  { name: "slack.post_message", server: "slack-mcp", keywords: ["slack", "message", "channel", "alert", "notify", "chat"], tokens: 180, latency: "0.62ms" },
  { name: "filesystem.read_file", server: "filesystem-mcp", keywords: ["file", "read", "filesystem", "path", "directory", "disk"], tokens: 165, latency: "0.45ms" },
  { name: "filesystem.write_file", server: "filesystem-mcp", keywords: ["file", "write", "save", "filesystem", "disk", "create"], tokens: 190, latency: "0.51ms" },
  { name: "docker.inspect_container", server: "docker-mcp", keywords: ["docker", "container", "inspect", "logs", "image", "daemon"], tokens: 175, latency: "0.78ms" },
  { name: "aws.s3_upload", server: "aws-mcp", keywords: ["aws", "s3", "bucket", "cloud", "upload", "storage"], tokens: 220, latency: "0.85ms" },
  { name: "stripe.create_checkout", server: "stripe-mcp", keywords: ["stripe", "payment", "checkout", "billing", "invoice", "charge"], tokens: 290, latency: "0.91ms" },
];

const VALID_VIEWS = [
  "overview",
  "architecture",
  "simulator",
  "quickstart",
  "security",
  "observability",
  "ecosystem",
  "faq"
];

let streamInterval = null;
let streamIsRunning = true;

document.addEventListener("DOMContentLoaded", () => {
  initI18n();
  initViewRouter();
  initTokenSimulator();
  initPlayground();
  initTelemetrySimulator();
  initCodeTabs();
  initCopyButtons();
  fetchGitHubMetrics();
});

/* -------------------------------------------------------------
 * 1. UN 6-Language Internationalization (i18n) Engine
 * ----------------------------------------------------------- */
function getNestedTranslation(obj, keyPath) {
  return keyPath.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
}

function setLanguage(lang) {
  if (typeof LOCALES === "undefined" || !LOCALES[lang]) {
    lang = "en";
  }
  const locale = LOCALES[lang];
  localStorage.setItem("portal_lang", lang);

  document.documentElement.lang = lang;
  document.documentElement.dir = locale.dir || "ltr";

  const select = document.getElementById("select-lang");
  if (select && select.value !== lang) {
    select.value = lang;
  }

  // Update all elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const translation = getNestedTranslation(locale, key);
    if (translation !== undefined) {
      el.textContent = translation;
    }
  });

  // Update inputs with placeholder data-i18n-placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const translation = getNestedTranslation(locale, key);
    if (translation !== undefined) {
      el.placeholder = translation;
    }
  });

  // Re-trigger simulator recalculation
  if (window.__recalcSimulator) {
    window.__recalcSimulator();
  }
}

function initI18n() {
  const select = document.getElementById("select-lang");
  const stored = localStorage.getItem("portal_lang");
  let targetLang = "en";

  if (stored && typeof LOCALES !== "undefined" && LOCALES[stored]) {
    targetLang = stored;
  } else if (navigator.language) {
    const browserCode = navigator.language.split("-")[0].toLowerCase();
    if (typeof LOCALES !== "undefined" && LOCALES[browserCode]) {
      targetLang = browserCode;
    }
  }

  if (select) {
    select.addEventListener("change", (e) => {
      setLanguage(e.target.value);
    });
  }

  setLanguage(targetLang);
}

/* -------------------------------------------------------------
 * 2. Tab-Switched SPA Router with Hash History
 * ----------------------------------------------------------- */
function switchView(viewName, updateHash = true) {
  if (!VALID_VIEWS.includes(viewName)) {
    viewName = "overview";
  }

  // Update View Panels
  VALID_VIEWS.forEach((v) => {
    const el = document.getElementById(`view-${v}`);
    if (el) {
      if (v === viewName) {
        el.classList.add("active");
        el.style.display = "block";
      } else {
        el.classList.remove("active");
        el.style.display = "none";
      }
    }
  });

  // Update Nav Tab Buttons
  document.querySelectorAll("[data-tab-target]").forEach((btn) => {
    const target = btn.getAttribute("data-tab-target");
    if (target === viewName) {
      btn.classList.add("active");
      btn.classList.add("border-b-2", "border-emerald-400", "text-white");
      btn.classList.remove("border-transparent", "text-zinc-400");
    } else {
      btn.classList.remove("active");
      btn.classList.remove("border-emerald-400", "text-white");
      btn.classList.add("border-transparent", "text-zinc-400");
    }
  });

  // Update Mobile Selector if present
  const mobileSelect = document.getElementById("select-view-mobile");
  if (mobileSelect && mobileSelect.value !== viewName) {
    mobileSelect.value = viewName;
  }

  if (updateHash) {
    window.location.hash = `#${viewName}`;
  }

  window.scrollTo({ top: 0, behavior: "instant" });
}

function initViewRouter() {
  // Bind tab click buttons
  document.querySelectorAll("[data-tab-target]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = btn.getAttribute("data-tab-target");
      switchView(target, true);
    });
  });

  // Bind mobile selector
  const mobileSelect = document.getElementById("select-view-mobile");
  if (mobileSelect) {
    mobileSelect.addEventListener("change", (e) => {
      switchView(e.target.value, true);
    });
  }

  // Listen to hash changes in browser history
  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.replace("#", "").toLowerCase();
    if (VALID_VIEWS.includes(hash)) {
      switchView(hash, false);
    }
  });

  // Initial load
  const initialHash = window.location.hash.replace("#", "").toLowerCase();
  if (VALID_VIEWS.includes(initialHash)) {
    switchView(initialHash, false);
  } else {
    switchView("overview", false);
  }
}

/* -------------------------------------------------------------
 * 3. Interactive Token Savings Simulator
 * ----------------------------------------------------------- */
function initTokenSimulator() {
  const serversInput = document.getElementById("input-servers");
  const toolsInput = document.getElementById("input-tools");
  const modelSelect = document.getElementById("select-model");
  const turnsInput = document.getElementById("input-turns");

  const valServers = document.getElementById("val-servers");
  const valTools = document.getElementById("val-tools");
  const valTurns = document.getElementById("val-turns");

  const outRawTokens = document.getElementById("out-raw-tokens");
  const outMeshTokens = document.getElementById("out-mesh-tokens");
  const outSavedTokens = document.getElementById("out-saved-tokens");
  const outSavedPct = document.getElementById("out-saved-pct");
  const outMonthlyCost = document.getElementById("out-monthly-cost");
  const outTotalTools = document.getElementById("out-total-tools");

  if (!serversInput || !toolsInput || !modelSelect || !turnsInput) return;

  function recalculate() {
    const servers = parseInt(serversInput.value, 10) || 10;
    const toolsPerServer = parseInt(toolsInput.value, 10) || 6;
    const monthlyTurns = parseInt(turnsInput.value, 10) || 5000;
    const modelKey = modelSelect.value;
    const model = MODEL_PRICING[modelKey] || Object.values(MODEL_PRICING)[0];

    if (valServers) valServers.textContent = servers;
    if (valTools) valTools.textContent = toolsPerServer;
    if (valTurns) valTurns.textContent = monthlyTurns.toLocaleString();

    const totalTools = servers * toolsPerServer;
    if (outTotalTools) outTotalTools.textContent = totalTools;

    // Benchmark-calibrated tool schema footprint (~163.17 tokens per tool, matching 9,790 tokens for 60 tools)
    const rawTokens = Math.round(totalTools * 163.17);
    // mcp-mesh gateway dynamic meta-tool footprint: 527 tokens across 4 meta-tools
    const meshTokens = 527;
    const savedPerTurn = Math.max(0, rawTokens - meshTokens);
    const pct = rawTokens > 0 ? ((savedPerTurn / rawTokens) * 100).toFixed(1) : 0;

    // Financial savings per month
    const totalTokensSavedMonth = savedPerTurn * monthlyTurns;
    const dollarSaved = ((totalTokensSavedMonth / 1_000_000) * model.costPerM).toFixed(2);

    if (outRawTokens) outRawTokens.textContent = rawTokens.toLocaleString();
    if (outMeshTokens) outMeshTokens.textContent = meshTokens.toLocaleString();
    if (outSavedTokens) outSavedTokens.textContent = savedPerTurn.toLocaleString();
    if (outSavedPct) outSavedPct.textContent = `${pct}%`;
    if (outMonthlyCost) outMonthlyCost.textContent = `$${dollarSaved}`;
  }

  window.__recalcSimulator = recalculate;

  ["input", "change"].forEach((ev) => {
    serversInput.addEventListener(ev, recalculate);
    toolsInput.addEventListener(ev, recalculate);
    turnsInput.addEventListener(ev, recalculate);
    modelSelect.addEventListener(ev, recalculate);
  });

  recalculate();
}

/* -------------------------------------------------------------
 * 4. Interactive Tool Routing & BM25 Playground
 * ----------------------------------------------------------- */
function initPlayground() {
  const queryInput = document.getElementById("input-playground-query");
  const resultsContainer = document.getElementById("playground-results");

  if (!queryInput || !resultsContainer) return;

  function renderResults(query) {
    query = (query || "").toLowerCase().trim();
    const words = query.split(/\s+/).filter(Boolean);

    let matched = [];
    if (words.length === 0) {
      // Default sample top 4 tools
      matched = PLAYGROUND_TOOLS.slice(0, 4).map((t, idx) => ({
        ...t,
        score: (0.95 - idx * 0.1).toFixed(2),
      }));
    } else {
      matched = PLAYGROUND_TOOLS.map((tool) => {
        let score = 0;
        words.forEach((w) => {
          if (tool.name.includes(w)) score += 2.0;
          if (tool.server.includes(w)) score += 1.5;
          tool.keywords.forEach((k) => {
            if (k.includes(w)) score += 1.0;
          });
        });
        return { ...tool, score: score.toFixed(2) };
      })
        .filter((t) => parseFloat(t.score) > 0)
        .sort((a, b) => parseFloat(b.score) - parseFloat(a.score))
        .slice(0, 5);
    }

    if (matched.length === 0) {
      resultsContainer.innerHTML = `
        <div class="p-4 text-center text-xs font-mono text-zinc-500">
          No tools matched query "${query}". Try searching for "git", "postgres", "job", "file", or "slack".
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = matched
      .map(
        (m) => `
      <div class="p-3 bg-surface border border-subtle rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
        <div class="flex items-center gap-2.5">
          <span class="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
          <span class="text-zinc-100 font-semibold">${m.name}</span>
          <span class="text-[11px] text-zinc-500 border border-subtle px-1.5 py-0.5 rounded bg-zinc-950/60">${m.server}</span>
        </div>
        <div class="flex items-center gap-4 text-zinc-400">
          <span>Score: <strong class="text-emerald-400">${m.score}</strong></span>
          <span>Schema: <strong class="text-white">${m.tokens} tkn</strong></span>
          <span>Latency: <strong class="text-sky-400">${m.latency}</strong></span>
        </div>
      </div>
    `
      )
      .join("");
  }

  queryInput.addEventListener("input", (e) => {
    renderResults(e.target.value);
  });

  renderResults("");
}

/* -------------------------------------------------------------
 * 5. In-Browser Live Telemetry Simulator & Localhost Probe
 * ----------------------------------------------------------- */
function initTelemetrySimulator() {
  const container = document.getElementById("telemetry-log-container");
  const pauseBtn = document.getElementById("btn-stream-toggle");
  const clearBtn = document.getElementById("btn-stream-clear");
  const triggerBtn = document.getElementById("btn-stream-trigger");
  const checkStatusBtn = document.getElementById("btn-check-local-daemon");
  const daemonBadge = document.getElementById("local-daemon-status");

  if (!container) return;

  const sampleEvents = [
    { type: "SEARCH", tool: "mesh_search_tools", q: "pull request", latency: "0.84ms", tkn: "527" },
    { type: "PREWARM", tool: "github-mcp", status: "PID 4192 spawned (asynchronous background)", latency: "1.2ms" },
    { type: "DESCRIBE", tool: "github.create_pull_request", latency: "0.41ms", tkn: "284" },
    { type: "INVOKE", tool: "github.create_pull_request", status: "200 OK", latency: "18.4ms", saved: "9,263" },
    { type: "SEARCH", tool: "mesh_search_tools", q: "postgres tables", latency: "0.76ms", tkn: "527" },
    { type: "PREWARM", tool: "postgres-mcp", status: "PID 4210 pre-warmed", latency: "0.9ms" },
    { type: "INVOKE", tool: "postgres.list_tables", status: "200 OK", latency: "12.1ms", saved: "9,405" },
    { type: "SEARCH", tool: "mesh_search_tools", q: "audit phantom job", latency: "0.91ms", tkn: "527" },
    { type: "INVOKE", tool: "ghost_hunter.audit_posting", status: "200 OK", latency: "24.6ms", saved: "9,237" },
  ];

  let eventIdx = 0;

  function appendEvent(customEvt) {
    const evt = customEvt || sampleEvents[eventIdx % sampleEvents.length];
    eventIdx++;

    const now = new Date();
    const timeStr = now.toTimeString().split(" ")[0] + "." + String(now.getMilliseconds()).padStart(3, "0");

    let tagColor = "text-sky-400 border-sky-500/30";
    if (evt.type === "INVOKE") tagColor = "text-emerald-400 border-emerald-500/30";
    if (evt.type === "PREWARM") tagColor = "text-amber-400 border-amber-500/30";

    const line = document.createElement("div");
    line.className = "log-line text-zinc-300";
    line.innerHTML = `
      <span class="text-zinc-600 select-none shrink-0">${timeStr}</span>
      <span class="border px-1 rounded text-[10px] font-mono shrink-0 ${tagColor}">${evt.type}</span>
      <span class="text-zinc-200 font-semibold shrink-0">${evt.tool}</span>
      <span class="text-zinc-400 flex-1 truncate">${evt.q ? `query="${evt.q}"` : evt.status || ""}</span>
      ${evt.latency ? `<span class="text-sky-400 text-[11px] shrink-0">${evt.latency}</span>` : ""}
      ${evt.saved ? `<span class="text-emerald-400 text-[11px] shrink-0">+${evt.saved} tkn saved</span>` : ""}
    `;

    container.appendChild(line);

    // Keep max 40 lines
    while (container.children.length > 40) {
      container.removeChild(container.firstChild);
    }

    container.scrollTop = container.scrollHeight;
  }

  // Populate initial 5 lines
  for (let i = 0; i < 5; i++) {
    appendEvent();
  }

  function startStream() {
    if (streamInterval) clearInterval(streamInterval);
    streamInterval = setInterval(() => {
      if (streamIsRunning) {
        appendEvent();
      }
    }, 2800);
  }

  startStream();

  if (pauseBtn) {
    pauseBtn.addEventListener("click", () => {
      streamIsRunning = !streamIsRunning;
      pauseBtn.textContent = streamIsRunning ? "Pause Stream" : "Resume Stream";
      pauseBtn.classList.toggle("bg-amber-900/30", !streamIsRunning);
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      container.innerHTML = "";
    });
  }

  if (triggerBtn) {
    triggerBtn.addEventListener("click", () => {
      appendEvent({
        type: "INVOKE",
        tool: "manual_trigger_simulation",
        status: "JSON-RPC 2.0 Success (Supervised Dispatch)",
        latency: "4.8ms",
        saved: "9,263",
      });
    });
  }

  // Local Daemon Probe (Checks 127.0.0.1:8765)
  if (checkStatusBtn && daemonBadge) {
    checkStatusBtn.addEventListener("click", async () => {
      daemonBadge.textContent = "Probing 127.0.0.1:8765...";
      daemonBadge.className = "text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-amber-400 border border-zinc-700";

      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 1500);
        await fetch("http://127.0.0.1:8765/api/health", { method: "GET", signal: controller.signal, mode: "no-cors" });
        clearTimeout(timeout);
        daemonBadge.textContent = "ONLINE (127.0.0.1:8765)";
        daemonBadge.className = "text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-500/40";
      } catch {
        daemonBadge.textContent = "OFFLINE (Local daemon not detected)";
        daemonBadge.className = "text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-700";
      }
    });
  }
}

/* -------------------------------------------------------------
 * 6. Code Tab Switcher
 * ----------------------------------------------------------- */
function initCodeTabs() {
  const tabs = document.querySelectorAll(".code-tab-btn");
  const codeBlock = document.getElementById("code-display");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.remove("active");
        t.classList.remove("border-emerald-400", "text-white");
        t.classList.add("border-transparent", "text-zinc-400");
      });

      tab.classList.add("active", "border-emerald-400", "text-white");
      tab.classList.remove("border-transparent", "text-zinc-400");
      const target = tab.getAttribute("data-tab");
      if (CONFIG_SNIPPETS[target] && codeBlock) {
        codeBlock.textContent = CONFIG_SNIPPETS[target];
      }
    });
  });

  // Initialize with first tab active
  if (codeBlock && CONFIG_SNIPPETS["claude"]) {
    codeBlock.textContent = CONFIG_SNIPPETS["claude"];
  }
}

/* -------------------------------------------------------------
 * 7. Copy to Clipboard Utility
 * ----------------------------------------------------------- */
function initCopyButtons() {
  const copyBtns = document.querySelectorAll(".copy-btn");
  copyBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-copy-target");
      let textToCopy = "";

      if (targetId) {
        const targetEl = document.getElementById(targetId);
        textToCopy = targetEl ? targetEl.textContent : "";
      } else {
        textToCopy = btn.getAttribute("data-copy-text") || "";
      }

      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy.trim()).then(() => {
          const originalHTML = btn.innerHTML;
          btn.innerHTML = `<span style="color: #10b981; font-family: monospace; font-size: 11px;">Copied!</span>`;
          setTimeout(() => {
            btn.innerHTML = originalHTML;
          }, 2000);
        });
      }
    });
  });
}

/* -------------------------------------------------------------
 * 8. Live GitHub Repository Metrics
 * ----------------------------------------------------------- */
async function fetchGitHubMetrics() {
  const repos = [
    { id: "mcp-mesh", repo: "VanSchulist/mcp-mesh" },
    { id: "mcp-mesh-ui", repo: "VanSchulist/mcp-mesh-ui" },
    { id: "ghost-job-hunter", repo: "VanSchulist/ghost-job-hunter" },
    { id: "career-reboot-armor", repo: "VanSchulist/career-reboot-armor" },
  ];

  for (const item of repos) {
    try {
      const res = await fetch(`https://api.github.com/repos/${item.repo}`);
      if (!res.ok) continue;
      const data = await res.json();

      const starEl = document.getElementById(`stars-${item.id}`);
      if (starEl && data.stargazers_count !== undefined) {
        starEl.textContent = `★ ${data.stargazers_count}`;
      }
    } catch {
      // Gracefully silent fallback
    }
  }
}
