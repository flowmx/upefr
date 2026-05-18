import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const BRANDS_FR = [
    { name: '3M',              logo: '3 M.svg',            storeQuery: '3M',            desc: 'Líder global en EPP: respiradores, lentes, protección auditiva y anticaídas. Estándares ANSI, OSHA y CE para entornos industriales de alto riesgo.' },
    { name: '5.11 Tactical',   logo: '5.11.svg',           storeQuery: '5.11',          desc: 'Equipo táctico y uniformes para primeros respondedores, fuerzas de seguridad y trabajo de campo. Diseños funcionales con múltiples bolsillos y materiales resistentes.' },
    { name: 'Ansell',          logo: 'ansell.svg',         storeQuery: 'Ansell',        desc: 'Guantes y ropa protectora de precisión para industria química, farmacéutica y manufactura. Certificados ANSI, EN e ISO.' },
    { name: 'Ariat Work',      logo: 'ariat work.svg',     storeQuery: 'Ariat',         desc: 'Calzado de trabajo y botas de seguridad con tecnología ATS® de amortiguación avanzada. Puntera compuesta y protección eléctrica certificada ASTM.' },
    { name: 'Ariat Work FR',   logo: 'ariat work fr.svg',  storeQuery: 'Ariat',         desc: 'Vestimenta FR que fusiona estilo y tecnología. Tecnología Moisture Movement™ y Greater Arm Mobility™. Certificada NFPA 2112, NFPA 70E y ASTM F1506.' },
    { name: 'Axe FR',          logo: 'axe fr.svg',         storeQuery: 'Axe',           desc: 'Ropa industrial FR de alto desempeño para trabajo en campo. Diseñada para máxima movilidad y protección en ambientes de arco eléctrico y flama.' },
    { name: 'Benchmark FR',    logo: 'benchmark.svg',      storeQuery: 'Benchmark',     desc: 'Ropa de trabajo FR y uniformes especializados para trabajo pesado. Diseños ergonómicos con materiales resistentes al fuego certificados.' },
    { name: 'Best Welds',      logo: 'bestwelds.svg',      storeQuery: 'Best Welds',    desc: 'Guantes, mandiles y accesorios para soldadura. Protección de cuero y kevlar para trabajo en metal, fundición y manufactura.' },
    { name: 'Black Stallion',  logo: 'blackstallion.svg',  storeQuery: 'Black Stallion',desc: 'Guantes de soldadura y protección de manos para trabajo pesado. Cuero de alta resistencia y tejidos FR para ambientes de calor extremo.' },
    { name: 'Bullard',         logo: 'bullard.svg',        storeQuery: 'Bullard',       desc: 'Cascos de seguridad, protección facial y equipos de respiración autónomos. Más de 100 años protegiendo trabajadores en los entornos más exigentes.' },
    { name: 'Bulwark',         logo: 'bulwark.svg',        storeQuery: 'Bulwark',       desc: 'Líder mundial en vestimenta FR con más de 50 años de trayectoria. Certificada NFPA 2112, NFPA 70E y ASTM F1506. Ideal para petróleo y gas, servicios públicos y manufactura.' },
    { name: 'CAT',             logo: 'cat.svg',            storeQuery: 'CAT',           desc: 'Botas y zapatos de seguridad robustos para construcción, minería y trabajo pesado. Certificación ASTM F2413. Punta de acero o compuesta.' },
    { name: 'CAT FR',          logo: 'cat fr.svg',         storeQuery: 'CAT',           desc: 'Línea de calzado resistente al fuego de Caterpillar. Protección combinada contra impacto, punción y riesgo eléctrico en ambientes FR.' },
    { name: 'Carhartt FR',     logo: 'frcarhart.svg',      storeQuery: 'Carhartt',      desc: 'Resistencia, comodidad y cumplimiento normativo en algodón tratado FR, Ripstop y mezclas inherentes. Certificada NFPA 2112, NFPA 70E y ASTM F1506.' },
    { name: 'Die Hard',        logo: 'die hard.svg',       storeQuery: 'Die Hard',      desc: 'Calzado de trabajo y seguridad de alto desempeño. Suela de goma resistente, puntera de acero y diseño para máxima comodidad en largas jornadas.' },
    { name: 'DRIFIRE',         logo: 'drifire.svg',        storeQuery: 'DRIFIRE',       desc: 'Uniformes FR de última generación fabricados con telas inherentemente resistentes al fuego. Comodidad extrema con protección certificada NFPA 2112 y NFPA 70E.' },
    { name: 'Dickies',         logo: 'dikies.svg',         storeQuery: 'Dickies',       desc: 'Marca icónica de ropa de trabajo con más de 100 años. Uniformes resistentes para industrial, construcción y servicio con excelente relación calidad-precio.' },
    { name: 'DuPont',          logo: 'dunpont.svg',        storeQuery: 'DuPont',        desc: 'Proveedor de fibras técnicas Nomex® y Kevlar® usadas en ropa de protección de la más alta exigencia mundial. Referencia en materiales FR inherentes.' },
    { name: 'Eagle FR',        logo: 'eagle fr.svg',       storeQuery: 'Eagle',         desc: 'Prendas FR inherentes de Lakeland con tejidos de fibra de última generación. Protección permanente sin degradación por lavados.' },
    { name: 'Georgia Boot',    logo: 'georgia boot.svg',   storeQuery: 'Georgia Boot',  desc: 'Botas de trabajo americanas con más de 80 años de historia. Resistencia al agua, protección eléctrica y construcción Goodyear Welt duradera.' },
    { name: 'Honeywell',       logo: 'honeywell.svg',      storeQuery: 'Honeywell',     desc: 'EPP de clase mundial: protección craneal, visual, auditiva, respiratoria y anticaídas. Referencia internacional bajo estándares ANSI, OSHA y CE.' },
    { name: 'IFR',             logo: 'ifr.svg',            storeQuery: 'IFR',           desc: 'Uniformes inherentemente resistentes al fuego diseñados para industria de alto riesgo. Tejidos técnicos de protección permanente contra arco eléctrico y flama.' },
    { name: 'Keen',            logo: 'keen.svg',           storeQuery: 'Keen',          desc: 'Calzado de seguridad con puntera ancha asimétrica KEEN.PROTECT® y tecnología de amortiguación KEEN.DRY. Protección eléctrica certificada ASTM.' },
    { name: 'Kishigo',         logo: 'kishigo.svg',        storeQuery: 'Kishigo',       desc: 'Cuatro décadas especializándose en alta visibilidad y prendas FR. Chalecos, camisas y accesorios certificados ANSI/ISEA 107, NFPA 70E y ASTM F1506.' },
    { name: 'Kodiak',          logo: 'kodiak.svg',         storeQuery: 'Kodiak',        desc: 'Calzado de seguridad canadiense con certificación CSA. Botas industriales resistentes al agua con puntera metálica y placa antiperforación.' },
    { name: 'Lakeland',        logo: 'lakeland.svg',       storeQuery: 'Lakeland',      desc: 'Ropa FR, prendas desechables y alta visibilidad. Sublínea Eagle FR con tejidos inherentes de última generación. Certificada NFPA 2112, ISO 11612 y IEC 61482-2.' },
    { name: 'Lapco FR',        logo: 'lapco fr.svg',       storeQuery: 'Lapco',         desc: 'Especialista en ropa de trabajo FR para industria petrolera y manufactura. Algodón 100% tratado FR y mezclas Westex® de alta protección.' },
    { name: 'MCR Safety',      logo: 'mcr safety.svg',     storeQuery: 'MCR Safety',    desc: 'Guantes, lentes y protección auditiva de amplio catálogo para industria general. Soluciones de EPP certificadas ANSI a precio competitivo.' },
    { name: 'MSA',             logo: 'MSA.svg',            storeQuery: 'MSA',           desc: 'Cascos, detectores de gas, protección respiratoria y anticaídas de seguridad crítica. EPP bajo estándares ANSI, OSHA y CE.' },
    { name: 'Oberon',          logo: 'oberon.svg',         storeQuery: 'Oberon',        desc: 'Especialista en EPP para protección contra arco eléctrico. Trajes, guantes, capuchas y pantallas faciales certificados NFPA 70E y ASTM F1959.' },
    { name: 'PortWest',        logo: 'portwest.svg',       storeQuery: 'PortWest',      desc: 'Fabricante global presente en 130+ países. Línea FR Bizflame, Modaflame y Araflame. Más de 1,400 productos certificados NFPA, ISO 11612 y CE.' },
    { name: 'Rasco FR',        logo: 'rasco fr.svg',       storeQuery: 'Rasco',         desc: 'Ropa FR de alto rendimiento para electricistas, operadores de petróleo y gas, y trabajadores en riesgo de arco eléctrico. Certificada NFPA 70E y ASTM F1506.' },
    { name: 'Red Kap',         logo: 'redkap.svg',         storeQuery: 'Red Kap',       desc: 'Uniformes de trabajo duraderos y funcionales para industria automotriz, manufactura y servicios. Amplio catálogo en tallas y colores.' },
    { name: 'Stanco',          logo: 'stanco.svg',         storeQuery: 'Stanco',        desc: 'Especialista en monos y prendas FR de aramida Nomex®. Diseños de contratista con cierre de cremallera y tejidos de alta resistencia al fuego.' },
    { name: 'Terra',           logo: 'terra.svg',          storeQuery: 'Terra',         desc: 'Calzado de seguridad canadiense con puntera de acero, protección eléctrica y suela antideslizante. Amplio catálogo para industria pesada.' },
    { name: 'Tillman',         logo: 'tillman.svg',        storeQuery: 'Tillman',       desc: 'Guantes y protección para soldador de alta resistencia. Cuero de dividir, cowhide y kevlar para ambientes de temperatura extrema y chispa.' },
    { name: 'Timberland PRO',  logo: 'timberland pro.svg', storeQuery: 'Timberland PRO',desc: 'Calzado de seguridad con amortiguación antifatiga, suela antideslizante y protección eléctrica. Diseño ergonómico para largas jornadas.' },
    { name: 'Timberland PRO FR', logo: 'timberland pro fr.svg', storeQuery: 'Timberland', desc: 'Línea FR premium de Timberland PRO con tecnología de absorción de humedad, UPF 50+ y elasticidad estratégica. Certificada NFPA 2112 y NFPA 70E.' },
    { name: 'Wolverine',       logo: 'wolverine.svg',      storeQuery: 'Wolverine',     desc: 'Botas de trabajo con tecnología MultiShox® de absorción de impacto. Resistentes al agua, antiestáticas y con puntera de acero o compuesta.' },
    { name: 'Workrite',        logo: 'workrite.svg',       storeQuery: 'Workrite',      desc: 'Ropa FR premium para emergencias, bomberos y rescatistas. Fibras Nomex® y Kevlar®. Certificada NFPA 1975, NFPA 2112 y NFPA 70E.' },
];

const BrandsView = ({ navigate }) => {
    return (
        <div className="min-h-screen bg-white">

            {/* HEADER */}
            <div className="bg-[#0A1628] py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="inline-block text-[#0057B8] font-bold text-xs uppercase tracking-[0.2em] mb-3">Catálogo de Marcas</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                        Nuestras Marcas FR
                    </h1>
                    <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-lg">
                        Trabajamos exclusivamente con marcas certificadas para garantizar la seguridad de tu equipo.
                    </p>
                </div>
            </div>

            {/* BRANDS GRID */}
            <section className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {BRANDS_FR.map((brand, i) => (
                        <motion.button
                            key={brand.name}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ y: -4 }}
                            onClick={() => navigate('store', { brand: brand.storeQuery })}
                            className="group bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-gray-400 hover:shadow-lg transition-all duration-300 flex flex-col items-center"
                        >
                            {/* Logo */}
                            <div className="h-36 flex items-center justify-center mb-4 w-full">
                                <img
                                    src={`${import.meta.env.BASE_URL}marcas/${brand.logo}`}
                                    alt={brand.name}
                                    className="max-h-full max-w-[190px] w-full object-contain transition-all duration-300 group-hover:scale-110"
                                />
                            </div>

                            <h3 className="font-bold text-sm text-black mb-1">{brand.name}</h3>
                            <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 mb-3">{brand.desc}</p>

                            {/* Ver productos */}
                            <span className="text-xs font-medium uppercase tracking-widest text-[#0057B8] group-hover:underline flex items-center gap-1">
                                Ver productos <ArrowRight className="w-3 h-3" />
                            </span>
                        </motion.button>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gray-50 border-t border-gray-100 py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-black mb-3">¿No encuentras tu marca?</h2>
                    <p className="text-gray-500 mb-6">Contáctanos. Trabajamos con muchas más marcas según tu proyecto.</p>
                    <button
                        onClick={() => navigate('quote')}
                        className="bg-[#0057B8] text-white px-8 py-3.5 rounded-md text-sm font-bold hover:bg-[#004A9E] transition-colors"
                    >
                        Cotiza tu Proyecto
                    </button>
                </div>
            </section>
        </div>
    );
};

export default BrandsView;
