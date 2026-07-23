const sharp = require('sharp');
const A = "/sessions/zealous-practical-meitner/mnt/Presentation Design setup/output/aquarium-run/assets";
(async()=>{
  // hero for cover bottom band: ratio 13.333 : 4.75 = 2.807
  await sharp(`${A}/hero.png`).resize(2400, 855, {fit:'cover', position:'centre'}).png().toFile(`${A}/heroCover.png`);
  // hero for section-ish use (not needed) ; fish card ratio 1.58
  await sharp(`${A}/fish.png`).resize(1200, 760, {fit:'cover', position:'centre'}).png().toFile(`${A}/fishCard.png`);
  // drip diagram: trim white, keep aspect (line art on white). Put on white card as-is.
  const meta = await sharp(`${A}/dripdiagram.png`).metadata();
  console.log('drip', meta.width, meta.height, 'ratio', (meta.width/meta.height).toFixed(3));
  console.log('crops done');
})();
