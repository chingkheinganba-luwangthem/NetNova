const fs = require('fs');
const path = require('path');

const fullPath = path.join(process.cwd(), 'src/components/footer/Footer.tsx');
let content = fs.readFileSync(fullPath, 'utf8');

// Footer container
content = content.replace(
  /<footer className="bg-\[#FBF6E8\] text-\[#07162B\] border-t border-\[#94A3B8\]\/30/g,
  '<footer className="bg-[#07162B] text-[#FBF6E8] border-t border-[#1E3A8A]/40'
);

// Glows
content = content.replace(/bg-\[#07162B\]\/5 rounded-full/g, 'bg-[#1E3A8A]/20 rounded-full');

// Social icons
content = content.replace(
  /w-10 h-10 rounded-xl bg-\[#FBF6E8\] border border-\[#94A3B8\]\/30 flex items-center justify-center text-\[#475569\] hover:text-\[#FBF6E8\] hover:bg-gradient-to-tr hover:from-\[#1E3A8A\] hover:to-\[#07162B\] hover:border-transparent/g,
  'w-10 h-10 rounded-xl bg-[#1E3A8A]/20 border border-[#1E3A8A]/50 flex items-center justify-center text-[#94A3B8] hover:text-[#07162B] hover:bg-[#D9B24C] hover:border-transparent'
);

// Text colors (descriptions and links)
content = content.replace(/text-\[#475569\]/g, 'text-[#94A3B8]');

// Headings
content = content.replace(/text-\[#07162B\] font-bold text-lg mb-6/g, 'text-[#FBF6E8] font-bold text-lg mb-6');

// Heading bullet dots
content = content.replace(/bg-\[#07162B\]" \/>/g, 'bg-[#D9B24C]" />');
content = content.replace(/bg-\[#1E3A8A\]" \/>/g, 'bg-[#D9B24C]" />');
content = content.replace(/bg-gradient-to-r from-\[#1E3A8A\] to-\[#07162B\]" \/>/g, 'bg-[#D9B24C]" />');

// Link hovers
content = content.replace(/hover:text-\[#1E3A8A\]/g, 'hover:text-[#D9B24C]');
content = content.replace(/hover:text-\[#07162B\]/g, 'hover:text-[#D9B24C]');
content = content.replace(/group-hover:text-\[#07162B\]/g, 'group-hover:text-[#D9B24C]');

// Contact icons
content = content.replace(/text-\[#1E3A8A\]/g, 'text-[#D9B24C]');
content = content.replace(/group-hover:border-\[#1E3A8A\]\/50/g, 'group-hover:border-[#D9B24C]/50');

// Bottom Bar
content = content.replace(/border-t border-\[#94A3B8\]\/30 relative z-10 bg-\[#FBF6E8\]/g, 'border-t border-[#1E3A8A]/40 relative z-10 bg-[#07162B]');

fs.writeFileSync(fullPath, content, 'utf8');
console.log("Footer dark mode updated");
