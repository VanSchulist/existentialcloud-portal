# 🌩️ Existential Cloud Portal (`existentialcloud.ccwu.cc`)

> **The official public developer portal and interactive showcase for Existential Cloud AI Studio.**  
> Built by Van Schulist (@VanSchulist). Hosted on Cloudflare Pages.

[![Website](https://img.shields.io/badge/Website-www.existentialcloud.ccwu.cc-8A2BE2?style=flat-square)](https://www.existentialcloud.ccwu.cc)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Hosted: Cloudflare Pages](https://img.shields.io/badge/Hosted-Cloudflare%20Pages-orange?style=flat-square)](https://pages.cloudflare.com/)

---

## 🌟 Overview

This repository hosts the static frontend and interactive demonstration suite for **Existential Cloud**—an autonomous open-source AI engineering lab focusing on Model Context Protocol (MCP), agentic coding, and developer tools.

### Key Interactive Features
1. **Interactive MCP Token Savings Simulator**:
   * Real-time dynamic calculator quantifying Turn-0 prompt token exhaustion across 1 to 30 connected MCP servers.
   * Compares static raw schema injection against `mcp-mesh` lazy two-tier meta-tool routing.
   * Computes exact monthly API billing savings across Claude 3.7 Sonnet, Gemini 2.0 Flash, and GPT-4o.
2. **1 + 3 + N Ecosystem Navigation**:
   * Direct deep links to [`mcp-mesh`](https://github.com/VanSchulist/mcp-mesh) (Flagship), [`github-ai-studio`](https://github.com/VanSchulist/github-ai-studio) (Governance), [`ghost-job-hunter`](https://github.com/VanSchulist/ghost-job-hunter), and [`career-reboot-armor`](https://github.com/VanSchulist/career-reboot-armor).
3. **Interactive Configuration Switcher**:
   * One-click copyable configuration snippets for Claude Desktop, Cursor IDE, and standalone CLI.
4. **Live GitHub Metrics**:
   * Asynchronous fetching of repository stars, releases, and telemetry directly from GitHub's REST API.

---

## 🚀 Deployment on Cloudflare Pages

This site is engineered with zero build-step dependencies (Tailwind CDN, pure JavaScript ES6, and responsive semantic HTML), ensuring instant compilation and edge deployment.

### Connecting to Cloudflare Pages (2 Minutes)
1. In the **Cloudflare Dashboard**, navigate to **Workers & Pages** -> **Create application** -> **Pages**.
2. Select **Connect to Git** and choose the `VanSchulist/existentialcloud-portal` repository.
3. Configure build settings:
   * **Framework preset**: *None*
   * **Build command**: *(leave blank)*
   * **Build output directory**: `/`
4. Click **Save and Deploy**.
5. Under **Custom domains**, bind `existentialcloud.ccwu.cc`. Cloudflare will automatically provision SSL certificates and edge DNS routing.

---

## 💻 Local Preview

Run any local HTTP server in the repository directory:

```bash
# Python 3
python -m http.server 8080

# Or Node.js npx
npx serve .
```

Open `http://localhost:8080` in your browser.

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for complete details.

---

**Crafted with 🖤 by [Van Schulist](https://github.com/VanSchulist) | [Existential Cloud](https://www.existentialcloud.ccwu.cc)**
