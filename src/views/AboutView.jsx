import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Flame, Wrench, Factory, HardHat, CheckCircle, Truck } from 'lucide-react';
import { COMPANY_INFO } from '../data/constants';
import ContactForm from '../components/ContactForm';

const AboutView = ({ navigate }) => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 bg-white">
        {/* Hero */}
        <div className="relative bg-black text-white py-12 md:py-28 overflow-hidden">
            <img src={`${import.meta.env.BASE_URL}Nuestra Empresa.webp`} alt="Sobre Nosotros" className="absolute inset-0 w-full h-full object-cover opacity-40 z-0" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                <motion.span initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}
                    className="inline-block bg-[#0057B8] text-white font-bold px-4 py-1.5 text-xs mb-6 uppercase tracking-[0.25em] rounded-full">
                    Nuestra Historia
                </motion.span>
                <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                    className="text-2xl sm:text-5xl md:text-6xl font-bold mb-5 tracking-tight">
                    UPE FR — Seguridad,<br />Cumplimiento y Control.
                </motion.h1>
                <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
                    className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                    Tu aliado estratégico en ropa resistente al fuego, arco eléctrico, calzado de seguridad y EPP industrial certificado.
                </motion.p>
            </div>
        </div>

        {/* About content */}
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="md:w-1/2">
                <h2 className="text-2xl md:text-5xl font-bold text-black mb-6 leading-[1.1] tracking-tight">
                    Especialistas en ropa resistente al fuego y protección industrial.
                </h2>
                <div className="w-16 h-1 bg-[#0057B8] mb-8" />
                <p className="text-gray-600 mb-5 leading-relaxed">
                    En <strong className="text-black">UPE FR</strong> somos especialistas en ropa resistente al fuego (FR), arco eléctrico, calzado de seguridad y equipo de protección industrial. Nos hemos convertido en el aliado estratégico de empresas del sector energético, petroquímico, gas, servicios públicos y manufactura.
                </p>
                <p className="text-gray-600 mb-10 leading-relaxed">
                    Nuestra fortaleza está en integrar todo en un solo proveedor: marcas líderes, prendas certificadas, producción interna, logística nacional, soporte técnico y la plataforma digital <strong className="text-black">upeFR360</strong>, que permite controlar cada aspecto del programa de uniformes. Ofrecemos variedad, cumplimiento, tiempos rápidos y trazabilidad completa.
                </p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="md:w-1/2 w-full">
                <div className="relative h-[500px] rounded-2xl overflow-hidden">
                    <img src={`${import.meta.env.BASE_URL}Especialistas en ropa resistente al fuego y protección industrial..webp`}
                        alt="Especialistas en uniformes FR" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 border-l-4 border-[#0057B8] pl-4">
                        <p className="text-white font-bold text-xl leading-tight">Seguridad y estilo.<br />Sin compromisos.</p>
                    </div>
                </div>
            </motion.div>
        </div>


        {/* IMPORTANCIA DEL UNIFORME FR */}
        <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                    <span className="inline-block text-[#0057B8] font-bold text-xs uppercase tracking-[0.2em] mb-3">Decisión estratégica</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight tracking-tight">
                        Importancia del<br /><span className="text-[#0057B8]">Uniforme FR</span>
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        <strong className="text-black">El uniforme FR no es un gasto operativo más.</strong> Es una decisión estratégica con impacto directo en la seguridad, productividad y cumplimiento normativo de tu organización.
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        Un programa bien administrado evita riesgos, protege al colaborador y fortalece la imagen de la empresa ante auditorías internas y externas. Además, garantiza que cada área cumpla con los estándares <strong className="text-black">NFPA, ASTM y OSHA</strong>, reduciendo significativamente accidentes, sanciones y tiempos muertos operativos.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        <strong className="text-black">El resultado es simple:</strong> tu equipo está protegido, tu operación está documentada y tú tienes tranquilidad legal, operativa y financiera.
                    </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    className="relative h-[400px] rounded-2xl overflow-hidden">
                    <img src={`${import.meta.env.BASE_URL}Seguridad, cumplimiento y control..webp`} alt="Uniformes FR en uso" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                        <p className="text-white font-bold text-lg">Seguridad, cumplimiento y control.</p>
                        <p className="text-gray-300 text-sm mt-1">NFPA 70E · NFPA 2112 · ASTM F1506</p>
                    </div>
                </motion.div>
            </div>
        </div>

        {/* INDUSTRIAS */}
        <div className="bg-[#f5f5f5] border-y border-gray-100 py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-3 tracking-tight">Industrias que <span className="text-[#0057B8]">protegemos</span></h2>
                    <div className="w-12 h-1 bg-[#0057B8] mx-auto mb-4" />
                    <p className="text-gray-500 max-w-xl mx-auto text-sm">Cada industria tiene necesidades específicas. Seleccionamos prendas certificadas y configuramos programas que aseguran cumplimiento, eficiencia y uniformidad en toda la operación.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { icon: <Zap className="w-5 h-5" />, name: 'Electricidad', norm: 'ASTM 1506 · OSHA 1910.269 · NFPA 70E', desc: 'Ropa FR para cuadrillas de distribución, transmisión, mantenimiento en campo, subestaciones y trabajos en proximidad de líneas energizadas.' },
                        { icon: <Factory className="w-5 h-5" />, name: 'Perforación, refinación y petroquímica', norm: 'NFPA 2112 · ASTM F1930', desc: 'Ropa FR diseñada para soportar temperaturas extremas, llamas repentinas y ambientes industriales severos durante toda la jornada.' },
                        { icon: <Wrench className="w-5 h-5" />, name: 'Eléctrica Industrial', norm: 'ASTM 1506 · OSHA 1910.269 · NFPA 70E', desc: 'Protección confiable ante riesgos de arco eléctrico en plantas industriales, cuartos eléctricos, mantenimiento y operaciones energéticas.' },
                        { icon: <Flame className="w-5 h-5" />, name: 'Gas y Servicios Públicos', norm: 'ASTM F1930 · NFPA 2112', desc: 'Ropa FR que protege contra los efectos potencialmente fatales del fuego repentino para empresas de gas, agua, energía e infraestructura.' },
                        { icon: <HardHat className="w-5 h-5" />, name: 'Metales y Fundición', norm: 'ASTM F1002 · ASTM F955', desc: 'Prendas resistentes para proteger contra dispersión de metal fundido en operaciones de fundición, metalurgia, hornos y soldadura.' },
                        { icon: <Truck className="w-5 h-5" />, name: 'Transporte', norm: 'OSHA 1910.269 · NFPA 70E', desc: 'Uniformes FR certificados para operadores, técnicos de mantenimiento y conductores en ambientes con riesgos eléctricos o térmicos.' },
                        { icon: <Factory className="w-5 h-5" />, name: 'Manufactura Química', norm: 'NFPA 2112 · NFPA 2113', desc: 'Uniformes FR para operación segura en ambientes con exposición a químicos, calor y riesgos combinados. Líneas de producción y plantas de procesamiento.' },
                        { icon: <Zap className="w-5 h-5" />, name: 'Eléctrica y Servicios', norm: 'ASTM F1506 · NFPA 70E', desc: 'Protección completa para plantas industriales, cuartos eléctricos y operaciones energéticas que requieren cumplimiento OSHA.' },
                    ].map((ind, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                            className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#0057B8] hover:shadow-md transition-all duration-300 flex gap-4">
                            <div className="w-10 h-10 bg-[#0057B8]/10 rounded-lg flex items-center justify-center text-[#0057B8] flex-shrink-0 mt-0.5">
                                {ind.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-black mb-1">{ind.name}</h4>
                                <p className="text-xs font-semibold text-[#0057B8] mb-2">{ind.norm}</p>
                                <p className="text-sm text-gray-500 leading-relaxed">{ind.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>

        {/* PRODUCCIÓN INTERNA */}
        <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                    <span className="inline-block text-[#0057B8] font-bold text-xs uppercase tracking-[0.2em] mb-3">Sin intermediarios</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight tracking-tight">
                        Producción 100%<br /><span className="text-[#0057B8]">interna</span>
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Nos encargamos de todo el proceso de confección. Sin intermediarios, con mayor control y mejor calidad en cada prenda, lo que se traduce en tiempos de respuesta más rápidos y mejores precios para tu operación.
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                        {['Bordado', 'Ajuste', 'Decorado', 'Confección fina'].map((item) => (
                            <div key={item} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-[#0057B8] flex-shrink-0" />
                                <span className="text-sm font-semibold text-black">{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-gray-100 pt-6 flex flex-col gap-2">
                        {[
                            'Sin intermediarios — precio directo de fábrica',
                            'Mayor control de calidad en cada etapa',
                            'Mejores tiempos de respuesta y entrega',
                        ].map((v) => (
                            <div key={v} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-[#0057B8] rounded-full mt-2 flex-shrink-0" />
                                <p className="text-sm text-gray-600">{v}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    className="relative h-[400px] rounded-2xl overflow-hidden bg-[#0A1628] flex items-center justify-center">
                    <img src={`${import.meta.env.BASE_URL}produccion-interna.webp`} alt="Producción interna UPE FR"
                        className="absolute inset-0 w-full h-full object-cover opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 border-l-4 border-[#0057B8] pl-4">
                        <p className="text-white font-bold text-lg leading-tight">Control total.<br />Calidad garantizada.</p>
                        <p className="text-gray-300 text-sm mt-1">Bordado · Ajuste · Confección · Entrega</p>
                    </div>
                </motion.div>
            </div>
        </div>

        {/* CTA — Impulsa la seguridad */}
        <div className="py-16 md:py-24 bg-[#f5f5f5] border-t border-gray-200">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white p-10 md:p-14 border border-gray-200">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 uppercase tracking-widest">Impulsa la seguridad de tu empresa hoy mismo</h2>
                        <div className="w-16 h-1 bg-black mx-auto mb-6" />
                        <p className="text-gray-500 text-sm md:text-base">Déjanos tus datos y un especialista te ayudará a definir el mejor programa de uniformes FR, calzado de seguridad y EPP para tu operación.</p>
                    </div>
                    <ContactForm hideHeader={true} />
                </div>
            </div>
        </div>
    </motion.div>
);

export default AboutView;
