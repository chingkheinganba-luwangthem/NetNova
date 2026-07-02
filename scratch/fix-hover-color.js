const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/components/navbar/Navbar.tsx',
  'src/components/hero/HeroSection.tsx',
  'src/components/ui/CTASection.tsx',
  'src/components/refer/ReferBanner.tsx'
];

for (const relPath of filesToUpdate) {
  const fullPath = path.join(process.cwd(), relPath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Change hover background from #c29c3a to #07162B (Deep Navy)
    content = content.replace(/bg-\[#c29c3a\]/g, 'bg-[#07162B]');
    
    // Add text color transition to span
    content = content.replace(
      /<span className="relative z-10([^"]*?text-(?:sm|\[\d+px\])[^"]*?)">/g,
      '<span className="relative z-10$1 group-hover:text-[#FBF6E8] transition-colors duration-300">'
    );
    
    // Fix any potential double additions
    content = content.replace(/group-hover:text-\[#FBF6E8\] transition-colors duration-300 group-hover:text-\[#FBF6E8\] transition-colors duration-300/g, 'group-hover:text-[#FBF6E8] transition-colors duration-300');

    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated ${relPath}`);
  }
}
