/* STEAM SYSTEMS — language switcher (EN / FR / 中文), mobile menu, copy e-mail */
(function () {
  "use strict";

  var T = {
    en: {
      "meta.title": "STEAM SYSTEMS — Architects of the Future",
      "meta.desc": "STEAM SYSTEMS is a multi-sector group working across IT & AI, mining, energy and fintech.",
      "a11y.skip": "Skip to content", "a11y.menu": "Menu",
      "nav.sectors": "Sectors", "nav.approach": "Approach", "nav.contact": "Contact", "nav.cta": "Contact us",
      "hero.chip": "Multi-sector technology group",
      "hero.title": "Architects of the Future",
      "hero.lead": "STEAM SYSTEMS brings engineering precision to four sectors that shape tomorrow: information technology and AI, mining, energy and financial technology.",
      "hero.cta1": "Explore our sectors", "hero.cta2": "Contact us",
      "panel.title": "Sector map", "panel.status": "Operational",
      "sectors.title": "Our sectors", "sectors.lead": "Four areas of activity, one standard of execution.",
      "it.title": "IT & AI",
      "it.desc": "Software, infrastructure and applied artificial intelligence that help organisations work faster and decide better.",
      "it.t1": "Software", "it.t2": "Cloud & infrastructure", "it.t3": "Applied AI",
      "mining.title": "Mining",
      "mining.desc": "Technical services and digital tools for exploration, operations and the monitoring of mining sites.",
      "mining.t1": "Exploration support", "mining.t2": "Site operations", "mining.t3": "Monitoring",
      "energy.title": "Energy",
      "energy.desc": "Energy projects and solutions, from conventional power to renewables, designed for reliability.",
      "energy.t1": "Power solutions", "energy.t2": "Renewables", "energy.t3": "Efficiency",
      "fintech.title": "FinTech",
      "fintech.desc": "Digital financial services and payment solutions built for security and accessibility.",
      "fintech.t1": "Payments", "fintech.t2": "Digital banking", "fintech.t3": "Compliance",
      "approach.title": "Our approach",
      "approach.lead": "We work like a laboratory: measure precisely, build carefully, improve continuously.",
      "p1.title": "Precision", "p1.desc": "Every project starts with a clear diagnosis and measurable objectives.",
      "p2.title": "Integration", "p2.desc": "Our sectors reinforce each other: technology, resources, energy and finance, under one roof.",
      "p3.title": "Partnership", "p3.desc": "We build long-term relationships and stay accountable from design to delivery.",
      "contact.label": "Contact", "contact.title": "Let's build what's next.",
      "contact.lead": "Tell us about your project and our team will get back to you.",
      "contact.email": "Email", "contact.send": "Send an email", "contact.copy": "Copy address", "contact.copied": "Address copied",
      "footer.rights": "STEAM SYSTEMS. Architects of the Future.", "footer.top": "Back to top ↑"
    },
    fr: {
      "meta.title": "STEAM SYSTEMS — Architectes du futur",
      "meta.desc": "STEAM SYSTEMS est un groupe multisectoriel actif dans l'informatique et l'IA, les mines, l'énergie et la fintech.",
      "a11y.skip": "Aller au contenu", "a11y.menu": "Menu",
      "nav.sectors": "Secteurs", "nav.approach": "Approche", "nav.contact": "Contact", "nav.cta": "Nous contacter",
      "hero.chip": "Groupe technologique multisectoriel",
      "hero.title": "Architectes du futur",
      "hero.lead": "STEAM SYSTEMS apporte la précision de l'ingénierie à quatre secteurs qui façonnent demain : l'informatique et l'IA, les mines, l'énergie et les technologies financières.",
      "hero.cta1": "Découvrir nos secteurs", "hero.cta2": "Nous contacter",
      "panel.title": "Carte des secteurs", "panel.status": "Opérationnel",
      "sectors.title": "Nos secteurs", "sectors.lead": "Quatre domaines d'activité, une même exigence d'exécution.",
      "it.title": "IT & IA",
      "it.desc": "Logiciels, infrastructures et intelligence artificielle appliquée pour aider les organisations à travailler plus vite et à mieux décider.",
      "it.t1": "Logiciels", "it.t2": "Cloud & infrastructure", "it.t3": "IA appliquée",
      "mining.title": "Mines",
      "mining.desc": "Services techniques et outils numériques pour l'exploration, l'exploitation et le suivi des sites miniers.",
      "mining.t1": "Appui à l'exploration", "mining.t2": "Exploitation", "mining.t3": "Suivi des sites",
      "energy.title": "Énergie",
      "energy.desc": "Projets et solutions énergétiques, de l'énergie conventionnelle aux renouvelables, conçus pour la fiabilité.",
      "energy.t1": "Solutions électriques", "energy.t2": "Énergies renouvelables", "energy.t3": "Efficacité",
      "fintech.title": "FinTech",
      "fintech.desc": "Services financiers numériques et solutions de paiement conçus pour la sécurité et l'accessibilité.",
      "fintech.t1": "Paiements", "fintech.t2": "Banque numérique", "fintech.t3": "Conformité",
      "approach.title": "Notre approche",
      "approach.lead": "Nous travaillons comme un laboratoire : mesurer avec précision, construire avec soin, améliorer en continu.",
      "p1.title": "Précision", "p1.desc": "Chaque projet commence par un diagnostic clair et des objectifs mesurables.",
      "p2.title": "Intégration", "p2.desc": "Nos secteurs se renforcent mutuellement : technologie, ressources, énergie et finance, sous un même toit.",
      "p3.title": "Partenariat", "p3.desc": "Nous construisons des relations durables et restons responsables de la conception à la livraison.",
      "contact.label": "Contact", "contact.title": "Construisons la suite ensemble.",
      "contact.lead": "Parlez-nous de votre projet : notre équipe vous répondra.",
      "contact.email": "E-mail", "contact.send": "Envoyer un e-mail", "contact.copy": "Copier l'adresse", "contact.copied": "Adresse copiée",
      "footer.rights": "STEAM SYSTEMS. Architectes du futur.", "footer.top": "Haut de page ↑"
    },
    zh: {
      "meta.title": "STEAM SYSTEMS — 未来的建筑师",
      "meta.desc": "STEAM SYSTEMS 是一家多元化集团，业务涵盖信息技术与人工智能、矿业、能源和金融科技。",
      "a11y.skip": "跳到正文", "a11y.menu": "菜单",
      "nav.sectors": "业务领域", "nav.approach": "我们的方法", "nav.contact": "联系", "nav.cta": "联系我们",
      "hero.chip": "多元化科技集团",
      "hero.title": "未来的建筑师",
      "hero.lead": "STEAM SYSTEMS 将工程级的精准带入塑造未来的四大领域：信息技术与人工智能、矿业、能源以及金融科技。",
      "hero.cta1": "了解我们的业务", "hero.cta2": "联系我们",
      "panel.title": "业务版图", "panel.status": "运营中",
      "sectors.title": "业务领域", "sectors.lead": "四大业务领域，同一执行标准。",
      "it.title": "IT 与 AI",
      "it.desc": "软件、基础设施与应用人工智能，帮助机构更高效地工作、更明智地决策。",
      "it.t1": "软件", "it.t2": "云与基础设施", "it.t3": "应用 AI",
      "mining.title": "矿业",
      "mining.desc": "为勘探、生产运营和矿区监测提供技术服务与数字化工具。",
      "mining.t1": "勘探支持", "mining.t2": "矿区运营", "mining.t3": "监测",
      "energy.title": "能源",
      "energy.desc": "从传统电力到可再生能源的能源项目与解决方案，以可靠性为核心设计。",
      "energy.t1": "电力解决方案", "energy.t2": "可再生能源", "energy.t3": "能效",
      "fintech.title": "金融科技",
      "fintech.desc": "以安全与普惠为核心的数字金融服务与支付解决方案。",
      "fintech.t1": "支付", "fintech.t2": "数字银行", "fintech.t3": "合规",
      "approach.title": "我们的方法",
      "approach.lead": "我们像实验室一样工作：精准测量，精心构建，持续改进。",
      "p1.title": "精准", "p1.desc": "每个项目都从清晰的诊断和可衡量的目标开始。",
      "p2.title": "整合", "p2.desc": "技术、资源、能源与金融相互协同，汇聚于同一平台。",
      "p3.title": "合作", "p3.desc": "我们建立长期合作关系，从设计到交付全程负责。",
      "contact.label": "联系我们", "contact.title": "携手共建未来。",
      "contact.lead": "请告诉我们您的项目，我们的团队会与您联系。",
      "contact.email": "电子邮件", "contact.send": "发送邮件", "contact.copy": "复制邮箱地址", "contact.copied": "邮箱地址已复制",
      "footer.rights": "STEAM SYSTEMS。未来的建筑师。", "footer.top": "返回顶部 ↑"
    }
  };
  var HTML_LANG = { en: "en", fr: "fr", zh: "zh-Hans" };
  var current = "en";

  function apply(lang) {
    if (!T[lang]) lang = "en";
    current = lang;
    var dict = T[lang];
    document.documentElement.lang = HTML_LANG[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n")];
      if (v != null) el.textContent = v;
    });
    document.title = dict["meta.title"];
    var d = document.querySelector('meta[name="description"]');
    if (d) d.setAttribute("content", dict["meta.desc"]);
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    var copied = document.getElementById("copied");
    if (copied) copied.textContent = "";
    try { localStorage.setItem("ss-lang", lang); } catch (e) {}
  }

  function initialLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q && T[q]) return q;
    try { var s = localStorage.getItem("ss-lang"); if (s && T[s]) return s; } catch (e) {}
    var n = (navigator.language || "en").toLowerCase();
    return n.indexOf("fr") === 0 ? "fr" : n.indexOf("zh") === 0 ? "zh" : "en";
  }

  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { apply(b.getAttribute("data-lang")); });
  });

  // mobile menu
  var btn = document.querySelector(".menu-btn"), nav = document.getElementById("nav");
  function setMenu(open) { nav.classList.toggle("open", open); btn.setAttribute("aria-expanded", String(open)); }
  btn.addEventListener("click", function () { setMenu(!nav.classList.contains("open")); });
  nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  // copy e-mail
  var copyBtn = document.getElementById("copy");
  copyBtn.addEventListener("click", function () {
    var addr = document.getElementById("email").textContent.trim();
    var done = function () { document.getElementById("copied").textContent = "✓ " + T[current]["contact.copied"]; };
    if (navigator.clipboard) navigator.clipboard.writeText(addr).then(done, function () { location.href = "mailto:" + addr; });
    else location.href = "mailto:" + addr;
  });

  document.getElementById("year").textContent = new Date().getFullYear();
  apply(initialLang());
})();
