import { readFileSync, writeFileSync } from 'fs';

const filePath = 'src/data/productos.js';
const src = readFileSync(filePath, 'utf-8');

const EPP_BRANDS = new Set(['Black Stallion', 'Best Welds', 'Tillman', 'Oberon']);

// Parse the INITIAL_PRODUCTS array
const match = src.match(/export const INITIAL_PRODUCTS = (\[[\s\S]*\]);/);
if (!match) { console.error('No match'); process.exit(1); }

const products = JSON.parse(match[1]);

let count = 0;
for (const p of products) {
    if (EPP_BRANDS.has(p.brand)) {
        p.mainCategory = 'epp';
        count++;
    }
}

console.log(`Recategorized ${count} products → epp`);

const header = src.slice(0, src.indexOf('export const INITIAL_PRODUCTS'));
const newFile = header + 'export const INITIAL_PRODUCTS = ' + JSON.stringify(products, null, 4) + ';\n';
writeFileSync(filePath, newFile, 'utf-8');
console.log('Done.');
