/**
 * Existential Cloud Official Portal (www.existentialcloud.ccwu.cc)
 * Core interactive controller: Token savings simulator, tab switcher, GitHub API loader, and UN 6-Language i18n engine.
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
  claude: `// claude_desktop_config.json
{
  "mcpServers": {
    "mcp-mesh": {
      "command": "python",
      "args": ["-m", "mcp_mesh.cli", "run", "--federate"]
    }
  }
}`,
  cursor: `// ~/.cursor/mcp.json
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
  cli: `# Run instant zero-dependency gateway with auto-federation
uvx mcp-mesh run --federate

# Test natural language tool search across all workstations
uvx mcp-mesh search "ghost job audit" --federate

# View persistent SQLite token economy ledger
uvx mcp-mesh stats --db`,
};

document.addEventListener("DOMContentLoaded", () => {
  initI18n();
  initTokenSimulator();
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
 * 2. Interactive Token Savings Simulator
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
 * 3. Code Tab Switcher
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
 * 4. Copy to Clipboard Utility
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
        navigator.clipboard.writeText(textToCopy).then(() => {
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
 * 5. Live GitHub Repository Metrics
 * ----------------------------------------------------------- */
async function fetchGitHubMetrics() {
  const repos = [
    { id: "mcp-mesh", repo: "VanSchulist/mcp-mesh" },
    { id: "mcp-mesh-ui", repo: "VanSchulist/mcp-mesh-ui" },
    { id: "ghost-job-hunter", repo: "VanSchulist/ghost-job-hunter" },
    { id: "github-ai-studio", repo: "VanSchulist/github-ai-studio" },
  ];

  for (const item of repos) {
    try {
      const res = await fetch(`https://api.github.com/repos/${item.repo}`);
      if (!res.ok) continue;
      const data = await res.json();

      const starEl = document.getElementById(`stars-${item.id}`);
      if (starEl && data.stargazers_count !== undefined) {
        starEl.textContent = data.stargazers_count;
      }
    } catch {
      // Gracefully silent fallback
    }
  }
}
