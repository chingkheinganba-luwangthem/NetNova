const fs = require('fs');
const path = require('path');

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace text-[#94A3B8] with a more visible dark slate / navy for text legibility
      // #475569 is Tailwind's slate-600 which provides good contrast on light backgrounds.
      // We will only replace the text utilities, not borders or bg.
      const original = content;
      content = content.replace(/text-\[#94A3B8\]/g, 'text-[#475569]');
      
      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated text color in: ${fullPath}`);
      }
    }
  }
}

walk('./src');
console.log("Done");
