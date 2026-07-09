/*
  EDIT THIS FILE FOR FAST UPDATES
  --------------------------------
  1) Change your email below.
  2) Change project text, tags, or image paths below.
  3) Upload project images into: assets/img/projects/
  4) Example image path: assets/img/projects/my-server-photo.jpg
*/

window.SITE_CONFIG = {
  siteName: "Nawar.fyi",
  ownerName: "Nawar Alhussain",
  brandInitial: "N",
  email: "hello@nawar.fyi",

  hero: {
    eyebrow: "Network · Infrastructure · Industrial IT",
    title: "Infrastructure-focused Computer Engineer.",
    lead: "I build, operate, and troubleshoot practical technology systems across servers, networks, manufacturing environments, ERP operations, homelabs, and business applications.",
    status: "Available for infrastructure, networking, and technical operations roles",
    coreFocusLabel: "Core focus",
    coreFocus: "Industrial IT + Network Infrastructure"
  },

  summaryMetrics: [
    { title: "Servers", text: "Windows · Linux · Proxmox" },
    { title: "Networks", text: "VLANs · VPN · DNS · Routing" },
    { title: "Systems", text: "ERP · CCTV · VoIP · Backups" },
    { title: "Labs", text: "Docker · GNS3 · MikroTik · AI" }
  ],

  skills: [
    {
      title: "Networking",
      icon: "assets/img/icon-network.svg",
      text: "LAN/WAN, VLANs, routing, VPNs, MikroTik, OPNsense, WireGuard, DNS, and network troubleshooting."
    },
    {
      title: "Systems & Infrastructure",
      icon: "assets/img/icon-server.svg",
      text: "Windows Server, Active Directory, Linux, Proxmox, Docker, storage, backups, and service availability."
    },
    {
      title: "Industrial IT",
      icon: "assets/img/icon-factory.svg",
      text: "ERP, CCTV, VoIP, Wi‑Fi, cabling, users, vendors, and production-critical technical support."
    },
    {
      title: "Business Systems",
      icon: "assets/img/icon-business.svg",
      text: "ERP operations, manufacturing workflows, asset tracking, documentation, process improvement, and reporting."
    }
  ],

  projects: [
    {
      id: "industrial-it",
      eyebrow: "Real operations",
      title: "Industrial IT Infrastructure",
      image: "assets/img/project-industrial-it.svg",
      imageAlt: "Factory infrastructure and server illustration",
      summary: "Supported and improved IT infrastructure for a manufacturing company, including servers, ERP, network, CCTV, VoIP, Wi‑Fi, cabling, backups, vendors, and daily operations.",
      tags: ["Windows Server", "ERP", "Networking", "CCTV", "VoIP", "Operations"],
      featured: true
    },
    {
      id: "homelab",
      eyebrow: "Self-hosted infrastructure",
      title: "Homelab Infrastructure",
      image: "assets/img/project-homelab.svg",
      imageAlt: "Private homelab cloud illustration",
      summary: "Built a private infrastructure lab using Proxmox, Docker, OPNsense, WireGuard, Traefik, DNS, storage, and self-hosted applications for learning and daily use.",
      tags: ["Proxmox", "Docker", "OPNsense", "WireGuard", "Traefik", "Linux"],
      featured: true
    },
    {
      id: "network-lab",
      eyebrow: "Routing & switching",
      title: "Network Engineering Lab",
      image: "assets/img/project-network-lab.svg",
      imageAlt: "Network engineering lab topology illustration",
      summary: "Designed and tested networking labs focused on routing, switching, VPNs, MikroTik RouterOS, enterprise networking, and service-provider concepts.",
      tags: ["CCNA", "CCNP", "GNS3", "MikroTik", "Routing", "VLANs"],
      featured: true
    },
    {
      id: "erp-lab",
      eyebrow: "Manufacturing systems",
      title: "Manufacturing ERP Lab",
      image: "assets/img/project-erp.svg",
      imageAlt: "Manufacturing ERP workflow illustration",
      summary: "Modeled a manufacturing ERP workflow for PP woven bag production, covering raw materials, production stages, inventory, orders, reporting, and process documentation.",
      tags: ["Odoo", "ERP", "Manufacturing", "Inventory", "PostgreSQL", "Workflows"],
      featured: false
    },
    {
      id: "isp-wisp",
      eyebrow: "Access networks",
      title: "ISP / WISP Planning",
      image: "assets/img/project-wisp.svg",
      imageAlt: "WISP and fiber planning illustration",
      summary: "Researched and planned ISP/WISP deployment models, including MikroTik-based access networks, CPE design, fiber readiness, monitoring, field tools, and network design.",
      tags: ["MikroTik", "WISP", "Fiber", "CPE", "Monitoring", "Network Design"],
      featured: false
    },
    {
      id: "ai-lab",
      eyebrow: "AI infrastructure",
      title: "Local AI & Automation Lab",
      image: "assets/img/project-ai.svg",
      imageAlt: "Local AI and automation lab illustration",
      summary: "Experimented with local AI services, embeddings, document tools, automation, and GPU-powered self-hosted workflows for private knowledge and productivity systems.",
      tags: ["Ollama", "Open WebUI", "AI", "Docker", "RTX 3090", "Automation"],
      featured: false
    }
  ],

  contact: {
    homeTitle: "Interested in infrastructure, networking, industrial IT, or ERP operations?",
    projectsTitle: "Need someone practical with infrastructure and operations?",
    text: "Reach me by email for technical roles, project discussions, or infrastructure-related opportunities.",
    button: "Email Me"
  }
};
