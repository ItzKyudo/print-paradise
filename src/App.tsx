import { useState, useEffect } from 'react';
import './index.css';
import AdminPage from './pages/Admin';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Navigation from './components/client/Navigation';
import Footer from './components/client/Footer';
import AuthModal from './components/modals/AuthModal';
import CartModal from './components/modals/CartModal';
import ProductModal from './components/modals/ProductModal';
import ServiceModal from './components/modals/ServiceModal';
import { Product, CartItem, Service } from './types';
import { SHOP_PRODUCTS } from './data/mockData';

function App() {
  const [currentHash, setCurrentHash] = useState<string>(window.location.hash || '#home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [authModal, setAuthModal] = useState<'login' | 'register' | null>(null);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#home';
      setCurrentHash(hash);

      // Auto-trigger auth modal if route is strictly login/register
      if (hash === '#login') setAuthModal('login');
      else if (hash === '#register') setAuthModal('register');
      else setAuthModal(null);

      // Protect admin route
      if (hash === '#admin' && !isAdmin) {
        window.location.hash = '#home';
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [isAdmin]);

  const performAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleAddToCart = (product: Product) => {
    if (!isAuthenticated) {
      setPendingAction(() => () => performAddToCart(product));
      window.location.hash = '#login';
      return;
    }
    performAddToCart(product);
  };

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;
    const password = (form.elements.namedItem('password') as HTMLInputElement)?.value;

    if (email === 'admin@example.com' && password === 'admin123') {
      setIsAuthenticated(true);
      setIsAdmin(true);
      setAuthModal(null);
      window.location.hash = '#admin';
      return;
    }

    setIsAuthenticated(true);
    setIsAdmin(false);
    setAuthModal(null);
    window.location.hash = '#shop'; // Redirect post-login by default to shop unless pendingAction

    if (pendingAction) {
      pendingAction();
      setPendingAction(null);
      setIsCartOpen(true);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => {
    const priceNum = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
    return sum + (priceNum * item.quantity);
  }, 0);

  if (currentHash === '#admin' && isAdmin) {
    return <AdminPage onLogout={() => {
      setIsAuthenticated(false);
      setIsAdmin(false);
      window.location.hash = '#home';
    }} />;
  }

  return (
    <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-sec selection:text-white relative">
      <Navigation
        currentHash={currentHash}
        isAuthenticated={isAuthenticated}
        isAdmin={isAdmin}
        cartCount={cartCount}
        onSignOut={() => {
          setIsAuthenticated(false);
          setIsAdmin(false);
        }}
        onNavigateAdmin={() => { window.location.hash = '#admin' }}
        onNavigateShop={() => { window.location.hash = '#shop' }}
        onNavigateLogin={() => { window.location.hash = '#login' }}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {(currentHash === '#home' || currentHash === '' || currentHash === '#login' || currentHash === '#register') && (
        <Home onSelectService={setSelectedService} />
      )}

      {currentHash === '#shop' && (
        <Shop
          products={SHOP_PRODUCTS}
          onSelectProduct={setSelectedProduct}
          onAddToCart={handleAddToCart}
        />
      )}

      <Footer />

      {isCartOpen && (
        <CartModal
          cart={cart}
          cartTotal={cartTotal}
          setIsCartOpen={setIsCartOpen}
          removeFromCart={removeFromCart}
        />
      )}

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          handleAddToCart={handleAddToCart}
          setIsCartOpen={setIsCartOpen}
        />
      )}

      {authModal && (
        <AuthModal
          authModal={authModal}
          setAuthModal={setAuthModal}
          handleAuthSubmit={handleAuthSubmit}
        />
      )}

      {selectedService && (
        <ServiceModal
          service={selectedService}
          setSelectedService={setSelectedService}
        />
      )}
    </div>
  );
}

export default App;
