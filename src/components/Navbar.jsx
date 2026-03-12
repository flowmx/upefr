import React, { useState } from 'react';
import { Search, User, Menu, ChevronDown, ChevronRight, Globe, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATALOG_MENU } from '../data/constants';

const Navbar = ({ currentView, goHome, goToStore, goToAbout, goToContact, goTo360, goToAdmin }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <React.Fragment>
            {/* Announcement Bar */}
            <div className="bg-black text-white text-[10px] md:text-xs font-bold uppercase tracking-widest py-2.5 px-4 text-center w-full z-50 relative">
                <span className="animate-pulse">ATENCIÓN EMPRESARIAL B2B - SOLICITA TU COTIZACIÓN</span>
            </div>
            <nav className="sticky top-0 w-full z-40 transition-all duration-300 bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-[70px]">
                        {/* Logo */}
                        <div className="flex items-center h-full">
                            <div
                                className="cursor-pointer select-none group mr-10"
                                onClick={goHome}
                            >
                                <img src={`${import.meta.env.BASE_URL}logo-oscuro.png`} alt="upeFR Logo" className="h-[40px] w-auto transition-transform duration-300" />
                            </div>
                        </div>

                        {/* Enlaces de Menú Desktop */}
                        <div className="hidden md:flex space-x-8 h-full items-center">
                            <button onClick={goHome} className={`h-full text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center ${currentView === 'home' ? 'text-black border-black' : 'text-gray-500 hover:text-black border-transparent'}`}>
                                INICIO
                            </button>

                            <button onClick={goToAbout} className={`h-full text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center ${currentView === 'about' ? 'text-black border-black' : 'text-gray-500 hover:text-black border-transparent'}`}>NOSOTROS</button>

                            <button onClick={goTo360} className={`h-full text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center ${currentView === '360' ? 'text-black border-black' : 'text-gray-500 hover:text-black border-transparent'}`}>UPEFR 360</button>

                            {/* MENÚ DESPLEGABLE: TIENDA / CATÁLOGO */}
                            <div className="relative group h-full flex items-center">
                                <button onClick={() => goToStore(null)} className={`h-full text-xs font-bold uppercase tracking-wider flex items-center transition-colors border-b-2 ${(currentView === 'store' || currentView === 'product') ? 'text-black border-black' : 'text-gray-500 hover:text-black border-transparent'}`}>
                                    CATÁLOGO <ChevronDown className="w-3 h-3 ml-1" />
                                </button>
                                {/* Mega menú */}
                                <div className="absolute top-[70px] left-1/2 -translate-x-1/2 bg-white text-black shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex space-x-16 p-10 border border-gray-200 min-w-max">
                                    {Object.entries(CATALOG_MENU).map(([category, brands]) => (
                                        <div key={category} className="flex flex-col min-w-[180px]">
                                            <h3
                                                onClick={() => goToStore({ type: 'mainCategory', value: category })}
                                                className="font-bold text-black text-sm uppercase mb-6 pb-2 border-b border-gray-200 cursor-pointer hover:text-gray-500 transition-colors flex items-center justify-between"
                                            >
                                                {category} <ChevronRight className="w-3 h-3 text-gray-400" />
                                            </h3>
                                            <ul className="space-y-4">
                                                {brands.map(brand => (
                                                    <li key={brand}>
                                                        <button
                                                            onClick={() => goToStore({ type: 'brand', value: brand })}
                                                            className="text-gray-600 hover:text-black hover:underline underline-offset-4 font-medium text-sm transition-all text-left w-full"
                                                        >
                                                            {brand}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button onClick={goToContact} className={`h-full text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center ${currentView === 'contact' ? 'text-black border-black' : 'text-gray-500 hover:text-black border-transparent'}`}>CONTACTO</button>
                        </div>

                        {/* Iconos (Derecha) */}
                        <div className="flex items-center space-x-4 md:space-x-6 h-full">
                            <a href="https://flowmx.github.io/upeuniformes/" target="_blank" rel="noopener noreferrer" className="hidden md:flex text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-black transition-colors items-center gap-1">
                                UPE UNIFORMES <Globe className="w-3 h-3" />
                            </a>
                            <Search className="w-5 h-5 text-black cursor-pointer hover:text-gray-500 transition-colors" onClick={() => goToStore(null)} />
                            <div className="hidden md:block">
                                <User className="w-5 h-5 text-black cursor-pointer hover:text-gray-500 transition-colors" onClick={goToAdmin} />
                            </div>

                            {/* Botón menú móvil */}
                            <div className="md:hidden">
                                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-black focus:outline-none p-2 mt-1">
                                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Menú Móvil */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                        >
                            <div className="flex flex-col px-6 py-6 space-y-4">
                                <button onClick={() => { goHome(); setIsMobileMenuOpen(false); }} className={`text-left text-sm font-bold uppercase tracking-wider py-2 ${currentView === 'home' ? 'text-black' : 'text-gray-500'}`}>INICIO</button>
                                <button onClick={() => { goToAbout(); setIsMobileMenuOpen(false); }} className={`text-left text-sm font-bold uppercase tracking-wider py-2 ${currentView === 'about' ? 'text-black' : 'text-gray-500'}`}>NOSOTROS</button>
                                <button onClick={() => { goTo360(); setIsMobileMenuOpen(false); }} className={`text-left text-sm font-bold uppercase tracking-wider py-2 ${currentView === '360' ? 'text-black' : 'text-gray-500'}`}>UPEFR 360</button>
                                <button onClick={() => { goToStore(null); setIsMobileMenuOpen(false); }} className={`text-left text-sm font-bold uppercase tracking-wider py-2 ${currentView === 'store' || currentView === 'product' ? 'text-black' : 'text-gray-500'}`}>CATÁLOGO</button>
                                <a href="https://flowmx.github.io/upeuniformes/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="text-left text-sm font-bold uppercase tracking-wider text-gray-500 py-2 flex items-center justify-between">
                                    UPE UNIFORMES <Globe className="w-4 h-4 opacity-50" />
                                </a>
                                <button onClick={() => { goToContact(); setIsMobileMenuOpen(false); }} className={`text-left text-sm font-bold uppercase tracking-wider py-2 ${currentView === 'contact' ? 'text-black' : 'text-gray-500'}`}>CONTACTO</button>
                                <div className="h-px bg-gray-200 my-2"></div>
                                <button onClick={() => { goToAdmin(); setIsMobileMenuOpen(false); }} className="text-left text-sm font-bold uppercase tracking-wider text-gray-400 py-2 flex items-center"><User className="w-4 h-4 mr-2" /> ACCESO ADMIN</button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </React.Fragment>
    );
};

export default Navbar;
