import React from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const ProductView = ({ products, selectedProductId, goToStore, goToProduct, handleWhatsAppClick }) => {
    const product = products.find(p => p.id === selectedProductId);
    if (!product) return (
        <div className="p-20 text-center">
            <p className="text-gray-500">Producto no encontrado.</p>
            <button onClick={() => goToStore(null)} className="mt-4 text-xs font-bold uppercase tracking-widest underline underline-offset-4">Volver al catálogo</button>
        </div>
    );

    const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex-1 bg-white"
        >
            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-100 shadow-sm relative z-10 w-full mb-8">
                <div className="max-w-[1600px] mx-auto px-4 py-4 flex flex-wrap items-center text-[10px] md:text-xs text-black font-bold uppercase tracking-widest">
                    <button onClick={() => goToStore(null)} className="flex items-center hover:text-gray-500 transition-colors">
                        <ArrowLeft className="w-3 h-3 mr-2" /> VOLVER
                    </button>
                    <span className="mx-4 text-gray-300">/</span>
                    <button onClick={() => goToStore({ type: 'mainCategory', value: product.mainCategory })} className="hover:text-gray-500 transition-colors">{product.mainCategory || product.category}</button>
                    <span className="mx-4 text-gray-300">/</span>
                    <button onClick={() => goToStore({ type: 'brand', value: product.brand })} className="text-gray-500 transition-colors hover:text-black">{product.brand}</button>
                </div>
            </div>

            <div className="max-w-[1600px] mx-auto px-4 pb-16">
                <div className="bg-white overflow-hidden">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Imagen */}
                        <div className="lg:w-1/2 flex flex-col relative bg-[#f5f5f5] p-8 md:p-16">
                            <div className="h-[400px] md:h-[600px] flex items-center justify-center relative cursor-zoom-in">
                                <motion.img
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    src={product.image}
                                    alt={product.title}
                                    className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-black text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 flex items-center">
                                    <ShieldCheck className="w-3 h-3 mr-2" /> CERTIFICADO
                                </div>
                            </div>
                            {/* Miniaturas */}
                            <div className="flex space-x-4 mt-8 justify-center">
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className={`w-20 h-20 border flex items-center justify-center p-2 bg-white cursor-pointer transition-all duration-300 ${item === 1 ? 'border-black' : 'border-transparent hover:border-gray-300'}`}>
                                        <img src={product.image} alt="thumb" className="max-h-full object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Detalles */}
                        <div className="lg:w-1/2 flex flex-col pt-8 md:pt-16">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-gray-500 font-bold text-xs mb-3 tracking-[0.2em] uppercase">
                                {product.brand}
                            </motion.div>
                            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-extrabold text-black mb-6 leading-[1.1] tracking-tight">
                                {product.title}
                            </motion.h1>

                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex flex-col gap-2 mb-8 text-sm text-gray-800">
                                <div><span className="font-bold mr-2 uppercase tracking-wider text-xs">SKU/POS:</span> {product.sku}</div>
                                <div><span className="font-bold mr-2 uppercase tracking-wider text-xs">Estilo N°:</span> {product.style}</div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-gray-600 mb-10 w-full md:w-5/6">
                                <h3 className="font-bold text-black uppercase tracking-widest text-xs mb-4 border-b border-gray-200 pb-2">
                                    Descripción del Equipo
                                </h3>
                                <p className="leading-relaxed text-sm">{product.description}</p>
                            </motion.div>

                            <div className="mt-4 mb-10">
                                <button onClick={() => handleWhatsAppClick(product)} className="w-full md:w-3/4 flex items-center justify-center space-x-2 bg-black text-white border border-black hover:bg-white hover:text-black px-8 py-4 font-bold text-sm uppercase tracking-widest transition-colors duration-300 rounded-none">
                                    Solicitar Cotización
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Sección de contacto */}
                    <div className="bg-gray-50 border-t border-gray-200 p-8 lg:p-16 mt-16">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-10">
                                <h3 className="text-2xl font-bold text-black tracking-tight mb-2 uppercase">Información para Empresas</h3>
                                <p className="text-gray-500 text-sm">Déjanos tus datos y un asesor se comunicará contigo.</p>
                            </div>
                            <div className="bg-white p-8 md:p-12 border border-black relative">
                                <ContactForm inProductView={true} hideHeader={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {relatedProducts.length > 0 && (
                <div className="bg-white py-16 border-t border-gray-200">
                    <div className="max-w-[1600px] mx-auto px-4">
                        <h2 className="text-xl font-bold text-black mb-8 tracking-tight uppercase">Productos Relacionados</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map(relProduct => (
                                <div key={relProduct.id} className="flex flex-col group cursor-pointer" onClick={() => goToProduct(relProduct.id)}>
                                    <div className="h-72 w-full relative bg-[#f5f5f5] mb-4 flex items-center justify-center overflow-hidden">
                                        <img src={relProduct.image} alt={relProduct.title} className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 p-4" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">{relProduct.brand}</div>
                                        <h3 className="font-semibold text-black text-xs line-clamp-2 group-hover:underline underline-offset-2">
                                            {relProduct.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </motion.div>
    );
};

export default ProductView;
