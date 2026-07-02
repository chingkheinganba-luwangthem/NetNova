const fs = require('fs');
const path = require('path');

const replacements = [
  // Hex Colors
  { from: /#2563EB/gi, to: '#1E3A8A' },
  { from: /#1D4ED8/gi, to: '#07162B' },
  { from: /#3B82F6/gi, to: '#07162B' },
  { from: /#0A1930/gi, to: '#07162B' },
  { from: /#0F172A/gi, to: '#07162B' },
  { from: /#64748B/gi, to: '#94A3B8' },
  { from: /#475569/gi, to: '#94A3B8' },
  { from: /#1E293B/gi, to: '#94A3B8' },
  { from: /#334155/gi, to: '#94A3B8' },
  { from: /#F8FAFC/gi, to: '#FBF6E8' },
  { from: /#F1F5F9/gi, to: '#FBF6E8' },
  { from: /#EAB308/gi, to: '#D9B24C' },
  { from: /#F59E0B/gi, to: '#D9B24C' },
  { from: /#60A5FA/gi, to: '#D9B24C' },

  // Tailwind Backgrounds
  { from: /\bbg-white\b/g, to: 'bg-[#FBF6E8]' },
  { from: /\bbg-slate-50\b/g, to: 'bg-[#FBF6E8]' },
  { from: /\bbg-slate-100\b/g, to: 'bg-[#FBF6E8]' },
  { from: /\bbg-slate-200\b/g, to: 'bg-[#94A3B8]/20' },
  { from: /\bbg-slate-300\b/g, to: 'bg-[#94A3B8]/30' },
  { from: /\bbg-blue-50\b/g, to: 'bg-[#1E3A8A]/10' },
  { from: /\bbg-blue-600\b/g, to: 'bg-[#1E3A8A]' },
  
  // Tailwind Text
  { from: /\btext-white\b/g, to: 'text-[#FBF6E8]' },
  { from: /\btext-slate-900\b/g, to: 'text-[#07162B]' },
  { from: /\btext-slate-800\b/g, to: 'text-[#07162B]' },
  { from: /\btext-slate-700\b/g, to: 'text-[#94A3B8]' },
  { from: /\btext-slate-600\b/g, to: 'text-[#94A3B8]' },
  { from: /\btext-slate-500\b/g, to: 'text-[#94A3B8]' },
  { from: /\btext-slate-400\b/g, to: 'text-[#94A3B8]/80' },
  { from: /\btext-slate-300\b/g, to: 'text-[#94A3B8]/60' },
  { from: /\btext-blue-100\b/g, to: 'text-[#FBF6E8]/80' },

  // Tailwind Borders
  { from: /\bborder-slate-100\b/g, to: 'border-[#94A3B8]/20' },
  { from: /\bborder-slate-200\b/g, to: 'border-[#94A3B8]/30' },
  { from: /\bborder-blue-100\b/g, to: 'border-[#1E3A8A]/20' },
  { from: /\bborder-blue-200\b/g, to: 'border-[#1E3A8A]/30' },
  { from: /\bborder-white\b/g, to: 'border-[#FBF6E8]' },

  // Tailwind Gradients
  { from: /\bfrom-blue-50\b/g, to: 'from-[#1E3A8A]/10' },
  { from: /\bfrom-blue-100\b/g, to: 'from-[#1E3A8A]/20' },
  { from: /\bfrom-blue-500\b/g, to: 'from-[#1E3A8A]' },
  { from: /\bto-blue-600\b/g, to: 'to-[#07162B]' },
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
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

walk('./src');
console.log("Done");
