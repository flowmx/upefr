import React, { useState } from 'react';
import { INITIAL_PRODUCTS } from './data/productos';

// Componentes reutilizables
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Vistas
import HomeView from './views/HomeView';
import StoreView from './views/StoreView';
import ProductView from './views/ProductView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';
import View360 from './views/View360';
import LoginView from './views/LoginView';
import AdminView from './views/AdminView';
import WelcomeModal from './views/WelcomeModal';

export default function App() {
    // Estado de navegación
    const [currentView, setCurrentView] = useState('home');
    const [products, setProducts] = useState(INITIAL_PRODUCTS);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [storeFilter, setStoreFilter] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Funciones de navegación
    const goHome = () => { setCurrentView('home'); window.scrollTo(0, 0); };

    const goToStore = (filter = null) => {
        setStoreFilter(filter);
        setCurrentView('store');
        window.scrollTo(0, 0);
    };

    const goToProduct = (id) => {
        setSelectedProductId(id);
        setCurrentView('product');
        window.scrollTo(0, 0);
    };

    const goToAbout = () => { setCurrentView('about'); window.scrollTo(0, 0); };
    const goToContact = () => { setCurrentView('contact'); window.scrollTo(0, 0); };
    const goTo360 = () => { setCurrentView('360'); window.scrollTo(0, 0); };
    const goToAdmin = () => { setCurrentView('admin'); window.scrollTo(0, 0); };

    // WhatsApp
    const handleWhatsAppClick = (product = null) => {
        const phoneNumber = "526462952269";
        let message = "Hola, me gustaría recibir asesoría sobre sus productos y uniformes industriales.";
        if (product) {
            message = `Hola, me interesa obtener más información sobre el producto:\n\n*${product.title}*\nSKU: ${product.sku}\nEstilo: ${product.style}\n\n¿Podrían apoyarme con una cotización?`;
        }
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    // Props comunes de navegación para Navbar
    const navProps = { currentView, goHome, goToStore, goToAbout, goToContact, goTo360, goToAdmin };

    // Props comunes para Footer
    const footerProps = { goHome, goToAbout, goTo360, goToStore, goToContact };

    const showFooter = currentView !== 'admin' && currentView !== '360';

    return (
        <div className="min-h-screen flex flex-col font-sans bg-gray-50">
            <WelcomeModal />
            <Navbar {...navProps} />

            {currentView === 'home' && (
                <HomeView
                    products={products}
                    goToStore={goToStore}
                    goToProduct={goToProduct}
                />
            )}

            {currentView === 'store' && (
                <StoreView
                    products={products}
                    storeFilter={storeFilter}
                    goToProduct={goToProduct}
                />
            )}

            {currentView === 'product' && (
                <ProductView
                    products={products}
                    selectedProductId={selectedProductId}
                    goToStore={goToStore}
                    goToProduct={goToProduct}
                    handleWhatsAppClick={handleWhatsAppClick}
                />
            )}

            {currentView === 'about' && <AboutView />}

            {currentView === 'contact' && (
                <ContactView handleWhatsAppClick={handleWhatsAppClick} />
            )}

            {currentView === '360' && <View360 />}

            {currentView === 'admin' && (
                isAuthenticated
                    ? <AdminView products={products} setProducts={setProducts} />
                    : <LoginView goHome={goHome} setIsAuthenticated={setIsAuthenticated} />
            )}

            {showFooter && <Footer {...footerProps} />}
        </div>
    );
}