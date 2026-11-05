/**
 * RANGREZ — Contemporary Indian Luxury Fashion
 * Complete client-side application with interactive shopping cart, wishlist,
 * filter & search, quick-view modal, checkout simulation, and toast notifications.
 */

// ============================================================================
// DATA STORE
// ============================================================================
const STORE_DATA = {
  women: {
    id: 'women',
    name: 'Women',
    tag: 'Sarees, kurtas, co-ords & handloom edits',
    bannerImg: '/assets/women.jpg',
    types: ['All', 'Kurtas', 'Sarees', 'Co-ords', 'Dresses'],
    items: [
      {
        id: 'w-1',
        name: 'Kalamkari Bloom Hand-Block Kurta Set',
        type: 'Kurtas',
        price: 2490,
        origPrice: 3490,
        tag: 'BESTSELLER',
        tagType: 'highlight',
        rating: 4.9,
        reviews: 84,
        img: '/assets/women.jpg',
        fabric: '100% Chanderi Silk with Mulmul Lining',
        desc: 'Delicately block-printed using natural vegetable dyes in Jaipur. Features subtle zari piping and an airy flared silhouette tailored for effortless elegance.'
      },
      {
        id: 'w-2',
        name: 'Indigo Ease Handwoven Silk Co-ord',
        type: 'Co-ords',
        price: 3290,
        origPrice: 4290,
        tag: 'NEW',
        tagType: 'lime',
        rating: 4.8,
        reviews: 52,
        img: '/assets/ai-women.png',
        fabric: 'Pure Mulberry Silk & Cotton Blend',
        desc: 'A relaxed two-piece set dyed in deep artisanal indigo. Modern kimono sleeve silhouette paired with cropped fluid trousers.'
      },
      {
        id: 'w-3',
        name: 'Saffron Story Chanderi Silk Saree',
        type: 'Sarees',
        price: 3890,
        origPrice: 5200,
        tag: 'HERITAGE',
        tagType: 'highlight',
        rating: 5.0,
        reviews: 96,
        img: '/assets/women.jpg',
        fabric: 'Hand-spun Chanderi with Antique Gold Zari',
        desc: 'Woven over 18 days by master weavers in Madhya Pradesh. Adorned with delicate floral bootis and a rich scalloped pallu.'
      },
      {
        id: 'w-4',
        name: 'Mogra Tiered Gathered Cotton Dress',
        type: 'Dresses',
        price: 2790,
        origPrice: 3590,
        tag: 'TRENDING',
        tagType: '',
        rating: 4.7,
        reviews: 41,
        img: '/assets/ai-women.png',
        fabric: 'Organic Mulmul Cotton',
        desc: 'Inspired by gentle monsoon mornings. Features gentle tiered gathers, delicate mother-of-pearl buttons, and side pockets.'
      },
      {
        id: 'w-5',
        name: 'Rani Garden Banarasi Festive Kurta',
        type: 'Kurtas',
        price: 2690,
        origPrice: 3790,
        tag: 'LIMITED',
        tagType: 'highlight',
        rating: 4.9,
        reviews: 63,
        img: '/assets/women.jpg',
        fabric: 'Katan Silk with Floral Brocade Weave',
        desc: 'Vibrant celebratory rani pink paired with tonal pants and an organza dupatta touched with golden foil borders.'
      },
      {
        id: 'w-6',
        name: 'Aaina Hand-Painted Cotton Saree',
        type: 'Sarees',
        price: 3490,
        origPrice: 4500,
        tag: 'ARTISANAL',
        tagType: '',
        rating: 4.8,
        reviews: 37,
        img: '/assets/ai-women.png',
        fabric: 'Fine Bengal Khadi Cotton',
        desc: 'Each meter is hand-brushed with miniature floral motifs. Incredibly lightweight and becomes softer with every wash.'
      },
      {
        id: 'w-7',
        name: 'Gulabi Weekend Linen Wrap Set',
        type: 'Co-ords',
        price: 2990,
        origPrice: 3890,
        tag: 'RESTOCKED',
        tagType: 'lime',
        rating: 4.7,
        reviews: 29,
        img: '/assets/women.jpg',
        fabric: '100% Belgian Washed Linen',
        desc: 'An effortless wrap top with relaxed culottes in our signature dusk rose shade. Designed for sun-drenched brunches.'
      },
      {
        id: 'w-8',
        name: 'Nila Angrakha Tiered Maxi Dress',
        type: 'Dresses',
        price: 2590,
        origPrice: 3490,
        tag: 'NEW',
        tagType: 'lime',
        rating: 4.9,
        reviews: 48,
        img: '/assets/ai-women.png',
        fabric: 'Handblock Dabu Cotton',
        desc: 'Traditional Angrakha neckline meets modern free-flowing tiers. Finished with handmade fabric tassels and wooden beads.'
      }
    ]
  },
  men: {
    id: 'men',
    name: 'Men',
    tag: 'Tailored Indian classics, bandhgalas & linen',
    bannerImg: '/assets/men.jpg',
    types: ['All', 'Shirts', 'Kurtas', 'Jackets', 'Trousers'],
    items: [
      {
        id: 'm-1',
        name: 'Sundown Raw Linen Kurta Shirt',
        type: 'Shirts',
        price: 1890,
        origPrice: 2690,
        tag: 'BESTSELLER',
        tagType: 'highlight',
        rating: 4.9,
        reviews: 67,
        img: '/assets/men.jpg',
        fabric: '100% Pure European Linen',
        desc: 'A relaxed band-collar shirt designed for tropical heat. Breathable weave with understated mother-of-pearl buttons.'
      },
      {
        id: 'm-2',
        name: 'Indigo Path Handwoven Long Kurta',
        type: 'Kurtas',
        price: 2290,
        origPrice: 3190,
        tag: 'NEW',
        tagType: 'lime',
        rating: 4.8,
        reviews: 58,
        img: '/assets/ai-men.png',
        fabric: 'Handloom Cotton with Tonal Weave',
        desc: 'Clean structured collar with discreet side pockets. A versatile piece that transitions seamlessly from festivities to dinner.'
      },
      {
        id: 'm-3',
        name: 'Marigold Raw Silk Nehru Jacket',
        type: 'Jackets',
        price: 3490,
        origPrice: 4890,
        tag: 'HERITAGE',
        tagType: 'highlight',
        rating: 5.0,
        reviews: 82,
        img: '/assets/men.jpg',
        fabric: 'Matka Raw Silk with Satin Twill Lining',
        desc: 'Handcrafted with bespoke piped pockets and brass heirloom buttons. Adds immediate regal sophistication over any kurta.'
      },
      {
        id: 'm-4',
        name: 'Everyday Relaxed Organic Cotton Trouser',
        type: 'Trousers',
        price: 1990,
        origPrice: 2790,
        tag: 'ESSENTIAL',
        tagType: '',
        rating: 4.7,
        reviews: 44,
        img: '/assets/ai-men.png',
        fabric: 'Organic Cotton Twill with Slight Stretch',
        desc: 'Elasticated back waistband for comfort, tapered silhouette, and reinforced deep pockets. Tailored for daily wear.'
      },
      {
        id: 'm-5',
        name: 'Monsoon Check Khadi Over-Shirt',
        type: 'Shirts',
        price: 2090,
        origPrice: 2890,
        tag: 'LIMITED',
        tagType: 'highlight',
        rating: 4.8,
        reviews: 35,
        img: '/assets/men.jpg',
        fabric: 'Hand-Spun Khadi Cotton',
        desc: 'Subtle earthy yarn-dyed checks. Worn open as an overshirt or buttoned up as an artisanal statement.'
      },
      {
        id: 'm-6',
        name: 'Mitti Textured Short Kurta',
        type: 'Kurtas',
        price: 2590,
        origPrice: 3490,
        tag: 'TRENDING',
        tagType: '',
        rating: 4.9,
        reviews: 53,
        img: '/assets/ai-men.png',
        fabric: 'Woven Slub Cotton with Contrast Thread',
        desc: 'Modern short hemline tailored to pair effortlessly with denim, linen chinos, or churidar pajamas.'
      },
      {
        id: 'm-7',
        name: 'Raat Heritage Midnight Bandhgala',
        type: 'Jackets',
        price: 4890,
        origPrice: 6500,
        tag: 'EXCLUSIVE',
        tagType: 'highlight',
        rating: 5.0,
        reviews: 73,
        img: '/assets/men.jpg',
        fabric: 'Superfine Merino Wool & Silk Blend',
        desc: 'A masterpiece in tailored precision. Sharp mandarin collar, padded shoulder structure, and hand-embroidered crest buttons.'
      },
      {
        id: 'm-8',
        name: 'Easy Tapered Pleated Chino Trouser',
        type: 'Trousers',
        price: 2190,
        origPrice: 2990,
        tag: 'NEW',
        tagType: 'lime',
        rating: 4.6,
        reviews: 31,
        img: '/assets/ai-men.png',
        fabric: 'Heavyweight Washed Linen-Cotton',
        desc: 'Single front pleat with a natural drape. Designed to sit naturally on the waist with an ankle-skimming hem.'
      }
    ]
  },
  kids: {
    id: 'kids',
    name: 'Kids',
    tag: 'Little festive moments, soft fabrics & playful craft',
    bannerImg: '/assets/kids.jpg',
    types: ['All', 'Girls', 'Boys', 'Festive', 'Sets'],
    items: [
      {
        id: 'k-1',
        name: 'Mini Mehfil Festive Kurta & Dhoti Set',
        type: 'Boys',
        price: 1790,
        origPrice: 2490,
        tag: 'BESTSELLER',
        tagType: 'highlight',
        rating: 4.9,
        reviews: 62,
        img: '/assets/kids.jpg',
        fabric: '100% Breathable Cotton Mulmul',
        desc: 'Scratch-free inner seams and an elasticated waistband so little ones can run and dance comfortably all day.'
      },
      {
        id: 'k-2',
        name: 'Little Lotus Chanderi Lehenga Set',
        type: 'Girls',
        price: 2190,
        origPrice: 2990,
        tag: 'NEW',
        tagType: 'lime',
        rating: 5.0,
        reviews: 48,
        img: '/assets/ai-kids.png',
        fabric: 'Soft Chanderi with Cotton Lining',
        desc: 'Lightweight flared skirt adorned with delicate gold gota lace and a matching blouse with gentle smocking.'
      },
      {
        id: 'k-3',
        name: 'Pocketful of Sunshine Dhoti Kurta',
        type: 'Boys',
        price: 1490,
        origPrice: 1990,
        tag: 'POPULAR',
        tagType: '',
        rating: 4.8,
        reviews: 39,
        img: '/assets/kids.jpg',
        fabric: 'Natural Turmeric-Dyed Khadi',
        desc: 'Bright marigold yellow kurta with whimsical embroidered pockets to hold all little festive treasures.'
      },
      {
        id: 'k-4',
        name: 'Playful Handblock Floral Co-ord',
        type: 'Sets',
        price: 1690,
        origPrice: 2290,
        tag: 'ESSENTIAL',
        tagType: 'lime',
        rating: 4.7,
        reviews: 28,
        img: '/assets/ai-kids.png',
        fabric: '100% Organic Sanganeri Cotton',
        desc: 'A unisex relaxed button-down shirt and pull-on shorts block-printed with playful animal and blossom motifs.'
      },
      {
        id: 'k-5',
        name: 'Mango Zari Boy Festive Kurta',
        type: 'Boys',
        price: 1590,
        origPrice: 2190,
        tag: 'NEW',
        tagType: '',
        rating: 4.8,
        reviews: 33,
        img: '/assets/kids.jpg',
        fabric: 'Cotton Silk with Soft Lined Neckband',
        desc: 'Radiant festive mango yellow kurta featuring fine metallic border details and coconut shell buttons.'
      },
      {
        id: 'k-6',
        name: 'Phoolon Ki Pari Anarkali Dress',
        type: 'Girls',
        price: 1990,
        origPrice: 2690,
        tag: 'LIMITED',
        tagType: 'highlight',
        rating: 4.9,
        reviews: 45,
        img: '/assets/ai-kids.png',
        fabric: 'Pure Cotton Voile with Gold Foil Bootis',
        desc: 'Full twirl-worthy flared skirt with comfortable inner lining and dainty tassel details at the waist.'
      },
      {
        id: 'k-7',
        name: 'Little Star Embroidered Waistcoat',
        type: 'Festive',
        price: 2290,
        origPrice: 3190,
        tag: 'HERITAGE',
        tagType: 'highlight',
        rating: 5.0,
        reviews: 51,
        img: '/assets/kids.jpg',
        fabric: 'Raw Silk with Ari Needlework',
        desc: 'Intricate starburst hand embroidery on deep sapphire blue silk. Wears easily over any simple kurta.'
      },
      {
        id: 'k-8',
        name: 'Sunday Handblock Playful Pajama Set',
        type: 'Sets',
        price: 1390,
        origPrice: 1890,
        tag: 'RESTOCKED',
        tagType: 'lime',
        rating: 4.7,
        reviews: 26,
        img: '/assets/ai-kids.png',
        fabric: 'Super-Soft Malmal Cotton',
        desc: 'Pre-washed for extraordinary cloud-like softness. Perfect for lounging, celebration mornings, and sweet dreams.'
      }
    ]
  }
};

// Flattened lookup for all items
const ALL_PRODUCTS = [
  ...STORE_DATA.women.items,
  ...STORE_DATA.men.items,
  ...STORE_DATA.kids.items
];

// ============================================================================
// APP STATE
// ============================================================================
let state = {
  currentRoute: 'home',
  cart: JSON.parse(localStorage.getItem('rangrez_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('rangrez_wishlist') || '[]'),
  filterType: 'All',
  sortBy: 'featured',
  activeSlide: 0,
  quickViewItem: null,
  selectedSize: 'M',
  isCartOpen: false,
  isWishlistOpen: false,
  isSearchOpen: false,
  isCheckoutOpen: false,
  isMobileMenuOpen: false,
  searchQuery: '',
  appliedCoupon: null
};

// Hero Carousel Slides
const HERO_SLIDES = [
  {
    tag: 'THE FESTIVE EDIT 2026',
    title: 'Drape into <em>celebration.</em>',
    desc: 'Contemporary silhouettes, rooted in the timeless art of Indian dressing and hand-spun luxury.',
    bg: '/assets/hero.jpg',
    ctaText: 'Shop Women',
    ctaLink: '#women',
    secondaryText: 'Explore Men',
    secondaryLink: '#men'
  },
  {
    tag: 'ARTISANAL LUXURY',
    title: 'Heritage woven <em>modern.</em>',
    desc: 'Pure European linens and raw silks tailored into easy, confident silhouettes for the contemporary wardrobe.',
    bg: '/assets/ai-women.png',
    ctaText: 'Discover Men',
    ctaLink: '#men',
    secondaryText: 'Our Story',
    secondaryLink: '#story'
  },
  {
    tag: 'LITTLE FESTIVITIES',
    title: 'Pure comfort for <em>little royals.</em>',
    desc: 'Soft mulmul, festive brocades, and scratch-free celebratory wear designed for joy, movement and smiles.',
    bg: '/assets/ai-kids.png',
    ctaText: 'Shop Kids',
    ctaLink: '#kids',
    secondaryText: 'View Bestsellers',
    secondaryLink: '#women'
  }
];

// ============================================================================
// HELPER FUNCTIONS & STORAGE
// ============================================================================
function saveCart() {
  localStorage.setItem('rangrez_cart', JSON.stringify(state.cart));
}

function saveWishlist() {
  localStorage.setItem('rangrez_wishlist', JSON.stringify(state.wishlist));
}

function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>✦</span> <div>${message}</div>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function formatPrice(val) {
  return '₹' + Number(val).toLocaleString('en-IN');
}

function getCartCount() {
  return state.cart.reduce((sum, item) => sum + item.qty, 0);
}

function getCartSubtotal() {
  return state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
}

function getDiscountAmount() {
  if (!state.appliedCoupon) return 0;
  return Math.round(getCartSubtotal() * state.appliedCoupon.discount);
}

function getTotal() {
  return Math.max(0, getCartSubtotal() - getDiscountAmount());
}

// ============================================================================
// ACTIONS
// ============================================================================
function addToCart(productId, size = 'M', qty = 1) {
  const product = ALL_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = state.cart.findIndex(i => i.id === productId && i.size === size);
  if (existingIndex > -1) {
    state.cart[existingIndex].qty += qty;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      fabric: product.fabric,
      size: size,
      qty: qty
    });
  }
  saveCart();
  updateHeaderBadges();
  renderCartDrawer();
  showToast(`Added "${product.name}" (${size}) to your bag!`);
}

function removeFromCart(productId, size) {
  state.cart = state.cart.filter(i => !(i.id === productId && i.size === size));
  saveCart();
  updateHeaderBadges();
  renderCartDrawer();
  showToast('Item removed from your bag.', 'info');
}

function updateCartQty(productId, size, delta) {
  const item = state.cart.find(i => i.id === productId && i.size === size);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId, size);
  } else {
    saveCart();
    updateHeaderBadges();
    renderCartDrawer();
  }
}

function toggleWishlist(productId) {
  const index = state.wishlist.indexOf(productId);
  const product = ALL_PRODUCTS.find(p => p.id === productId);
  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast(`Removed from your wishlist.`, 'info');
  } else {
    state.wishlist.push(productId);
    showToast(`Saved "${product ? product.name : 'Item'}" to your wishlist!`);
  }
  saveWishlist();
  updateHeaderBadges();
  // Update heart buttons visually without full re-render
  document.querySelectorAll(`.btn-wishlist[data-id="${productId}"]`).forEach(btn => {
    btn.classList.toggle('active', state.wishlist.includes(productId));
  });
}

function openQuickView(productId) {
  const product = ALL_PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  state.quickViewItem = product;
  state.selectedSize = 'M';
  renderQuickViewModal();
}

function closeQuickView() {
  state.quickViewItem = null;
  const modal = document.querySelector('#quickview-modal-overlay');
  if (modal) modal.classList.remove('open');
}

function toggleCart(force) {
  state.isCartOpen = force !== undefined ? force : !state.isCartOpen;
  const overlay = document.querySelector('#cart-drawer-overlay');
  const drawer = document.querySelector('#cart-drawer');
  if (overlay && drawer) {
    overlay.classList.toggle('open', state.isCartOpen);
    drawer.classList.toggle('open', state.isCartOpen);
  }
  if (state.isCartOpen) renderCartDrawer();
}

function toggleWishlistDrawer(force) {
  state.isWishlistOpen = force !== undefined ? force : !state.isWishlistOpen;
  const overlay = document.querySelector('#wishlist-drawer-overlay');
  const drawer = document.querySelector('#wishlist-drawer');
  if (overlay && drawer) {
    overlay.classList.toggle('open', state.isWishlistOpen);
    drawer.classList.toggle('open', state.isWishlistOpen);
  }
  if (state.isWishlistOpen) renderWishlistDrawer();
}

function toggleSearch(force) {
  state.isSearchOpen = force !== undefined ? force : !state.isSearchOpen;
  const overlay = document.querySelector('#search-modal-overlay');
  if (overlay) {
    overlay.classList.toggle('open', state.isSearchOpen);
    if (state.isSearchOpen) {
      setTimeout(() => {
        const inp = document.querySelector('#search-input');
        if (inp) inp.focus();
      }, 100);
    }
  }
}

function toggleMobileMenu(force) {
  state.isMobileMenuOpen = force !== undefined ? force : !state.isMobileMenuOpen;
  const nav = document.querySelector('#mobile-nav');
  if (nav) nav.classList.toggle('open', state.isMobileMenuOpen);
}

function openCheckout() {
  if (state.cart.length === 0) {
    showToast('Your bag is currently empty!', 'info');
    return;
  }
  toggleCart(false);
  state.isCheckoutOpen = true;
  renderCheckoutModal();
}

function closeCheckout() {
  state.isCheckoutOpen = false;
  const modal = document.querySelector('#checkout-modal-overlay');
  if (modal) modal.classList.remove('open');
}

// ============================================================================
// UI RENDERING - CARDS & SECTIONS
// ============================================================================
function renderProductCard(p) {
  const isWishlisted = state.wishlist.includes(p.id);
  const badgeHtml = p.tag
    ? `<span class="badge-tag ${p.tagType || ''}">${p.tag}</span>`
    : '';

  return `
    <article class="product-card" data-id="${p.id}">
      <div class="product-media" onclick="window.rangrez.openQuickView('${p.id}')">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        <div class="product-badges">${badgeHtml}</div>
        <button class="btn-wishlist ${isWishlisted ? 'active' : ''}" data-id="${p.id}" onclick="event.stopPropagation(); window.rangrez.toggleWishlist('${p.id}')" title="Save to wishlist">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>
        <div class="product-quick-actions" onclick="event.stopPropagation()">
          <button class="btn-quick-view" onclick="window.rangrez.openQuickView('${p.id}')">
            Quick View
          </button>
          <button class="btn-quick-add" onclick="window.rangrez.addToCart('${p.id}', 'M', 1)">
            + Quick Bag
          </button>
        </div>
      </div>
      <div class="product-details">
        <span class="product-type">${p.type}</span>
        <h4 class="product-name" onclick="window.rangrez.openQuickView('${p.id}')">${p.name}</h4>
        <div class="product-rating">
          <span class="stars">★★★★★</span>
          <span>${p.rating} (${p.reviews})</span>
        </div>
        <div class="product-pricing">
          <span class="price-current">${formatPrice(p.price)}</span>
          <span class="price-original">${formatPrice(p.origPrice)}</span>
          <span class="price-off">${Math.round((1 - p.price / p.origPrice) * 100)}% OFF</span>
        </div>
      </div>
    </article>
  `;
}

function renderShell(contentHtml) {
  const app = document.querySelector('#app');
  app.innerHTML = `
    <!-- TOP ANNOUNCEMENT TICKER -->
    <aside class="announcement">
      <div class="announcement-inner">
        <span>COMPLIMENTARY EXPRESS SHIPPING ACROSS INDIA ON ORDERS ABOVE ₹1,499 <i class="dot">✦</i> EASY 15-DAY DOORSTEP RETURNS & EXCHANGES <i class="dot">✦</i> USE CODE <b class="badge-code">RANGREZ15</b> FOR 15% OFF YOUR FIRST ORDER <i class="dot">✦</i> HANDWOVEN WITH LOVE BY MASTER ARTISANS</span>
        <span>COMPLIMENTARY EXPRESS SHIPPING ACROSS INDIA ON ORDERS ABOVE ₹1,499 <i class="dot">✦</i> EASY 15-DAY DOORSTEP RETURNS & EXCHANGES <i class="dot">✦</i> USE CODE <b class="badge-code">RANGREZ15</b> FOR 15% OFF YOUR FIRST ORDER <i class="dot">✦</i> HANDWOVEN WITH LOVE BY MASTER ARTISANS</span>
      </div>
    </aside>

    <!-- HEADER / NAVIGATION -->
    <header class="site-header" id="site-header">
      <div class="nav-container">
        <!-- Left: Nav Links -->
        <nav class="nav-links">
          <a href="#home" class="nav-link ${state.currentRoute === 'home' ? 'active' : ''}">Home</a>
          <a href="#women" class="nav-link ${state.currentRoute === 'women' ? 'active' : ''}">Women</a>
          <a href="#men" class="nav-link ${state.currentRoute === 'men' ? 'active' : ''}">Men</a>
          <a href="#kids" class="nav-link ${state.currentRoute === 'kids' ? 'active' : ''}">Kids</a>
          <a href="#story" class="nav-link ${state.currentRoute === 'story' ? 'active' : ''}">The Atelier</a>
        </nav>

        <!-- Mobile Hamburger -->
        <button class="menu-toggle" onclick="window.rangrez.toggleMobileMenu(true)" aria-label="Open navigation menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <!-- Center: Brand Logo -->
        <div class="brand-logo">
          <a href="#home">
            <h1>RANGREZ</h1>
            <span class="submark">CRAFTED IN INDIA</span>
          </a>
        </div>

        <!-- Right: Actions -->
        <div class="nav-actions">
          <button class="action-btn" onclick="window.rangrez.toggleSearch(true)" title="Search collection">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          <button class="action-btn" onclick="window.rangrez.toggleWishlistDrawer(true)" title="Wishlist">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <span class="badge-count wishlist-count-badge" style="${state.wishlist.length ? '' : 'display:none'}">${state.wishlist.length}</span>
          </button>

          <button class="btn-bag-pill" onclick="window.rangrez.toggleCart(true)">
            <span>BAG</span>
            <span class="count cart-count-badge">${getCartCount()}</span>
          </button>
        </div>
      </div>
    </header>

    <!-- MOBILE NAVIGATION DRAWER -->
    <div class="mobile-nav" id="mobile-nav">
      <div class="mobile-backdrop" onclick="window.rangrez.toggleMobileMenu(false)"></div>
      <div class="mobile-panel">
        <div class="mobile-panel-header">
          <div class="brand-logo" style="text-align: left; align-items: flex-start;">
            <h2 style="font-family: var(--font-serif); font-size: 24px;">RANGREZ</h2>
            <span class="submark">HERITAGE WEAR</span>
          </div>
          <button class="btn-close" onclick="window.rangrez.toggleMobileMenu(false)">✕</button>
        </div>
        <nav class="mobile-links">
          <a href="#home" class="mobile-link" onclick="window.rangrez.toggleMobileMenu(false)">Home <span>01</span></a>
          <a href="#women" class="mobile-link" onclick="window.rangrez.toggleMobileMenu(false)">Women <span>02</span></a>
          <a href="#men" class="mobile-link" onclick="window.rangrez.toggleMobileMenu(false)">Men <span>03</span></a>
          <a href="#kids" class="mobile-link" onclick="window.rangrez.toggleMobileMenu(false)">Kids <span>04</span></a>
          <a href="#story" class="mobile-link" onclick="window.rangrez.toggleMobileMenu(false)">The Atelier <span>05</span></a>
        </nav>
        <div style="margin-top: auto; padding-top: 30px; border-top: 1px solid var(--line);">
          <p style="font-family: var(--font-mono); font-size: 11px; color: var(--ink-secondary); margin-bottom: 12px;">CURRENCY: INR (₹)</p>
          <p style="font-size: 12px; color: var(--ink-muted);">Handmade with devotion in Varanasi & Jaipur.</p>
        </div>
      </div>
    </div>

    <!-- MAIN BODY CONTENT -->
    <main>${contentHtml}</main>

    <!-- TRUST PILLARS BAR -->
    <section class="trust-bar">
      <div class="trust-grid">
        <div class="trust-item">
          <div class="trust-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
          </div>
          <div>
            <h4>Master Artisans</h4>
            <p>Hand-block printed & loom-woven across 14 craft clusters.</p>
          </div>
        </div>
        <div class="trust-item">
          <div class="trust-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25V3.75a1.5 1.5 0 00-1.5-1.5H6.75A1.5 1.5 0 005.25 3.75v10.5" />
            </svg>
          </div>
          <div>
            <h4>Complimentary Express</h4>
            <p>Free tracked courier shipping on all orders above ₹1,499.</p>
          </div>
        </div>
        <div class="trust-item">
          <div class="trust-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </div>
          <div>
            <h4>15-Day Doorstep Returns</h4>
            <p>Hassle-free reverse pick-up and exchange right at your door.</p>
          </div>
        </div>
        <div class="trust-item">
          <div class="trust-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>
          <div>
            <h4>100% Pure Textiles</h4>
            <p>Certified Mulberry silks, Chanderi weaves, and breathable organic linens.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-top">
          <div class="footer-brand">
            <h2>RANGREZ</h2>
            <p>Indian dressing, thoughtfully reimagined for all the places life takes you — from quiet rituals to joyful festivities.</p>
            <div style="font-family: var(--font-mono); font-size: 11px; color: var(--sand-dark);">
              FLAGSHIP ATELIER: Civil Lines, Jaipur 302006
            </div>
          </div>
          <div class="footer-col">
            <h5>Collections</h5>
            <div class="footer-links">
              <a href="#women">Women's Wear</a>
              <a href="#men">Men's Linen & Kurtas</a>
              <a href="#kids">Kids' Festive Edit</a>
              <a href="#women">Heritage Sarees</a>
              <a href="#men">Bandhgalas & Jackets</a>
            </div>
          </div>
          <div class="footer-col">
            <h5>Client Care</h5>
            <div class="footer-links">
              <a href="javascript:void(0)" onclick="window.rangrez.showToast('Shipping: Delivers in 3-5 business days across India.')">Track Order</a>
              <a href="javascript:void(0)" onclick="window.rangrez.showToast('Complimentary 15-day doorstep returns active.')">Exchanges & Returns</a>
              <a href="javascript:void(0)" onclick="window.rangrez.showToast('Reach our styling desk at care@rangrez.in')">Bespoke Fitting</a>
              <a href="#story">Our Craftsmanship</a>
            </div>
          </div>
          <div class="footer-col">
            <h5>The Rangrez Letter</h5>
            <div class="newsletter-form">
              <p>Receive preview access to seasonal collections, craft stories, and private salon invites.</p>
              <form onsubmit="window.rangrez.handleNewsletter(event)">
                <div class="newsletter-box">
                  <input type="email" id="newsletter-email" placeholder="Enter your email" required />
                  <button type="submit">JOIN ↗</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div>© 2026 RANGREZ LUXURY APPAREL. HANDCRAFTED IN INDIA.</div>
          <div class="footer-bottom-links">
            <a href="javascript:void(0)">PRIVACY</a>
            <a href="javascript:void(0)">TERMS</a>
            <a href="javascript:void(0)">INSTAGRAM</a>
            <a href="javascript:void(0)">PINTEREST</a>
          </div>
        </div>
      </div>
    </footer>

    <!-- SLIDE-OVER CART DRAWER -->
    <div class="cart-drawer-overlay" id="cart-drawer-overlay" onclick="window.rangrez.toggleCart(false)"></div>
    <aside class="cart-drawer" id="cart-drawer">
      <div class="cart-header">
        <h3>YOUR SHOPPING BAG <span id="cart-header-count">(${getCartCount()})</span></h3>
        <button class="btn-close" onclick="window.rangrez.toggleCart(false)">✕</button>
      </div>
      <div id="cart-drawer-body" style="display: flex; flex-direction: column; flex: 1; overflow: hidden;">
        <!-- Filled by renderCartDrawer() -->
      </div>
    </aside>

    <!-- WISHLIST DRAWER -->
    <div class="cart-drawer-overlay" id="wishlist-drawer-overlay" onclick="window.rangrez.toggleWishlistDrawer(false)"></div>
    <aside class="cart-drawer" id="wishlist-drawer">
      <div class="cart-header">
        <h3>SAVED FAVORITES <span>(${state.wishlist.length})</span></h3>
        <button class="btn-close" onclick="window.rangrez.toggleWishlistDrawer(false)">✕</button>
      </div>
      <div id="wishlist-drawer-body" style="display: flex; flex-direction: column; flex: 1; overflow-y: auto;">
        <!-- Filled by renderWishlistDrawer() -->
      </div>
    </aside>

    <!-- QUICK-VIEW MODAL OVERLAY -->
    <div class="modal-overlay" id="quickview-modal-overlay" onclick="window.rangrez.closeQuickView()">
      <div class="quickview-modal" onclick="event.stopPropagation()">
        <button class="quickview-close" onclick="window.rangrez.closeQuickView()">✕</button>
        <div id="quickview-modal-content" style="display: contents;">
          <!-- Filled by renderQuickViewModal() -->
        </div>
      </div>
    </div>

    <!-- SEARCH OVERLAY MODAL -->
    <div class="modal-overlay" id="search-modal-overlay" onclick="window.rangrez.toggleSearch(false)">
      <div class="search-modal" onclick="event.stopPropagation()">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <h4 style="font-family: var(--font-serif); font-size: 20px;">Search Collection</h4>
          <button class="btn-close" onclick="window.rangrez.toggleSearch(false)">✕</button>
        </div>
        <div class="search-input-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" id="search-input" class="search-input" placeholder="Search kurtas, sarees, linen shirts, fabrics..." oninput="window.rangrez.handleSearch(this.value)" />
        </div>
        <div class="search-results" id="search-results-list">
          <!-- Instant search results -->
        </div>
      </div>
    </div>

    <!-- CHECKOUT SIMULATION MODAL -->
    <div class="modal-overlay" id="checkout-modal-overlay" onclick="window.rangrez.closeCheckout()">
      <div class="checkout-modal" onclick="event.stopPropagation()">
        <div id="checkout-modal-inner">
          <!-- Filled by renderCheckoutModal() -->
        </div>
      </div>
    </div>
  `;

  // Attach header scroll blur listener
  const header = document.querySelector('#site-header');
  window.onscroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
}

// ============================================================================
// CART DRAWER RENDER
// ============================================================================
function renderCartDrawer() {
  const container = document.querySelector('#cart-drawer-body');
  const countSpan = document.querySelector('#cart-header-count');
  if (countSpan) countSpan.textContent = `(${getCartCount()})`;
  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
        <h4>Your Bag is Empty</h4>
        <p>Explore our latest handloom curation and add pieces you love.</p>
        <button class="btn-primary" onclick="window.rangrez.toggleCart(false); location.hash='#women';">
          Discover Women
        </button>
      </div>
    `;
    return;
  }

  const subtotal = getCartSubtotal();
  const freeThreshold = 1499;
  const progressPercent = Math.min(100, Math.round((subtotal / freeThreshold) * 100));
  const diff = freeThreshold - subtotal;

  const itemsHtml = state.cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${item.img}" alt="${item.name}" />
      </div>
      <div class="cart-item-info">
        <h5 class="cart-item-title">${item.name}</h5>
        <span class="cart-item-meta">Size: ${item.size} · ${item.fabric ? item.fabric.split(' ')[0] : 'Handloom'}</span>
        <div class="cart-item-bottom">
          <div class="cart-qty-ctrl">
            <button onclick="window.rangrez.updateCartQty('${item.id}', '${item.size}', -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="window.rangrez.updateCartQty('${item.id}', '${item.size}', 1)">+</button>
          </div>
          <span class="cart-item-price">${formatPrice(item.price * item.qty)}</span>
        </div>
      </div>
      <button class="cart-item-remove" onclick="window.rangrez.removeFromCart('${item.id}', '${item.size}')" title="Remove item">✕</button>
    </div>
  `).join('');

  container.innerHTML = `
    <!-- FREE SHIPPING METER -->
    <div class="cart-free-shipping">
      <div>
        ${diff > 0 
          ? `Add <b>${formatPrice(diff)}</b> more for <b>Free Express Delivery</b>!`
          : `🎉 You unlocked <b>Complimentary Express Shipping</b>!`}
      </div>
      <div class="bar-bg">
        <div class="bar-fill" style="width: ${progressPercent}%;"></div>
      </div>
    </div>

    <!-- ITEMS LIST -->
    <div class="cart-items">
      ${itemsHtml}
    </div>

    <!-- CART SUMMARY & CHECKOUT -->
    <div class="cart-footer">
      <div class="coupon-row">
        <input type="text" id="coupon-code-input" class="coupon-input" placeholder="Promo code (e.g. RANGREZ15)" value="${state.appliedCoupon ? state.appliedCoupon.code : ''}" />
        <button class="btn-coupon" onclick="window.rangrez.applyCoupon()">APPLY</button>
      </div>
      ${state.appliedCoupon ? `
        <div style="font-family: var(--font-mono); font-size: 11px; color: #22c55e; margin-bottom: 8px;">
          ✓ Code "${state.appliedCoupon.code}" applied (-15%)
        </div>
      ` : ''}
      <div class="cart-summary-line">
        <span>Bag Subtotal</span>
        <span>${formatPrice(subtotal)}</span>
      </div>
      ${state.appliedCoupon ? `
        <div class="cart-summary-line" style="color: var(--rust);">
          <span>Promo Discount</span>
          <span>−${formatPrice(getDiscountAmount())}</span>
        </div>
      ` : ''}
      <div class="cart-summary-line">
        <span>Estimated Shipping</span>
        <span style="color: #22c55e; font-weight: 600;">FREE</span>
      </div>
      <div class="cart-summary-line total">
        <span>Grand Total</span>
        <span>${formatPrice(getTotal())}</span>
      </div>
      <button class="btn-checkout" onclick="window.rangrez.openCheckout()">
        Proceed to Checkout <span>→</span>
      </button>
    </div>
  `;
}

// ============================================================================
// WISHLIST DRAWER RENDER
// ============================================================================
function renderWishlistDrawer() {
  const container = document.querySelector('#wishlist-drawer-body');
  if (!container) return;

  const wishlistedItems = ALL_PRODUCTS.filter(p => state.wishlist.includes(p.id));

  if (wishlistedItems.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
        <h4>No Favorites Yet</h4>
        <p>Tap the heart icon on any design to curate your personal wishlist.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="cart-items">
      ${wishlistedItems.map(item => `
        <div class="cart-item">
          <div class="cart-item-img">
            <img src="${item.img}" alt="${item.name}" />
          </div>
          <div class="cart-item-info">
            <h5 class="cart-item-title">${item.name}</h5>
            <span class="cart-item-meta">${item.type} · ${formatPrice(item.price)}</span>
            <div style="margin-top: 10px; display: flex; gap: 8px;">
              <button class="btn-quick-add" style="padding: 6px 12px; font-size: 10px;" onclick="window.rangrez.addToCart('${item.id}', 'M', 1)">
                + Move to Bag
              </button>
            </div>
          </div>
          <button class="cart-item-remove" onclick="window.rangrez.toggleWishlist('${item.id}')" title="Remove">✕</button>
        </div>
      `).join('')}
    </div>
  `;
}

// ============================================================================
// QUICK-VIEW MODAL RENDER
// ============================================================================
function renderQuickViewModal() {
  const p = state.quickViewItem;
  const overlay = document.querySelector('#quickview-modal-overlay');
  const container = document.querySelector('#quickview-modal-content');
  if (!p || !overlay || !container) return;

  const isWishlisted = state.wishlist.includes(p.id);

  container.innerHTML = `
    <div class="quickview-media">
      <img src="${p.img}" alt="${p.name}" />
    </div>
    <div class="quickview-body">
      <span class="modal-eyebrow">RANGREZ / ${p.type}</span>
      <h3 class="modal-title">${p.name}</h3>
      <div class="product-rating" style="margin-bottom: 14px;">
        <span class="stars">★★★★★</span>
        <span>${p.rating} / 5.0 (${p.reviews} verified reviews)</span>
      </div>
      <div class="modal-pricing">
        <span class="modal-price">${formatPrice(p.price)}</span>
        <span class="modal-price-orig">${formatPrice(p.origPrice)}</span>
        <span class="price-off">${Math.round((1 - p.price / p.origPrice) * 100)}% OFF</span>
      </div>
      <p class="modal-desc">${p.desc}</p>

      <div class="size-select-label">
        <span>Select Size</span>
        <span onclick="window.rangrez.showToast('True to size. Model is wearing size M.')">Size Guide ?</span>
      </div>
      <div class="size-pills">
        ${['XS', 'S', 'M', 'L', 'XL'].map(sz => `
          <button class="size-pill ${state.selectedSize === sz ? 'active' : ''}" onclick="window.rangrez.selectSize('${sz}')">
            ${sz}
          </button>
        `).join('')}
      </div>

      <div class="modal-details-list">
        <div class="modal-details-row">
          <span>FABRIC COMPOSITION</span>
          <span>${p.fabric}</span>
        </div>
        <div class="modal-details-row">
          <span>CARE</span>
          <span>Dry Clean or Gentle Cold Wash</span>
        </div>
        <div class="modal-details-row">
          <span>ORIGIN</span>
          <span>Woven in India</span>
        </div>
      </div>

      <div class="modal-actions">
        <button class="btn-primary" style="flex: 2;" onclick="window.rangrez.addToCart('${p.id}', '${state.selectedSize}', 1); window.rangrez.closeQuickView();">
          Add to Bag · ${formatPrice(p.price)}
        </button>
        <button class="action-btn" style="border: 1px solid var(--line-strong); width: 48px; height: 48px; border-radius: 4px;" onclick="window.rangrez.toggleWishlist('${p.id}')" title="Save to wishlist">
          <svg viewBox="0 0 24 24" fill="${isWishlisted ? '#e53935' : 'none'}" stroke="${isWishlisted ? '#e53935' : 'currentColor'}">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>
      </div>
    </div>
  `;

  overlay.classList.add('open');
}

// ============================================================================
// CHECKOUT MODAL RENDER
// ============================================================================
function renderCheckoutModal() {
  const overlay = document.querySelector('#checkout-modal-overlay');
  const inner = document.querySelector('#checkout-modal-inner');
  if (!overlay || !inner) return;

  inner.innerHTML = `
    <div class="checkout-header">
      <div style="font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em; color: var(--rust); margin-bottom: 4px;">EXPRESS CHECKOUT</div>
      <h3>Complete Your Order</h3>
      <p>Total: <b>${formatPrice(getTotal())}</b> (${getCartCount()} items) · Free Express Delivery</p>
    </div>
    <form onsubmit="window.rangrez.handleOrderSubmit(event)">
      <div class="form-group">
        <label>Full Name</label>
        <input type="text" required placeholder="e.g. Radhika Sharma" value="Radhika Sharma" />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Email Address</label>
          <input type="email" required placeholder="radhika@example.com" value="radhika@example.com" />
        </div>
        <div class="form-group">
          <label>Phone Number</label>
          <input type="tel" required placeholder="+91 98765 43210" value="+91 98765 43210" />
        </div>
      </div>
      <div class="form-group">
        <label>Delivery Address</label>
        <input type="text" required placeholder="Apartment, Street address" value="Villa 14, Heritage Enclave, Civil Lines" />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>City</label>
          <input type="text" required placeholder="City" value="Jaipur" />
        </div>
        <div class="form-group">
          <label>PIN Code</label>
          <input type="text" required placeholder="PIN Code" value="302006" />
        </div>
      </div>
      <div class="form-group">
        <label>Payment Method</label>
        <div style="background: var(--sand); padding: 12px; border-radius: 4px; font-size: 13px;">
          ✓ <b>UPI / Card / Cash on Delivery</b> (Zero extra charge)
        </div>
      </div>
      <div style="display: flex; gap: 12px; margin-top: 24px;">
        <button type="button" class="btn-secondary" style="flex: 1; color: var(--ink); border-color: var(--line-strong);" onclick="window.rangrez.closeCheckout()">Cancel</button>
        <button type="submit" class="btn-primary" style="flex: 2;">Place Order · ${formatPrice(getTotal())}</button>
      </div>
    </form>
  `;

  overlay.classList.add('open');
}

// ============================================================================
// PAGE VIEWS
// ============================================================================

// HOME VIEW
function renderHomeView() {
  state.currentRoute = 'home';
  const slide = HERO_SLIDES[state.activeSlide];

  const categoriesHtml = Object.entries(STORE_DATA).map(([key, cat], idx) => `
    <a href="#${key}" class="category-tile">
      <img src="${cat.bannerImg}" alt="${cat.name}" />
      <div class="category-tile-content">
        <span class="category-tile-number">EDIT 0${idx + 1}</span>
        <h3 class="category-tile-title">${cat.name}</h3>
        <p class="category-tile-desc">${cat.tag} <span>→</span></p>
      </div>
    </a>
  `).join('');

  // 8 handpicked trending pieces
  const trendingPieces = [
    STORE_DATA.women.items[0],
    STORE_DATA.women.items[1],
    STORE_DATA.men.items[0],
    STORE_DATA.men.items[2],
    STORE_DATA.women.items[2],
    STORE_DATA.kids.items[0],
    STORE_DATA.kids.items[1],
    STORE_DATA.men.items[1]
  ];

  const homeHtml = `
    <!-- HERO CAROUSEL -->
    <section class="hero-slider" id="hero-slider">
      ${HERO_SLIDES.map((s, idx) => `
        <div class="hero-slide ${idx === state.activeSlide ? 'active' : ''}" style="z-index: ${idx === state.activeSlide ? 2 : 1};">
          <div class="hero-bg" style="background-image: url('${s.bg}');"></div>
          <div class="hero-overlay"></div>
          <div class="hero-content">
            <div class="hero-text-wrap">
              <div class="hero-tag"><span></span> ${s.tag}</div>
              <h2 class="hero-title">${s.title}</h2>
              <p class="hero-desc">${s.desc}</p>
              <div class="hero-cta-group">
                <a href="${s.ctaLink}" class="btn-primary">${s.ctaText} <span>↗</span></a>
                <a href="${s.secondaryLink}" class="btn-secondary">${s.secondaryText}</a>
              </div>
            </div>
          </div>
        </div>
      `).join('')}

      <div class="hero-controls">
        <div class="slide-dots">
          ${HERO_SLIDES.map((_, idx) => `
            <button class="slide-dot ${idx === state.activeSlide ? 'active' : ''}" onclick="window.rangrez.setSlide(${idx})" aria-label="Go to slide ${idx + 1}"></button>
          `).join('')}
        </div>
        <div class="slide-arrows">
          <button class="slide-arrow-btn" onclick="window.rangrez.prevSlide()" aria-label="Previous slide">←</button>
          <button class="slide-arrow-btn" onclick="window.rangrez.nextSlide()" aria-label="Next slide">→</button>
        </div>
      </div>
    </section>

    <!-- CURATED COLLECTIONS OVERVIEW -->
    <section class="section-wrapper">
      <div class="section-header">
        <div>
          <p class="section-eyebrow">THE SIGNATURE WARDROBE</p>
          <h2 class="section-title">Rooted in craft, <em>styled for today.</em></h2>
          <p class="section-subtitle">From heirloom celebrations to everyday warmth, pieces that honor natural materials and skilled human touch.</p>
        </div>
        <a href="#women" class="link-arrow">View All Edits ↗</a>
      </div>
      <div class="categories-showcase">
        ${categoriesHtml}
      </div>
    </section>

    <!-- EDITORIAL CRAFT STORY BANNER -->
    <section class="story-section" id="story">
      <div class="story-grid">
        <div class="story-photo">
          <img src="/assets/hero.jpg" alt="Artisan Weavers" />
        </div>
        <div class="story-body">
          <p class="section-eyebrow">THE ATELIER PHILOSOPHY</p>
          <h2>The poetry of <em>hand-spun elegance.</em></h2>
          <p>We work closely with multi-generational master weavers in Chanderi, Varanasi, and Bagru. Every yarn is hand-reeled, every block is carved from seasoned teakwood, and every drape breathes with history.</p>
          <p>By choosing Rangrez, you directly support over 280 artisan households while wearing clothing free from petrochemical polyester and synthetic dyes.</p>
          <div class="story-stats">
            <div class="stat-item">
              <b>14+</b>
              <span>Craft Clusters</span>
            </div>
            <div class="stat-item">
              <b>280+</b>
              <span>Artisan Weavers</span>
            </div>
            <div class="stat-item">
              <b>100%</b>
              <span>Natural Fibres</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- NEW ARRIVALS & TRENDING GRID -->
    <section class="section-wrapper">
      <div class="section-header">
        <div>
          <p class="section-eyebrow">JUST ARRIVED AT THE ATELIER</p>
          <h2 class="section-title">New in the <em>house.</em></h2>
        </div>
        <a href="#women" class="link-arrow">Explore Full Collection ↗</a>
      </div>
      <div class="product-grid">
        ${trendingPieces.map(renderProductCard).join('')}
      </div>
    </section>

    <!-- PRESS & TESTIMONIALS -->
    <section class="press-strip">
      <p class="press-title">AS CELEBRATED IN</p>
      <div class="press-grid">
        <div>
          <p class="press-quote">“Rangrez strikes a sublime balance between pure artisanal Indian luxury and effortless global modernity.”</p>
          <p class="press-source">— VOGUE INDIA</p>
        </div>
        <div>
          <p class="press-quote">“The handloom linen kurta sets are a masterclass in slow, conscious tailoring.”</p>
          <p class="press-source">— GRAZIA FASHION</p>
        </div>
        <div>
          <p class="press-quote">“A label bringing genuine hand-block print revival to contemporary festive living.”</p>
          <p class="press-source">— ARCHITECTURAL DIGEST</p>
        </div>
      </div>
    </section>
  `;

  renderShell(homeHtml);
}

// COLLECTION VIEW (Women, Men, Kids)
function renderCollectionView(catKey) {
  state.currentRoute = catKey;
  const category = STORE_DATA[catKey];
  if (!category) {
    renderHomeView();
    return;
  }

  // Filter items
  let filteredItems = category.items;
  if (state.filterType && state.filterType !== 'All') {
    filteredItems = filteredItems.filter(p => p.type === state.filterType);
  }

  // Sort items
  if (state.sortBy === 'price-low') {
    filteredItems.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-high') {
    filteredItems.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === 'rating') {
    filteredItems.sort((a, b) => b.rating - a.rating);
  }

  const collectionHtml = `
    <!-- BANNER -->
    <section class="collection-hero-banner">
      <img src="${category.bannerImg}" alt="${category.name}" />
      <div class="collection-hero-content">
        <div class="breadcrumb">
          <a href="#home">Home</a> / <span>${category.name}</span>
        </div>
        <h1>The ${category.name}'s <em>Edit.</em></h1>
        <p>${category.tag}. Discover artisanal silhouettes crafted with colour, pure touch, and character in mind.</p>
      </div>
    </section>

    <!-- FILTER & SORT BAR -->
    <div class="filter-bar-container">
      <div class="filter-bar">
        <div class="filter-pills">
          ${category.types.map(t => `
            <button class="filter-pill ${state.filterType === t ? 'active' : ''}" onclick="window.rangrez.setCategoryFilter('${t}')">
              ${t}
            </button>
          `).join('')}
        </div>
        <div class="filter-options">
          <span class="product-count-label">${filteredItems.length} PIECES</span>
          <select class="sort-select" onchange="window.rangrez.setSortOrder(this.value)">
            <option value="featured" ${state.sortBy === 'featured' ? 'selected' : ''}>Sort: Featured</option>
            <option value="price-low" ${state.sortBy === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
            <option value="price-high" ${state.sortBy === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
            <option value="rating" ${state.sortBy === 'rating' ? 'selected' : ''}>Customer Rating</option>
          </select>
        </div>
      </div>
    </div>

    <!-- PRODUCT CATALOG GRID -->
    <section class="section-wrapper" style="padding-top: 40px;">
      <div class="product-grid">
        ${filteredItems.length > 0 
          ? filteredItems.map(renderProductCard).join('')
          : `
            <div style="grid-column: 1 / -1; text-align: center; padding: 80px 20px;">
              <h3 style="font-family: var(--font-serif); font-size: 24px; margin-bottom: 8px;">No designs match this filter</h3>
              <p style="font-size: 14px; color: var(--ink-muted); margin-bottom: 20px;">Try switching to another category pill above.</p>
              <button class="btn-primary" onclick="window.rangrez.setCategoryFilter('All')">Show All Pieces</button>
            </div>
          `}
      </div>
    </section>
  `;

  renderShell(collectionHtml);
}

// STORY VIEW
function renderStoryView() {
  state.currentRoute = 'story';
  const storyHtml = `
    <section class="collection-hero-banner" style="height: 400px;">
      <img src="/assets/hero.jpg" alt="The Atelier" />
      <div class="collection-hero-content">
        <div class="breadcrumb"><a href="#home">Home</a> / <span>The Atelier</span></div>
        <h1>Rooted in <em>Craft.</em></h1>
        <p>Celebrating the revival of slow, conscious Indian handloom textiles and generational master weavers.</p>
      </div>
    </section>

    <section class="section-wrapper" style="max-width: 900px;">
      <div style="font-size: 18px; line-height: 1.9; color: var(--ink-secondary);">
        <p style="margin-bottom: 28px; font-family: var(--font-serif); font-size: 26px; color: var(--ink); line-height: 1.4;">
          “Rangrez was born out of a deep reverence for the human hand. The slight irregularity in a block-printed flower, the gentle slub of hand-spun yarn, the rich smell of raw indigo.”
        </p>
        <p style="margin-bottom: 20px;">
          In a world dominated by ultra-fast disposable fashion made of polyester blends, we choose the deliberate, unhurried path of slow fashion. Every garment in our collection takes between 8 to 22 days to create — from wood block carving and natural vat dyeing to hand-tailoring.
        </p>
        <p style="margin-bottom: 36px;">
          Our artisans earn above-fair living wages, work in solar-powered communal studios across Rajasthan, Madhya Pradesh, and Uttar Pradesh, and preserve heritage techniques that have flourished along the Ganges for hundreds of years.
        </p>
        <div style="text-align: center; padding: 40px 0;">
          <a href="#women" class="btn-primary">Explore Our Heritage Collection ↗</a>
        </div>
      </div>
    </section>
  `;
  renderShell(storyHtml);
}

// ============================================================================
// ROUTING
// ============================================================================
function route() {
  const hash = location.hash.replace('#', '').trim();
  state.filterType = 'All'; // reset sub-filter on route switch
  
  if (hash === 'women' || hash === 'men' || hash === 'kids') {
    renderCollectionView(hash);
  } else if (hash === 'story') {
    renderStoryView();
  } else {
    renderHomeView();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateHeaderBadges() {
  const cartBadge = document.querySelector('.cart-count-badge');
  if (cartBadge) cartBadge.textContent = getCartCount();

  const wishlistBadge = document.querySelector('.wishlist-count-badge');
  if (wishlistBadge) {
    wishlistBadge.textContent = state.wishlist.length;
    wishlistBadge.style.display = state.wishlist.length ? 'flex' : 'none';
  }
}

// Hero slider timer
let heroInterval = setInterval(() => {
  if (state.currentRoute === 'home') {
    state.activeSlide = (state.activeSlide + 1) % HERO_SLIDES.length;
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.slide-dot');
    slides.forEach((s, idx) => s.classList.toggle('active', idx === state.activeSlide));
    dots.forEach((d, idx) => d.classList.toggle('active', idx === state.activeSlide));
  }
}, 5800);

// ============================================================================
// GLOBAL CONTROLLER ATTACHMENT
// ============================================================================
window.rangrez = {
  addToCart,
  removeFromCart,
  updateCartQty,
  toggleWishlist,
  openQuickView,
  closeQuickView,
  toggleCart,
  toggleWishlistDrawer,
  toggleSearch,
  toggleMobileMenu,
  openCheckout,
  closeCheckout,
  showToast,
  setSlide: (idx) => {
    state.activeSlide = idx;
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.slide-dot');
    slides.forEach((s, i) => s.classList.toggle('active', i === idx));
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
  },
  nextSlide: () => {
    window.rangrez.setSlide((state.activeSlide + 1) % HERO_SLIDES.length);
  },
  prevSlide: () => {
    window.rangrez.setSlide((state.activeSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  },
  setCategoryFilter: (type) => {
    state.filterType = type;
    renderCollectionView(state.currentRoute);
  },
  setSortOrder: (order) => {
    state.sortBy = order;
    renderCollectionView(state.currentRoute);
  },
  selectSize: (sz) => {
    state.selectedSize = sz;
    document.querySelectorAll('.size-pill').forEach(p => {
      p.classList.toggle('active', p.textContent.trim() === sz);
    });
  },
  applyCoupon: () => {
    const input = document.querySelector('#coupon-code-input');
    if (!input) return;
    const code = input.value.trim().toUpperCase();
    if (code === 'RANGREZ15' || code === 'FESTIVE15') {
      state.appliedCoupon = { code: code, discount: 0.15 };
      showToast('Promo code applied: 15% discount!');
      renderCartDrawer();
    } else if (code) {
      showToast('Invalid coupon code. Try "RANGREZ15"', 'info');
    }
  },
  handleNewsletter: (e) => {
    e.preventDefault();
    const input = document.querySelector('#newsletter-email');
    if (input && input.value) {
      showToast(`Welcome to the Rangrez Salon! We've sent an invite to ${input.value}.`);
      input.value = '';
    }
  },
  handleSearch: (query) => {
    state.searchQuery = query.toLowerCase().trim();
    const list = document.querySelector('#search-results-list');
    if (!list) return;

    if (!state.searchQuery) {
      list.innerHTML = `<p style="font-size: 13px; color: var(--ink-muted); padding: 12px 0;">Type product name, category, or fabric to search...</p>`;
      return;
    }

    const matches = ALL_PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(state.searchQuery) ||
      p.type.toLowerCase().includes(state.searchQuery) ||
      p.fabric.toLowerCase().includes(state.searchQuery)
    );

    if (matches.length === 0) {
      list.innerHTML = `<p style="font-size: 13px; color: var(--ink-muted); padding: 12px 0;">No matching products found for "${state.searchQuery}".</p>`;
      return;
    }

    list.innerHTML = matches.map(p => `
      <div class="search-result-row" onclick="window.rangrez.toggleSearch(false); window.rangrez.openQuickView('${p.id}')">
        <img src="${p.img}" alt="${p.name}" />
        <div>
          <div style="font-size: 13.5px; font-weight: 600;">${p.name}</div>
          <div style="font-size: 11px; color: var(--ink-muted); font-family: var(--font-mono);">${p.type} · ${formatPrice(p.price)}</div>
        </div>
      </div>
    `).join('');
  },
  handleOrderSubmit: (e) => {
    e.preventDefault();
    const inner = document.querySelector('#checkout-modal-inner');
    const orderNumber = 'RNGZ-' + Math.floor(100000 + Math.random() * 900000);
    state.cart = [];
    state.appliedCoupon = null;
    saveCart();
    updateHeaderBadges();

    if (inner) {
      inner.innerHTML = `
        <div class="order-placed-success">
          <div class="order-success-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <div style="font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; color: var(--rust); margin-bottom: 6px;">ORDER CONFIRMED</div>
          <h3 style="font-family: var(--font-serif); font-size: 28px; margin-bottom: 12px;">Thank You for Celebrating Craft!</h3>
          <p style="font-size: 14px; color: var(--ink-secondary); margin-bottom: 20px;">
            Your order <b>#${orderNumber}</b> has been received and is being prepared with care in our Jaipur atelier.
          </p>
          <div style="background: var(--sand); padding: 14px; border-radius: 6px; font-family: var(--font-mono); font-size: 12px; margin-bottom: 24px;">
            A confirmation receipt & tracking link have been dispatched to your email.
          </div>
          <button class="btn-primary" onclick="window.rangrez.closeCheckout(); location.hash='#home';">
            Continue Shopping <span>→</span>
          </button>
        </div>
      `;
    }
  }
};

// Initial listener & boot
window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', route);
route();
