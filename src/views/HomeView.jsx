import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactForm from '../components/ContactForm';

// Fix bug #1: precios eliminados, reemplazados por "SOLICITAR COTIZACIÓN"
const HomeView = ({ products, goToStore, goToProduct }) => {
    const [currentHeroImg, setCurrentHeroImg] = useState(0);

    const heroImages = [
        `${import.meta.env.BASE_URL}hero-slider-1.jpg`,
        `${import.meta.env.BASE_URL}hero-slider-2.jpg`,
        `${import.meta.env.BASE_URL}hero-slider-3.jpg`
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeroImg((prev) => (prev + 1) % heroImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [heroImages.length]);

    const brandsList = [
        { name: "3M", img: `${import.meta.env.BASE_URL}3 M.svg` },
        { name: "5.11", img: `${import.meta.env.BASE_URL}5.11.svg` },
        { name: "Ansell", img: `${import.meta.env.BASE_URL}ansell.svg` },
        { name: "Ariat Work FR", img: `${import.meta.env.BASE_URL}ariat work fr.svg` },
        { name: "Ariat Work", img: `${import.meta.env.BASE_URL}ariat work.svg` },
        { name: "Axe FR", img: `${import.meta.env.BASE_URL}axe fr.svg` },
        { name: "Benchmark", img: `${import.meta.env.BASE_URL}benchmark.svg` },
        { name: "Best Welds", img: `${import.meta.env.BASE_URL}bestwelds.svg` },
        { name: "Black Stallion", img: `${import.meta.env.BASE_URL}blackstallion.svg` },
        { name: "Bullard", img: `${import.meta.env.BASE_URL}bullard.svg` },
        { name: "Bulwark", img: `${import.meta.env.BASE_URL}bulwark.svg` },
        { name: "CAT FR", img: `${import.meta.env.BASE_URL}cat fr.svg` },
        { name: "CAT", img: `${import.meta.env.BASE_URL}cat.svg` },
        { name: "Die Hard", img: `${import.meta.env.BASE_URL}die hard.svg` },
        { name: "Dickies", img: `${import.meta.env.BASE_URL}dikies.svg` },
        { name: "DuPont", img: `${import.meta.env.BASE_URL}dunpont.svg` },
        { name: "Eagle FR", img: `${import.meta.env.BASE_URL}eagle fr.svg` },
        { name: "Carhartt FR", img: `${import.meta.env.BASE_URL}frcarhart.svg` },
        { name: "Georgia Boot", img: `${import.meta.env.BASE_URL}georgia boot.svg` },
        { name: "Honeywell", img: `${import.meta.env.BASE_URL}honeywell.svg` },
        { name: "IFR", img: `${import.meta.env.BASE_URL}ifr.svg` },
        { name: "Keen", img: `${import.meta.env.BASE_URL}keen.svg` },
        { name: "Kishigo", img: `${import.meta.env.BASE_URL}kishigo.svg` },
        { name: "Kodiak", img: `${import.meta.env.BASE_URL}kodiak.svg` },
        { name: "Lakeland", img: `${import.meta.env.BASE_URL}lakeland.svg` },
        { name: "Lapco FR", img: `${import.meta.env.BASE_URL}lapco fr.svg` },
        { name: "MCR Safety", img: `${import.meta.env.BASE_URL}mcr safety.svg` },
        { name: "MSA", img: `${import.meta.env.BASE_URL}MSA.svg` },
        { name: "Oberon", img: `${import.meta.env.BASE_URL}oberon.svg` },
        { name: "Portwest", img: `${import.meta.env.BASE_URL}portwest.svg` },
        { name: "Rasco FR", img: `${import.meta.env.BASE_URL}rasco fr.svg` },
        { name: "Red Kap", img: `${import.meta.env.BASE_URL}redkap.svg` },
        { name: "Stanco", img: `${import.meta.env.BASE_URL}stanco.svg` },
        { name: "Terra", img: `${import.meta.env.BASE_URL}terra.svg` },
        { name: "Tillman", img: `${import.meta.env.BASE_URL}tillman.svg` },
        { name: "Timberland PRO FR", img: `${import.meta.env.BASE_URL}timberland pro fr.svg` },
        { name: "Timberland PRO", img: `${import.meta.env.BASE_URL}timberland pro.svg` },
        { name: "Wolverine", img: `${import.meta.env.BASE_URL}wolverine.svg` },
        { name: "Workrite", img: `${import.meta.env.BASE_URL}workrite.svg` }
    ];

    const marqueeBrands = [...brandsList, ...brandsList];

    return (
        <div className="flex-1 overflow-x-hidden bg-gray-50">
            <style>{`
              @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
              .animate-scroll { animation: scroll 80s linear infinite; display: flex; width: max-content; }
              .animate-scroll:hover { animation-play-state: paused; }
            `}</style>

            {/* Hero section */}
            <div className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentHeroImg}
                        src={heroImages[currentHeroImg]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.0, ease: "easeInOut" }}
                        alt="Hero"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 w-full flex flex-col md:flex-row items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:w-[55%] text-left"
                    >
                        <div className="inline-block text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 border-b-2 border-[#c84126] pb-1">
                            /// NUEVA LÍNEA DE PROTECCIÓN
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-[1.05] tracking-tight">
                            Protección <br />Industrial.
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl font-medium leading-relaxed">
                            Encuentra tu nivel de seguridad perfecto con nuestras prendas certificadas.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => goToStore({ type: 'mainCategory', value: 'Uniformes FR' })}
                                className="bg-white text-black px-10 py-4 font-bold text-sm uppercase tracking-wider transition hover:bg-gray-200 flex items-center justify-center rounded-none"
                            >
                                Ver Uniformes FR
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => goToStore({ type: 'mainCategory', value: 'Calzado' })}
                                className="bg-transparent border-2 border-white text-white px-10 py-4 font-bold text-sm uppercase tracking-wider transition hover:bg-white hover:text-black flex items-center justify-center rounded-none"
                            >
                                Ver Calzado
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                    {heroImages.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentHeroImg(idx)}
                            className={`h-1 transition-all duration-300 rounded-none ${idx === currentHeroImg ? 'bg-white w-12' : 'bg-white/40 hover:bg-white/80 w-8'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Marcas Slider */}
            <div className="bg-white border-b border-gray-100 py-8 overflow-hidden relative z-30 shadow-sm">
                <div className="animate-scroll flex items-center px-8 text-gray-400 hover:text-gray-800 transition-colors duration-500">
                    {marqueeBrands.map((brand, index) => (
                        <div key={index} className="mx-10 cursor-pointer flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" onClick={() => goToStore({ type: 'brand', value: brand.name })}>
                            {brand.img ? (
                                <img src={brand.img} alt={brand.name} className="h-14 w-auto max-w-[160px] object-contain" />
                            ) : (
                                <span className="text-2xl font-bold whitespace-nowrap">
                                    {brand.name}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Compra por Categoría */}
            <div className="max-w-[1600px] mx-auto px-4 py-16">
                <div className="mb-10 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">Categorías</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="group cursor-pointer flex flex-col items-center" onClick={() => goToStore({ type: 'generic', value: 'Pantalones FR' })}>
                        <div className="w-full h-[400px] overflow-hidden mb-6 bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?auto=format&fit=crop&q=80&w=800" alt="Pantalones" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <button className="border border-black text-black text-sm uppercase font-bold tracking-widest px-8 py-3 w-full max-w-[280px] hover:bg-black hover:text-white transition-colors duration-300 rounded-none">
                            Ropa para hombre
                        </button>
                    </div>
                    <div className="group cursor-pointer flex flex-col items-center" onClick={() => goToStore({ type: 'generic', value: 'Camisas FR' })}>
                        <div className="w-full h-[400px] overflow-hidden mb-6 bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=800" alt="Camisas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <button className="border border-black text-black text-sm uppercase font-bold tracking-widest px-8 py-3 w-full max-w-[280px] hover:bg-black hover:text-white transition-colors duration-300 rounded-none">
                            Ropa para mujer
                        </button>
                    </div>
                    <div className="group cursor-pointer flex flex-col items-center" onClick={() => goToStore({ type: 'generic', value: 'Calzado FR' })}>
                        <div className="w-full h-[400px] overflow-hidden mb-6 bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=800" alt="Calzado" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <button className="border border-black text-black text-sm uppercase font-bold tracking-widest px-8 py-3 w-full max-w-[280px] hover:bg-black hover:text-white transition-colors duration-300 rounded-none">
                            Calzado para hombre
                        </button>
                    </div>
                    <div className="group cursor-pointer flex flex-col items-center" onClick={() => goToStore({ type: 'generic', value: 'Calzado FR' })}>
                        <div className="w-full h-[400px] overflow-hidden mb-6 bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1595341596013-640a232fbaec?auto=format&fit=crop&q=80&w=800" alt="Botas" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <button className="border border-black text-black text-sm uppercase font-bold tracking-widest px-8 py-3 w-full max-w-[280px] hover:bg-black hover:text-white transition-colors duration-300 rounded-none">
                            Calzado para mujer
                        </button>
                    </div>
                </div>
            </div>

            {/* Productos Destacados — Bug #1 corregido: sin Math.random() */}
            <div className="py-16 bg-white border-t border-gray-100 relative">
                <div className="max-w-[1600px] mx-auto px-4 relative z-10">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-3xl font-bold text-black tracking-tight">Productos Destacados</h2>
                        <button onClick={() => goToStore(null)} className="text-xs font-bold uppercase tracking-widest text-black hover:text-gray-500 flex items-center transition-colors">
                            VER TODO <ChevronRight className="w-3 h-3 ml-2" />
                        </button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
                        {products.slice(0, 5).map((product, index) => (
                            <div
                                key={`${product.id}-${index}`}
                                className="flex flex-col group cursor-pointer"
                                onClick={() => goToProduct(product.id)}
                            >
                                <div className="h-[300px] w-full bg-[#f5f5f5] mb-4 relative overflow-hidden flex items-center justify-center p-6">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-col flex-1 bg-[#f5f5f5] p-5 relative">
                                    <div className="text-[10px] text-gray-500 font-bold mb-1 tracking-wider uppercase">{product.mainCategory || 'General'}</div>
                                    <h3 className="font-semibold text-black text-[13px] leading-snug mb-3 group-hover:underline underline-offset-2 decoration-1 line-clamp-2">
                                        {product.title}
                                    </h3>
                                    <div className="mt-auto">
                                        <span className="text-black font-bold text-xs uppercase tracking-widest border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors">
                                            SOLICITAR COTIZACIÓN
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Equipamiento Especializado */}
            <div className="max-w-[1600px] mx-auto px-4 py-16">
                <div className="mb-10 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">Equipamiento Especializado</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group cursor-pointer flex flex-col">
                        <div className="w-full h-[500px] overflow-hidden mb-6">
                            <img src="https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?auto=format&fit=crop&q=80&w=1000" alt="Uniformes FR" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <h3 className="text-lg font-bold text-black mb-2">Uniformes Industriales FR</h3>
                        <p className="text-gray-600 text-sm mb-4">Protección ignífuga y contra arco eléctrico certificada. Rendimiento y seguridad en los entornos más exigentes.</p>
                        <div className="flex gap-4">
                            <button onClick={() => goToStore({ type: 'generic', value: 'Camisas FR' })} className="text-[11px] font-bold text-black uppercase tracking-widest hover:text-[#c84126] transition flex items-center">
                                VER CAMISAS <ChevronRight className="w-3 h-3 ml-1" />
                            </button>
                            <button onClick={() => goToStore({ type: 'generic', value: 'Pantalones FR' })} className="text-[11px] font-bold text-black uppercase tracking-widest hover:text-[#c84126] transition flex items-center">
                                VER PANTALONES <ChevronRight className="w-3 h-3 ml-1" />
                            </button>
                        </div>
                    </div>
                    <div className="group cursor-pointer flex flex-col">
                        <div className="w-full h-[500px] overflow-hidden mb-6">
                            <img src="https://images.unsplash.com/photo-1595341596013-640a232fbaec?auto=format&fit=crop&q=80&w=1000" alt="EPP" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 object-top" />
                        </div>
                        <h3 className="text-lg font-bold text-black mb-2">Calzado y Equipo de Protección</h3>
                        <p className="text-gray-600 text-sm mb-4">Botas dieléctricas y EPP integral para protegerte de pies a cabeza en tu jornada laboral.</p>
                        <div className="flex gap-4">
                            <button onClick={() => goToStore({ type: 'mainCategory', value: 'Calzado' })} className="text-[11px] font-bold text-black uppercase tracking-widest hover:text-[#c84126] transition flex items-center">
                                VER CALZADO <ChevronRight className="w-3 h-3 ml-1" />
                            </button>
                            <button onClick={() => goToStore({ type: 'mainCategory', value: 'EPP' })} className="text-[11px] font-bold text-black uppercase tracking-widest hover:text-[#c84126] transition flex items-center">
                                VER EPP <ChevronRight className="w-3 h-3 ml-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <ContactForm />
        </div>
    );
};

export default HomeView;
