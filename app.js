/**
 * Existential Cloud Official Portal (www.existentialcloud.ccwu.cc)
 * Core interactive controller: Token savings simulator, tab switcher, GitHub API loader.
 */

// Model Pricing (Input cost per 1M tokens in USD as of September 2026)
const MODEL_PRICING = {
  "gpt-6-astra": { name: "GPT-6 Astra", costPerM: 10.00 },
  "claude-55-sonnet": { name: "Claude Sonnet 5.5", costPerM: 2.00 },
  "gpt-6-sol": { name: "GPT-6.1 Sol", costPerM: 2.00 },
  "claude-55-opus": { name: "Claude Opus 5.5", costPerM: 12.00 },
  "gemini-38-flash": { name: "Gemini 3.8 Flash", costPerM: 0.75 },
  "deepseek-v41-flash": { name: "DeepSeek-V4.1-Flash", costPerM: 0.15 },
};

// Configuration Snippets
const CONFIG_SNIPPETS = {
  claude: `{
  "mcpServers": {
    "mcp-mesh": {
      "command": "python",
      "args": ["-m", "mcp_mesh.cli", "run", "--config", "mcp_mesh.json"]
    }
  }
}`,
  cursor: `{
  "mcpServers": {
    "mcp-mesh": {
      "command": "mcp-mesh",
      "args": ["run", "--config", "\${workspaceFolder}/.mcp-mesh.json"]
    }
  }
}`,
  cli: `# 1. Clone repository
git clone https://github.com/VanSchulist/mcp-mesh.git
cd mcp-mesh

# 2. Run instant demonstration with 5 enterprise mock servers
python main.py demo

# 3. View live token savings report
python main.py stats`,
};

document.addEventListener("DOMContentLoaded", () => {
  initTokenSimulator();
  initCodeTabs();
  initCopyButtons();
  fetchGitHubMetrics();
});

/* -------------------------------------------------------------
 * 1. Interactive Token Savings Simulator
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

    // Average JSON Schema token footprint per tool is ~220 tokens
    const rawTokens = totalTools * 220;
    // mcp-mesh gateway meta-tool overhead is static ~380 tokens
    const meshTokens = 380;
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

  ['input', 'change'].forEach(ev => {
    serversInput.addEventListener(ev, recalculate);
    toolsInput.addEventListener(ev, recalculate);
    turnsInput.addEventListener(ev, recalculate);
    modelSelect.addEventListener(ev, recalculate);
  });

  recalculate();
}

/* -------------------------------------------------------------
 * 2. Code Tab Switcher
 * ----------------------------------------------------------- */
function initCodeTabs() {
  const tabs = document.querySelectorAll(".code-tab-btn");
  const codeBlock = document.getElementById("code-display");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.remove("border-amber-500", "text-amber-400", "bg-amber-950/40");
        t.classList.add("border-transparent", "text-stone-400");
      });

      tab.classList.add("border-amber-500", "text-amber-400", "bg-amber-950/40");
      tab.classList.remove("border-transparent", "text-stone-400");

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
 * 3. Copy to Clipboard Utility
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
          btn.innerHTML = `<span class="text-emerald-400 font-mono text-xs">Copied!</span>`;
          setTimeout(() => {
            btn.innerHTML = originalHTML;
          }, 2000);
        });
      }
    });
  });
}

/* -------------------------------------------------------------
 * 4. Live GitHub Repository Metrics
 * ----------------------------------------------------------- */
async function fetchGitHubMetrics() {
  const repos = [
    { id: "mcp-mesh", repo: "VanSchulist/mcp-mesh" },
    { id: "github-ai-studio", repo: "VanSchulist/github-ai-studio" },
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
        starEl.textContent = data.stargazers_count;
      }
    } catch {
      // Gracefully silent fallback
    }
  }
}
