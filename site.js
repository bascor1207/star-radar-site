// Langue : ?lang=xx, sinon celle du navigateur, sinon le français.
(function () {
  const langs = ["fr", "en", "de", "es", "pt"];
  const CONTACT = "CONTACT_EMAIL";
  const fromQuery = new URLSearchParams(location.search).get("lang");
  const fromBrowser = (navigator.language || "fr").slice(0, 2).toLowerCase();
  let lang = langs.includes(fromQuery) ? fromQuery : langs.includes(fromBrowser) ? fromBrowser : "fr";

  function show(l) {
    document.querySelectorAll("article").forEach(a => a.classList.toggle("active", a.lang === l));
    document.querySelectorAll(".langs button").forEach(b => b.classList.toggle("active", b.dataset.lang === l));
    document.documentElement.lang = l;
  }
  document.querySelectorAll(".langs button").forEach(b => b.addEventListener("click", () => show(b.dataset.lang)));
  // Tant qu'aucune adresse n'est définie, le contact passe par les demandes GitHub du site.
  const issues = "https://github.com/bascor1207/star-radar-site/issues/new";
  document.querySelectorAll("a.mail").forEach(a => {
    if (CONTACT.includes("@")) { a.href = "mailto:" + CONTACT; a.textContent = CONTACT; }
    else { a.href = issues; a.textContent = "github.com/bascor1207/star-radar-site"; }
  });
  show(lang);
})();
