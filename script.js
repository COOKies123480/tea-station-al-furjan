/**
 * TEA STATION - Bite & Go
 * Classical Nostalgic Kissaten Theme | Al Furjan Metro Station, Dubai
 */

// ============================================================================
// CONFIGURATION (Easily customize WhatsApp, Instagram, and station details)
// ============================================================================
const CONFIG = {
  stationName: "Al Furjan Metro Station",
  stationLevel: "Concourse Level (Route 2020)",
  whatsappNumber: "971581550440",   // Format without '+'
  phoneCallNumber: "+971581550440",
  instagramHandle: "tea_station_al_furjan",
  instagramUrl: "https://www.instagram.com/tea_station_al_furjan/",
};

// ============================================================================
// MENU DATABASE (Extracted from official Tea Station Menu)
// ============================================================================
const MENU_DATA = [
  // --- TEAS & COFFEE ---
  {
    id: "karak",
    name: "Karak Tea",
    arabic: "شاي كرك",
    category: "teas",
    price: 1.50,
    desc: "Authentic slow-simmered spiced tea with cardamom & rich condensed milk. Dubai commuter essential.",
    badge: "Bestseller"
  },
  {
    id: "saffron_tea",
    name: "Fresh Milk Saffron Tea",
    arabic: "شاي حليب طازج بالزعفران",
    category: "teas",
    price: 6.00,
    desc: "Pure fresh milk gently steeped with premium saffron threads and golden aromatic spices.",
    badge: "Specialty"
  },
  {
    id: "fresh_milk_tea",
    name: "Fresh Milk Tea",
    arabic: "شاي بالحليب الطازج",
    category: "teas",
    price: 3.00,
    desc: "Smooth, velvety tea made with 100% fresh cow's milk."
  },
  {
    id: "cardamom_tea",
    name: "Cardamom Tea",
    arabic: "شاي بالهيل",
    category: "teas",
    price: 3.00,
    desc: "Aromatic black tea infused with freshly cracked green cardamom pods."
  },
  {
    id: "ginger_tea",
    name: "Ginger Tea",
    arabic: "شاي بالزنجبيل",
    category: "teas",
    price: 2.50,
    desc: "Warming fresh ginger infusion, ideal for early morning commutes."
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    arabic: "كابتشينو",
    category: "teas",
    price: 6.00,
    desc: "Rich espresso topped with velvety steamed milk foam and cocoa dusting."
  },
  {
    id: "horlicks",
    name: "Horlicks / Boost",
    arabic: "هورليكس / بوست",
    category: "teas",
    price: 6.00,
    desc: "Nostalgic malted hot milk drink, nourishing and energizing."
  },

  // --- BURGERS ---
  {
    id: "mathafi_burger",
    name: "Mathafi Burger",
    arabic: "مطافي برجر",
    category: "burgers",
    price: 13.50,
    desc: "Spicy dynamite fried chicken fillet with melted cheddar, jalapenos & house sauce.",
    badge: "Signature"
  },
  {
    id: "zinker_burger",
    name: "Zinker Crispy Burger",
    arabic: "برجر زنجر",
    category: "burgers",
    price: 10.50,
    desc: "Golden crunchy battered chicken breast with fresh lettuce, mayo and pickles.",
    badge: "Popular"
  },
  {
    id: "angus_burger",
    name: "Angus Beef Burger",
    arabic: "برجر أنجوس",
    category: "burgers",
    price: 12.50,
    desc: "Juicy premium Angus beef patty, caramelized onions, melted cheese, and toasted brioche."
  },
  {
    id: "double_beef",
    name: "Double Beef Burger",
    arabic: "برجر لحم بالطبقتين",
    category: "burgers",
    price: 12.50,
    desc: "Two flame-grilled beef patties layered with double cheese."
  },
  {
    id: "mexican_burger",
    name: "Mexican Spicy Burger",
    arabic: "برجر مكسيكي حار",
    category: "burgers",
    price: 11.00,
    desc: "Tortilla crunch, salsa, spicy jalapeno relish, and grilled chicken patty."
  },
  {
    id: "chicken_tikka_burger",
    name: "Chicken Tikka Burger",
    arabic: "برجر تكة دجاج",
    category: "burgers",
    price: 9.50,
    desc: "Tender tandoori chicken tikka chunks nestled in a toasted sesame bun."
  },

  // --- CLUBS & WRAPS ---
  {
    id: "special_club",
    name: "Tea Station Special Club",
    arabic: "كلوب تي ستيشن الخاص",
    category: "clubs",
    price: 9.50,
    desc: "Triple-decker toasted club sandwich with egg, chicken, melted cheese & crisp salad.",
    badge: "House Special"
  },
  {
    id: "zinker_club",
    name: "Zinker Club Sandwich",
    arabic: "كلوب زنجر",
    category: "clubs",
    price: 9.50,
    desc: "Crispy fried zinker chicken layered between golden toasted bread with fries garnish."
  },
  {
    id: "mathafi_wrap",
    name: "Mathafi Wrap",
    arabic: "راب مطافي",
    category: "clubs",
    price: 13.50,
    desc: "Warm toasted tortilla packed with fiery spicy crispy chicken, cheese, and garlic sauce.",
    badge: "Bestseller"
  },
  {
    id: "shawarma_club",
    name: "Shawarma Club",
    arabic: "كلوب شاورما",
    category: "clubs",
    price: 10.50,
    desc: "Slow-roasted shaved meat, garlic toum, pickles, and golden pressed toast."
  },
  {
    id: "shawarma_spicy",
    name: "Fresh Shawarma (Spicy)",
    arabic: "شاورما حار",
    category: "clubs",
    price: 8.50,
    desc: "Authentic saj bread wrap filled with tender spiced chicken shawarma and garlic sauce."
  },
  {
    id: "veg_wrap",
    name: "Vegetable Wrap",
    arabic: "راب الخضار",
    category: "clubs",
    price: 10.00,
    desc: "Crispy spiced vegetable cutlet, fresh tomatoes, crunchy lettuce and tahina."
  },

  // --- COMBOS & PARATHAS ---
  {
    id: "zinker_paratha",
    name: "Zinker Paratha Sandwich",
    arabic: "براتا مع زنجر",
    category: "combos",
    price: 9.50,
    desc: "Flaky golden layered paratha rolled around crunchy zinker chicken fillet."
  },
  {
    id: "tikka_paratha",
    name: "Chicken Tikka Paratha",
    arabic: "براتا مع تكة دجاج",
    category: "combos",
    price: 8.50,
    desc: "Charcoal-spiced chicken tikka wrapped in fresh handmade flaky paratha."
  },
  {
    id: "cheese_honey_paratha",
    name: "Cheese & Honey Paratha",
    arabic: "براتا مع الجبن والعسل",
    category: "combos",
    price: 5.50,
    desc: "Sweet and savoury breakfast classic: warm cream cheese drizzled with pure honey."
  },
  {
    id: "tapsilog",
    name: "Filipino Tapsilog Combo",
    arabic: "تابسيلوج فلبيني",
    category: "combos",
    price: 18.50,
    desc: "Marinated cured beef tapa served with garlic sinangag fried rice and sunny egg.",
    badge: "Filipino Favorite"
  },
  {
    id: "chicken_biriyani",
    name: "Chicken Biriyani Special",
    arabic: "برياني دجاج",
    category: "combos",
    price: 16.50,
    desc: "Fragrant basmati rice slow-cooked with tender chicken, fried onions and whole spices."
  },

  // --- FRESH JUICES & MOJITOS ---
  {
    id: "orange_juice",
    name: "Fresh Orange Juice",
    arabic: "عصير برتقال طازج",
    category: "juices",
    price: 9.00,
    desc: "100% freshly pressed valencia oranges, served ice cold."
  },
  {
    id: "lemon_mint",
    name: "Lemon Mint Juice",
    arabic: "ليمون نعناع",
    category: "juices",
    price: 7.00,
    desc: "Fresh lemon juice blended with garden mint leaves and crushed ice."
  },
  {
    id: "avocado_juice",
    name: "Fresh Avocado Shake",
    arabic: "عصير أفوكادو طازج",
    category: "juices",
    price: 9.00,
    desc: "Rich ripe avocado blended with pure milk and a touch of honey."
  },
  {
    id: "passion_mojito",
    name: "Passion Fruit Mojito",
    arabic: "موهيتو فاكهة العاطفة",
    category: "juices",
    price: 13.00,
    desc: "Sparkling soda, crushed lime, mint leaves, and vibrant passion fruit pulp.",
    badge: "Refreshing"
  },
  {
    id: "tea_station_special_juice",
    name: "Tea Station Special Cocktail",
    arabic: "تي ستيشن خاص",
    category: "juices",
    price: 14.75,
    desc: "Our signature layered juice blend with strawberries, fresh cream, and fruit chunks.",
    badge: "Chef Specialty"
  },
  {
    id: "tender_coconut",
    name: "Tender Coconut Juice",
    arabic: "عصير جوز الهند الطازج",
    category: "juices",
    price: 14.75,
    desc: "Pure tender coconut water blended with smooth coconut flesh."
  },

  // --- MILKSHAKES & SWEETS ---
  {
    id: "oreo_shake",
    name: "Oreo Cookie Milkshake",
    arabic: "ميلك شيك أوريو",
    category: "shakes",
    price: 16.00,
    desc: "Creamy vanilla ice cream spun with crushed Oreo cookies and chocolate drizzle.",
    badge: "Indulgent"
  },
  {
    id: "kitkat_shake",
    name: "Kit Kat Milkshake",
    arabic: "ميلك شيك كيت كات",
    category: "shakes",
    price: 16.00,
    desc: "Crispy wafer chocolate blended with rich milk and whipped cream."
  },
  {
    id: "falooda",
    name: "Royal Falooda",
    arabic: "فالودة ملكية",
    category: "shakes",
    price: 17.00,
    desc: "Rose syrup, vermicelli, sweet basil seeds, fresh milk, and a scoop of kulfi ice cream."
  },
  {
    id: "fruit_salad_icecream",
    name: "Fruit Salad with Ice Cream",
    arabic: "سلطة فواكه مع آيس كريم",
    category: "shakes",
    price: 17.00,
    desc: "Seasonal diced fresh fruits topped with strawberry syrup, nuts, and vanilla cream."
  }
];

// ============================================================================
// ORDER CART STATE
// ============================================================================
let cart = [];

function updateCartUI() {
  const cartBar = document.getElementById('floating-cart-bar');
  const countEl = document.getElementById('cart-item-count');
  const totalEl = document.getElementById('cart-total-price');
  
  if (!cartBar || !countEl || !totalEl) return;

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (totalCount > 0) {
    cartBar.style.display = 'block';
    countEl.textContent = `${totalCount} item${totalCount > 1 ? 's' : ''}`;
    totalEl.textContent = `AED ${totalPrice.toFixed(2)}`;
  } else {
    cartBar.style.display = 'none';
  }
}

function addToCart(item) {
  const existing = cart.find(i => i.id === item.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  updateCartUI();
  playPaperSound();
}

function sendWhatsAppCartOrder() {
  if (cart.length === 0) return;
  
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let message = `Hello Tea Station Al Furjan! ☕🚇%0A`;
  message += `I would like to place an order for pickup at *Al Furjan Metro Station*:%0A%0A`;
  
  cart.forEach(item => {
    message += `• ${item.quantity}x ${item.name} (${item.arabic}) - AED ${(item.price * item.quantity).toFixed(2)}%0A`;
  });
  
  message += `%0A*Total: AED ${totalPrice.toFixed(2)}*%0A`;
  message += `Please confirm when it will be ready. Thank you!`;
  
  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${message}`;
  window.open(url, '_blank');
}

// ============================================================================
// REALISTIC FLIPPABLE BOOK LOGIC
// ============================================================================
class FlipBook {
  constructor() {
    this.currentSpread = 0; // 0 = Cover, 1 = Pages 1&2, 2 = Pages 3&4, 3 = Pages 5&6, 4 = Pages 7&8, 5 = Back Cover
    this.maxSpread = 5;
    this.soundEnabled = true;

    this.coverEl = document.getElementById('cover-page');
    this.backCoverEl = document.getElementById('back-cover');
    this.spreadEls = [
      null, // index 0 is cover
      document.getElementById('spread-1'),
      document.getElementById('spread-2'),
      document.getElementById('spread-3'),
      document.getElementById('spread-4')
    ];

    this.prevBtn = document.getElementById('book-prev');
    this.nextBtn = document.getElementById('book-next');
    this.statusLabel = document.getElementById('current-spread-label');
    this.dots = document.querySelectorAll('.page-indicator-dot');
    this.bookmarks = document.querySelectorAll('.bookmark-btn');

    this.init();
  }

  init() {
    // Navigation buttons
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prevPage());
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.nextPage());
    }

    // Cover click to open
    if (this.coverEl) {
      this.coverEl.addEventListener('click', () => this.goToSpread(1));
    }

    // Back cover re-flip button
    const reflipBtn = document.getElementById('reflip-to-front');
    if (reflipBtn) {
      reflipBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.goToSpread(0);
      });
    }

    // Bookmark tab clicks
    this.bookmarks.forEach(btn => {
      btn.addEventListener('click', () => {
        const jumpIndex = parseInt(btn.getAttribute('data-jump'), 10);
        this.goToSpread(jumpIndex);
      });
    });

    // Page corner click-to-flip
    document.querySelectorAll('.page-left .page-corner-hint').forEach(corner => {
      corner.addEventListener('click', () => this.prevPage());
    });
    document.querySelectorAll('.page-right .page-corner-hint').forEach(corner => {
      corner.addEventListener('click', () => this.nextPage());
    });

    // Sound effect toggle
    const soundToggle = document.getElementById('toggle-sound-effect');
    if (soundToggle) {
      soundToggle.addEventListener('click', () => {
        this.soundEnabled = !this.soundEnabled;
        const label = document.getElementById('sound-state-label');
        if (label) label.textContent = this.soundEnabled ? 'On' : 'Off';
        soundToggle.style.opacity = this.soundEnabled ? '1' : '0.6';
      });
    }

    // Keyboard navigation (ArrowLeft & ArrowRight when book is in view)
    window.addEventListener('keydown', (e) => {
      const bookSec = document.getElementById('flipbook-section');
      if (!bookSec) return;
      const rect = bookSec.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        this.nextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        this.prevPage();
      }
    });

    // Unified Gestures (Touch Swiping, Mouse Dragging & Page Clicks)
    this.initGesturesAndClicks();

    this.render();
  }

  initGesturesAndClicks() {
    const bookEl = document.getElementById('realistic-book') || document.getElementById('book-container');
    if (!bookEl) return;

    let startX = 0;
    let startY = 0;
    let isTracking = false;
    let hasMoved = false;

    // --- Touch Gestures ---
    bookEl.addEventListener('touchstart', (e) => {
      if (e.touches.length !== 1) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isTracking = true;
      hasMoved = false;
    }, { passive: true });

    bookEl.addEventListener('touchmove', (e) => {
      if (!isTracking || e.touches.length !== 1) return;
      const dx = Math.abs(e.touches[0].clientX - startX);
      if (dx > 10) {
        hasMoved = true;
      }
    }, { passive: true });

    bookEl.addEventListener('touchend', (e) => {
      if (!isTracking) return;
      isTracking = false;
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const diffX = startX - endX;
      const diffY = Math.abs(startY - endY);

      // Horizontal swipe must be > 30px and greater than vertical scroll
      if (Math.abs(diffX) > 30 && Math.abs(diffX) > diffY) {
        if (diffX > 0) {
          this.nextPage(); // swipe left -> next page
        } else {
          this.prevPage(); // swipe right -> prev page
        }
      }
    }, { passive: true });

    bookEl.addEventListener('touchcancel', () => {
      isTracking = false;
      hasMoved = false;
    }, { passive: true });

    // --- Mouse Drag Gestures (For desktop & trackpad swipe) ---
    bookEl.addEventListener('mousedown', (e) => {
      if (e.target.closest('.page-zoom-trigger') || e.target.closest('button')) return;
      startX = e.clientX;
      startY = e.clientY;
      isTracking = true;
      hasMoved = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isTracking) return;
      if (Math.abs(e.clientX - startX) > 8) {
        hasMoved = true;
      }
    });

    window.addEventListener('mouseup', (e) => {
      if (!isTracking) return;
      isTracking = false;
      const diffX = startX - e.clientX;
      const diffY = Math.abs(startY - e.clientY);

      if (Math.abs(diffX) > 35 && Math.abs(diffX) > diffY) {
        if (diffX > 0) {
          this.nextPage();
        } else {
          this.prevPage();
        }
      }
    });

    // --- Direct Page Click (Tap to Turn) ---
    document.querySelectorAll('.book-page.page-right').forEach(page => {
      page.addEventListener('click', (e) => {
        if (hasMoved || e.target.closest('.page-zoom-trigger')) return;
        this.nextPage();
      });
    });

    document.querySelectorAll('.book-page.page-left').forEach(page => {
      page.addEventListener('click', (e) => {
        if (hasMoved || e.target.closest('.page-zoom-trigger')) return;
        this.prevPage();
      });
    });
  }

  nextPage() {
    if (this.currentSpread < this.maxSpread) {
      this.goToSpread(this.currentSpread + 1);
    }
  }

  prevPage() {
    if (this.currentSpread > 0) {
      this.goToSpread(this.currentSpread - 1);
    }
  }

  goToSpread(index) {
    if (index === this.currentSpread || index < 0 || index > this.maxSpread) return;
    this.currentSpread = index;
    if (this.soundEnabled) playPaperSound();
    this.render();
  }

  render() {
    // 1. Cover visibility
    if (this.coverEl) {
      if (this.currentSpread === 0) {
        this.coverEl.classList.remove('hidden');
      } else {
        this.coverEl.classList.add('hidden');
      }
    }

    // 2. Spreads visibility (1 to 4)
    for (let i = 1; i <= 4; i++) {
      const spread = this.spreadEls[i];
      if (spread) {
        if (this.currentSpread === i) {
          spread.classList.add('active');
        } else {
          spread.classList.remove('active');
        }
      }
    }

    // 3. Back cover visibility (index 5)
    if (this.backCoverEl) {
      if (this.currentSpread === 5) {
        this.backCoverEl.classList.add('active');
      } else {
        this.backCoverEl.classList.remove('active');
      }
    }

    // 4. Update Controls
    if (this.prevBtn) {
      this.prevBtn.disabled = (this.currentSpread === 0);
    }
    if (this.nextBtn) {
      this.nextBtn.disabled = (this.currentSpread === this.maxSpread);
    }

    // 5. Update Status Label & Dots
    let labelText = "Cover Page";
    if (this.currentSpread === 1) labelText = "Pages 1 & 2 • Teas, Combos & Wraps";
    else if (this.currentSpread === 2) labelText = "Pages 3 & 4 • Gourmet Burgers & Clubs";
    else if (this.currentSpread === 3) labelText = "Pages 5 & 6 • Parathas & Fresh Juices";
    else if (this.currentSpread === 4) labelText = "Pages 7 & 8 • Mojitos, Shakes & Desserts";
    else if (this.currentSpread === 5) labelText = "Back Cover • Station Information";

    if (this.statusLabel) {
      this.statusLabel.textContent = labelText;
    }

    // Indicators
    this.dots.forEach((dot, idx) => {
      if (idx === this.currentSpread) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    // Bookmarks
    this.bookmarks.forEach(bm => {
      const jumpIdx = parseInt(bm.getAttribute('data-jump'), 10);
      if (jumpIdx === this.currentSpread) {
        bm.classList.add('active');
      } else {
        bm.classList.remove('active');
      }
    });
  }
}

// ============================================================================
// WEB AUDIO API: SYNTHESIZED PAPER FLIP SOUND (No external audio file needed!)
// ============================================================================
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playPaperSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    // Generate quick filtered white noise burst resembling page rustle
    const bufferSize = ctx.sampleRate * 0.12; // 120ms
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.28));
    }

    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400, ctx.currentTime);
    filter.Q.setValueAtTime(1.8, ctx.currentTime);

    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0.35, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);

    noiseSource.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    noiseSource.start();
  } catch (err) {
    // Silently continue if audio context is blocked
  }
}

// ============================================================================
// AMBIENT CANVAS (Warm Amber Dust Motes & Steam Effect)
// ============================================================================
function initAmbientParticles() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(35, Math.floor(width / 35));

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.2 + 0.6,
      vx: (Math.random() - 0.5) * 0.35,
      vy: -(Math.random() * 0.45 + 0.15), // gently floating upwards like warm dust/steam
      alpha: Math.random() * 0.5 + 0.2,
      fadeSpeed: Math.random() * 0.008 + 0.003
    });
  }

  function renderParticles() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.alpha += p.fadeSpeed;

      if (p.alpha > 0.65 || p.alpha < 0.15) {
        p.fadeSpeed = -p.fadeSpeed;
      }

      if (p.y < 0) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(245, 158, 11, ${p.alpha})`; // glowing amber/saffron
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(245, 158, 11, 0.4)';
      ctx.fill();
    });

    requestAnimationFrame(renderParticles);
  }

  renderParticles();
}

// ============================================================================
// DIGITAL MENU EXPLORER & SEARCH
// ============================================================================
function initMenuExplorer() {
  const grid = document.getElementById('menu-grid');
  const searchInput = document.getElementById('menu-search-input');
  const clearBtn = document.getElementById('clear-search-btn');
  const tabs = document.querySelectorAll('.cat-tab');

  let currentCategory = 'all';
  let searchQuery = '';

  function renderGrid() {
    if (!grid) return;

    const filtered = MENU_DATA.filter(item => {
      const matchCat = (currentCategory === 'all' || item.category === currentCategory);
      const matchSearch = (!searchQuery || 
        item.name.toLowerCase().includes(searchQuery) ||
        item.arabic.toLowerCase().includes(searchQuery) ||
        item.desc.toLowerCase().includes(searchQuery)
      );
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <i class="fa-solid fa-mug-saucer" style="font-size: 2.5rem; color: var(--primary-orange); margin-bottom: 1rem;"></i>
          <h3 style="color: #fff; margin-bottom: 0.5rem;">No items found matching "${searchQuery}"</h3>
          <p>Try searching for Karak, Zinker, Saffron, Burger, Mojito, or choose a category above.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(item => `
      <div class="menu-card" data-id="${item.id}">
        <div>
          <div class="menu-card-top">
            <h4 class="item-name-en">${item.name}</h4>
            <span class="item-price-tag">AED ${item.price.toFixed(2)}</span>
          </div>
          <div class="item-name-ar">${item.arabic}</div>
          <p class="item-desc">${item.desc}</p>
        </div>

        <div class="menu-card-actions">
          <button class="btn-card-order btn-add-cart" data-id="${item.id}">
            <i class="fa-solid fa-plus"></i> Add to Cart
          </button>
          <a href="https://wa.me/${CONFIG.whatsappNumber}?text=Hello%20Tea%20Station%20Al%20Furjan!%20I%20would%20like%20to%20order:%201x%20${encodeURIComponent(item.name)}%20(${encodeURIComponent(item.arabic)})%20-%20AED%20${item.price.toFixed(2)}" target="_blank" class="btn-card-order" style="flex: 0 0 auto; padding: 0.5rem 0.8rem;" title="Order via WhatsApp directly">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>
    `).join('');

    // Attach cart click handlers
    grid.querySelectorAll('.btn-add-cart').forEach(btn => {
      btn.addEventListener('click', () => {
        const itemId = btn.getAttribute('data-id');
        const item = MENU_DATA.find(i => i.id === itemId);
        if (item) {
          addToCart(item);
          btn.innerHTML = `<i class="fa-solid fa-check"></i> Added!`;
          setTimeout(() => {
            btn.innerHTML = `<i class="fa-solid fa-plus"></i> Add to Cart`;
          }, 1200);
        }
      });
    });
  }

  // Filter tabs
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.getAttribute('data-category');
      renderGrid();
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      if (clearBtn) {
        clearBtn.style.display = searchQuery ? 'block' : 'none';
      }
      renderGrid();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      searchQuery = '';
      clearBtn.style.display = 'none';
      renderGrid();
    });
  }

  renderGrid();
}

// ============================================================================
// PAGE ZOOM MODAL (High-Res Image Viewer)
// ============================================================================
function initZoomModal() {
  const modal = document.getElementById('page-zoom-modal');
  const modalImg = document.getElementById('modal-zoom-img');
  const closeBtn = document.getElementById('modal-close-btn');
  const backdrop = document.getElementById('modal-close-backdrop');

  if (!modal || !modalImg) return;

  document.querySelectorAll('.page-zoom-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const imgSrc = trigger.getAttribute('data-img');
      modalImg.src = imgSrc;
      modal.classList.add('active');
    });
  });

  function closeModal() {
    modal.classList.remove('active');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

// ============================================================================
// MOBILE MENU & SCROLL TO TOP
// ============================================================================
function initNavigationUtilities() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const backToTop = document.getElementById('back-to-top');
  const checkoutBtn = document.getElementById('btn-checkout-whatsapp');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', sendWhatsAppCartOrder);
  }
}

// ============================================================================
// DOM READY INITIALIZATION
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Realistic 3D Flippable Book with Full Gesture & Click Support
  new FlipBook();

  // 2. Initialize Golden Dust & Steam Particles
  initAmbientParticles();

  // 3. Initialize Digital Menu Explorer
  initMenuExplorer();

  // 4. Initialize Page Zoom Modal
  initZoomModal();

  // 5. Initialize Navigation & Cart
  initNavigationUtilities();

  console.log("Tea Station Al Furjan website initialized successfully.");
});
