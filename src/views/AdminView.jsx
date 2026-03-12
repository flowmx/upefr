import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, CheckCircle2, User } from 'lucide-react';
import { CATALOG_MENU } from '../data/constants';

const AdminView = ({ products, setProducts }) => {
    const [formData, setFormData] = useState({
        title: '', sku: '', style: '',
        mainCategory: 'Uniformes FR',
        brand: CATALOG_MENU['Uniformes FR'][0],
        description: '', image: ''
    });
    const [notification, setNotification] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'mainCategory') {
            setFormData({ ...formData, mainCategory: value, brand: CATALOG_MENU[value][0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        const newProduct = {
            ...formData,
            id: Date.now(),
            image: formData.image || "https://images.unsplash.com/photo-1584305574647-0cc9f9e10260?auto=format&fit=crop&q=80&w=800"
        };
        setProducts(prev => [newProduct, ...prev]);
        setNotification('PRODUCTO AGREGADO AL CATÁLOGO');
        setFormData({ title: '', sku: '', style: '', mainCategory: 'Uniformes FR', brand: CATALOG_MENU['Uniformes FR'][0], description: '', image: '' });
        setTimeout(() => setNotification(''), 3000);
    };

    const handleDelete = (id) => {
        if (window.confirm('¿ELIMINAR ESTE PRODUCTO?')) {
            setProducts(prev => prev.filter(p => p.id !== id));
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 bg-[#f5f5f5] p-4 md:p-8 py-12"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4 border-b border-gray-200 pb-4">
                    <motion.h1
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="text-2xl font-bold text-black flex items-center tracking-widest uppercase"
                    >
                        <User className="w-8 h-8 mr-4 text-black" /> Panel de Administración
                    </motion.h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Formulario */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-4"
                    >
                        <div className="bg-white rounded-none p-8 border border-gray-200">
                            <h2 className="text-lg font-bold text-black mb-6 flex items-center uppercase tracking-widest">
                                <Plus className="w-5 h-5 mr-3 text-black" /> Nuevo Producto
                            </h2>

                            <AnimatePresence>
                                {notification && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="bg-black border border-black text-white p-4 rounded-none mb-6 text-xs uppercase tracking-widest font-bold flex items-center"
                                    >
                                        <CheckCircle2 className="w-4 h-4 mr-2" />
                                        {notification}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <form onSubmit={handleAddProduct} className="space-y-5">
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Título del Producto *</label>
                                    <input type="text" name="title" required value={formData.title} onChange={handleInputChange} className="w-full p-3 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors text-sm text-black" placeholder="Ej. Pantalón Ignífugo..." />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">SKU / POS *</label>
                                        <input type="text" name="sku" required value={formData.sku} onChange={handleInputChange} className="w-full p-3 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors text-sm font-mono text-black" placeholder="100XXX" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Núm. Estilo *</label>
                                        <input type="text" name="style" required value={formData.style} onChange={handleInputChange} className="w-full p-3 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors text-sm font-mono text-black" placeholder="M5-FR" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Categoría *</label>
                                        <select name="mainCategory" value={formData.mainCategory} onChange={handleInputChange} className="w-full p-3 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors text-sm text-black appearance-none">
                                            {Object.keys(CATALOG_MENU).map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Marca *</label>
                                        <select name="brand" value={formData.brand} onChange={handleInputChange} className="w-full p-3 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors text-sm text-black appearance-none">
                                            {CATALOG_MENU[formData.mainCategory].map(b => <option key={b} value={b}>{b}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">URL de la Imagen</label>
                                    <input type="url" name="image" value={formData.image} onChange={handleInputChange} className="w-full p-3 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors text-sm text-black" placeholder="https://..." />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Descripción</label>
                                    <textarea name="description" rows="3" value={formData.description} onChange={handleInputChange} className="w-full p-3 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors text-sm text-black" placeholder="Características detalladas..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-black hover:bg-white text-white hover:text-black border border-black py-4 rounded-none font-bold uppercase tracking-widest text-xs transition-colors mt-4">
                                    Guardar Producto en Catálogo
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Lista */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-8"
                    >
                        <div className="bg-white rounded-none border border-gray-200 overflow-hidden h-full flex flex-col">
                            <div className="p-6 md:p-8 bg-white border-b border-gray-200 flex justify-between items-center">
                                <h2 className="text-lg font-bold text-black uppercase tracking-widest">Catálogo Actual</h2>
                                <div className="bg-[#f5f5f5] text-black px-4 py-1.5 rounded-none text-xs font-bold border border-gray-200 tracking-widest">
                                    {products.length} PRODUCTOS
                                </div>
                            </div>
                            <div className="overflow-x-auto flex-1 p-0 md:p-4">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#f5f5f5] border-b border-gray-200">
                                            <th className="p-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Producto</th>
                                            <th className="p-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest hidden sm:table-cell">SKU / Estilo</th>
                                            <th className="p-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest hidden md:table-cell">Categoría</th>
                                            <th className="p-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">Acción</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <AnimatePresence>
                                            {products.map((product) => (
                                                <motion.tr
                                                    key={product.id}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    layout
                                                    className="hover:bg-[#f5f5f5] transition-colors group"
                                                >
                                                    <td className="p-4">
                                                        <div className="flex items-center space-x-4">
                                                            <div className="w-14 h-14 bg-[#f5f5f5] flex items-center justify-center border border-gray-200 flex-shrink-0">
                                                                <img src={product.image} alt={product.title} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                                                            </div>
                                                            <div>
                                                                <span className="text-sm font-bold text-black line-clamp-2 max-w-[250px] uppercase">{product.title}</span>
                                                                <div className="sm:hidden text-[10px] font-mono font-bold text-gray-500 mt-1">{product.sku}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-4 hidden sm:table-cell">
                                                        <div className="text-xs font-mono font-bold text-black border border-gray-300 bg-white inline-block px-2 py-1">{product.sku}</div>
                                                        <div className="text-[10px] text-gray-500 mt-1.5 font-bold uppercase">{product.style}</div>
                                                    </td>
                                                    <td className="p-4 hidden md:table-cell">
                                                        <span className="bg-white border border-gray-300 text-black text-[10px] px-3 py-1.5 font-bold uppercase tracking-widest">{product.mainCategory || product.category}</span>
                                                        <div className="text-[10px] mt-2 text-gray-400 font-bold uppercase tracking-widest">{product.brand}</div>
                                                    </td>
                                                    <td className="p-4 text-center">
                                                        <button
                                                            onClick={() => handleDelete(product.id)}
                                                            className="text-gray-400 hover:text-black bg-white hover:bg-gray-100 border border-gray-200 hover:border-black p-2.5 transition-colors"
                                                            title="Eliminar"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </td>
                                                </motion.tr>
                                            ))}
                                        </AnimatePresence>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default AdminView;
