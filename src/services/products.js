export const latestProducts = [
  { id: 1, title: 'Wireless Noise Canceling Headphones', slug: 'headphones', price: '199.99', category: 'Electronics', vendor: 'TechZone', rating: 4.8, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80' },
  { id: 2, title: 'Minimalist Mechanical Keyboard', slug: 'keyboard', price: '89.50', category: 'Accessories', vendor: 'KeyCrafter', rating: 4.6, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80' },
  { id: 3, title: 'Ergonomic Gaming Mouse', slug: 'mouse', price: '49.00', category: 'Gaming', vendor: 'PixelGear', rating: 4.9, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80' },
  { id: 4, title: 'Smart Fitness Tracker Watch', slug: 'smart-watch', price: '129.99', category: 'Wearables', vendor: 'PulseSync', rating: 4.5, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80' },
];



export const popularProducts = [
  { id: 5, title: '4K Ultra HD Action Camera', slug: 'action-camera', price: '249.99', category: 'Cameras', vendor: 'LensPro', rating: 4.7, image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80' },
  { id: 6, title: 'Portable Power Bank 20000mAh', slug: 'power-bank', price: '39.99', category: 'Accessories', vendor: 'VoltEdge', rating: 4.8, image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80' },
  { id: 7, title: 'Bluetooth Smart Speaker', slug: 'smart-speaker', price: '79.00', category: 'Smart Home', vendor: 'AudioBeat', rating: 4.5, image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500&q=80' },
  { id: 8, title: 'Pro Gaming Headset', slug: 'gaming-headset', price: '119.50', category: 'Gaming', vendor: 'PixelGear', rating: 4.9, image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80' },
];

export const topVendors = [
  { 
    id: 1, 
    name: 'TechZone Official', 
    slug: 'techzone', 
    rating: 4.9, 
    reviews: 1240,
    isVerified: true,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80', // صورة بائع/لوجو
    categories: ['Electronics', 'Smart Home'] 
  },
  { 
    id: 2, 
    name: 'PixelGear', 
    slug: 'pixelgear', 
    rating: 4.8, 
    reviews: 856,
    isVerified: true,
    image: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=200&q=80',
    categories: ['Gaming', 'Accessories'] 
  },
  { 
    id: 3, 
    name: 'Style & Wear', 
    slug: 'style-wear', 
    rating: 4.7, 
    reviews: 532,
    isVerified: false,
    image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=200&q=80',
    categories: ['Wearables', 'Fashion'] 
  },
  { 
    id: 4, 
    name: 'LensPro Studios', 
    slug: 'lenspro', 
    rating: 4.9, 
    reviews: 2100,
    isVerified: true,
    image: 'https://images.unsplash.com/photo-1554046920-90dc206953bf?w=200&q=80',
    categories: ['Cameras'] 
  },
];


export const recentReviews = [
  { id: 1, customer_name: 'Ahmed Ali', product_name: 'Pro Gaming Headset', rating: 5, reviews: 'Excellent quality and amazing sound. Highly recommended for gamers.', created_at: '2026-09-28' },
  { id: 2, customer_name: 'Sarah Khaled', product_name: 'Smart Fitness Watch', rating: 4, reviews: 'Very good battery life, but the screen could be brighter under direct sunlight.', created_at: '2026-09-25' },
  { id: 3, customer_name: 'Omar Said', product_name: 'Mechanical Keyboard', rating: 5, reviews: 'The tactile feedback is out of this world! Best purchase this year.', created_at: '2026-09-20' },
  { id: 4, customer_name: 'Mona Youssef', product_name: 'Noise Canceling Headphones', rating: 5, reviews: 'Blocks out all the office noise perfectly. Worth every penny.', created_at: '2026-09-15' },
];

 
export const dummyAllProducts = [
  { id: 1, title: 'Wireless Noise Canceling Headphones', slug: 'headphones', price: '199.99', category: 'Electronics', categorySlug: 'electronics', vendor: 'TechZone', rating: 4.8, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80' },
  { id: 2, title: 'Minimalist Mechanical Keyboard', slug: 'keyboard', price: '89.50', category: 'Accessories', categorySlug: 'accessories', vendor: 'KeyCrafter', rating: 4.6, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80' },
  { id: 3, title: 'Ergonomic Gaming Mouse', slug: 'mouse', price: '49.00', category: 'Gaming', categorySlug: 'gaming', vendor: 'PixelGear', rating: 4.9, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80' },
  { id: 4, title: 'Smart Fitness Tracker Watch', slug: 'smart-watch', price: '129.99', category: 'Wearables', categorySlug: 'wearables', vendor: 'PulseSync', rating: 4.5, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80' },
  { id: 5, title: '4K Ultra HD Action Camera', slug: 'action-camera', price: '249.99', category: 'Cameras', categorySlug: 'cameras', vendor: 'LensPro', rating: 4.7, image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80' },
  { id: 6, title: 'Bluetooth Smart Speaker', slug: 'smart-speaker', price: '79.00', category: 'Smart Home', categorySlug: 'smart-home', vendor: 'AudioBeat', rating: 4.5, image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500&q=80' },
  { id: 7, title: 'Pro Gaming Headset', slug: 'gaming-headset', price: '119.50', category: 'Gaming', categorySlug: 'gaming', vendor: 'PixelGear', rating: 4.9, image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80' },
];
