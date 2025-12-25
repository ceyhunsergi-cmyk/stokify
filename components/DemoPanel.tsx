import React, { useState } from 'react';
import { Plus, Trash2, AlertCircle, TrendingUp, TrendingDown, CheckCircle2, Calculator } from 'lucide-react';
import FadeIn from './FadeIn';

interface Product {
  id: number;
  name: string;
  stock: number;
  cost: number;
  price: number;
}

const DemoPanel: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Hamburger Ekmeği', stock: 150, cost: 4, price: 8 },
    { id: 2, name: 'Coca Cola 330ml', stock: 8, cost: 15, price: 35 },
    { id: 3, name: 'Dana Burger Köfte', stock: 45, cost: 60, price: 120 },
  ]);

  const [newProduct, setNewProduct] = useState({ name: '', stock: '', cost: '', price: '' });
  const [showToast, setShowToast] = useState(false);

  const calculateProfit = (cost: number, price: number) => {
    return ((price - cost) / price * 100).toFixed(1);
  };

  const getStatus = (stock: number, margin: number) => {
    if (stock < 10) return { label: 'Kritik Stok', color: 'text-red-600 bg-red-50 border-red-100', icon: AlertCircle };
    if (stock > 100) return { label: 'İndirim Yap', color: 'text-orange-600 bg-orange-50 border-orange-100', icon: TrendingDown };
    if (margin < 30) return { label: 'Fiyat Artır', color: 'text-blue-600 bg-blue-50 border-blue-100', icon: TrendingUp };
    return { label: 'İdeal', color: 'text-green-600 bg-green-50 border-green-100', icon: CheckCircle2 };
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.stock) return;

    const product: Product = {
      id: Date.now(),
      name: newProduct.name,
      stock: Number(newProduct.stock),
      cost: Number(newProduct.cost) || 0,
      price: Number(newProduct.price) || 0,
    };

    setProducts([...products, product]);
    setNewProduct({ name: '', stock: '', cost: '', price: '' });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleDelete = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <section id="demo-panel" className="py-16 md:py-24 bg-brand-blue relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-brand-orange blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-white blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-4 border border-white/20">
              Canlı Önizleme
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stok Yönetim Paneli
            </h2>
            <p className="text-blue-200">
              Aşağıdaki panel interaktiftir. Ürün ekleyip silerek sistemin otomatik önerilerini test edin.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="bg-[#F6F7F9] rounded-2xl shadow-2xl overflow-hidden border border-white/10">
            {/* Mock Window Header */}
            <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Stokify Dashboard v2.0</div>
              <div className="w-16"></div>
            </div>

            <div className="p-6 md:p-8">
              {/* Add Product Form */}
              <form onSubmit={handleAddProduct} className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="col-span-2 md:col-span-2">
                  <label className="block text-xs font-medium text-gray-500 mb-1">Ürün Adı</label>
                  <input 
                    type="text" 
                    placeholder="Örn: Latte" 
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 text-sm text-brand-text"
                    value={newProduct.name}
                    onChange={e => setNewProduct({...newProduct, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Stok</label>
                  <input 
                    type="number" 
                    placeholder="Adet" 
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 text-sm text-brand-text"
                    value={newProduct.stock}
                    onChange={e => setNewProduct({...newProduct, stock: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Maliyet (TL)</label>
                  <input 
                    type="number" 
                    placeholder="TL" 
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 text-sm text-brand-text"
                    value={newProduct.cost}
                    onChange={e => setNewProduct({...newProduct, cost: e.target.value})}
                  />
                </div>
                <div className="col-span-2 md:col-span-1 flex items-end">
                  <button 
                    type="submit"
                    className="w-full py-2 bg-brand-blue text-white rounded-lg text-sm font-semibold hover:bg-blue-900 transition-colors flex items-center justify-center gap-1"
                  >
                    <Plus size={16} /> Ekle
                  </button>
                </div>
              </form>

              {/* Data Table */}
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                <table className="w-full min-w-[600px] text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100 text-xs text-gray-500 uppercase tracking-wider">
                      <th className="p-4 font-semibold">Ürün</th>
                      <th className="p-4 font-semibold text-center">Stok</th>
                      <th className="p-4 font-semibold text-right">Maliyet / Fiyat</th>
                      <th className="p-4 font-semibold text-center">Tahmini Kâr</th>
                      <th className="p-4 font-semibold text-center">AI Önerisi</th>
                      <th className="p-4 font-semibold text-center">İşlem</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {products.map((product) => {
                      const margin = Number(calculateProfit(product.cost, product.price));
                      const status = getStatus(product.stock, margin);
                      const StatusIcon = status.icon;

                      return (
                        <tr key={product.id} className="hover:bg-blue-50/50 transition-colors group">
                          <td className="p-4 font-medium text-brand-text">{product.name}</td>
                          <td className="p-4 text-center">
                            <span className={`inline-block px-2 py-1 rounded text-xs font-bold ${product.stock < 10 ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}`}>
                              {product.stock}
                            </span>
                          </td>
                          <td className="p-4 text-right text-sm">
                            <div className="text-gray-400 text-xs">{product.cost} TL</div>
                            <div className="font-semibold text-brand-text">{product.price} TL</div>
                          </td>
                          <td className="p-4 text-center">
                            <div className="flex items-center justify-center gap-1 text-green-600 font-semibold text-sm">
                              <Calculator size={14} /> %{margin}
                            </div>
                          </td>
                          <td className="p-4 text-center">
                            <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${status.color}`}>
                              <StatusIcon size={12} />
                              {status.label}
                            </div>
                          </td>
                          <td className="p-4 text-center">
                            <button 
                              onClick={() => handleDelete(product.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-md hover:bg-red-50"
                            >
                              <Trash2 size={16} />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                    {products.length === 0 && (
                      <tr>
                        <td colSpan={6} className="p-8 text-center text-gray-400 text-sm">
                          Listeniz boş. Yukarıdan ürün ekleyin.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Success Toast */}
      <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-full shadow-xl transition-all duration-300 flex items-center gap-2 ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <CheckCircle2 size={18} className="text-green-400" />
        <span className="text-sm font-medium">Ürün başarıyla eklendi ve analiz edildi.</span>
      </div>
    </section>
  );
};

export default DemoPanel;