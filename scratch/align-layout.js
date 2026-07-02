const fs = require('fs');
const path = require('path');

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const original = content;
      // Replace the container wrapper classes to match Navbar/Hero layout
      content = content.replace(/max-w-7xl mx-auto px-4 sm:px-6 lg:px-8/g, 'max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16');
      
      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated wrapper in: ${fullPath}`);
      }
    }
  }
}

walk('./src/components');
console.log("Done updating layout wrappers");
