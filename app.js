// ── PRODUCT DATA ──
const PRODUCTS = [
  // FRUITS
  { id:1,  name:'Fresh Mangoes',        emoji:'🥭', category:'fruits',     price:89,  oldPrice:120, weight:'1 kg',  badge:'Seasonal',  badgeType:'red'    },
  { id:2,  name:'Red Apples',           emoji:'🍎', category:'fruits',     price:149, oldPrice:180, weight:'1 kg',  badge:'Organic',   badgeType:'organic'},
  { id:3,  name:'Banana Bunch',         emoji:'🍌', category:'fruits',     price:39,  oldPrice:null,weight:'Dozen', badge:null,        badgeType:null     },
  { id:4,  name:'Watermelon',           emoji:'🍉', category:'fruits',     price:59,  oldPrice:80,  weight:'1 pc',  badge:'Summer',    badgeType:'red'    },
  { id:5,  name:'Green Grapes',         emoji:'🍇', category:'fruits',     price:99,  oldPrice:null,weight:'500 g', badge:'Organic',   badgeType:'organic'},
  { id:6,  name:'Kiwi Fruit',           emoji:'🥝', category:'fruits',     price:129, oldPrice:160, weight:'4 pcs', badge:null,        badgeType:null     },
  // VEGETABLES
  { id:7,  name:'Broccoli',             emoji:'🥦', category:'vegetables', price:55,  oldPrice:70,  weight:'500 g', badge:'Organic',   badgeType:'organic'},
  { id:8,  name:'Carrots',              emoji:'🥕', category:'vegetables', price:29,  oldPrice:null,weight:'500 g', badge:null,        badgeType:null     },
  { id:9,  name:'Tomatoes',             emoji:'🍅', category:'vegetables', price:35,  oldPrice:50,  weight:'500 g', badge:'Farm Fresh', badgeType:'red'   },
  { id:10, name:'Spinach',              emoji:'🥬', category:'vegetables', price:25,  oldPrice:null,weight:'250 g', badge:'Organic',   badgeType:'organic'},
  { id:11, name:'Onions',               emoji:'🧅', category:'vegetables', price:39,  oldPrice:null,weight:'1 kg',  badge:null,        badgeType:null     },
  { id:12, name:'Bell Pepper',          emoji:'🫑', category:'vegetables', price:49,  oldPrice:65,  weight:'250 g', badge:null,        badgeType:null     },
  // DAIRY
  { id:13, name:'Full Cream Milk',      emoji:'🥛', category:'dairy',      price:62,  oldPrice:null,weight:'1 L',   badge:'Fresh',     badgeType:'red'    },
  { id:14, name:'Paneer',               emoji:'🧀', category:'dairy',      price:99,  oldPrice:120, weight:'250 g', badge:'Fresh',     badgeType:'red'    },
  { id:15, name:'Desi Ghee',            emoji:'🫙', category:'dairy',      price:349, oldPrice:420, weight:'500 g', badge:'Pure',      badgeType:'organic'},
  { id:16, name:'Farm Eggs',            emoji:'🥚', category:'dairy',      price:89,  oldPrice:null,weight:'12 pcs',badge:'Free Range', badgeType:'organic'},
  { id:17, name:'Curd / Yogurt',        emoji:'🍦', category:'dairy',      price:45,  oldPrice:null,weight:'500 g', badge:null,        badgeType:null     },
  // GRAINS
  { id:18, name:'Basmati Rice',         emoji:'🍚', category:'grains',     price:189, oldPrice:220, weight:'1 kg',  badge:'Premium',   badgeType:'organic'},
  { id:19, name:'Whole Wheat Atta',     emoji:'🌾', category:'grains',     price:149, oldPrice:170, weight:'2 kg',  badge:null,        badgeType:null     },
  { id:20, name:'Toor Dal',             emoji:'🫘', category:'grains',     price:119, oldPrice:null,weight:'500 g', badge:null,        badgeType:null     },
  { id:21, name:'Rolled Oats',          emoji:'🥣', category:'grains',     price:99,  oldPrice:120, weight:'500 g', badge:'Healthy',   badgeType:'organic'},
  // BEVERAGES
  { id:22, name:'Orange Juice',         emoji:'🍊', category:'beverages',  price:79,  oldPrice:99,  weight:'1 L',   badge:'No Sugar',  badgeType:'organic'},
  { id:23, name:'Green Tea',            emoji:'🍵', category:'beverages',  price:129, oldPrice:null,weight:'25 bags',badge:'Organic',   badgeType:'organic'},
  { id:24, name:'Coconut Water',        emoji:'🥥', category:'beverages',  price:49,  oldPrice:null,weight:'330 ml',badge:'Natural',   badgeType:'organic'},
  { id:25, name:'Mango Juice',          emoji:'🧃', category:'beverages',  price:55,  oldPrice:70,  weight:'200 ml',badge:null,        badgeType:null     },
  // SNACKS
  { id:26, name:'Mixed Nuts',           emoji:'🥜', category:'snacks',     price:199, oldPrice:250, weight:'200 g', badge:'Premium',   badgeType:'organic'},
  { id:27, name:'Dark Chocolate',       emoji:'🍫', category:'snacks',     price:149, oldPrice:null,weight:'100 g', badge:'70% Cocoa', badgeType:'red'    },
  { id:28, name:'Rice Crackers',        emoji:'🍘', category:'snacks',     price:69,  oldPrice:null,weight:'150 g', badge:null,        badgeType:null     },
  { id:29, name:'Granola Bar',          emoji:'🍫', category:'snacks',     price:39,  oldPrice:50,  weight:'40 g',  badge:'Healthy',   badgeType:'organic'},
  // SPICES
  { id:30, name:'Turmeric Powder',      emoji:'🌿', category:'spices',     price:45,  oldPrice:null,weight:'100 g', badge:'Organic',   badgeType:'organic'},
  { id:31, name:'Red Chilli Powder',    emoji:'🌶️', category:'spices',     price:55,  oldPrice:null,weight:'100 g', badge:null,        badgeType:null     },
  { id:32, name:'Garam Masala',         emoji:'🫙', category:'spices',     price:89,  oldPrice:110, weight:'100 g', badge:'Blend',     badgeType:'red'    },
  { id:33, name:'Black Pepper',         emoji:'⚫', category:'spices',     price:79,  oldPrice:null,weight:'50 g',  badge:'Whole',     badgeType:'organic'},
  // BAKERY
  { id:34, name:'Whole Wheat Bread',    emoji:'🍞', category:'bakery',     price:49,  oldPrice:null,weight:'400 g', badge:'Fresh',     badgeType:'red'    },
  { id:35, name:'Butter Croissant',     emoji:'🥐', category:'bakery',     price:35,  oldPrice:null,weight:'1 pc',  badge:'Freshly Baked', badgeType:'red'},
  { id:36, name:'Sourdough Loaf',       emoji:'🫓', category:'bakery',     price:149, oldPrice:180, weight:'600 g', badge:'Artisan',   badgeType:'organic'},
];

// ── STATE ──
let cart = [];
let activeCategory = 'all';

// ── RENDER PRODUCTS ──
function renderProducts(products) {
  const grid = document.getElementById('productsGrid');
  if (!products.length) {
    grid.innerHTML = '<p style="color:var(--muted);text-align:center;padding:40px;grid-column:1/-1">No products found 🙁</p>';
    return;
  }
  grid.innerHTML = products.map(p => `
    <div class="product-card" data-category="${p.category}">
      <div class="product-emoji-wrap">
        <span>${p.emoji}</span>
        ${p.badge ? `<span class="product-badge ${p.badgeType==='organic'?'organic':''}">${p.badge}</span>` : ''}
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-weight">${p.weight}</div>
        <div class="product-footer">
          <div>
            <span class="product-price">₹${p.price}</span>
            ${p.oldPrice ? `<span class="product-price-old">₹${p.oldPrice}</span>` : ''}
          </div>
          <button class="add-btn" onclick='addToCart(${JSON.stringify({name:p.name,price:p.price,emoji:p.emoji})})'>+ Add</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ── FILTER ──
function filterByCategory(cat) {
  activeCategory = cat;
  // highlight filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase().includes(cat) || (cat==='all' && btn.textContent.trim()==='All'));
  });
  // highlight cat cards
  document.querySelectorAll('.cat-card').forEach(card => {
    card.classList.toggle('active', card.dataset.cat === cat);
  });
  const title = document.getElementById('productsTitle');
  title.textContent = cat === 'all' ? 'All Products' : cat.charAt(0).toUpperCase() + cat.slice(1);

  const q = document.getElementById('searchInput').value.toLowerCase();
  let filtered = cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);
  if (q) filtered = filtered.filter(p => p.name.toLowerCase().includes(q));
  renderProducts(filtered);
  document.getElementById('products').scrollIntoView({ behavior:'smooth', block:'start' });
}

function filterProducts() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  let source = activeCategory === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === activeCategory);
  renderProducts(q ? source.filter(p => p.name.toLowerCase().includes(q)) : source);
}

// ── CART ──
function addToCart(product) {
  const existing = cart.find(i => i.name === product.name);
  if (existing) { existing.qty++; }
  else           { cart.push({ ...product, qty: 1 }); }
  updateCartUI();
  showToast(`${product.emoji} ${product.name} added to cart!`);
}

function removeFromCart(name) {
  cart = cart.filter(i => i.name !== name);
  updateCartUI();
  renderCartItems();
}

function changeQty(name, delta) {
  const item = cart.find(i => i.name === name);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(name);
  else { updateCartUI(); renderCartItems(); }
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartTotal').textContent = `₹${total}`;
  renderCartItems();
}

function renderCartItems() {
  const el = document.getElementById('cartItems');
  if (!cart.length) { el.innerHTML = '<p class="empty-cart">Your cart is empty 🛒</p>'; return; }
  el.innerHTML = cart.map(i => `
    <div class="cart-item">
      <div class="cart-item-emoji">${i.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${i.name}</div>
        <div class="cart-item-price">₹${i.price} × ${i.qty} = ₹${i.price * i.qty}</div>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" onclick="changeQty('${i.name}',-1)">−</button>
        <span class="qty-num">${i.qty}</span>
        <button class="qty-btn" onclick="changeQty('${i.name}',1)">+</button>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${i.name}')">🗑</button>
    </div>
  `).join('');
}

function toggleCart() {
  document.getElementById('cartDrawer').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('open');
}

function checkout() {
  if (!cart.length) { showToast('🛒 Your cart is empty!'); return; }
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  showToast(`✅ Order placed! Total: ₹${total}. Thank you!`);
  cart = [];
  updateCartUI();
  toggleCart();
}

// ── TOAST ──
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// ── COUNTDOWN TIMER ──
function startCountdown() {
  const end = new Date(); end.setHours(23,59,59,0);
  setInterval(() => {
    const now = new Date();
    const diff = Math.max(0, end - now);
    const h = String(Math.floor(diff/3600000)).padStart(2,'0');
    const m = String(Math.floor((diff%3600000)/60000)).padStart(2,'0');
    const s = String(Math.floor((diff%60000)/1000)).padStart(2,'0');
    document.getElementById('countdown').textContent = `${h}:${m}:${s}`;
  }, 1000);
}

// ── INIT ──
renderProducts(PRODUCTS);
startCountdown();
