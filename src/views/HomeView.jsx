import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ArrowRight, ShieldCheck, BarChart3, GitBranch, CheckCircle, Users, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIAS, MARCAS_DESTACADAS_POR_CATEGORIA } from '../data/categorias';
import { COMPANY_INFO } from '../data/constants';

// Hero slides — 4 mensajes clave del negocio
const HERO_SLIDES = [
    {
        img: `${import.meta.env.BASE_URL}hero 1.webp`,
        h1: 'Especialistas en\nunifor­mes FR',
        sub: 'Prendas resistentes al fuego con certificaciones NFPA 2112, NFPA 70E y ASTM F1506. Protección confiable para sectores de energía, petroquímica e industria de alto riesgo.',
    },
    {
        img: `${import.meta.env.BASE_URL}hero 2.webp`,
        h1: 'Más de 30 marcas\nlíderes en FR y seguridad',
        sub: 'Bulwark, Ariat FR, Carhartt FR, Kishigo, Lakeland, DRIFIRE, Benchmark FR, CAT FR y más. La oferta más amplia de marcas FR en México.',
    },
    {
        img: `${import.meta.env.BASE_URL}hero-slider-3.webp`,
        h1: 'Cobertura nacional\nespecializada',
        sub: 'Atendemos proyectos y operaciones en toda la República Mexicana con logística coordinada y entregas directas en sitio.',
    },
    {
        img: `${import.meta.env.BASE_URL}hero-slider-4.webp`,
        h1: 'Uniformes FR,\ncalzado y EPP especializado',
        sub: 'Integramos ropa FR, calzado de seguridad y equipo de protección personal especializado para operaciones industriales de alto riesgo.',
    },
];

// Categorías home
const CATEGORIAS_FR_HOME = [
    { id: 'industrial', nombre: 'Uniformes FR', imagen: `${import.meta.env.BASE_URL}uniformes.webp` },
    { id: 'epp', nombre: 'EPP Especializado', imagen: `${import.meta.env.BASE_URL}epp especializado.webp` },
    { id: 'calzado', nombre: 'Calzado de Seguridad', imagen: `${import.meta.env.BASE_URL}calzado de seguridad.webp` },
    { id: 'accesorios', nombre: 'Accesorios FR', imagen: `${import.meta.env.BASE_URL}accesorios.webp` },
];

// Tipos de prenda
const TIPOS_PRENDA_HOME = [
    { tipo: 'Camisas FR', filterValue: 'Camisa industrial', img: `${import.meta.env.BASE_URL}CAMISA FR.webp` },
    { tipo: 'Pantalones FR', filterValue: 'Pantalón FR', img: `${import.meta.env.BASE_URL}PANTALONES FR.webp` },
    { tipo: 'Playeras FR', filterValue: 'Playera FR', img: `${import.meta.env.BASE_URL}PANTALONES FR-1.webp` },
    { tipo: 'Chamarras FR', filterValue: 'Chamarra FR', img: `${import.meta.env.BASE_URL}CHAMARRA FR.webp` },
    { tipo: 'Overoles FR', filterValue: 'Overol', img: `${import.meta.env.BASE_URL}OVEROL.webp` },
    { tipo: 'Chalecos FR', filterValue: 'Chaleco FR', img: `${import.meta.env.BASE_URL}CHALECO.webp` },
];

// Marca featured carousels — brand debe coincidir exactamente con p.brand en productos.js
const BASE = import.meta.env.BASE_URL;
const BRAND_CAROUSELS = [
    { brand: 'Timberland PRO', logo: `${BASE}marcas/timberland pro.svg` },
    { brand: 'Bulwark',        logo: `${BASE}marcas/bulwark.svg` },
    { brand: 'Ariat',          logo: `${BASE}marcas/ariat work fr.svg` },
];

const HomeView = ({ products, navigate }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeBrandTab, setActiveBrandTab] = useState('industrial');
    const carouselRefs = useRef({});

    useEffect(() => {
        const t = setInterval(() => setCurrentSlide(p => (p + 1) % HERO_SLIDES.length), 8000);
        return () => clearInterval(t);
    }, []);

    const M = `${import.meta.env.BASE_URL}marcas/`; // base path para logos
    const allBrands = [
        { name: "3M",             q: "3M",            img: `${M}3 M.svg` },
        { name: "5.11 Tactical",  q: "5.11",          img: `${M}5.11.svg` },
        { name: "Ansell",         q: "Ansell",         img: `${M}ansell.svg` },
        { name: "Ariat Work FR",  q: "Ariat",          img: `${M}ariat work fr.svg` },
        { name: "Ariat Work",     q: "Ariat",          img: `${M}ariat work.svg` },
        { name: "Axe FR",         q: "Axe",            img: `${M}axe fr.svg` },
        { name: "Benchmark",      q: "Benchmark",      img: `${M}benchmark.svg` },
        { name: "Best Welds",     q: "Best Welds",     img: `${M}bestwelds.svg` },
        { name: "Black Stallion", q: "Black Stallion", img: `${M}blackstallion.svg` },
        { name: "Bullard",        q: "Bullard",        img: `${M}bullard.svg` },
        { name: "Bulwark",        q: "Bulwark",        img: `${M}bulwark.svg` },
        { name: "CAT FR",         q: "CAT",            img: `${M}cat fr.svg` },
        { name: "CAT",            q: "CAT",            img: `${M}cat.svg` },
        { name: "Carhartt FR",    q: "Carhartt",       img: `${M}frcarhart.svg` },
        { name: "Die Hard",       q: "Die Hard",       img: `${M}die hard.svg` },
        { name: "Dickies",        q: "Dickies",        img: `${M}dikies.svg` },
        { name: "DuPont",         q: "DuPont",         img: `${M}dunpont.svg` },
        { name: "Eagle FR",       q: "Eagle",          img: `${M}eagle fr.svg` },
        { name: "Georgia Boot",   q: "Georgia Boot",   img: `${M}georgia boot.svg` },
        { name: "Honeywell",      q: "Honeywell",      img: `${M}honeywell.svg` },
        { name: "IFR",            q: "IFR",            img: `${M}ifr.svg` },
        { name: "Keen",           q: "Keen",           img: `${M}keen.svg` },
        { name: "Kishigo",        q: "Kishigo",        img: `${M}kishigo.svg` },
        { name: "Kodiak",         q: "Kodiak",         img: `${M}kodiak.svg` },
        { name: "Lakeland",       q: "Lakeland",       img: `${M}lakeland.svg` },
        { name: "Lapco FR",       q: "Lapco",          img: `${M}lapco fr.svg` },
        { name: "MCR Safety",     q: "MCR Safety",     img: `${M}mcr safety.svg` },
        { name: "MSA",            q: "MSA",            img: `${M}MSA.svg` },
        { name: "Oberon",         q: "Oberon",         img: `${M}oberon.svg` },
        { name: "PortWest",       q: "PortWest",       img: `${M}portwest.svg` },
        { name: "Rasco FR",       q: "Rasco",          img: `${M}rasco fr.svg` },
        { name: "Red Kap",        q: "Red Kap",        img: `${M}redkap.svg` },
        { name: "Stanco",         q: "Stanco",         img: `${M}stanco.svg` },
        { name: "Terra",          q: "Terra",          img: `${M}terra.svg` },
        { name: "Tillman",        q: "Tillman",        img: `${M}tillman.svg` },
        { name: "Timberland PRO FR", q: "Timberland",  img: `${M}timberland pro fr.svg` },
        { name: "Timberland PRO", q: "Timberland PRO", img: `${M}timberland pro.svg` },
        { name: "Wolverine",      q: "Wolverine",      img: `${M}wolverine.svg` },
        { name: "Workrite",       q: "Workrite",       img: `${M}workrite.svg` },
    ];
    const doubleBrands = [...allBrands, ...allBrands, ...allBrands];

    const upe360Features = [
        { icon: <BarChart3 className="w-5 h-5" />, title: 'Control de Pedidos', desc: 'Monitorea órdenes en proceso, estatus de producción, entregas y movimientos desde una sola plataforma.' },
        { icon: <Users className="w-5 h-5" />, title: 'Seguimiento por Colaborador', desc: 'Consulta asignaciones por empleado, área, proyecto o ubicación con mayor control y organización operativa.' },
        { icon: <GitBranch className="w-5 h-5" />, title: 'Trazabilidad Total', desc: 'Accede al historial completo de prendas, entregas, reposiciones y movimientos realizados dentro de la operación.' },
        { icon: <CheckCircle className="w-5 h-5" />, title: 'Cumplimiento Operativo', desc: 'Mejora el seguimiento de entregas y la administración de requerimientos para mantener continuidad en la operación.' },
        { icon: <ShieldCheck className="w-5 h-5" />, title: 'Organización y Control', desc: 'Estructura programas de uniformes, calzado y EPP especializado con procesos más ordenados y fáciles de administrar.' },
    ];

    const slide = HERO_SLIDES[currentSlide];

    const scrollCarousel = (brand, dir) => {
        const el = carouselRefs.current[brand];
        if (el) el.scrollBy({ left: dir * 280, behavior: 'smooth' });
    };

    return (
        <div className="flex-1 overflow-x-hidden bg-white">
            <style>{`
                @keyframes scroll-x { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                .brands-scroll {
                    animation: scroll-x 45s linear infinite;
                    width: max-content;
                    white-space: nowrap;
                }
                .brands-scroll:hover { animation-play-state: paused; }
                @media (min-width: 768px) { .brands-scroll { animation-duration: 65s; } }
                @media (prefers-reduced-motion: reduce) { .brands-scroll { animation: none; } }
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>

            {/* HERO */}
            <div className="relative h-[calc(100vh-88px)] min-h-[520px] max-h-[820px] flex items-center justify-center overflow-hidden bg-black">
                <AnimatePresence>
                    <motion.img
                        key={currentSlide}
                        src={slide.img}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.0, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="Hero"
                    />
                </AnimatePresence>
                {/* Cinematic overlay: strong bottom-up gradient + left fade on desktop */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050D1A]/90 via-black/35 to-transparent" />
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-black/15 to-transparent hidden md:block" />

                <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-6 w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-4 sm:mb-6 whitespace-pre-line text-center sm:text-left">
                                {slide.h1}
                            </h1>
                            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mb-7 sm:mb-8 leading-relaxed text-center sm:text-left">
                                {slide.sub}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Buttons — estáticos, no se reaniman con cada slide */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start">
                        <motion.button
                            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                            onClick={() => navigate('store')}
                            className="bg-white text-black px-6 sm:px-8 py-3.5 sm:py-4 font-bold text-sm uppercase tracking-wider rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
                        >
                            Ver Catálogo <ArrowRight className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                            onClick={() => navigate('quote')}
                            className="bg-[#0EA5E9] text-white px-6 sm:px-8 py-3.5 sm:py-4 font-bold text-sm uppercase tracking-wider rounded-md flex items-center justify-center gap-2 hover:bg-[#0284C7] transition-colors"
                        >
                            Cotiza tu Proyecto
                        </motion.button>
                    </div>
                </div>
                {/* Dots */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {HERO_SLIDES.map((_, i) => (
                        <button key={i} onClick={() => setCurrentSlide(i)}
                            className={`h-2 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-white w-10' : 'bg-white/40 w-6 hover:bg-white/70'}`} />
                    ))}
                </div>
            </div>

            {/* BRAND MARQUEE — a color, logos grandes */}
            <div className="bg-white border-y border-gray-100 py-5 overflow-hidden">
                <div className="brands-scroll flex items-center">
                    {doubleBrands.map((b, i) => (
                        <button key={i} onClick={() => navigate('store', { brand: b.q })}
                            className="mx-10 flex-shrink-0 hover:scale-110 transition-all duration-300 min-h-[44px] flex items-center cursor-pointer">
                            <img src={b.img} alt={b.name} className="h-14 w-auto max-w-[140px] object-contain" />
                        </button>
                    ))}
                </div>
            </div>

            {/* CATEGORÍAS FR */}
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-20">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-3">Categorías</h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">Soluciones FR certificadas para cada tipo de riesgo industrial.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {CATEGORIAS_FR_HOME.map((cat, i) => (
                        <motion.button
                            key={cat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                            onClick={() => navigate('store', { categoria: cat.id })}
                            className="group relative h-48 md:h-64 overflow-hidden rounded-xl shadow-md"
                        >
                            <img src={cat.imagen} alt={cat.nombre} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                                <p className="text-white font-bold text-lg leading-tight">{cat.nombre}</p>
                                <p className="text-white/70 text-xs mt-0.5 flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Ver más <ChevronRight className="w-3 h-3" />
                                </p>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </section>

            {/* TIPOS DE PRENDA */}
            <section className="bg-[#f8f8f8] border-y border-gray-100 py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight mb-2">Tipos de Prenda</h2>
                        <p className="text-gray-500 text-sm">Encuentra exactamente lo que necesitas por tipo de ropa industrial.</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {TIPOS_PRENDA_HOME.map((item, i) => (
                            <motion.button
                                key={item.tipo}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}
                                onClick={() => navigate('store', { tipoBusqueda: item.filterValue })}
                                className="group relative h-36 overflow-hidden rounded-xl shadow-sm"
                            >
                                <img src={item.img} alt={item.tipo} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                                    <p className="text-white font-bold text-sm leading-tight">{item.tipo}</p>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRODUCTOS DESTACADOS POR MARCA — 3 carruseles */}
            {BRAND_CAROUSELS.map(({ brand, logo }) => {
                const brandProducts = products.filter(p => p.brand === brand).slice(0, 12);
                if (brandProducts.length === 0) return null;
                return (
                    <section key={brand} className="py-10 md:py-16 border-b border-gray-100">
                        <div className="max-w-7xl mx-auto px-4">
                            <div className="flex items-center justify-between mb-6 gap-3">
                                <div className="flex items-center gap-3 min-w-0">
                                    <img src={logo} alt={brand} className="h-7 w-auto object-contain flex-shrink-0 max-w-[100px]" />
                                    <span className="text-gray-200 hidden sm:block">|</span>
                                    <p className="text-sm text-gray-500 font-medium hidden sm:block">Productos Destacados</p>
                                </div>
                                <div className="flex items-center gap-2 flex-shrink-0">
                                    <button onClick={() => scrollCarousel(brand, -1)} className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors cursor-pointer" aria-label="Anterior">
                                        <ChevronLeft className="w-4 h-4" />
                                    </button>
                                    <button onClick={() => scrollCarousel(brand, 1)} className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors cursor-pointer" aria-label="Siguiente">
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                    <button onClick={() => navigate('store', { brand })} className="ml-1 min-h-[44px] px-2 text-xs font-bold uppercase tracking-widest text-[#0057B8] hover:underline flex items-center gap-1">
                                        Ver todos <ChevronRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                            <div
                                ref={el => carouselRefs.current[brand] = el}
                                className="flex gap-4 overflow-x-auto hide-scrollbar pb-2"
                            >
                                {brandProducts.map(product => (
                                    <div
                                        key={product.id}
                                        onClick={() => navigate('product', { id: product.id })}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={e => e.key === 'Enter' && navigate('product', { id: product.id })}
                                        className="flex-shrink-0 w-52 group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 focus-visible:outline-2 focus-visible:outline-[#0057B8]"
                                    >
                                        <div className="h-44 overflow-hidden bg-gray-50">
                                            <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        </div>
                                        <div className="p-3">
                                            <h3 className="text-xs font-semibold text-black leading-snug line-clamp-2 mb-2">{product.title}</h3>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); navigate('quote', { product }); }}
                                                className="w-full text-center text-xs font-semibold text-[#0057B8] uppercase tracking-wider hover:underline"
                                            >
                                                Cotizar →
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            })}

            {/* MARCAS POR CATEGORÍA */}
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-20">
                <div className="text-center mb-8 md:mb-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight mb-2">Marcas Premium por Categoría</h2>
                    <p className="text-gray-500 text-sm">Trabajamos con las mejores marcas certificadas del mundo</p>
                </div>
                <div className="flex overflow-x-auto gap-2 mb-8 pb-1 justify-start sm:justify-center hide-scrollbar">
                    {[
                        { id: 'industrial', label: 'Uniformes FR' },
                        { id: 'calzado', label: 'Calzado de Seguridad' },
                        { id: 'epp', label: 'EPP Especializado' },
                        { id: 'accesorios', label: 'Accesorios FR' },
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveBrandTab(tab.id)}
                            className={`px-5 py-2.5 min-h-[44px] rounded-full text-sm font-semibold transition-all duration-200 flex-shrink-0 ${activeBrandTab === tab.id ? 'bg-black text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeBrandTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-wrap justify-center items-center gap-8"
                    >
                        {(MARCAS_DESTACADAS_POR_CATEGORIA[activeBrandTab] || []).map(marca => (
                            <button
                                key={marca.nombre}
                                onClick={() => navigate('store', { brand: marca.nombre })}
                                className="p-4 bg-white rounded-xl border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all duration-300 group"
                            >
                                <img
                                    src={`${import.meta.env.BASE_URL}marcas/${marca.logo}`}
                                    alt={marca.nombre}
                                    className="h-12 w-32 object-contain"
                                />
                            </button>
                        ))}
                    </motion.div>
                </AnimatePresence>
                <div className="text-center mt-8">
                    <button
                        onClick={() => navigate('brands')}
                        className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-md text-sm font-bold hover:bg-gray-800 transition-colors"
                    >
                        Ver todas las marcas <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </section>

            {/* UPE FR 360 — TEASER */}
            <section className="py-12 md:py-20 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Left text */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <span className="inline-block text-[#0057B8] font-bold text-xs uppercase tracking-[0.2em] mb-3">Sistema Integral</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-4 leading-tight">
                                UPE FR 360
                            </h2>
                            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                                Más que un proveedor: una plataforma diseñada para administrar uniformes FR, calzado de seguridad y EPP especializado con mayor control, trazabilidad y visibilidad operativa. Centraliza pedidos, seguimiento y administración en un solo sistema.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={() => navigate('upe360')}
                                    className="inline-flex items-center gap-2 bg-[#0A1628] text-white px-7 py-3.5 rounded-md text-sm font-bold hover:bg-black transition-colors group"
                                >
                                    Conoce más
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <a
                                    href="https://uniformesprofesionales.mx/store/#/?role_id=22"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-[#0057B8] text-white px-7 py-3.5 rounded-md text-sm font-bold hover:bg-[#004A9E] transition-colors"
                                >
                                    Tienda demo
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>

                        {/* Right grid */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {upe360Features.map((f, i) => (
                                <div key={i} className={`bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-gray-200 transition-colors ${i === 4 ? 'col-span-2 sm:col-span-1' : ''}`}>
                                    <div className="w-9 h-9 bg-[#0057B8]/10 rounded-lg flex items-center justify-center mb-3 text-[#0057B8]">
                                        {f.icon}
                                    </div>
                                    <h4 className="font-bold text-sm text-black mb-1">{f.title}</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA BANNER */}
            <section className="relative py-16 md:py-24 overflow-hidden bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-3 md:mb-4 tracking-tight">
                        Especialistas en protección FR
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-6 md:mb-8">
                        Desarrollamos soluciones en uniformes FR, calzado de seguridad y EPP especializado para la industria.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => navigate('quote')}
                            className="bg-[#0EA5E9] text-white px-10 py-4 rounded-md font-bold text-sm uppercase tracking-widest hover:bg-[#0284C7] transition-colors cursor-pointer"
                        >
                            Cotiza tu Proyecto
                        </button>
                        <a
                            href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola, quiero cotizar uniformes FR.')}`}
                            target="_blank" rel="noopener noreferrer"
                            className="bg-[#25D366] text-white px-10 py-4 rounded-md font-bold text-sm uppercase tracking-widest hover:bg-[#1fad52] transition-colors flex items-center justify-center gap-2"
                        >
                            WhatsApp Directo
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeView;
