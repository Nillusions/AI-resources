// Generate Lucide-style line icons as PNGs (24-grid, stroke 2, round caps)
const sharp = require('sharp');
const fs = require('fs');
const OUT = "/sessions/zealous-practical-meitner/mnt/Presentation Design setup/output/aquarium-run/assets";

// inner SVG markup for each icon (viewBox 0 0 24 24), fill none
const I = {
  wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L4 16.8V20h3.2l5.3-5.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.1-2.1z"/>',
  list: '<path d="M8 6h11M8 12h11M8 18h11"/><path d="M3.5 6h.01M3.5 12h.01M3.5 18h.01"/>',
  refresh: '<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',
  fish: '<path d="M3 12c3-5 8-6 12-6 3 0 5 1.5 6 3-1 1.5-3 3-6 3-4 0-9-1-12-6Z" transform="translate(0 3)"/><path d="M18 12l3-3v9l-3-3" transform="translate(0 3)"/><circle cx="8" cy="14" r="1"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="16" rx="2"/><path d="M8 3v4M16 3v4M3.5 10h17"/>',
  flag: '<path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/>',
  filter: '<path d="M3 5h18l-7 8v6l-4-2v-4z"/>',
  thermometer: '<path d="M13 15V5a2.5 2.5 0 0 0-5 0v10a4 4 0 1 0 5 0z"/><path d="M10.5 9v6"/>',
  beaker: '<path d="M9 3h6M10 3v6l-5 9a1.5 1.5 0 0 0 1.3 2.2h11.4A1.5 1.5 0 0 0 19 18l-5-9V3"/><path d="M7 15h10"/>',
  flask: '<path d="M9 3v6l-4.5 8A1.5 1.5 0 0 0 6 19h12a1.5 1.5 0 0 0 1.5-2L15 9V3"/><path d="M8.5 3h7"/><circle cx="10" cy="15" r="1"/><circle cx="14" cy="17" r="1"/>',
  layers: '<path d="M12 3 3 8l9 5 9-5-9-5z"/><path d="M3 13l9 5 9-5"/>',
  leaf: '<path d="M4 20c8 0 16-4 16-15C10 5 5 9 5 15c0 2 1 3 1 3"/><path d="M6 18C9 13 13 11 17 10"/>',
  bulb: '<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.3 1 2.5h6c0-1.2.3-1.8 1-2.5A6 6 0 0 0 12 3z"/>',
  box: '<path d="M3 8l9-5 9 5v8l-9 5-9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
  wind: '<path d="M3 8h11a3 3 0 1 0-3-3"/><path d="M3 12h16a3 3 0 1 1-3 3"/><path d="M3 16h8a2.5 2.5 0 1 1-2.5 2.5"/>',
  droplet: '<path d="M12 3s6 6 6 11a6 6 0 0 1-12 0c0-5 6-11 6-11z"/>',
  plug: '<path d="M9 3v6M15 3v6"/><path d="M7 9h10v3a5 5 0 0 1-10 0z"/><path d="M12 17v4"/>',
  maximize: '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
  utensils: '<path d="M6 3v8M4 3v4a2 2 0 0 0 2 2M8 3v4a2 2 0 0 1-2 2M6 11v10"/><path d="M17 3c-1.5 1-2.5 3-2.5 6 0 2 1 3 2.5 3V3zM17 15v6"/>',
  users: '<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 6a3 3 0 0 1 0 5.5"/><path d="M21 20a5.5 5.5 0 0 0-3.5-5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  shield: '<path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6z"/><path d="M9 12l2 2 4-4"/>',
  arrowdown: '<path d="M12 5v14M6 13l6 6 6-6"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>',
  ban: '<circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/>',
  table: '<rect x="3" y="4" width="18" height="5" rx="1"/><path d="M6 9v11M18 9v11M6 20h12"/>',
  ruler: '<rect x="3" y="8" width="18" height="8" rx="1"/><path d="M7 8v3M11 8v4M15 8v3M19 8v4"/>',
};

const sizes = { ink:'0E4A5A', white:'FFFFFF', accent:'E4572E', aqua:'1B98A8' };

async function run(){
  for(const [name, body] of Object.entries(I)){
    for(const [ck, col] of Object.entries(sizes)){
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="#${col}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
      await sharp(Buffer.from(svg)).png().toFile(`${OUT}/ic_${name}_${ck}.png`);
    }
  }
  console.log('icons done');
}
run();
