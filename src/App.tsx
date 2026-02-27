
import { useState } from 'react';
import './index.css';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  stock: number;
  sold: number;
  rating: number;
  reviews: number;
}

interface CartItem extends Product {
  quantity: number;
}

const SHOP_PRODUCTS: Product[] = [
  { id: 1, name: "YOLYOLAC", price: "₱69.00", image: "/shop-images/yolyolac.jpg", category: "Apparel", stock: 150, sold: 0, rating: 4.8, reviews: 342 },
  { id: 2, name: "Tshirt Design", price: "₱10.00", image: "/shop-images/tshirt.jpg", category: "Schoolwear", stock: 50, sold: 850, rating: 4.5, reviews: 128 },
  { id: 3, name: "BSCPE", price: "₱300.00", image: "/shop-images/bscpe.jpg", category: "Schoolwear", stock: 25, sold: 150, rating: 4.9, reviews: 89 },
  { id: 4, name: "Varsity T-shirt", price: "₱200.00", image: "/shop-images/varsity.jpg", category: "Sportswear", stock: 80, sold: 430, rating: 4.7, reviews: 215 }
];

function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'shop'>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authModal, setAuthModal] = useState<'login' | 'register' | null>(null);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);

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
      setAuthModal('login');
      return;
    }
    performAddToCart(product);
  };

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticated(true);
    setAuthModal(null);
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

  return (
    <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-sec selection:text-white relative">
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-brand-text-2/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setActiveTab('home')}
          >
            <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center">
              <svg className="w-5 h-5 text-brand-text-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-brand-primary tracking-tight">Printing Paradise</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => setActiveTab('home')}
              className={`font-medium transition-colors ${activeTab === 'home' ? 'text-brand-sec' : 'text-brand-text-1 hover:text-brand-sec'}`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab('shop')}
              className={`font-medium transition-colors ${activeTab === 'shop' ? 'text-brand-sec' : 'text-brand-text-1 hover:text-brand-sec'}`}
            >
              Shop
            </button>
            <a href="#services" className="text-brand-text-1 hover:text-brand-sec transition-colors font-medium">Services</a>
            <a href="#about" className="text-brand-text-1 hover:text-brand-sec transition-colors font-medium">About</a>
            <a href="#contact" className="text-brand-text-1 hover:text-brand-sec transition-colors font-medium">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <button
                onClick={() => setIsAuthenticated(false)}
                className="text-brand-text-1 hover:text-brand-sec font-medium transition-colors hidden sm:block"
              >
                Sign Out
              </button>
            ) : (
              <div className="hidden sm:flex items-center gap-2">
                <button
                  onClick={() => setAuthModal('login')}
                  className="text-brand-text-1 hover:text-brand-sec font-medium transition-colors px-3 py-2"
                >
                  Log In
                </button>
                <button
                  onClick={() => setAuthModal('register')}
                  className="bg-brand-text-1 hover:bg-brand-primary text-white px-5 py-2.5 rounded-full font-medium transition-all text-sm"
                >
                  Sign Up
                </button>
              </div>
            )}
            <div
              className="relative cursor-pointer text-brand-primary hover:text-brand-sec transition-colors"
              onClick={() => setIsCartOpen(true)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-sec text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </div>
            <button
              onClick={() => {
                if (!isAuthenticated) {
                  setAuthModal('login');
                } else {
                  setActiveTab('shop');
                }
              }}
              className="bg-brand-sec hover:bg-opacity-90 text-brand-text-3 px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-brand-sec/30 transform hover:-translate-y-0.5">
              Order Now
            </button>
          </div>
        </div>
      </nav>

      {/* Conditionally Render Content Based on Active Tab */}
      {activeTab === 'home' && (
        <>
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-8 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-sec/10 text-brand-sec font-medium text-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-sec opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-sec"></span>
                  </span>
                  Premium Sublimation Printing
                </div>
                <h1 className="text-5xl lg:text-7xl font-extrabold text-brand-primary leading-[1.1] tracking-tight">
                  Bring your t-shirt designs to <span className="text-brand-sec relative whitespace-nowrap">
                    <span className="relative z-10">brilliant life</span>
                    <span className="absolute bottom-2 left-0 w-full h-4 bg-brand-text-2/40 -z-0 -rotate-2"></span>
                  </span>.
                </h1>
                <p className="text-lg text-brand-text-1 leading-relaxed max-w-xl">
                  From vibrant full-color graphics to seamless all-over prints.
                  We deliver premium t-shirt sublimation with unmatched precision, rich colors, and prints that never fade or crack.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={() => {
                      setActiveTab('home');
                      setTimeout(() => {
                        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="bg-brand-primary hover:bg-opacity-90 text-brand-text-3 px-8 py-4 rounded-full font-semibold transition-all shadow-xl shadow-brand-primary/20 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                    Explore Services
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <button className="bg-white border-2 border-brand-text-2 text-brand-primary hover:border-brand-sec hover:text-brand-sec px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center">
                    Get a Custom Quote
                  </button>
                </div>
              </div>

              <div className="relative lg:h-[600px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-sec/20 to-brand-primary/5 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-brand-text-2/40 to-transparent rounded-[3rem] transform -rotate-2 scale-105 -z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Premium Printing"
                  className="rounded-[2.5rem] object-cover h-full w-full shadow-2xl border-4 border-white"
                />
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-brand-text-2/30 flex items-center gap-4 animate-bounce hover:animate-none">
                  <div className="bg-brand-sec/10 p-3 rounded-xl text-brand-sec">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-brand-text-1 font-medium">Satisfaction</p>
                    <p className="text-xl font-bold text-brand-primary">100%</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-24 bg-brand-primary relative">
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[50px] w-full" style={{ fill: 'var(--color-brand-bg)' }}>
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
              </svg>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-12">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-brand-text-3 mb-4">Mastering T-Shirt Sublimation</h2>
                <p className="text-brand-text-2 max-w-2xl mx-auto text-lg">From personal projects to full team apparel, we create fade-defying prints using state-of-the-art sublimation technology.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "All-Over Printing",
                    desc: "Edge-to-edge sublimation that covers the entire garment with your stunning, high-resolution designs.",
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  },
                  {
                    title: "Custom Uniforms",
                    desc: "Durable, breathable, and fade-resistant sublimated jerseys and team wear built for performance.",
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  },
                  {
                    title: "Personalized Tees",
                    desc: "One-of-a-kind t-shirts created with a process that embeds ink deeply into the fabric for a soft feel.",
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  }
                ].map((service, i) => (
                  <div key={i} className="group bg-brand-text-3/5 border border-brand-text-2/10 p-8 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-brand-sec/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                    <div className="w-14 h-14 bg-brand-sec/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-sec transition-all shadow-sm text-brand-sec group-hover:text-brand-text-3">
                      <svg className="w-7 h-7 text-brand-sec group-hover:text-brand-text-3 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {service.icon}
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-brand-text-3 mb-3">{service.title}</h3>
                    <p className="text-brand-text-2 leading-relaxed mb-6">{service.desc}</p>
                    <a href="#" className="inline-flex items-center font-medium text-brand-sec hover:text-white transition-colors">
                      Learn more
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Shop Tab Section */}
      {activeTab === 'shop' && (
        <section id="shop" className="pt-32 pb-24 bg-brand-bg relative min-h-screen">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4">Shop Premium Sublimation</h2>
              <p className="text-brand-text-1 max-w-2xl mx-auto text-lg">Browse our selection of top-quality sublimated products, ready for your custom designs.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {SHOP_PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-brand-sec/10 transition-all duration-300 border border-brand-text-2/10 group flex flex-col cursor-pointer hover:-translate-y-1"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="relative h-64 overflow-hidden bg-brand-text-2/20">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-brand-primary">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-brand-primary">{product.name}</h3>
                      <div className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md text-xs font-bold">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {product.rating}
                      </div>
                    </div>
                    <p className="text-brand-sec font-semibold text-lg mb-4">{product.price}</p>

                    <div className="flex justify-between items-center text-sm text-brand-text-1 mt-auto">
                      <span>{product.sold.toLocaleString()} sold</span>
                      <span>Stock: {product.stock}</span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                      className="mt-4 w-full py-3 px-4 bg-brand-primary/5 hover:bg-brand-primary text-brand-primary hover:text-white rounded-xl font-medium transition-colors border border-brand-primary/10 hover:border-brand-primary flex justify-center items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section (Only visible on Home) */}
      {activeTab === 'home' && (
        <section className="py-24 bg-brand-bg relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="bg-brand-sec rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 -m-20 w-64 h-64 border-[30px] border-white/10 rounded-full"></div>
              <div className="absolute bottom-0 left-0 -m-20 w-64 h-64 border-[30px] border-white/10 rounded-full"></div>

              <h2 className="text-3xl md:text-5xl font-bold text-brand-text-3 mb-6 relative z-10">Ready to sublimate your style?</h2>
              <p className="text-brand-bg/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10">
                Join thousands of happy customers who trust Printing Paradise for all their custom apparel and t-shirt needs.
              </p>
              <button className="bg-brand-primary text-brand-text-3 hover:bg-white hover:text-brand-primary px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl transform hover:-translate-y-1 relative z-10">
                Start Your Project Today
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-brand-primary py-12 border-t border-brand-text-2/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-brand-sec flex items-center justify-center">
                <svg className="w-4 h-4 text-brand-text-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-brand-text-3">Printing Paradise</span>
            </div>
            <p className="text-brand-text-2 text-sm max-w-xs">
              Delivering sublimation perfection with every order. Your t-shirt designs, rendered beautifully and permanently.
            </p>
          </div>
          <div>
            <h4 className="text-brand-text-3 font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-brand-text-2">
              <li><a href="#" className="hover:text-brand-sec transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-sec transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-sec transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-brand-text-3 font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-brand-text-2">
              <li><a href="#" className="hover:text-brand-sec transition-colors">All-Over Prints</a></li>
              <li><a href="#" className="hover:text-brand-sec transition-colors">Team Uniforms</a></li>
              <li><a href="#" className="hover:text-brand-sec transition-colors">Custom Tees</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-brand-text-3 font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-brand-text-2">
              <li><a href="#" className="hover:text-brand-sec transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-sec transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-brand-text-2/20 text-center text-brand-text-2 text-sm">
          <p>&copy; {new Date().getFullYear()} Printing Paradise. All rights reserved.</p>
        </div>
      </footer>

      {/* Cart Modal Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-end">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-brand-primary/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCartOpen(false)}
          ></div>

          {/* Modal Panel */}
          <div className="relative bg-white w-full max-w-md h-full flex flex-col shadow-2xl transform transition-transform border-l border-brand-text-2/30 animate-slide-in-right">
            <div className="px-6 py-5 border-b border-brand-text-2/30 flex justify-between items-center bg-brand-bg">
              <h2 className="text-2xl font-bold text-brand-primary">Your Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-brand-text-1 hover:text-brand-primary hover:bg-brand-text-2/50 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-brand-text-1 opacity-70">
                  <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-lg font-medium">Your cart is empty.</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex items-center gap-4 bg-brand-bg rounded-2xl p-4 border border-brand-text-2/30 shadow-sm">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl border border-brand-text-2/20" />
                    <div className="flex-1">
                      <h4 className="font-bold text-brand-primary text-lg">{item.name}</h4>
                      <p className="text-brand-sec font-medium">{item.price}</p>
                      <p className="text-sm text-brand-text-1 mt-1">Qty: {item.quantity}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-500 hover:text-white hover:bg-red-500 rounded-lg transition-colors border border-red-500/20"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-brand-text-2/30 p-6 bg-brand-bg/50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-semibold text-brand-text-1">Subtotal</span>
                  <span className="text-2xl font-bold text-brand-primary">
                    ₱{cartTotal.toFixed(2)}
                  </span>
                </div>
                <button className="w-full bg-brand-primary hover:bg-opacity-90 text-brand-text-3 py-4 rounded-xl font-bold text-lg shadow-xl shadow-brand-primary/20 transform transition-transform hover:-translate-y-1">
                  Checkout Now
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Product Details Modal Overlay */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-brand-primary/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProduct(null)}
          ></div>

          {/* Modal Panel */}
          <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row overflow-hidden animate-slide-up">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/50 backdrop-blur-md text-brand-primary hover:bg-white rounded-full transition-colors shadow-sm"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-brand-text-2/20">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold text-brand-primary shadow-sm">
                {selectedProduct.category}
              </div>
            </div>

            <div className="w-full md:w-1/2 p-8 flex flex-col bg-brand-bg">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center text-yellow-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-bold ml-1 text-gray-800">{selectedProduct.rating}</span>
                </div>
                <span className="text-brand-text-1 text-sm">({selectedProduct.reviews} reviews)</span>
              </div>

              <h2 className="text-3xl font-bold text-brand-primary mb-2 tracking-tight">
                {selectedProduct.name}
              </h2>

              <p className="text-2xl font-bold text-brand-sec mb-6">
                {selectedProduct.price}
              </p>

              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div className="bg-brand-text-3/5 border border-brand-text-2/30 rounded-2xl p-4 text-center">
                  <p className="text-brand-text-1 text-sm mb-1">Status</p>
                  <p className="font-bold text-brand-primary text-lg">
                    {selectedProduct.stock > 0 ? "In Stock" : "Sold Out"}
                  </p>
                  <p className="text-xs text-brand-primary/60 mt-1">{selectedProduct.stock} available</p>
                </div>
                <div className="bg-brand-text-3/5 border border-brand-text-2/30 rounded-2xl p-4 text-center">
                  <p className="text-brand-text-1 text-sm mb-1">Total Sold</p>
                  <p className="font-bold text-brand-primary text-lg">{selectedProduct.sold.toLocaleString()}</p>
                  <p className="text-xs text-brand-primary/60 mt-1">units shipped</p>
                </div>
              </div>

              <button
                onClick={() => {
                  handleAddToCart(selectedProduct);
                  setSelectedProduct(null);
                  setIsCartOpen(true);
                }}
                className="mt-auto w-full py-4 px-6 bg-brand-primary hover:bg-opacity-90 text-brand-text-3 hover:text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-brand-primary/20 hover:-translate-y-1 flex justify-center items-center gap-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal Overlay */}
      {authModal && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center px-4 animate-fade-in">
          <div
            className="absolute inset-0 bg-brand-primary/60 backdrop-blur-sm"
            onClick={() => setAuthModal(null)}
          ></div>
          <div className="relative bg-white w-full max-w-md p-8 rounded-[2rem] shadow-2xl animate-slide-up">
            <button
              onClick={() => setAuthModal(null)}
              className="absolute top-4 right-4 p-2 text-brand-text-1 hover:text-brand-primary hover:bg-brand-text-2/20 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-3xl font-extrabold text-brand-primary mb-2 text-center">
              {authModal === 'login' ? 'Welcome Back!' : 'Join Paradise'}
            </h2>
            <p className="text-brand-text-1 mb-8 text-center">
              {authModal === 'login' ? 'Sign in to complete your purchase' : 'Register to get the best sublimation pieces'}
            </p>

            <form onSubmit={handleAuthSubmit} className="space-y-4">
              <div>
                <label className="block text-brand-primary font-bold mb-2 text-sm">Email</label>
                <input
                  type="email"
                  autoFocus
                  required
                  placeholder="hello@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-brand-text-2/30 focus:border-brand-sec focus:ring-2 focus:ring-brand-sec/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-brand-primary font-bold mb-2 text-sm">Password</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-brand-text-2/30 focus:border-brand-sec focus:ring-2 focus:ring-brand-sec/20 outline-none transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-sec hover:bg-opacity-90 text-brand-text-3 py-4 rounded-xl font-bold text-lg shadow-xl shadow-brand-sec/30 transform transition-transform hover:-translate-y-1 mt-6"
              >
                {authModal === 'login' ? 'Sign In' : 'Sign Up'}
              </button>
            </form>

            <p className="text-center mt-6 text-brand-text-1 text-sm">
              {authModal === 'login' ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setAuthModal(authModal === 'login' ? 'register' : 'login')}
                className="text-brand-sec font-bold hover:underline"
              >
                {authModal === 'login' ? 'Register' : 'Log in'}
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
