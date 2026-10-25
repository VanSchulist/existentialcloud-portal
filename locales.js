/**
 * UN Official Languages Translations for Existential Cloud Portal
 * Supports: en (English), zh (Chinese), es (Spanish), fr (French), ru (Russian), ar (Arabic)
 */

const LOCALES = {
  en: {
    langName: "English",
    dir: "ltr",
    nav: {
      problem: "Problem",
      simulator: "Calculator",
      security: "Security",
      setup: "Client Setup",
      architecture: "Architecture",
      fleet: "Ecosystem",
      faq: "FAQ",
      liveTelemetry: "Live Telemetry UI",
      starGitHub: "Star on GitHub"
    },
    hero: {
      badge: "v1.3.0 RELEASE: UNIVERSAL HETEROGENEOUS MCP FEDERATION",
      title: "Cut LLM prompt bloat by 90%.",
      subtitle: "The dynamic MCP gateway & lazy router.",
      desc: "Connecting coding agents to 10+ Model Context Protocol servers injects 30,000+ tokens of heavy JSON schemas before you type a word. mcp-mesh federates your servers into a single, high-performance bridge—indexing, pre-warming, and routing tools on demand with zero dependencies.",
      metricTokenRed: "Turn-0 Prompt Token Reduction",
      metricDeps: "100% Python Standard Library",
      metricDiscovery: "10-Server Concurrent Discovery",
      metricTests: "Automated Regression Tests Passing"
    },
    problem: {
      tag: "The Bottleneck",
      title: "Why static MCP schemas break coding agents",
      p1Title: "1. Turn-0 Context Exhaustion",
      p1Desc: "Each connected tool adds ~163 tokens of JSON schema. Connecting 60 tools across GitHub, Postgres, and Slack dumps nearly 10,000 tokens into the prompt on every turn, burning dollars before work starts.",
      p2Title: "2. Attention Decay ('Lost in the Middle')",
      p2Desc: "Flooding the context with hundreds of parameter signatures distracts frontier models. High schema density causes parameter hallucinations, invalid formats, and ignored instructions.",
      p3Title: "3. Fragmented Workstation Configs",
      p3Desc: "Developers maintain separate configs across Claude Desktop, Cursor, and Antigravity. Duplicate subprocesses spawn zombie background jobs and slow down workstation performance."
    },
    comparison: {
      tag: "Architecture Comparison",
      title: "Raw Static Injection vs. mcp-mesh Gateway",
      rawLabel: "WITHOUT MESH (STATIC INJECTION)",
      rawSubtitle: "Naive multi-server client architecture",
      rawP1: "9,790 tokens injected into system prompt on turn 0",
      rawP2: "High schema density induces severe attention decay",
      rawP3: "Disparate unmanaged child processes and zombie leaks",
      meshLabel: "WITH MCP-MESH GATEWAY",
      meshSubtitle: "Universal transparent reverse proxy",
      meshP1: "Only 4 lightweight meta-tools (527 tokens total)",
      meshP2: "Sub-millisecond BM25 keyword tool search & predictive pre-warm",
      meshP3: "Continuous stderr drain & dedicated thread lifecycle supervision"
    },
    simulator: {
      tag: "Interactive Calculator",
      title: "Simulate Your Token & Dollar Savings",
      desc: "Adjust parameters to calculate exact context window savings and estimated API bill reductions based on empirical benchmark models.",
      paramsTitle: "Workstation Parameters",
      liveFormula: "Live Formula",
      serversLabel: "Connected Upstream MCP Servers",
      serversSub: "e.g. GitHub, Postgres, Slack, Filesystem, AWS, Stripe...",
      toolsLabel: "Average Tools per Server",
      toolsSub: "Total active tools in fleet: ",
      modelLabel: "Target LLM Model Tier",
      turnsLabel: "Monthly Agent Turns (Prompt Invocations)",
      turnsSub: "Typical active engineering agent usage",
      staticTitle: "Static Injection (Without Mesh)",
      staticDesc: "Prompt tokens burned on turn 0 before user enters code.",
      meshTitle: "With mcp-mesh Gateway",
      meshDesc: "Lightweight meta-tool signatures loaded on demand.",
      savedBannerTitle: "Prompt Context Reduction",
      savedBannerUnit: "saved per turn",
      savedTokensText: "Net tokens avoided per request: ",
      monthlySavedTitle: "Avoided Monthly Spend",
      monthlySavedSub: "Direct API billing dollars eliminated"
    },
    security: {
      tag: "Production Hardening",
      title: "Enterprise-Grade Reliability & Security",
      desc: "mcp-mesh is built with defense-in-depth principles to protect local developer workstations and remote server deployments.",
      s1Title: "DNS Rebinding Protection",
      s1Desc: "Enforces loopback host header verification against malicious browser-origin attacks targeting localhost daemon services.",
      s2Title: "Timing-Safe Bearer Auth",
      s2Desc: "Constant-time token verification via hmac.compare_digest eliminates side-channel timing vulnerabilities on SSE endpoints.",
      s3Title: "Memory & Payload Gating",
      s3Desc: "Strict 10MB payload size ceiling prevents buffer overflow and denial-of-service memory exhaustion attacks.",
      s4Title: "Deadlock-Free Pipe Supervision",
      s4Desc: "Dedicated reader threads and continuous 50-line stderr ring buffers prevent OS pipe capacity deadlocks during high-throughput execution."
    },
    setup: {
      tag: "Configuration",
      title: "One-Command Integration",
      desc: "Add mcp-mesh as your single master MCP bridge. The --federate flag automatically auto-discovers all local server configs."
    },
    fleet: {
      tag: "Portfolio",
      title: "Open Source Ecosystem",
      desc: "Maintained under Existential Cloud AI Studio. All repositories engineered with zero external dependencies."
    },
    faq: {
      tag: "Frequently Asked Questions",
      title: "Everything you need to know about mcp-mesh",
      q1: "Does routing through mcp-mesh add latency to tool calls?",
      a1: "No. In fact, total end-to-end latency decreases significantly. Reducing the prompt token footprint from 10,000 to 527 tokens slashes model pre-fill latency (TTFT) by 60%–70%. Additionally, mcp-mesh predictively pre-warms target downstream subprocesses the instant an agent searches for them.",
      q2: "Do I need to reconfigure all my existing MCP servers?",
      a2: "No. With the --federate flag, mcp-mesh automatically scans Claude Desktop, Cursor, and Antigravity configuration files, unifying all existing servers into a single bridge without manual migration.",
      q3: "Does mcp-mesh send telemetry or data to the cloud?",
      a3: "Zero telemetry leaves your machine. mcp-mesh runs entirely locally with zero external network dependencies, storing telemetry only in your local workstation's SQLite ledger for auditability.",
      q4: "What happens if a downstream MCP server crashes or hangs?",
      a4: "mcp-mesh features built-in isolated circuit breakers. If an upstream server hangs or fails, mcp-mesh safely returns a graceful JSON-RPC error without freezing your host IDE or agent session."
    },
    footer: {
      engineeredBy: "Engineered by",
      under: "under",
      studio: "Existential Cloud AI Studio",
      license: "MIT License",
      zeroDeps: "Zero Dependencies"
    }
  },

  zh: {
    langName: "中文",
    dir: "ltr",
    nav: {
      problem: "核心痛点",
      simulator: "Token 计算器",
      security: "安全加固",
      setup: "客户端接入",
      architecture: "系统架构",
      fleet: "开源生态",
      faq: "常见问题",
      liveTelemetry: "实时监控 UI",
      starGitHub: "GitHub 加星"
    },
    hero: {
      badge: "v1.3.0 正式发布：全网通用异构 MCP 联邦自发现网关",
      title: "削减大模型 90% 首轮 Prompt 膨胀。",
      subtitle: "动态 MCP 反向代理网关与按需工具路由系统。",
      desc: "将 AI 编程助手连接至 10+ 个 Model Context Protocol 服务会在对话前硬塞 30,000+ Tokens 的重型 JSON Schema。mcp-mesh 将分散的服务整合成单端口高性能桥梁——以纯原生零外部依赖实现动态倒排索引、进程预测预热与按需路由。",
      metricTokenRed: "Turn-0 Prompt Token 降低幅度",
      metricDeps: "100% Python 原生标准库实现",
      metricDiscovery: "10+ 服务毫秒级并发自发现",
      metricTests: "自动化回归测试 100% 通过"
    },
    problem: {
      tag: "技术痛点",
      title: "为什么静态 MCP Schema 会拖垮 AI 编程助手",
      p1Title: "1. Turn-0 上下文开局耗尽",
      p1Desc: "每个挂载的工具都需要注入约 163 Tokens 的参数架构定义。同时连接 60 个工具会在首轮对话前直接烧掉近 10,000 Tokens，每次询问都是巨额算力浪费。",
      p2Title: "2. 注意力衰减 ('迷失在中间')",
      p2Desc: "向模型上下文灌入数百个参数规范会严重分散前沿模型（Claude 3.5 Sonnet / GPT-4o）的注意力，导致工具幻觉、参数格式错误以及系统提示词被忽略。",
      p3Title: "3. 客户端配置碎片化与僵尸进程",
      p3Desc: "开发者在 Claude Desktop、Cursor 和 Antigravity 中重复配置分散的服务，频繁产生未及时回收的后台孤儿进程，拖慢开发机性能。"
    },
    comparison: {
      tag: "架构对比",
      title: "原始静态注入 vs. mcp-mesh 动态网关",
      rawLabel: "原生裸连（静态注入模式）",
      rawSubtitle: "传统的直连客户端架构",
      rawP1: "首轮静态硬塞 9,790 Tokens 参数定义",
      rawP2: "超高 Schema 密度引发严重的注意力衰减",
      rawP3: "子进程孤立无托管，容易发生管道阻塞死锁",
      meshLabel: "接入 MCP-MESH 动态网关",
      meshSubtitle: "全透明企业级反向代理架构",
      meshP1: "仅暴露 4 个紧凑元工具（总计仅 527 Tokens）",
      meshP2: "亚毫秒级 BM25 关键词检索，配合子进程并行预热",
      meshP3: "持续排空 stderr 环形缓冲区，专用线程无泄漏托管"
    },
    simulator: {
      tag: "交互式测算",
      title: "测算你节省的上下文 Token 与 API 账单",
      desc: "调整下方参数，基于数学评测模型实时计算可节省的上下文窗口空间与直接削减的每月 API 账单支出。",
      paramsTitle: "开发工作站参数",
      liveFormula: "实时公式",
      serversLabel: "接入的下游 MCP 服务数量",
      serversSub: "例如 GitHub, Postgres, Slack, Filesystem, AWS, Stripe...",
      toolsLabel: "每个服务平均提供的工具数量",
      toolsSub: "生态活跃工具总计: ",
      modelLabel: "目标大模型层级",
      turnsLabel: "每月 Agent 对话轮次 (Prompt Invocations)",
      turnsSub: "活跃工程团队的典型月度调用量",
      staticTitle: "静态直连（未使用 Mesh）",
      staticDesc: "用户输入代码前，首轮对话必须消耗的静态 Token 负担。",
      meshTitle: "通过 mcp-mesh 网关代理",
      meshDesc: "仅暴露轻量级元工具，真实工具参数按需惰性加载。",
      savedBannerTitle: "Prompt 上下文削减比例",
      savedBannerUnit: "单轮调用节省",
      savedTokensText: "单次请求直接避免消耗的 Token: ",
      monthlySavedTitle: "每月直接避免的 API 账单",
      monthlySavedSub: "真金白银省下的 API 调用开支"
    },
    security: {
      tag: "生产级加固",
      title: "企业级高可靠与本地安全纵深防御",
      desc: "mcp-mesh 遵循多层纵深防御工程准则，全面保护本地开发环境与团队集中网关部署。",
      s1Title: "DNS 重绑定穿透防御",
      s1Desc: "在回环实例上强制校验 Host 请求头，阻断恶意网页通过浏览器发起的内网 DNS Rebinding 攻击。",
      s2Title: "时序安全 Bearer 认证",
      s2Desc: "在 SSE 和消息端点采用 hmac.compare_digest 常数时间比对，杜绝侧信道时序认证攻击。",
      s3Title: "10MB 强力防爆限流",
      s3Desc: "强制执行 10MB 请求体上限，直接阻断超大包拒绝服务攻击与开发机内存爆仓。",
      s4Title: "防死锁子进程管道排空",
      s4Desc: "采用专用读取线程与 50 行 stderr 环形排空缓冲机制，彻底解决高吞吐下 OS Pipe 阻塞死锁。"
    },
    setup: {
      tag: "接入配置",
      title: "一键配置无缝接管",
      desc: "只需将 mcp-mesh 设为唯一的 MCP 入口。配合 --federate 参数即可自动扫描合并本机所有配置。"
    },
    fleet: {
      tag: "开源矩阵",
      title: "Existential Cloud 开源工具矩阵",
      desc: "由 Existential Cloud 实验室自主维护，所有项目均坚持 100% 纯原生零第三方依赖设计。"
    },
    faq: {
      tag: "常见疑问解答",
      title: "关于 mcp-mesh 的一切核心细节",
      q1: "经过一层中间代理，会不会导致工具调用变慢？",
      a1: "完全不会，总端到端延迟反而大幅下降！将 Prompt 从 10,000 Tokens 压缩到 527 Tokens 后，大模型的预填充延迟（TTFT）大幅缩短 60%–70%。并且 mcp-mesh 会在模型发起意图检索的瞬间，在后台并行预热拉起下游目标进程。",
      q2: "我现有的 Claude Desktop 或 Cursor 需要重新配置吗？",
      a2: "不需要。带上 --federate 参数，mcp-mesh 会自动扫描 Claude Desktop、Cursor 和 Antigravity 的配置文件并一键接管，无需手动迁移。",
      q3: "mcp-mesh 会将我的数据或遥测上传到云端吗？",
      a3: "绝无任何云端上传。mcp-mesh 100% 本地运行，完全零外部网络依赖，所有调用遥测仅持久化记录在你本地开发机的 SQLite 数据库中。",
      q4: "当下游某个 MCP 服务崩溃或超时卡死时会怎样？",
      a4: "网关内置隔离式熔断器。当下游服务崩溃或超时，网关会优雅返回标准 JSON-RPC 错误，绝对不会导致你的 IDE 或 Agent 客户端死锁卡死。"
    },
    footer: {
      engineeredBy: "核心开发",
      under: "隶属于",
      studio: "Existential Cloud AI Studio",
      license: "MIT 开源协议",
      zeroDeps: "零外部依赖"
    }
  },

  es: {
    langName: "Español",
    dir: "ltr",
    nav: {
      problem: "Problema",
      simulator: "Calculadora",
      security: "Seguridad",
      setup: "Integración",
      architecture: "Arquitectura",
      fleet: "Ecosistema",
      faq: "Preguntas",
      liveTelemetry: "Telemetría en Vivo",
      starGitHub: "Estrella en GitHub"
    },
    hero: {
      badge: "VERSIÓN 1.3.0: FEDERACIÓN MCP HETEROGÉNEA UNIVERSAL",
      title: "Reduce el exceso de prompt LLM en un 90%.",
      subtitle: "La pasarela dinámica MCP y enrutador perezoso de herramientas.",
      desc: "Conectar agentes de codificación a más de 10 servidores MCP inyecta más de 30.000 tokens de esquemas JSON antes de escribir una sola palabra. mcp-mesh federata sus servidores en un puente unificado y de alto rendimiento, sin dependencias externas.",
      metricTokenRed: "Reducción de Tokens en Turno-0",
      metricDeps: "100% Biblioteca Estándar de Python",
      metricDiscovery: "Descubrimiento Concurrente < 1.2s",
      metricTests: "Pruebas de Regresión Aprobadas"
    },
    problem: {
      tag: "El Obstáculo",
      title: "Por qué los esquemas MCP estáticos degradan los agentes",
      p1Title: "1. Agotamiento de Contexto en Turno-0",
      p1Desc: "Cada herramienta conectada añade unos 163 tokens de esquema JSON. Conectar 60 herramientas satura el contexto con casi 10.000 tokens en cada turno.",
      p2Title: "2. Degradación de Atención ('Lost in the Middle')",
      p2Desc: "Inundar el modelo con cientos de firmas de parámetros causa alucinaciones, argumentos inválidos e instrucciones omitidas.",
      p3Title: "3. Configuraciones Fragmentadas",
      p3Desc: "Los desarrolladores duplican configuraciones en Claude Desktop, Cursor y Antigravity, dejando procesos zombis en segundo plano."
    },
    comparison: {
      tag: "Comparativa de Arquitectura",
      title: "Inyección Estática vs. Pasarela mcp-mesh",
      rawLabel: "SIN MESH (INYECCIÓN ESTÁTICA)",
      rawSubtitle: "Arquitectura tradicional de conexión directa",
      rawP1: "9.790 tokens inyectados en el prompt en el turno 0",
      rawP2: "Alta densidad de esquemas induce severa pérdida de atención",
      rawP3: "Procesos secundarios dispersos y riesgo de bloqueos en pipes",
      meshLabel: "CON PASARELA MCP-MESH",
      meshSubtitle: "Proxy inverso universal y transparente",
      meshP1: "Solo 4 metaherramientas compactas (527 tokens en total)",
      meshP2: "Búsqueda BM25 submilimétrica y precalentamiento predictivo",
      meshP3: "Drenaje continuo de stderr y ciclo de vida de hilos supervisado"
    },
    simulator: {
      tag: "Calculadora Interactiva",
      title: "Simule su Ahorro de Tokens y Costes",
      desc: "Ajuste los parámetros para calcular la reducción exacta de ventana de contexto y los costes mensuales de API evitados.",
      paramsTitle: "Parámetros de la Estación",
      liveFormula: "Fórmula en Vivo",
      serversLabel: "Servidores MCP Conectados",
      serversSub: "ej. GitHub, Postgres, Slack, Filesystem, AWS, Stripe...",
      toolsLabel: "Herramientas Promedio por Servidor",
      toolsSub: "Total de herramientas activas: ",
      modelLabel: "Nivel de Modelo LLM",
      turnsLabel: "Turnos Mensuales del Agente",
      turnsSub: "Uso típico de un equipo de ingeniería activo",
      staticTitle: "Inyección Estática (Sin Mesh)",
      staticDesc: "Tokens consumidos en turno 0 antes de que el usuario escriba.",
      meshTitle: "Con Pasarela mcp-mesh",
      meshDesc: "Metaherramientas ligeras cargadas bajo demanda.",
      savedBannerTitle: "Reducción de Contexto de Prompt",
      savedBannerUnit: "ahorrado por turno",
      savedTokensText: "Tokens netos evitados por petición: ",
      monthlySavedTitle: "Gasto Mensual Evitado",
      monthlySavedSub: "Dólares de facturación de API eliminados"
    },
    security: {
      tag: "Seguridad de Producción",
      title: "Fiabilidad y Seguridad de Nivel Empresarial",
      desc: "mcp-mesh implementa defensa en profundidad para proteger su entorno de desarrollo local.",
      s1Title: "Protección contra DNS Rebinding",
      s1Desc: "Verifica el encabezado Host para bloquear ataques de reasignación DNS desde navegadores maliciosos.",
      s2Title: "Autenticación Bearer Timing-Safe",
      s2Desc: "Comparación en tiempo constante con hmac.compare_digest para eliminar vulnerabilidades de canal lateral.",
      s3Title: "Límite Estricto de Carga de 10MB",
      s3Desc: "Previene ataques de denegación de servicio y desbordamiento de memoria en la estación de trabajo.",
      s4Title: "Tuberías Libres de Bloqueos",
      s4Desc: "Hilos dedicados y búfer circular continuo de 50 líneas para evitar bloqueos del sistema operativo."
    },
    setup: {
      tag: "Configuración",
      title: "Integración en un Solo Comando",
      desc: "Use mcp-mesh como su único puente maestro. La bandera --federate autodescubre todas las configuraciones existentes."
    },
    fleet: {
      tag: "Portafolio",
      title: "Ecosistema de Código Abierto",
      desc: "Desarrollado bajo Existential Cloud AI Studio. Todos los proyectos cuentan con cero dependencias externas."
    },
    faq: {
      tag: "Preguntas Frecuentes",
      title: "Todo lo que necesita saber sobre mcp-mesh",
      q1: "¿Añade latencia la pasarela mcp-mesh a las llamadas de herramientas?",
      a1: "No. De hecho, la latencia total disminuye significativamente. Al reducir los tokens de prompt de 10.000 a 527, el tiempo previo de generación (TTFT) cae entre un 60% y un 70%.",
      q2: "¿Debo reconfigurar mis servidores MCP existentes?",
      a2: "No. Con la bandera --federate, mcp-mesh escanea automáticamente Claude Desktop, Cursor y Antigravity, unificándolos sin migración manual.",
      q3: "¿mcp-mesh envía datos a la nube?",
      a3: "Cero datos salen de su máquina. Funciona 100% de manera local y registra la telemetría únicamente en su base de datos SQLite local.",
      q4: "¿Qué ocurre si un servidor MCP se cuelga?",
      a4: "Dispone de disyuntores aislados. Si un proceso falla, devuelve un error JSON-RPC estándar sin bloquear su entorno de desarrollo."
    },
    footer: {
      engineeredBy: "Desarrollado por",
      under: "bajo",
      studio: "Existential Cloud AI Studio",
      license: "Licencia MIT",
      zeroDeps: "Cero Dependencias"
    }
  },

  fr: {
    langName: "Français",
    dir: "ltr",
    nav: {
      problem: "Problème",
      simulator: "Calculateur",
      security: "Sécurité",
      setup: "Intégration",
      architecture: "Architecture",
      fleet: "Écosystème",
      faq: "FAQ",
      liveTelemetry: "Télémétrie en Direct",
      starGitHub: "Étoile sur GitHub"
    },
    hero: {
      badge: "VERSION 1.3.0 : FÉDÉRATION MCP HÉTÉROGÈNE UNIVERSELLE",
      title: "Réduisez l'enflure des prompts LLM de 90 %.",
      subtitle: "La passerelle MCP dynamique et routeur d'outils à la demande.",
      desc: "Connecter des agents à plus de 10 serveurs MCP injecte plus de 30 000 jetons de schémas JSON avant même que vous n'écriviez un mot. mcp-mesh fédère vos serveurs en un pont performant sans aucune dépendance externe.",
      metricTokenRed: "Réduction des Jetons au Tour 0",
      metricDeps: "100% Bibliothèque Standard Python",
      metricDiscovery: "Découverte Concurrente < 1.2s",
      metricTests: "Tests de Régression Réussis"
    },
    problem: {
      tag: "Le Goulot d'Étranglement",
      title: "Pourquoi les schémas MCP statiques dégradent les agents",
      p1Title: "1. Épuisement du Contexte au Tour 0",
      p1Desc: "Chaque outil connecté ajoute environ 163 jetons de schéma JSON. Connecter 60 outils sature le contexte avec près de 10 000 jetons à chaque interaction.",
      p2Title: "2. Dégradation de l'Attention ('Lost in the Middle')",
      p2Desc: "Noyer le modèle sous des centaines de signatures provoque des hallucinations, des arguments invalides et l'oubli des instructions clés.",
      p3Title: "3. Configurations Fragmentées",
      p3Desc: "Les développeurs maintiennent des configurations séparées entre Claude Desktop et Cursor, générant des processus zombies en arrière-plan."
    },
    comparison: {
      tag: "Comparatif d'Architecture",
      title: "Injection Statique vs. Passerelle mcp-mesh",
      rawLabel: "SANS MESH (INJECTION STATIQUE)",
      rawSubtitle: "Architecture naïve de connexion directe",
      rawP1: "9 790 jetons injectés dans le prompt dès le tour 0",
      rawP2: "Densité extrême provoquant une sévère perte d'attention",
      rawP3: "Sous-processus non supervisés avec risques d'interblocage",
      meshLabel: "AVEC PASSERELLE MCP-MESH",
      meshSubtitle: "Proxy inverse universel et transparent",
      meshP1: "Seulement 4 méta-outils compacts (527 jetons au total)",
      meshP2: "Recherche par mot-clé BM25 et préchauffage prédictif",
      meshP3: "Purge continue de stderr et gestion rigoureuse des threads"
    },
    simulator: {
      tag: "Calculateur Interactif",
      title: "Simulez vos Économies de Jetons et de Coûts",
      desc: "Ajustez les paramètres pour calculer la réduction exacte de fenêtre de contexte et les économies de facturation API.",
      paramsTitle: "Paramètres de la Station",
      liveFormula: "Formule en Direct",
      serversLabel: "Serveurs MCP Connectés",
      serversSub: "ex. GitHub, Postgres, Slack, Filesystem, AWS, Stripe...",
      toolsLabel: "Outils Moyens par Serveur",
      toolsSub: "Total des outils actifs : ",
      modelLabel: "Modèle LLM Cible",
      turnsLabel: "Requêtes Mensuelles d'Agents",
      turnsSub: "Utilisation typique d'une équipe d'ingénieurs active",
      staticTitle: "Injection Statique (Sans Mesh)",
      staticDesc: "Jetons consommés dès le tour 0 avant toute saisie utilisateur.",
      meshTitle: "Avec Passerelle mcp-mesh",
      meshDesc: "Signatures légères de méta-outils chargées à la demande.",
      savedBannerTitle: "Réduction du Contexte de Prompt",
      savedBannerUnit: "économisé par tour",
      savedTokensText: "Jetons nets évités par requête : ",
      monthlySavedTitle: "Dépenses Mensuelles Évitées",
      monthlySavedSub: "Économies directes sur vos factures d'API"
    },
    security: {
      tag: "Sécurité de Production",
      title: "Fiabilité et Sécurité de Niveau Entreprise",
      desc: "mcp-mesh applique les principes de défense en profondeur pour protéger votre poste de travail.",
      s1Title: "Protection contre le DNS Rebinding",
      s1Desc: "Vérifie l'en-tête Host de bouclage pour bloquer les attaques de réassignation DNS malveillantes.",
      s2Title: "Authentification Bearer Timing-Safe",
      s2Desc: "Comparaison en temps constant via hmac.compare_digest pour contrer les attaques par canal auxiliaire.",
      s3Title: "Plafond de Charge Utile de 10 Mo",
      s3Desc: "Empêche les attaques par déni de service et le débordement de mémoire vive sur votre système.",
      s4Title: "Supervision Anti-Blocage des Pipes",
      s4Desc: "Threads dédiés et tampon circulaire de 50 lignes sur stderr pour éviter les blocages de flux système."
    },
    setup: {
      tag: "Configuration",
      title: "Intégration en Une Seule Commande",
      desc: "Définissez mcp-mesh comme votre unique passerelle. Le drapeau --federate détecte automatiquement vos serveurs."
    },
    fleet: {
      tag: "Portfolio",
      title: "Écosystème Open Source",
      desc: "Maintenu sous Existential Cloud AI Studio. Tous les dépôts sont conçus avec zéro dépendance externe."
    },
    faq: {
      tag: "Foire Aux Questions",
      title: "Tout ce que vous devez savoir sur mcp-mesh",
      q1: "Le passage par mcp-mesh ajoute-t-il de la latence ?",
      a1: "Non. En réalité, la latence globale diminue fortement. Réduire le prompt de 10 000 à 527 jetons diminue le temps de réponse initial (TTFT) de 60 % à 70 %.",
      q2: "Dois-je reconfigurer tous mes serveurs MCP actuels ?",
      a2: "Non. Grâce au drapeau --federate, mcp-mesh analyse et unifie automatiquement les configurations de Claude Desktop et Cursor.",
      q3: "mcp-mesh transmet-il des données vers le cloud ?",
      a3: "Aucune donnée ne quitte votre machine. Il s'exécute entièrement en local et n'utilise qu'une base SQLite locale pour la télémétrie.",
      q4: "Que se passe-t-il si un serveur MCP tombe en panne ?",
      a4: "Le système intègre des disjoncteurs isolés. En cas de plantage, une erreur JSON-RPC standard est renvoyée sans geler votre IDE."
    },
    footer: {
      engineeredBy: "Conçu par",
      under: "au sein de",
      studio: "Existential Cloud AI Studio",
      license: "Licence MIT",
      zeroDeps: "Zéro Dépendance"
    }
  },

  ru: {
    langName: "Русский",
    dir: "ltr",
    nav: {
      problem: "Проблема",
      simulator: "Калькулятор",
      security: "Безопасность",
      setup: "Интеграция",
      architecture: "Архитектура",
      fleet: "Экосистема",
      faq: "Вопросы",
      liveTelemetry: "Телеметрия Live",
      starGitHub: "Звезда на GitHub"
    },
    hero: {
      badge: "РЕЛИЗ v1.3.0: УНИВЕРСАЛЬНАЯ ГЕТЕРОГЕННАЯ ФЕДЕРАЦИЯ MCP",
      title: "Сократите раздувание промптов LLM на 90%.",
      subtitle: "Динамический обратный прокси-шлюз MCP и ленивый маршрутизатор.",
      desc: "Подключение агентов к 10+ серверам MCP внедряет более 30 000 токенов тяжелых схем JSON до того, как вы напечатаете слово. mcp-mesh объединяет ваши серверы в единый производительный мост без внешних зависимостей.",
      metricTokenRed: "Снижение токенов на шаге 0",
      metricDeps: "100% Стандартная библиотека Python",
      metricDiscovery: "Параллельный опрос < 1.2с",
      metricTests: "Пройдены все тесты регрессии"
    },
    problem: {
      tag: "Узкое место",
      title: "Почему статические схемы MCP ломают агентов",
      p1Title: "1. Исчерпание контекста на шаге 0",
      p1Desc: "Каждый инструмент добавляет около 163 токенов схемы JSON. Подключение 60 инструментов сжигает почти 10 000 токенов в каждом запросе еще до начала решения задачи.",
      p2Title: "2. Деградация внимания ('Lost in the Middle')",
      p2Desc: "Перегрузка контекста сотнями определений параметров сбивает флагманские модели (Claude 3.5 Sonnet / GPT-4o), вызывая галлюцинации и пропуск инструкций.",
      p3Title: "3. Фрагментация конфигураций и зомби-процессы",
      p3Desc: "Разработчики дублируют конфиги в Claude Desktop, Cursor и Antigravity, порождая неконтролируемые фоновые процессы."
    },
    comparison: {
      tag: "Сравнение архитектур",
      title: "Статическое внедрение против шлюза mcp-mesh",
      rawLabel: "БЕЗ MESH (СТАТИЧЕСКОЕ ВНЕДРЕНИЕ)",
      rawSubtitle: "Традиционная наивная схема прямого подключения",
      rawP1: "9 790 токенов статически внедряются в системный промпт",
      rawP2: "Критическая плотность схем вызывает сильную потерю внимания",
      rawP3: "Разрозненные подпроцессы с риском взаимоблокировки пайпов",
      meshLabel: "СО ШЛЮЗОМ MCP-MESH",
      meshSubtitle: "Прозрачный универсальный обратный прокси",
      meshP1: "Всего 4 компактных мета-инструмента (527 токенов)",
      meshP2: "Субмиллисекундный поиск BM25 и упреждающий прогрев процессов",
      meshP3: "Непрерывный слив кольцевого буфера stderr и контроль потоков"
    },
    simulator: {
      tag: "Интерактивный калькулятор",
      title: "Рассчитайте экономию токенов и бюджета",
      desc: "Настройте параметры для точной оценки экономии окна контекста и сокращения прямых затрат на API.",
      paramsTitle: "Параметры рабочей станции",
      liveFormula: "Живая формула",
      serversLabel: "Подключенные серверы MCP",
      serversSub: "напр., GitHub, Postgres, Slack, Filesystem, AWS, Stripe...",
      toolsLabel: "Среднее число инструментов на сервер",
      toolsSub: "Всего активных инструментов: ",
      modelLabel: "Уровень модели LLM",
      turnsLabel: "Число запросов агента в месяц",
      turnsSub: "Типичная нагрузка активной команды инженеров",
      staticTitle: "Статическое подключение (без Mesh)",
      staticDesc: "Токены, сгорающие на шаге 0 до отправки кода пользователем.",
      meshTitle: "Через шлюз mcp-mesh",
      meshDesc: "Компактные мета-сигнатуры, загружаемые строго по требованию.",
      savedBannerTitle: "Сокращение контекста промпта",
      savedBannerUnit: "экономии за запрос",
      savedTokensText: "Чистая экономия токенов за запрос: ",
      monthlySavedTitle: "Сэкономлено в месяц",
      monthlySavedSub: "Прямое сокращение счета за вызовы API"
    },
    security: {
      tag: "Безопасность в проде",
      title: "Корпоративная надежность и защита",
      desc: "mcp-mesh построен на принципах глубокоэшелонированной защиты локальных машин разработчиков.",
      s1Title: "Защита от DNS Rebinding",
      s1Desc: "Проверка заголовка Host для блокировки межсайтовых атак перепривязки DNS из браузеров.",
      s2Title: "Timing-Safe аутентификация",
      s2Desc: "Сравнение токенов за константное время через hmac.compare_digest устраняет утечки по времени.",
      s3Title: "Ограничение полезной нагрузки 10 МБ",
      s3Desc: "Жесткий лимит защищает от атак отказа в обслуживании и переполнения оперативной памяти.",
      s4Title: "Защита от блокировки каналов ОС",
      s4Desc: "Выделенные потоки чтения и кольцевой буфер на 50 строк stderr предотвращают дедлоки пайпов."
    },
    setup: {
      tag: "Конфигурация",
      title: "Интеграция одной командой",
      desc: "Подключите mcp-mesh как единый мост. Флаг --federate автоматически объединит локальные конфигурации."
    },
    fleet: {
      tag: "Портфолио",
      title: "Экосистема с открытым исходным кодом",
      desc: "Разработано лабораторией Existential Cloud AI Studio. Все репозитории имеют 0 внешних зависимостей."
    },
    faq: {
      tag: "Часто задаваемые вопросы",
      title: "Все, что нужно знать о mcp-mesh",
      q1: "Создает ли mcp-mesh дополнительную задержку при вызове инструментов?",
      a1: "Нет. На самом деле общее сквозное время ответа заметно уменьшается. Сокращение промпта с 10 000 до 527 токенов уменьшает время до первого токена (TTFT) модели на 60–70%.",
      q2: "Нужно ли заново настраивать существующие серверы MCP?",
      a2: "Нет. С флагом --federate шлюз автоматически обнаруживает конфигурации Claude Desktop, Cursor и Antigravity без ручной миграции.",
      q3: "Отправляет ли mcp-mesh телеметрию в облако?",
      a3: "Никаких данных не передается во внешнюю сеть. Шлюз работает на 100% локально и ведет аудит только в локальной базе SQLite.",
      q4: "Что произойдет, если один из серверов MCP зависнет?",
      a4: "В шлюз встроены автоматические предохранители (circuit breakers). Сбойный процесс изолируется с возвратом стандартной ошибки JSON-RPC без зависания IDE."
    },
    footer: {
      engineeredBy: "Разработка:",
      under: "в рамках",
      studio: "Existential Cloud AI Studio",
      license: "Лицензия MIT",
      zeroDeps: "Ноль зависимостей"
    }
  },

  ar: {
    langName: "العربية",
    dir: "rtl",
    nav: {
      problem: "المشكلة",
      simulator: "الحاسبة",
      security: "الأمان",
      setup: "الإعداد",
      architecture: "المعمارية",
      fleet: "المنظومة",
      faq: "الأسئلة الشائعة",
      liveTelemetry: "المراقبة المباشرة",
      starGitHub: "نجمة على GitHub"
    },
    hero: {
      badge: "الإصدار 1.3.0: اتحاد MCP الشامل وغير المتجانس",
      title: "خفض تضخم مطالبات النماذج بنسبة 90%.",
      subtitle: "بوابة وكيل عكسي ديناميكية لـ MCP وتوجيه كسلان للأدوات.",
      desc: "ربط الوكلاء بأكثر من 10 خوادم بروتوكول سياق النموذج (MCP) يضخ أكثر من 30,000 رمز من المخططات الثقيلة قبل أن تكتب كلمة واحدة. تجمع mcp-mesh خوادمك في جسر فائق الأداء مع صفر تبعيات خارجية.",
      metricTokenRed: "خفض رموز البداية بنسبة 94.6%",
      metricDeps: "100% مكتبة بايثون القياسية",
      metricDiscovery: "اكتشاف متزامن < 1.2 ثانية",
      metricTests: "اجتياز 100% من الاختبارات"
    },
    problem: {
      tag: "عنق الزجاجة",
      title: "لماذا تكسر مخططات MCP الثابتة وكلاء البرمجة",
      p1Title: "1. استنزاف سياق البداية",
      p1Desc: "تضيف كل أداة متصلة حوالي 163 رمزاً من مواصفات JSON. ربط 60 أداة يستهلك ما يقرب من 10,000 رمز في كل دورة قبل بدء العمل الفعلي.",
      p2Title: "2. تشتت الانتباه ('الضياع في المنتصف')",
      p2Desc: "إغراق السياق بمئات تعريفات المعلمات يشتت النماذج المتقدمة، مما يؤدي إلى هلوسة الأدوات وتجاهل التعليمات الأساسية.",
      p3Title: "3. تشتت الإعدادات والعمليات العالقة",
      p3Desc: "يحتفظ المطورون بإعدادات منفصلة في Claude Desktop و Cursor، مما ينشئ عمليات خلفية زائدة تبطئ الجهاز."
    },
    comparison: {
      tag: "مقارنة المعمارية",
      title: "الحقن الثابت مقابل بوابة mcp-mesh الديناميكية",
      rawLabel: "بدون MESH (الحقن الثابت)",
      rawSubtitle: "المعمارية التقليدية للاتصال المباشر",
      rawP1: "9,790 رمزاً تُحقن في المطالبة عند البداية",
      rawP2: "كثافة المخططات العالية تسبب تشتتاً حاداً في انتباه النموذج",
      rawP3: "عمليات فرعية متباينة مع خطر حدوث انسداد في قنوات النظام",
      meshLabel: "مع بوابة MCP-MESH",
      meshSubtitle: "وكيل عكسي عالمي وشفاف",
      meshP1: "4 أدوات وصفية مدمجة فقط (527 رمزاً فقط)",
      meshP2: "بحث فوري ودقيق بنظام BM25 وتسخين مسبق متزامن",
      meshP3: "تفريغ مستمر لسجلات stderr وإشراف كامل على خيوط المعالجة"
    },
    simulator: {
      tag: "حاسبة تفاعلية",
      title: "احسب توفير الرموز والتكاليف المالية",
      desc: "اضبط المعلمات لحساب خفض نافذة السياق بدقة وحجم التوفير في فواتير واجهة برمجة التطبيقات (API).",
      paramsTitle: "معلمات محطة العمل",
      liveFormula: "صيغة حسابية مباشرة",
      serversLabel: "خوادم MCP المتصلة",
      serversSub: "مثل GitHub و Postgres و Slack و AWS و Stripe...",
      toolsLabel: "متوسط الأدوات لكل خادم",
      toolsSub: "إجمالي الأدوات النشطة: ",
      modelLabel: "فئة نموذج الذكاء الاصطناعي",
      turnsLabel: "عدد استدعاءات الوكيل الشهرية",
      turnsSub: "الاستخدام المعتاد لفرق الهندسة النشطة",
      staticTitle: "الحقن الثابت (بدون Mesh)",
      staticDesc: "الرموز المستهلكة في البداية قبل أن يدخل المستخدم أي تعليمات.",
      meshTitle: "باستخدام بوابة mcp-mesh",
      meshDesc: "أدوات وصفية خفيفة يتم تحميلها ديناميكياً عند الحاجة فقط.",
      savedBannerTitle: "نسبة خفض سياق المطالبة",
      savedBannerUnit: "توفير لكل دورة",
      savedTokensText: "صافي الرموز التي تم تفادي حرقها: ",
      monthlySavedTitle: "التوفير الشهري المباشر",
      monthlySavedSub: "دولارات حقيقية تم خفضها من الفاتورة"
    },
    security: {
      tag: "أمان بيئات الإنتاج",
      title: "موثوقية وأمان فائق على مستوى المؤسسات",
      desc: "تم بناء mcp-mesh وفق مبادئ الدفاع المتعمق لحماية محطات عمل المطورين وخوادم الفرق.",
      s1Title: "حماية من هجمات DNS Rebinding",
      s1Desc: "فحص إلزامي لترويسة المضيف لحظر الهجمات الموجهة إلى الخدمات المحلية من متصفحات الويب.",
      s2Title: "مصادقة Bearer آمنة زمنياً",
      s2Desc: "مقارنة ذات وقت ثابت عبر hmac.compare_digest لمنع هجمات القنوات الجانبية على نقاط SSE.",
      s3Title: "سقف لحجم الحمولة 10 ميغابايت",
      s3Desc: "يمنع هجمات حجب الخدمة واستهلاك ذاكرة الجهاز بحزم بيانات ضخمة غير متوقعة.",
      s4Title: "قنوات خالية من الانسداد والجمود",
      s4Desc: "خيوط قراءة مخصصة ومخزن حلقي مستمر لـ 50 سطراً يمنعان تجمد قنوات الإدخال والإخراج لنظام التشغيل."
    },
    setup: {
      tag: "الإعداد",
      title: "تكامل بأمر واحد فقط",
      desc: "أضف mcp-mesh كجسر وحيد لك. يكتشف المعامل --federate جميع الإعدادات المحلية تلقائياً."
    },
    fleet: {
      tag: "المشاريع",
      title: "منظومة المشاريع مفتوحة المصدر",
      desc: "تتم صيانتها تحت مظلة Existential Cloud AI Studio مع الالتزام بصفر تبعيات خارجية."
    },
    faq: {
      tag: "الأسئلة الشائعة",
      title: "كل ما تحتاج معرفته عن mcp-mesh",
      q1: "هل يؤدي المرور عبر mcp-mesh إلى زيادة وقت الاستجابة؟",
      a1: "كلا، بل على العكس ينخفض زمن الاستجابة الإجمالي بشكل ملحوظ! تقليص المطالبة من 10,000 إلى 527 رمزاً يسرع استجابة النموذج الأولية بنسبة 60%–70%.",
      q2: "هل أحتاج لإعادة تكوين خوادم MCP الحالية لدي؟",
      a2: "لا، يقوم المعامل --federate بمسح تلقائي لإعدادات Claude Desktop و Cursor و Antigravity وتوحيدها دون نقل يدوي.",
      q3: "هل ترسل mcp-mesh أي بيانات إلى السحابة؟",
      a3: "صفر بيانات تغادر جهازك. الأداة تعمل محلياً بالكامل وتسجل البيانات التشغيلية فقط في قاعدة بيانات SQLite المحلية بجهازك.",
      q4: "ماذا يحدث إذا تعطل أحد خوادم MCP الفرعية؟",
      a4: "تحتوي البوابة على قواطع دارة مدمجة؛ عند تعطل أي خدمة يتم إرجاع رسالة خطأ JSON-RPC قياسية دون تجميد بيئة التطوير لديك."
    },
    footer: {
      engineeredBy: "تطوير",
      under: "تحت مظلة",
      studio: "Existential Cloud AI Studio",
      license: "ترخيص MIT",
      zeroDeps: "صفر تبعيات خارجية"
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LOCALES;
}
if (typeof window !== 'undefined') {
  window.LOCALES = LOCALES;
}
