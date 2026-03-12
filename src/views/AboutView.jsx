import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Truck, Globe } from 'lucide-react';

// Fix bug #2: rutas de imagen corregidas con import.meta.env.BASE_URL
const AboutView = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex-1 bg-white"
    >
        {/* Hero Banner */}
        <div className="relative bg-black text-white py-32 overflow-hidden border-b border-gray-200">
            <div className="absolute inset-0 bg-black/60 mix-blend-multiply z-10"></div>
            {/* Bug #2 corregido: path relativo → BASE_URL */}
            <img src={`${import.meta.env.BASE_URL}conoce_upe.jpg`} alt="About Hero" className="absolute inset-0 w-full h-full object-cover z-0" />
            <div className="relative z-20 max-w-[1600px] mx-auto px-4 text-center">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="inline-block bg-white text-black font-bold px-4 py-1.5 text-[10px] mb-8 uppercase tracking-[0.2em] shadow-sm"
                >
                    Nuestra Esencia
                </motion.div>
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight uppercase"
                >
                    Conoce upeFR
                </motion.h1>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-medium"
                >
                    Más de una década protegiendo a los trabajadores más exigentes de la industria con equipo FR certificado y de clase mundial.
                </motion.p>
            </div>
        </div>

        {/* Historia y Experiencia */}
        <div className="max-w-[1600px] mx-auto px-4 py-24 flex flex-col md:flex-row items-center gap-16">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="md:w-1/2"
            >
                <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-8 leading-[1.1] tracking-tight uppercase">Expertos en seguridad industrial y protección Ignífuga.</h2>
                <div className="w-16 h-1 bg-black mb-10"></div>
                <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
                    En <strong className="text-black font-bold">upeFR</strong> comprendemos que en entornos de alto riesgo, la calidad del equipo de protección no es negociable. Nos hemos consolidado como líderes en la distribución de ropa FR (Flame Resistant) y Equipos de Protección Personal (EPP) en México.
                </p>
                <p className="text-gray-600 mb-12 text-sm md:text-base leading-relaxed">
                    Trabajamos exclusivamente con las marcas globales más respetadas y garantizamos que cada prenda cumpla con rigurosas certificaciones internacionales como <span className="font-semibold text-black">NFPA 2112, NFPA 70E y ASTM</span>. Nuestro compromiso es que cada trabajador regrese a casa seguro.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                    <div className="bg-[#f5f5f5] border border-gray-200 p-8 flex-1 text-center hover:-translate-y-1 transition-transform duration-300">
                        <span className="block text-4xl font-black text-black mb-3">+10</span>
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Años de<br />Experiencia</span>
                    </div>
                    <div className="bg-black border border-black p-8 flex-1 text-center hover:-translate-y-1 transition-transform duration-300">
                        <span className="block text-4xl font-black text-white mb-3">100%</span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Protección<br />Certificada</span>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="md:w-1/2 w-full relative"
            >
                <div className="relative overflow-hidden h-[600px] border border-gray-200">
                    <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000" alt="Industria Segura" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-10">
                        <div className="border-l-4 border-white pl-6">
                            <p className="text-white font-bold text-2xl uppercase tracking-widest leading-tight">Seguridad sin<br />compromisos.</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* Misión y Visión */}
        <div className="bg-[#f5f5f5] py-24 border-y border-gray-200">
            <div className="max-w-[1600px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-12 border border-gray-200 relative group hover:-translate-y-1 transition-transform duration-300">
                        <Target className="w-10 h-10 text-black mb-8" />
                        <h3 className="text-2xl font-bold text-black mb-6 uppercase tracking-widest">Nuestra Misión</h3>
                        <div className="w-12 h-px bg-gray-300 mb-6"></div>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Proveer las soluciones más avanzadas e innovadoras en ropa de protección AR/FR y EPP, garantizando la máxima seguridad, comodidad y cumplimiento normativo para los trabajadores en las industrias más demandantes.
                        </p>
                    </div>
                    <div className="bg-black p-12 border border-black relative group hover:-translate-y-1 transition-transform duration-300">
                        <Eye className="w-10 h-10 text-white mb-8" />
                        <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest">Nuestra Visión</h3>
                        <div className="w-12 h-px bg-gray-600 mb-6"></div>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            Ser el principal socio estratégico a nivel nacional en la gestión integral de programas de uniformes industriales, reconocidos por nuestra excelencia operativa, marcas de clase mundial y compromiso absoluto con la vida humana.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Beneficios Clave */}
        <div className="py-24 bg-white">
            <div className="max-w-[1600px] mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl font-extrabold text-black mb-6 tracking-tight uppercase"
                    >
                        Beneficios Clave Para Tu Empresa
                    </motion.h2>
                    <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">Con upeFR, no solo adquieres uniformes, obtienes un servicio integral pensado en la eficiencia y seguridad de tu operación.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: <Award className="w-6 h-6" />, title: "Calidad Premium", desc: "Las mejores marcas con tecnología textil de punta y resistencia garantizada." },
                        { icon: <Users className="w-6 h-6" />, title: "Atención Especializada", desc: "Asesoría experta para elegir el nivel de protección exacto que tu equipo necesita." },
                        { icon: <Truck className="w-6 h-6" />, title: "Logística Optimizada", desc: "Envíos y distribución eficiente para que nunca te falte equipo de protección." },
                        { icon: <Globe className="w-6 h-6" />, title: "Alcance Nacional", desc: "Cobertura en todo el país, adaptándonos a las normas locales e internacionales." }
                    ].map((benefit, i) => (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            key={i}
                            className="text-center p-10 bg-[#f5f5f5] transition-colors border border-gray-200 hover:border-black group"
                        >
                            <div className="w-16 h-16 mx-auto bg-white text-black border border-gray-200 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                {benefit.icon}
                            </div>
                            <h4 className="text-sm font-bold text-black uppercase tracking-widest mb-3">{benefit.title}</h4>
                            <p className="text-gray-500 leading-relaxed text-xs">{benefit.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

export default AboutView;
