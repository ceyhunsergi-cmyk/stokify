import { Box, TrendingUp, Tag, Layers, ClipboardCheck, BarChart3, Rocket } from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Özellikler', href: '#features' },
  { label: 'Nasıl Çalışır', href: '#how-it-works' },
  { label: 'Demo Panel', href: '#demo-panel' },
  { label: 'Fiyatlandırma', href: '#pricing' },
];

export const FEATURES = [
  {
    icon: Box,
    title: 'Akıllı Stok Takibi',
    description: 'Fazla ve eksik ürünleri otomatik tespit eder, israfı önler.',
    longDescription: 'Yapay zeka destekli algoritmamız, geçmiş satış verilerinizi analiz ederek gelecekteki stok ihtiyaçlarınızı tahmin eder. Hangi ürünün hangi gün biteceğini önceden görerek tedarik zincirinizi aksatmadan yönetebilirsiniz. Manuel sayımlara son verin.',
    example: 'Örnek: "Domates stoğunuz kritik seviyede (3 kg). Cuma yoğunluğu için 20 kg sipariş vermeniz önerilir."'
  },
  {
    icon: TrendingUp,
    title: 'Kârlılık Analizi',
    description: 'Maliyet ve satış verilerini işleyerek net kâr marjlarını hesaplar.',
    longDescription: 'Sadece cironuzu değil, gerçek cebinize giren parayı görün. Her bir porsiyonun veya ürünün maliyetini (reçete bazlı) anlık güncelleyerek, enflasyon karşısında menü fiyatlarınızı ne zaman güncellemeniz gerektiğini size bildirir.',
    example: 'Örnek: "Cheeseburger maliyeti %15 arttı. Kâr marjını korumak için fiyatı 180 TL olarak güncellemeniz önerilir."'
  },
  {
    icon: Tag,
    title: 'İndirim & Kampanya',
    description: 'En doğru zamanda, en etkili indirim oranlarını size önerir.',
    longDescription: 'Raf ömrü yaklaşan veya stok devir hızı düşük olan ürünleri nakite çevirmek için akıllı kampanyalar oluşturun. Sistem, müşteri davranışlarına göre hangi saatlerde %10 veya %20 indirimin satışı artıracağını hesaplar.',
    example: 'Örnek: "Salı günleri 14:00-17:00 arası tatlılarda %15 indirim yaparak atıl kapasiteyi %40 doldurabilirsiniz."'
  },
  {
    icon: Layers,
    title: 'Platform Entegrasyonu',
    description: 'Getir, Yemeksepeti ve Trendyol performansınızı tek ekrandan analiz eder.',
    longDescription: 'Tüm sipariş kanallarını tek bir panelde birleştirin. Hangi platformdan ne kadar komisyon kesildiğini, hangi platformda hangi ürünün daha çok sattığını analiz edin. Stoklarınız tüm platformlarda eş zamanlı güncellensin.',
    example: 'Örnek: "Trendyol Yemek siparişlerinizde ortalama puanınız 4.8, ancak iptal oranı %2. Stok entegrasyonunu kontrol edin."'
  }
];

export const STEPS = [
  {
    id: 1,
    icon: ClipboardCheck,
    title: 'Envanterini Ekle',
    description: 'Mevcut ürün listeni sisteme yükle veya Excel ile aktar.',
    details: 'Ürünlerinizi tek tek girmekle uğraşmayın. Excel şablonumuzu kullanarak binlerce ürünü saniyeler içinde içeri aktarın veya barkod okuyucu entegrasyonu ile raflarınızı okutun.'
  },
  {
    id: 2,
    icon: BarChart3,
    title: 'Satış Verilerini Bağla',
    description: 'POS sistemini veya online satış platformlarını entegre et.',
    details: 'Kullandığınız POS sistemi (Adisyo, Omni, vb.) veya online pazar yerleri ile API üzerinden güvenli bağlantı kurun. Satışlar düştükçe stoklarınız anlık olarak güncellenir.'
  },
  {
    id: 3,
    icon: Rocket,
    title: 'Önerileri Uygula',
    description: 'Sistemin sunduğu fiyat ve kampanya önerileriyle kârını büyüt.',
    details: 'Panelinizdeki bildirimleri takip edin. Sistem size "Bu üründe stok fazlası var, kampanya yap" veya "Maliyet arttı, fiyatı güncelle" gibi eyleme dönüştürülebilir bildirimler gönderir.'
  }
];

export const TESTIMONIALS = [
  {
    quote: "Stok kaçaklarını tespit etmekte çok zorlanıyorduk. Stokify sayesinde hangi ürünün nerede kaybolduğunu ilk haftadan çözdük.",
    author: "Ahmet Yılmaz",
    role: "Liman Kafe İşletmecisi",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "Kampanya önerileri özelliği harika. 'Hangi ürüne indirim yapsam?' diye düşünmek yerine sistemin önerisini uyguluyorum.",
    author: "Elif Demir",
    role: "Yeşil Market Kurucusu",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "Restoranımızın maliyet hesaplamaları artık çok daha net. Menü fiyatlarını belirlerken artık varsayımlarla değil, verilerle hareket ediyoruz.",
    author: "Caner Öztürk",
    role: "Chef & Co. Sahibi",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export const PRICING_PLANS = [
  {
    name: 'Başlangıç',
    price: '20 TL',
    period: '/ay',
    features: ['Temel stok takibi', 'Günlük satış raporu', '1 Kullanıcı', 'E-posta desteği'],
    highlight: false
  },
  {
    name: 'Standart',
    price: '80 TL',
    period: '/ay',
    features: ['Gelişmiş stok analizi', 'Kârlılık hesaplama', '3 Kullanıcı', 'Pazar yeri entegrasyonu (1 adet)', 'Öncelikli destek'],
    highlight: true
  },
  {
    name: 'Pro',
    price: '150 TL',
    period: '/ay',
    features: ['Tüm analiz araçları', 'Akıllı kampanya motoru', 'Sınırsız kullanıcı', 'Tüm entegrasyonlar', '7/24 Canlı destek'],
    highlight: false
  }
];

export const FAQS = [
  {
    question: "Kurulum için teknik bilgi gerekiyor mu?",
    answer: "Hayır, platformumuz tamamen bulut tabanlıdır ve herhangi bir teknik kurulum gerektirmez. Üye olup hemen kullanmaya başlayabilirsiniz."
  },
  {
    question: "Hangi pazar yerleri ile uyumlu?",
    answer: "Şu anda Getir, Yemeksepeti, Trendyol Yemek ve yerel POS sistemlerinin çoğu ile tam uyumlu çalışmaktayız."
  },
  {
    question: "İstediğim zaman iptal edebilir miyim?",
    answer: "Evet, taahhüt yoktur. Aboneliğinizi dilediğiniz zaman panel üzerinden tek tıkla iptal edebilirsiniz."
  },
  {
    question: "Verilerim güvende mi?",
    answer: "Tüm verileriniz 256-bit SSL şifreleme ile korunmaktadır ve düzenli olarak yedeklenmektedir. Veri güvenliği en büyük önceliğimizdir."
  },
  {
    question: "Mobil uygulaması var mı?",
    answer: "Platformumuz mobil uyumlu (responsive) olarak tasarlanmıştır. Telefon veya tablet tarayıcınızdan tüm özelliklere erişebilirsiniz."
  },
  {
    question: "Ücretsiz deneme süresi bittikten sonra ne olur?",
    answer: "14 günlük deneme süresi sonunda memnun kalırsanız kredi kartı bilgilerinizi girerek aboneliğinizi başlatabilirsiniz. Otomatik çekim yapılmaz."
  }
];