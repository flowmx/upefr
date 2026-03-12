import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const WelcomeModal = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const yaSeMostro = sessionStorage.getItem('upePopupVisto');
        if (!yaSeMostro) {
            setShowModal(true);
            sessionStorage.setItem('upePopupVisto', 'true');
        }
    }, []);

    return (
        <AnimatePresence>
            {showModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] bg-gray-900/60 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setShowModal(false)}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-none shadow-2xl max-w-3xl w-full relative overflow-hidden border border-gray-200"
                    >
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gray-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-400 hover:text-black hover:bg-gray-100 rounded-none p-1.5 md:p-2 transition-colors focus:outline-none z-10 bg-white/50 backdrop-blur-sm"
                        >
                            <X className="w-5 h-5 md:w-6 md:h-6" />
                        </button>

                        <div className="text-center p-6 pt-10 pb-2 md:p-8 md:pt-10 md:pb-4 relative z-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-widest mb-1 md:mb-2">BIENVENIDO A <span className="text-gray-500">upe</span>FR</h2>
                            <p className="text-gray-500 text-sm md:text-lg">Por favor, selecciona el portal que deseas visitar hoy.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-6 pt-2 md:p-8 md:pt-4 relative z-10 max-h-[60vh] overflow-y-auto">
                            {/* Portal UPE FR */}
                            <a
                                href="#"
                                onClick={(e) => { e.preventDefault(); setShowModal(false); }}
                                className="group block border border-gray-200 rounded-none p-4 md:p-6 text-center hover:border-black hover:-translate-y-1 transition-all duration-300 bg-gray-50 hover:bg-white relative overflow-hidden"
                            >
                                <div className="h-24 md:h-40 flex items-center justify-center mb-3 md:mb-4 bg-white rounded-none p-3 md:p-4 shadow-sm border border-gray-100 relative z-10">
                                    <img src={`${import.meta.env.BASE_URL}logo-oscuro.png`} alt="Logotipo upeFR" className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest text-black transition-colors relative z-10">upeFR</h3>
                                <p className="text-xs md:text-sm text-gray-500 mt-1 md:mt-2 font-medium relative z-10">Ropa Ignífuga y EPP de Alta Gama</p>
                            </a>

                            {/* Portal UPE Uniformes */}
                            <a
                                href="https://flowmx.github.io/upeuniformes/"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setShowModal(false)}
                                className="group block border border-gray-200 rounded-none p-4 md:p-6 text-center hover:border-black hover:-translate-y-1 transition-all duration-300 bg-gray-50 hover:bg-white relative overflow-hidden"
                            >
                                <div className="h-24 md:h-40 flex flex-col items-center justify-center mb-3 md:mb-4 bg-white rounded-none p-3 md:p-4 shadow-sm border border-gray-100 relative z-10">
                                    <img src={`${import.meta.env.BASE_URL}logo-uniformes.png`} alt="Logotipo upe Uniformes Profesionales" className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest text-black transition-colors relative z-10">upe Uniformes</h3>
                                <p className="text-xs md:text-sm text-gray-500 mt-1 md:mt-2 font-medium relative z-10">Uniformes Corporativos e Industriales</p>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default WelcomeModal;
