const fs = require('fs');
const path = require('path');

const replacements = [
  { from: /13,\s*110,\s*253/g, to: '30, 58, 138' }, // #0D6EFD -> Royal Blue
  { from: /0,\s*229,\s*255/g, to: '217, 178, 76' }, // #00E5FF -> Gold
  { from: /37,\s*99,\s*235/g, to: '30, 58, 138' }, // #2563EB -> Royal Blue
  { from: /59,\s*130,\s*246/g, to: '7, 22, 43' }, // #3B82F6 -> Deep Navy
];

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let original = content;
      
      for (const rule of replacements) {
        content = content.replace(rule.from, rule.to);
      }
      
      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated RGBA: ${fullPath}`);
      }
    }
  }
}

walk('./src');
console.log("Done");
