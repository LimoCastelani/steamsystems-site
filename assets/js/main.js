/* STEAM SYSTEMS — language switcher (EN / FR / 中文) and "Copy HTML" for the signature */
(function () {
  "use strict";

  var T = {
    en: {
      "meta.title": "STEAM SYSTEMS - Brand Identity",
      "nav.it": "IT & AI", "nav.mining": "Mining", "nav.energy": "Energy", "nav.fintech": "FinTech", "nav.contact": "Contact",
      "hero.title": "Brand Identity",
      "hero.lead": "Official templates and guidelines for STEAM SYSTEMS stationery and digital communications. Designed for precision and technological dominance.",
      "cards.title": "Business Cards",
      "tagline": "ARCHITECTS OF THE FUTURE",
      "card.sectors": "IT & AI · Mining · Energy · FinTech",
      "sig.title": "Email Signature", "sig.role": "Contact",
      "sig.disclaimer": "This email and any attachments are confidential and intended solely for the use of the individual or entity to whom they are addressed.",
      "sig.copy": "Copy HTML", "sig.copied": "Copied",
      "footer.rights": "STEAM SYSTEMS. ARCHITECTS OF THE FUTURE.",
      "footer.privacy": "Privacy Policy", "footer.terms": "Terms of Service", "footer.compliance": "Compliance", "footer.security": "Security"
    },
    fr: {
      "meta.title": "STEAM SYSTEMS - Identité de marque",
      "nav.it": "IT & IA", "nav.mining": "Mines", "nav.energy": "Énergie", "nav.fintech": "FinTech", "nav.contact": "Contact",
      "hero.title": "Identité de marque",
      "hero.lead": "Modèles et directives officiels pour la papeterie et les communications numériques de STEAM SYSTEMS. Conçus pour la précision et l'excellence technologique.",
      "cards.title": "Cartes de visite",
      "tagline": "ARCHITECTES DU FUTUR",
      "card.sectors": "IT & IA · Mines · Énergie · FinTech",
      "sig.title": "Signature e-mail", "sig.role": "Contact",
      "sig.disclaimer": "Cet e-mail et ses pièces jointes sont confidentiels et destinés exclusivement à la personne ou à l'entité à laquelle ils sont adressés.",
      "sig.copy": "Copier le HTML", "sig.copied": "Copié",
      "footer.rights": "STEAM SYSTEMS. ARCHITECTES DU FUTUR.",
      "footer.privacy": "Confidentialité", "footer.terms": "Conditions d'utilisation", "footer.compliance": "Conformité", "footer.security": "Sécurité"
    },
    zh: {
      "meta.title": "STEAM SYSTEMS - 品牌形象",
      "nav.it": "IT 与 AI", "nav.mining": "矿业", "nav.energy": "能源", "nav.fintech": "金融科技", "nav.contact": "联系我们",
      "hero.title": "品牌形象",
      "hero.lead": "STEAM SYSTEMS 办公用品与数字通信的官方模板和规范。为精准与技术领先而设计。",
      "cards.title": "名片",
      "tagline": "未来的建筑师",
      "card.sectors": "IT 与 AI · 矿业 · 能源 · 金融科技",
      "sig.title": "邮件签名", "sig.role": "联系方式",
      "sig.disclaimer": "本邮件及其附件均为机密信息，仅供收件人个人或实体使用。",
      "sig.copy": "复制 HTML", "sig.copied": "已复制",
      "footer.rights": "STEAM SYSTEMS。未来的建筑师。",
      "footer.privacy": "隐私政策", "footer.terms": "服务条款", "footer.compliance": "合规", "footer.security": "安全"
    }
  };
  var HTML_LANG = { en: "en", fr: "fr", zh: "zh-Hans" };
  var current = "en";

  function apply(lang) {
    if (!T[lang]) lang = "en";
    current = lang;
    var dict = T[lang];
    document.documentElement.lang = HTML_LANG[lang];
    document.title = dict["meta.title"];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n")];
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    document.getElementById("copied").textContent = "";
    try { localStorage.setItem("ss-lang", lang); } catch (e) {}
  }

  function initialLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q && T[q]) return q;
    try { var s = localStorage.getItem("ss-lang"); if (s && T[s]) return s; } catch (e) {}
    var n = (navigator.language || "en").toLowerCase();
    return n.indexOf("fr") === 0 ? "fr" : n.indexOf("zh") === 0 ? "zh" : "en";
  }

  document.querySelectorAll(".lang-btn").forEach(function (b) {
    b.addEventListener("click", function () { apply(b.getAttribute("data-lang")); });
  });

  // "Copy HTML": copies the signature table with absolute image URLs, ready to paste into a mail client
  document.getElementById("copy-html").addEventListener("click", function () {
    var clone = document.getElementById("signature").cloneNode(true);
    clone.removeAttribute("id");
    clone.querySelectorAll("[data-i18n]").forEach(function (el) { el.removeAttribute("data-i18n"); });
    clone.querySelectorAll("img").forEach(function (img) { img.setAttribute("src", img.src); });
    var html = clone.outerHTML;
    var done = function () { document.getElementById("copied").textContent = "✓ " + T[current]["sig.copied"]; };
    if (navigator.clipboard) navigator.clipboard.writeText(html).then(done);
  });

  document.getElementById("year").textContent = new Date().getFullYear();
  apply(initialLang());
})();
