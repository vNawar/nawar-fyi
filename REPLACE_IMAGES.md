# Image replacement guide

Keep the design as-is and gradually replace image assets with real material. Use blurred/cropped versions where needed.

## Highest priority replacements

- `image asset-homelab-dashboard.svg` → Glance/Homepage dashboard or Proxmox dashboard.
- `image asset-proxmox.svg` → Proxmox node/VM/LXC screenshot.
- `image asset-server-photo.svg` → actual server/rack/chassis photo.
- `image asset-network-lab.svg` → GNS3 topology or network diagram.
- `image asset-mikrotik.svg` → MikroTik/MikroTik/RouterOS screen with IPs/keys hidden.
- `image asset-erp-systems.svg` → sanitized ERP, Odoo, or reporting dashboard screenshot.
- `image asset-industrial-ops.svg` → safe industrial IT/cabling/rack/VoIP/CCTV hardware photo.
- `image asset-certificate.svg` → blurred/cropped B.Sc. document; hide certificate numbers, QR codes, stamps, signatures, and sensitive details.

## Safety rules

Do not publish passwords, VPN keys, public IPs, internal IP maps, customer names, invoices, supplier prices, camera feeds, signatures, certificate numbers, private reports, or anything that exposes home infrastructure.

## Suggested image sizes

- Project cards: 1200×800px or similar.
- Gallery images: 1400px wide if screenshots.
- Compress images before upload; WebP is preferred for screenshots and photos.
