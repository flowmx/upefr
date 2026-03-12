import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

const Footer = ({ goHome, goToAbout, goTo360, goToStore, goToContact }) => (
    <footer className="bg-[#f5f5f5] text-black py-12 mt-auto border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
                <div className="mb-6">
                    <img src={`${import.meta.env.BASE_URL}logo-oscuro.png`} alt="upeFR Logo" className="h-8 w-auto opacity-90" />
                </div>
                <form className="mb-6" onSubmit={(e) => e.preventDefault()}>
                    <label className="block text-sm font-bold uppercase tracking-widest mb-3">Únete a upeFR</label>
                    <div className="flex">
                        <input type="email" placeholder="Correo electrónico" className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-black rounded-none" />
                        <button type="submit" className="bg-[#c84126] text-white px-4 py-2 text-sm font-bold uppercase tracking-wider hover:bg-orange-800 transition-colors rounded-none">Suscribir</button>
                    </div>
                </form>
                <div className="flex space-x-4 mt-6">
                    <a href="#" className="text-gray-500 hover:text-black transition"><ShieldCheck className="w-5 h-5" /></a>
                </div>
            </div>
            <div className="md:col-span-1">
                <h4 className="text-black font-bold uppercase tracking-widest text-xs mb-6">Nosotros</h4>
                <ul className="space-y-4 text-sm text-gray-600">
                    <li><button onClick={goToAbout} className="hover:text-black hover:underline underline-offset-4 transition uppercase tracking-wider text-[11px] font-bold">Nuestra Historia</button></li>
                    <li><button onClick={goTo360} className="hover:text-black hover:underline underline-offset-4 transition uppercase tracking-wider text-[11px] font-bold">Experiencia upeFR 360°</button></li>
                </ul>
            </div>
            <div className="md:col-span-1">
                <h4 className="text-black font-bold uppercase tracking-widest text-xs mb-6">Ayuda / Soporte</h4>
                <ul className="space-y-4 text-sm text-gray-600">
                    <li><button onClick={() => goToStore(null)} className="hover:text-black hover:underline underline-offset-4 transition uppercase tracking-wider text-[11px] font-bold">Catálogo</button></li>
                    <li><button onClick={goToContact} className="hover:text-black hover:underline underline-offset-4 transition uppercase tracking-wider text-[11px] font-bold">Contáctanos</button></li>
                    <li><a href="#" className="hover:text-black hover:underline underline-offset-4 transition uppercase tracking-wider text-[11px] font-bold">Devoluciones</a></li>
                </ul>
            </div>
            <div className="md:col-span-1">
                <h4 className="text-black font-bold uppercase tracking-widest text-xs mb-6">Contacto</h4>
                <ul className="space-y-4 text-sm text-gray-600">
                    <li className="flex items-center"><Phone className="w-4 h-4 mr-3" /> <span className="text-[11px] font-bold tracking-wider">+52 646 596 1975</span></li>
                    <li className="flex items-center"><Mail className="w-4 h-4 mr-3" /> <span className="text-[11px] font-bold tracking-wider">info@uniformesprofesionales.mx</span></li>
                    <li className="flex items-start"><MapPin className="w-4 h-4 mr-3 mt-1" /> <span className="text-[11px] font-bold tracking-wider uppercase leading-relaxed">Av. Libertad 1723,<br/>Ensenada, B.C., Mexico</span></li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center text-[10px] uppercase tracking-widest text-gray-400 mt-16 pt-8 border-t border-gray-200">
            © {new Date().getFullYear()} UPEFR. TODOS LOS DERECHOS RESERVADOS.
        </div>
    </footer>
);

export default Footer;
