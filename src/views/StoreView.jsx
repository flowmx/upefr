import React, { useState } from 'react';
import { ChevronDown, ChevronRight, FilterX } from 'lucide-react';

// Fix bug #4: filtrado por marca ahora funcional
const StoreView = ({ products, storeFilter, goToProduct }) => {
    const [activeCategory, setActiveCategory] = useState(
        storeFilter?.type === 'mainCategory' ? storeFilter.value : 'Todos'
    );
    const [activeBrand, setActiveBrand] = useState(
        storeFilter?.type === 'brand' ? storeFilter.value : null
    );

    // Determinar productos a mostrar según filtros activos
    let displayedProducts = products;

    if (activeCategory !== 'Todos') {
        displayedProducts = displayedProducts.filter(p => p.mainCategory === activeCategory);
    }
    if (activeBrand) {
        displayedProducts = displayedProducts.filter(p => p.brand === activeBrand);
    }

    // Marcas únicas disponibles según la categoría activa
    const availableBrands = [...new Set(
        (activeCategory !== 'Todos'
            ? products.filter(p => p.mainCategory === activeCategory)
            : products
        ).map(p => p.brand).filter(Boolean)
    )].sort();

    const clearFilters = () => {
        setActiveCategory('Todos');
        setActiveBrand(null);
    };

    const ProductGrid = ({ items }) => (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
            {items.length === 0 ? (
                <div className="col-span-full py-20 text-center">
                    <FilterX className="w-10 h-10 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 font-medium">No se encontraron productos con estos filtros.</p>
                    <button onClick={clearFilters} className="mt-4 text-xs font-bold uppercase tracking-widest underline underline-offset-4 text-black hover:text-gray-500 transition-colors">
                        Limpiar filtros
                    </button>
                </div>
            ) : (
                items.map(product => (
                    <div
                        key={product.id}
                        className="flex flex-col group cursor-pointer"
                        onClick={() => goToProduct(product.id)}
                    >
                        <div className="h-[250px] md:h-[300px] w-full bg-[#f5f5f5] mb-4 relative overflow-hidden flex items-center justify-center p-6">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-col flex-1 bg-[#f5f5f5] p-5 relative">
                            <div className="text-[10px] text-gray-500 font-bold mb-1 tracking-wider uppercase">{product.mainCategory || 'Categoría'}</div>
                            <h3 className="font-semibold text-black text-[13px] leading-snug mb-3 group-hover:underline underline-offset-2 decoration-1 line-clamp-2">
                                {product.title}
                            </h3>
                            <div className="mt-auto">
                                <span className="text-black font-bold text-xs uppercase tracking-widest border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors">
                                    VER DETALLES
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );

    return (
        <div className="flex-1 bg-white pb-20">
            {/* Banner */}
            <div className="bg-[#f5f5f5] text-black py-16 relative border-t border-b border-gray-200">
                <div className="max-w-[1600px] mx-auto px-4 text-center md:text-left relative z-10">
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight uppercase">Catálogo B2B</h1>
                    <p className="text-gray-600 text-sm md:text-base max-w-2xl font-medium">Explora nuestro portafolio de protección, selecciona los equipos de interés y solicita una cotización empresarial.</p>
                </div>
            </div>

            <div className="max-w-[1600px] mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12">

                {/* SIDEBAR IZQUIERDO */}
                <div className="w-full lg:w-1/4 flex flex-col space-y-8 pr-0 lg:pr-8">
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <span className="font-bold text-black text-sm uppercase tracking-widest">{displayedProducts.length} resultados</span>
                            <button onClick={clearFilters} className="text-[10px] text-gray-500 hover:text-black uppercase tracking-widest underline decoration-1 underline-offset-4 border-none bg-transparent">Limpiar Todo</button>
                        </div>

                        {/* Filtro Categorías */}
                        <div className="border-t border-black pt-4 mb-8">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-black text-sm uppercase tracking-widest">Categorías</h3>
                            </div>
                            <div className="flex flex-col space-y-2">
                                {['Todos', 'Uniformes FR', 'Calzado', 'EPP'].map(cat => (
                                    <label key={cat} className="flex items-center cursor-pointer group">
                                        <input
                                            type="radio"
                                            name="category"
                                            className="mr-3 accent-black"
                                            checked={activeCategory === cat}
                                            onChange={() => { setActiveCategory(cat); setActiveBrand(null); }}
                                        />
                                        <span className={`text-sm group-hover:text-black transition-colors ${activeCategory === cat ? 'text-black font-bold' : 'text-gray-600'}`}>{cat}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Filtro Marcas — Bug #4 corregido */}
                        <div className="border-t border-black pt-4 mb-8">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-black text-sm uppercase tracking-widest">Marca</h3>
                                <ChevronDown className="w-4 h-4" />
                            </div>
                            <div className="flex flex-col space-y-2 max-h-64 overflow-y-auto pr-1">
                                {availableBrands.map(brand => (
                                    <label key={brand} className="flex items-center cursor-pointer group">
                                        <input
                                            type="radio"
                                            name="brand"
                                            className="mr-3 accent-black"
                                            checked={activeBrand === brand}
                                            onChange={() => setActiveBrand(brand)}
                                        />
                                        <span className={`text-sm group-hover:text-black transition-colors ${activeBrand === brand ? 'text-black font-bold' : 'text-gray-600'}`}>{brand}</span>
                                    </label>
                                ))}
                                {activeBrand && (
                                    <button onClick={() => setActiveBrand(null)} className="text-left text-[10px] text-gray-400 hover:text-black uppercase tracking-widest mt-2 underline underline-offset-4">
                                        Limpiar marca
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Ordenar por (visual) */}
                        <div className="border-t border-gray-200 pt-4">
                            <div className="flex justify-between items-center cursor-pointer text-gray-400">
                                <h3 className="font-bold text-sm uppercase tracking-widest">Ordenar Por</h3>
                                <ChevronRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* GRID PRODUCTOS */}
                <div className="w-full lg:w-3/4">
                    {/* Filtros activos badges */}
                    {(activeCategory !== 'Todos' || activeBrand) && (
                        <div className="flex flex-wrap gap-2 mb-8">
                            {activeCategory !== 'Todos' && (
                                <span className="inline-flex items-center gap-2 bg-black text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
                                    {activeCategory}
                                    <button onClick={() => setActiveCategory('Todos')} className="hover:text-gray-300">×</button>
                                </span>
                            )}
                            {activeBrand && (
                                <span className="inline-flex items-center gap-2 bg-black text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
                                    {activeBrand}
                                    <button onClick={() => setActiveBrand(null)} className="hover:text-gray-300">×</button>
                                </span>
                            )}
                        </div>
                    )}
                    <ProductGrid items={displayedProducts} />
                </div>

            </div>
        </div>
    );
};

export default StoreView;
