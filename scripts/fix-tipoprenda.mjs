import { readFileSync, writeFileSync } from 'fs';

const filePath = 'src/data/productos.js';
const src = readFileSync(filePath, 'utf-8');

const match = src.match(/export const INITIAL_PRODUCTS = (\[[\s\S]*\]);/);
if (!match) { console.error('No match'); process.exit(1); }

const products = JSON.parse(match[1]);

// Marcas que son 100% calzado — forzar mainCategory y tipoprenda correctos
const CALZADO_BRANDS = new Set([
    'Ariat', 'Kodiak', 'Terra', 'Timberland', 'Timberland PRO',
    'Wolverine', 'Georgia Boot', 'Keen', 'Die Hard', 'CAT'
]);

let fixed = 0;
for (const p of products) {
    if (CALZADO_BRANDS.has(p.brand)) {
        let changed = false;
        if (p.mainCategory !== 'calzado') { p.mainCategory = 'calzado'; changed = true; }
        if (p.tipoprenda !== 'Calzado de seguridad') { p.tipoprenda = 'Calzado de seguridad'; changed = true; }
        if (changed) {
            console.log(`  FIX [${p.brand}]: ${p.title.slice(0, 65)}`);
            fixed++;
        }
    }
    // También corregir cualquier producto con mainCategory=calzado que tenga tipoprenda malo
    if (p.mainCategory === 'calzado' && p.tipoprenda !== 'Calzado de seguridad') {
        console.log(`  FIX-cat [${p.brand}]: ${p.tipoprenda} → Calzado de seguridad`);
        p.tipoprenda = 'Calzado de seguridad';
        fixed++;
    }
}

console.log(`\nFixed ${fixed} products`);
const header = src.slice(0, src.indexOf('export const INITIAL_PRODUCTS'));
writeFileSync(filePath, header + 'export const INITIAL_PRODUCTS = ' + JSON.stringify(products, null, 4) + ';\n', 'utf-8');
console.log('Done.');
