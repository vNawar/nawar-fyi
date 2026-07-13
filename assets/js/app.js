function $(selector, root = document) {
  return root.querySelector(selector);
}

function $all(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

function mailto() {
  return `mailto:${SITE.email}`;
}

function setCommonContent() {
  $all("[data-site-name]").forEach((el) => (el.textContent = SITE.name));
  $all("[data-site-title]").forEach((el) => (el.textContent = SITE.title));
  $all("[data-site-email]").forEach((el) => (el.textContent = SITE.email));
  $all("[data-mailto]").forEach((el) => el.setAttribute("href", mailto()));
}

function chip(text) {
  return `<span class="chip">${text}</span>`;
}

function projectCard(project) {
  return `
    <article class="project-card reveal" data-project-card-id="${project.id}" tabindex="0" role="button" data-project-card="${project.id}">
      <a class="project-image-link" href="projects.html#${project.id}" aria-label="Open ${project.title}">
        <img src="${project.image}" alt="${project.title} project image" loading="lazy" />
      </a>
      <div class="project-card-body">
        <p class="eyebrow"><span></span>${project.category}</p>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <div class="chips">${project.skills.slice(0, 6).map(chip).join("")}</div>
      </div>
    </article>`;
}

function renderHome() {
  const heroTags = $("[data-hero-tags]");
  if (heroTags) heroTags.innerHTML = SITE.headlineTags.map(chip).join("");

  const heroSummary = $("[data-hero-summary]");
  if (heroSummary) heroSummary.textContent = SITE.heroSummary;

  const stats = $("[data-proof-stats]");
  if (stats) {
    stats.innerHTML = SITE.proofStats
      .map((item) => `<div class="stat-card"><strong>${item.value}</strong><span>${item.label}</span></div>`)
      .join("");
  }

  const coreSkills = $("[data-core-skills]");
  if (coreSkills) {
    coreSkills.innerHTML = SITE.coreSkills
      .map((item) => `<article class="skill-card reveal"><h3>${item.name}</h3><p>${item.text}</p></article>`)
      .join("");
  }

  const skillCloud = $("[data-skill-cloud]");
  if (skillCloud) skillCloud.innerHTML = SITE.skillCloud.map(chip).join("");

  const featuredProjects = $("[data-featured-projects]");
  if (featuredProjects) {
    featuredProjects.innerHTML = SITE.projects.slice(0, 6).map(projectCard).join("");
  }
}

function projectTab(project, index) {
  return `
    <button class="project-tab ${index === 0 ? "active" : ""}" data-project-tab="${project.id}">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <strong>${project.title}</strong>
      <small>${project.category}</small>
    </button>`;
}

function projectDetail(project) {
  return `
    <section class="project-detail-panel" data-project-panel="${project.id}">
      <div class="project-detail-hero">
        <div>
          <p class="eyebrow"><span></span>${project.category}</p>
          <h2>${project.title}</h2>
          <p>${project.summary}</p>
          <div class="chips large">${project.skills.map(chip).join("")}</div>
        </div>
        <a class="proof-image hero-proof-image" href="${project.image}" data-lightbox-src="${project.image}" data-lightbox-title="${project.title}">
          <img src="${project.image}" alt="${project.title} main project image" loading="lazy" />
        </a>
      </div>

      <div class="project-detail-grid">
        <article class="detail-card">
          <h3>Engineering highlights</h3>
          <ul>${project.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
      </div>

      <div class="gallery-grid">
        ${project.gallery
          .map(
            (image) => `
          <a class="proof-image" href="${image}" data-lightbox-src="${image}" data-lightbox-title="${project.title}">
            <img src="${image}" alt="${project.title} gallery image" loading="lazy" />
          </a>`
          )
          .join("")}
      </div>
    </section>`;
}

function renderProjectsPage() {
  const tabs = $("[data-project-tabs]");
  const panels = $("[data-project-panels]");
  const cards = $("[data-projects-grid]");

  if (cards) cards.innerHTML = SITE.projects.map(projectCard).join("");
  if (!tabs || !panels) return;

  tabs.innerHTML = SITE.projects.map(projectTab).join("");
  panels.innerHTML = SITE.projects.map(projectDetail).join("");

  function activate(id, shouldScroll = false) {
    const target = SITE.projects.find((p) => p.id === id) || SITE.projects[0];
    $all("[data-project-tab]").forEach((tab) => tab.classList.toggle("active", tab.dataset.projectTab === target.id));
    $all("[data-project-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.projectPanel === target.id));
    history.replaceState(null, "", `#${target.id}`);
    if (shouldScroll) $(".project-workbench")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  tabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-project-tab]");
    if (!button) return;
    activate(button.dataset.projectTab, true);
  });

  activate(location.hash.replace("#", "") || SITE.projects[0].id, false);
}


function ensureLightbox() {
  let lightbox = $("[data-lightbox]");
  if (lightbox) return lightbox;

  lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.setAttribute("data-lightbox", "");
  lightbox.setAttribute("aria-hidden", "true");
  lightbox.innerHTML = `
    <button class="lightbox-backdrop" type="button" aria-label="Close image preview"></button>
    <figure class="lightbox-frame">
      <button class="lightbox-close" type="button" aria-label="Close image preview">×</button>
      <img data-lightbox-image alt="Expanded project image" />
      <figcaption data-lightbox-caption></figcaption>
    </figure>`;
  document.body.appendChild(lightbox);
  return lightbox;
}

function openLightbox(src, title = "") {
  const lightbox = ensureLightbox();
  const image = $("[data-lightbox-image]", lightbox);
  const caption = $("[data-lightbox-caption]", lightbox);
  image.src = src;
  image.alt = title ? `${title} expanded image` : "Expanded project image";
  caption.textContent = title;
  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
}

function closeLightbox() {
  const lightbox = $("[data-lightbox]");
  if (!lightbox) return;
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
}

function initLightbox() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-lightbox-src]");
    if (link) {
      event.preventDefault();
      openLightbox(link.dataset.lightboxSrc, link.dataset.lightboxTitle || "");
      return;
    }

    if (event.target.closest(".lightbox-close") || event.target.closest(".lightbox-backdrop")) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });
}

function revealOnScroll() {
  const items = $all(".reveal");
  if (!items.length || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((item) => observer.observe(item));
}

function init() {
  setCommonContent();
  renderHome();
  renderProjectsPage();
  initLightbox();
  revealOnScroll();
}

document.addEventListener("DOMContentLoaded", init);


/* Project card navigation */
function activateProjectFromCard(projectId) {
  const projectPageHasTabs = Boolean(document.querySelector("[data-project-tabs]"));

  // On the homepage, project cards should still navigate to the Projects page.
  if (!projectPageHasTabs) {
    window.location.href = `projects.html#${projectId}`;
    return;
  }

  const targetTab = document.querySelector(`[data-project-tab="${projectId}"]`);

  if (targetTab && typeof targetTab.click === "function") {
    targetTab.click();
  } else {
    // Direct fallback matching the site's actual tab/panel attributes.
    document.querySelectorAll("[data-project-tab]").forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.projectTab === projectId);
    });

    document.querySelectorAll("[data-project-panel]").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.projectPanel === projectId);
    });

    history.replaceState(null, "", `#${projectId}`);
  }

  const workbench = document.querySelector(".project-workbench") || document.querySelector("[data-project-panels]");
  if (workbench) {
    workbench.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

document.addEventListener('click', (event) => {
  const card = event.target.closest('[data-project-card-id]');
  if (!card) return;

  const projectId = card.dataset.projectCardId;
  if (!projectId) return;

  event.preventDefault();
  activateProjectFromCard(projectId);
});


document.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter' && event.key !== ' ') return;
  const card = event.target.closest && event.target.closest('[data-project-card-id]');
  if (!card) return;
  event.preventDefault();
  const projectId = card.dataset.projectCardId;
  if (projectId) activateProjectFromCard(projectId);
});
