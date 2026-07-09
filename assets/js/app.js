(function () {
  const config = window.SITE_CONFIG;
  const page = document.body.dataset.page || "home";
  const currentYear = new Date().getFullYear();

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function mailto() {
    return `mailto:${encodeURIComponent(config.email)}`;
  }

  function tagsMarkup(tags) {
    return tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
  }

  function projectCard(project, options = {}) {
    const large = options.large ? " project-card-large" : "";
    const headingTag = options.large ? "h2" : "h3";
    const linkedImage = options.linkImage
      ? `<a class="project-image" href="projects.html#${escapeHtml(project.id)}" aria-label="${escapeHtml(project.title)} project"><img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt)}" /></a>`
      : `<div class="project-image"><img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt)}" /></div>`;

    return `
      <article class="project-card${large}" id="${escapeHtml(project.id)}">
        ${linkedImage}
        <div class="project-body">
          ${options.showEyebrow ? `<p class="eyebrow">${escapeHtml(project.eyebrow)}</p>` : ""}
          <${headingTag}>${escapeHtml(project.title)}</${headingTag}>
          <p>${escapeHtml(project.summary)}</p>
          <div class="tag-list">${tagsMarkup(project.tags)}</div>
        </div>
      </article>
    `;
  }

  function renderHeader() {
    const header = document.getElementById("site-header");
    if (!header) return;

    header.innerHTML = `
      <header class="site-header" data-header>
        <div class="container nav-wrap">
          <a class="brand" href="index.html" aria-label="${escapeHtml(config.ownerName)} homepage">
            <span class="brand-mark">${escapeHtml(config.brandInitial)}</span>
            <span class="brand-text">${escapeHtml(config.siteName)}</span>
          </a>
          <nav class="site-nav" aria-label="Primary navigation">
            <a href="index.html" ${page === "home" ? 'aria-current="page"' : ""}>Home</a>
            <a href="projects.html" ${page === "projects" ? 'aria-current="page"' : ""}>Projects</a>
            <a href="${mailto()}">Email</a>
          </nav>
        </div>
      </header>
    `;
  }

  function renderFooter() {
    const footer = document.getElementById("site-footer");
    if (!footer) return;

    footer.innerHTML = `
      <footer class="site-footer">
        <div class="container footer-wrap">
          <p>© ${currentYear} ${escapeHtml(config.ownerName)}. Built for ${escapeHtml(config.siteName)}.</p>
          <a href="${mailto()}">${escapeHtml(config.email)}</a>
        </div>
      </footer>
    `;
  }

  function renderContact(title) {
    return `
      <section class="section contact-band" id="contact">
        <div class="container contact-card">
          <div>
            <p class="eyebrow">Contact</p>
            <h2>${escapeHtml(title)}</h2>
            <p>${escapeHtml(config.contact.text)}</p>
          </div>
          <a class="button button-primary" href="${mailto()}">${escapeHtml(config.contact.button)}</a>
        </div>
      </section>
    `;
  }

  function renderHome() {
    const main = document.getElementById("main");
    const featuredProjects = config.projects.filter((project) => project.featured).slice(0, 3);

    main.innerHTML = `
      <section class="hero section">
        <div class="container hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">${escapeHtml(config.hero.eyebrow)}</p>
            <h1>${escapeHtml(config.hero.title)}</h1>
            <p class="hero-lead">${escapeHtml(config.hero.lead)}</p>
            <div class="hero-actions">
              <a class="button button-primary" href="projects.html">View Projects</a>
              <a class="button button-ghost" href="${mailto()}">Contact by Email</a>
            </div>
          </div>

          <div class="hero-card" aria-label="Summary card">
            <div class="status-row">
              <span class="status-dot"></span>
              <span>${escapeHtml(config.hero.status)}</span>
            </div>
            <div class="signal-card">
              <span class="signal-label">${escapeHtml(config.hero.coreFocusLabel)}</span>
              <strong>${escapeHtml(config.hero.coreFocus)}</strong>
            </div>
            <div class="metric-grid">
              ${config.summaryMetrics.map((metric) => `
                <div>
                  <strong>${escapeHtml(metric.title)}</strong>
                  <span>${escapeHtml(metric.text)}</span>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </section>

      <section class="section compact-section">
        <div class="container">
          <div class="section-heading">
            <p class="eyebrow">Skill Set</p>
            <h2>Practical infrastructure skills, grouped by real use.</h2>
          </div>
          <div class="skill-grid">
            ${config.skills.map((skill) => `
              <article class="skill-card">
                <img src="${escapeHtml(skill.icon)}" alt="" aria-hidden="true" />
                <h3>${escapeHtml(skill.title)}</h3>
                <p>${escapeHtml(skill.text)}</p>
              </article>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="section featured-section">
        <div class="container">
          <div class="section-heading split-heading">
            <div>
              <p class="eyebrow">Selected Projects</p>
              <h2>Small set of projects that show the bigger picture.</h2>
            </div>
            <a class="text-link" href="projects.html">See all projects</a>
          </div>
          <div class="project-grid three">
            ${featuredProjects.map((project) => projectCard(project, { linkImage: true })).join("")}
          </div>
        </div>
      </section>

      ${renderContact(config.contact.homeTitle)}
    `;
  }

  function renderProjects() {
    const main = document.getElementById("main");
    main.innerHTML = `
      <section class="page-hero section">
        <div class="container narrow">
          <p class="eyebrow">Projects</p>
          <h1>Focused project cards with real technical proof.</h1>
          <p>A brief overview of the systems, labs, and business-technology projects that represent my practical skill set.</p>
        </div>
      </section>

      <section class="section projects-section">
        <div class="container">
          <div class="project-grid two">
            ${config.projects.map((project) => projectCard(project, { large: true, showEyebrow: true })).join("")}
          </div>
        </div>
      </section>

      ${renderContact(config.contact.projectsTitle)}
    `;
  }

  renderHeader();
  renderFooter();
  if (page === "projects") renderProjects();
  else renderHome();
})();
