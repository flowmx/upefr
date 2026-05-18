import { readFileSync, writeFileSync } from 'fs';

const filePath = 'src/data/productos.js';
const src = readFileSync(filePath, 'utf-8');
const match = src.match(/export const INITIAL_PRODUCTS = (\[[\s\S]*\]);/);
const products = JSON.parse(match[1]);

// Keywords que identifican calzado en el título
const SHOE_KW = ['zapato', 'bota', 'boot', 'calzado', 'slip-on', 'comp-toe', 'moc-toe',
                 'steel-toe', 'puntera', 'conveyer', 'morphix', 'quicktrail', 'sport'];
const isShoe = p => SHOE_KW.some(kw => p.title.toLowerCase().includes(kw));

// Marcas 100% calzado — todos sus productos son calzado
const PURE_CALZADO = new Set(['Kodiak', 'Terra', 'Wolverine', 'Georgia Boot', 'Keen', 'Die Hard']);
// Marcas mixtas — se decide por keyword del título
const MIXED = new Set(['Ariat', 'CAT', 'Timberland', 'Timberland PRO']);
// Marcas EPP / soldadura
const EPP_BRANDS = new Set(['Black Stallion', 'Best Welds', 'Tillman', 'Oberon']);

let calzadoFixed = 0, eppFixed = 0;

for (const p of products) {
    if (PURE_CALZADO.has(p.brand)) {
        if (p.mainCategory !== 'calzado') { p.mainCategory = 'calzado'; calzadoFixed++; }
        if (p.tipoprenda !== 'Calzado de seguridad') p.tipoprenda = 'Calzado de seguridad';
    } else if (MIXED.has(p.brand) && isShoe(p)) {
        if (p.mainCategory !== 'calzado') {
            console.log(`  CALZADO [${p.brand}] ${p.title.slice(0,60)}`);
            p.mainCategory = 'calzado'; calzadoFixed++;
        }
        if (p.tipoprenda !== 'Calzado de seguridad') p.tipoprenda = 'Calzado de seguridad';
    }
    if (EPP_BRANDS.has(p.brand) && p.mainCategory !== 'epp') {
        p.mainCategory = 'epp'; eppFixed++;
    }
}

console.log(`\nCalzado fixed: ${calzadoFixed} | EPP fixed: ${eppFixed}`);
const header = src.slice(0, src.indexOf('export const INITIAL_PRODUCTS'));
writeFileSync(filePath, header + 'export const INITIAL_PRODUCTS = ' + JSON.stringify(products, null, 4) + ';\n');
console.log('Done.');
