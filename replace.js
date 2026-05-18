const fs = require('fs');

let content = fs.readFileSync('App.jsx', 'utf8');

const replacements = [
  { regex: /\bbg-black\b/g, replacement: 'bg-[#082240]' },
  { regex: /\btext-black\b/g, replacement: 'text-[#082240]' },
  { regex: /\bbg-gray-900\b/g, replacement: 'bg-[#082240]' },
  { regex: /\btext-gray-900\b/g, replacement: 'text-[#0c345f]' },
  { regex: /\border-gray-900\b/g, replacement: 'border-[#082240]' },
  { regex: /\bvia-black\b/g, replacement: 'via-[#082240]' },
  { regex: /\btext-gray-800\b/g, replacement: 'text-[#0c345f]' },
  { regex: /\bbg-gray-800\b/g, replacement: 'bg-[#0c345f]' },
  { regex: /\bshadow-gray-900\/10\b/g, replacement: 'shadow-[#082240]/10' },
];

let matchCount = 0;
replacements.forEach(({ regex, replacement }) => {
  const matches = content.match(regex);
  if (matches) {
    matchCount += matches.length;
    console.log(`Matched ${regex}: ${matches.length} times`);
  }
  content = content.replace(regex, replacement);
});

if (matchCount > 0) {
  fs.writeFileSync('App.jsx', content, 'utf8');
  console.log(`Replaced ${matchCount} total occurrences in App.jsx`);
} else {
  console.log('No matches found in App.jsx');
}
