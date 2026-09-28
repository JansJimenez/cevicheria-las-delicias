/**
 * CEVICHERÍA LAS DELICIAS - BAR & CEVICHERÍA LA CURVA
 * Sistema Interactivo de Menú, Carrito de Compras y Pedidos por WhatsApp
 */

// Teléfono oficial para pedidos por WhatsApp (Perú +51)
// Puedes cambiar este número por el número real del negocio
const WHATSAPP_PHONE = "51914575242";

// ==========================================================================
// BASE DE DATOS DE PLATILLOS (CON IMÁGENES REFERENCIALES DE ALTA CALIDAD)
// ==========================================================================
const MENU_DATA = [
  // --- CEVICHES & ENTRADAS MARINAS ---
  {
    id: "ceviche-simple-10",
    name: "Ceviche Simple (Personal)",
    category: "ceviches",
    price: 10.00,
    tag: "Económico",
    tagType: "tag-chef",
    spicyLevel: 2,
    portion: "Porción Personal",
    image: "assets/images/ceviche-simple.png",
    description: "Cubos de pescado blanco fresco curados al momento con zumo de limón sutil del norte, ají limo, cebolla roja crujiente, camote y canchita chulpi crocante.",
    ingredients: "Pescado del día, limón norteño, ají limo, cebolla roja, camote y canchita."
  },
  {
    id: "ceviche-simple-15",
    name: "Ceviche Simple (Especial)",
    category: "ceviches",
    price: 15.00,
    tag: "El Más Pedido",
    tagType: "tag-chef",
    spicyLevel: 2,
    portion: "Porción Especial Taipá",
    image: "assets/images/ceviche-simple.png",
    description: "Porción generosa y bien servida de pescado fresco curado al instante con limón de Chulucanas, ají limo, camote glaseado, choclo desgranado y canchita.",
    ingredients: "Pescado fresco del día, limón de Chulucanas, ají limo, cebolla roja, camote glaseado, choclo y canchita."
  },
  {
    id: "ceviche-mixto",
    name: "Ceviche Mixto",
    category: "ceviches",
    price: 20.00,
    tag: "Especialidad",
    tagType: "tag-chef",
    spicyLevel: 2,
    portion: "1 a 2 personas",
    image: "assets/images/ceviche-mixto.png",
    description: "Fresquísimo pescado blanco combinado con mixtura marina de mariscos seleccionados, bañados en nuestra leche de tigre con toque de culantro, ají limo, camote y choclo.",
    ingredients: "Pescado fresco, mixtura marina seleccionada, limón norteño, ají limo, camote glaseado y choclo tierno."
  },
  {
    id: "fuente-ceviche",
    name: "Fuentes de Ceviche",
    category: "ceviches",
    price: 30.00,
    priceNote: "a más",
    tag: "Para Compartir",
    tagType: "tag-combo",
    spicyLevel: 2,
    portion: "Familiar (Desde S/ 30 a más)",
    image: "assets/images/ceviche-mixto.png",
    description: "Abundante y deliciosa fuente marina para disfrutar en familia o amigos. Precio a partir de S/ 30 a más según el tamaño y la variedad marina que desees.",
    ingredients: "Pescado del día, limón norteño, ají limo, abundante camote, choclo desgranado y canchita chulpi."
  },
  {
    id: "leche-de-tigre",
    name: "Leche de Tigre",
    category: "ceviches",
    price: 10.00,
    tag: "Afrodisíaco",
    tagType: "tag-spicy",
    spicyLevel: 3,
    portion: "Copa Personal",
    image: "assets/images/leche-de-tigre.png",
    description: "Poderoso concentrado marino con trozos de pescado fresco, jugo de limón sutil, ají limo, canchita serrana y choclo desgranado.",
    ingredients: "Concentrado de ceviche, trozos de pescado fresco, ají limo, canchita crocante y choclo."
  },
  {
    id: "choros-chalaca",
    name: "Choros a la Chalaca",
    category: "ceviches",
    price: 20.00,
    tag: "Clásico Porteño",
    tagType: "tag-chef",
    spicyLevel: 1,
    portion: "Porción de 8 a 10 unid.",
    image: "assets/images/choros-chalaca.png",
    description: "Choros frescos en su valva cubiertos con nuestra tradicional salsa chalaca criolla: cebolla picada, tomate concassé, choclo tierno, ají limo y bastante zumo de limón.",
    ingredients: "Choros seleccionados, salsa chalaca al limón, choclo desgranado y ají limo."
  },

  // --- CHICHARRONES ---
  {
    id: "chicharron-pescado",
    name: "Chicharrón de Pescado",
    category: "chicharrones",
    price: 20.00,
    tag: "Muy Crocante",
    tagType: "tag-chef",
    spicyLevel: 0,
    portion: "Porción Generosa",
    image: "assets/images/chicharron-pescado.png",
    description: "Trozos de pescado sazonados y rebozados en crujiente punto dorado. Servidos con bastones de yuca frita, salsa tártara casera y salsa criolla.",
    ingredients: "Filete de pescado fresco, rebozado crujiente, yucas doradas, salsa tártara y criolla."
  },
  {
    id: "chicharron-mixto",
    name: "Chicharrón Mixto",
    category: "chicharrones",
    price: 30.00,
    tag: "Súper Taipá",
    tagType: "tag-chef",
    spicyLevel: 0,
    portion: "1 a 2 personas",
    image: "assets/images/chicharron-mixto.png",
    description: "Crocante festín marino con trozos de pescado y mixtura de mariscos fritos con receta de la casa. Servido con yucas doradas y salsa tártara casera.",
    ingredients: "Pescado del día, mariscos variados crocantes, yucas doradas, tártara y salsa criolla."
  },

  // --- ARROCES & SOPAS ---
  {
    id: "arroz-marisco",
    name: "Arroz con Mariscos",
    category: "arroces",
    price: 20.00,
    tag: "Favorito Marino",
    tagType: "tag-chef",
    spicyLevel: 1,
    portion: "Plato hondo generoso",
    image: "assets/images/arroz-mariscos.jpg",
    description: "Arroz al dente con sofrito criollo de ají amarillo, vino blanco y especias costeñas, salteado con abundante mixtura de mariscos y terminado con salsa criolla.",
    ingredients: "Arroz criollo, mixtura de mariscos, ají amarillo, pimientos, arvejas y salsa criolla."
  },
  {
    id: "parihuela-cabrilla-tramboyo",
    name: "Parihuela de Cabrilla o Tramboyo",
    category: "arroces",
    price: 30.00,
    tag: "Levanta Muertos",
    tagType: "tag-spicy",
    spicyLevel: 2,
    portion: "Tazón Marino Contundente",
    image: "assets/images/parihuela.jpg",
    description: "Sustanciosa y reconfortante sopa marina tradicional con pesca del día a elección (cabrilla o tramboyo fresco entero), mariscos variados, chicha de jora y culantro.",
    ingredients: "Pescado cabrilla o tramboyo fresco, mariscos, caldo de cangrejo, chicha de jora y ajíes."
  },
  {
    id: "sudado-pescado",
    name: "Sudados",
    category: "arroces",
    price: 25.00,
    tag: "Tradición Marina",
    tagType: "tag-chef",
    spicyLevel: 1,
    portion: "Plato caliente con caldo",
    image: "assets/images/sudado.jpg",
    description: "Pescado fresco sudado en su propio jugo con chicha de jora, gajos de cebolla roja, tomate, ají amarillo y culantro picado. Servido con porción de arroz y yucas.",
    ingredients: "Pescado fresco del día, tomate, cebolla roja, ají amarillo, chicha de jora, yucas y arroz."
  },

  // --- COMBOS MARINOS ---
  {
    id: "duo-marino",
    name: "Dúos Marinos",
    category: "combos",
    price: 35.00,
    tag: "El Más Vendido",
    tagType: "tag-combo",
    spicyLevel: 2,
    portion: "1 a 2 personas",
    image: "assets/images/duo-marino.png",
    description: "La combinación marina perfecta: generosa porción de Ceviche fresco acompañada de crujiente Chicharrón de Pescado con sus yucas y salsa tártara.",
    ingredients: "Ceviche fresco + Chicharrón de pescado con yucas, camote y canchita."
  },
  {
    id: "trio-marino",
    name: "Tríos Marinos",
    category: "combos",
    price: 45.00,
    tag: "Plato Bandera",
    tagType: "tag-combo",
    spicyLevel: 2,
    portion: "Para 2 personas",
    image: "assets/images/trio-marino.png",
    description: "El tridente insuperable: Ceviche fresco de pescado + sabroso Arroz con Mariscos humeante + Chicharrón crocante con tártara casera.",
    ingredients: "Ceviche de pescado fresco + Arroz con mariscos + Chicharrón crocante."
  },

  // --- PLATOS A LA CARTA ---
  {
    id: "trucha-frita",
    name: "Trucha Frita Entera",
    category: "carta",
    price: 18.00,
    tag: "A la Carta",
    tagType: "tag-carta",
    spicyLevel: 0,
    portion: "Trucha entera",
    image: "assets/images/trucha-frita.jpg",
    description: "Fresca trucha entera sazonada con ajo y especias criollas, frita a la perfección con piel dorada y crujiente. Servida con arroz blanco, papas doradas o yucas y ensalada criolla fresca.",
    ingredients: "Trucha entera fresca, arroz blanco, papas doradas o yucas y ensalada criolla fresca."
  },
  {
    id: "chuleta-chancho",
    name: "Chuleta de Chancho",
    category: "carta",
    price: 15.00,
    tag: "A la Carta",
    tagType: "tag-carta",
    spicyLevel: 0,
    portion: "Plato individual contundente",
    image: "assets/images/chuleta-chancho.png",
    description: "Jugosa chuleta de cerdo sazonada al estilo de la casa, dorada a la plancha hasta alcanzar el punto perfecto de sabor. Acompañada de arroz blanco y papas doradas o ensalada.",
    ingredients: "Chuleta de cerdo seleccionada, arroz blanco, papas doradas y guarnición de la casa."
  },

  // --- BEBIDAS ---
  {
    id: "jarra-pina",
    name: "Jarra de Piña (1 Litro)",
    category: "bebidas",
    price: 15.00,
    tag: "100% Natural",
    tagType: "tag-drink",
    spicyLevel: 0,
    portion: "Jarra de 1 Litro",
    image: "assets/images/jarra-pina.png",
    description: "Refresco natural elaborado con selecta piña golden madura, dulce y aromática, servido bien helado.",
    ingredients: "Pura piña golden, agua purificada y hielo."
  },
  {
    id: "jarra-limonada-frozen",
    name: "Jarra de Limonada Frozen (1 Litro)",
    category: "bebidas",
    price: 10.00,
    tag: "Frozen Frappé",
    tagType: "tag-drink",
    spicyLevel: 0,
    portion: "Jarra de 1 Litro",
    image: "assets/images/jarra-limonada-frozen.png",
    description: "Limonada frappé ultra refrescante preparada al instante con limones sutiles recién exprimidos y abundante hielo frappé.",
    ingredients: "Limón sutil norteño, hielo frappé y jarabe."
  },
  {
    id: "jarra-maracuya",
    name: "Jarra de Maracuyá (1 Litro)",
    category: "bebidas",
    price: 12.00,
    tag: "Fruta Natural",
    tagType: "tag-drink",
    spicyLevel: 0,
    portion: "Jarra de 1 Litro",
    image: "assets/images/jarra-maracuya.png",
    description: "Jugo natural de pura fruta de maracuyá de la costa con su toque cítrico inconfundible, ideal para acompañar platos marinos.",
    ingredients: "Concentrado de maracuyá natural, agua filtrada y hielo."
  },
  {
    id: "jarra-chicha-morada",
    name: "Jarra de Chicha Morada (1 Litro)",
    category: "bebidas",
    price: 12.00,
    tag: "Receta Casera",
    tagType: "tag-drink",
    spicyLevel: 0,
    portion: "Jarra de 1 Litro",
    image: "assets/images/jarra-chicha-morada.png",
    description: "Auténtica chicha morada tradicional hervida artesanalmente con maíz morado, piña, manzana, canela, clavo de olor y limón sutil fresco.",
    ingredients: "Maíz morado, piña, manzana, canela, clavo de olor y zumo de limón."
  },
  {
    id: "gaseosa-inca-kola-2l",
    name: "Gaseosa Inca Kola (2 Litros)",
    category: "bebidas",
    price: 9.00,
    tag: "Familiar",
    tagType: "tag-drink",
    spicyLevel: 0,
    portion: "Botella 2 Litros",
    image: "assets/images/gaseosa-inca-kola-2l.png",
    description: "La bebida de sabor nacional en tamaño familiar de 2 Litros, entregada bien heladita al polo para compartir en la mesa.",
    ingredients: "Botella Inca Kola 2 Litros bien helada."
  },
  {
    id: "gaseosa-coca-cola-2l",
    name: "Gaseosa Coca Cola (2 Litros)",
    category: "bebidas",
    price: 9.00,
    tag: "Familiar",
    tagType: "tag-drink",
    spicyLevel: 0,
    portion: "Botella 2 Litros",
    image: "assets/images/gaseosa-coca-cola-2l.png",
    description: "Coca Cola clásica de 2 Litros para compartir en familia o con amigos junto a tus platillos preferidos.",
    ingredients: "Botella Coca Cola 2 Litros bien helada."
  },
  {
    id: "gaseosa-inca-kola-1l",
    name: "Gaseosa Inca Kola (1 Litro)",
    category: "bebidas",
    price: 7.00,
    tag: "Mediana",
    tagType: "tag-drink",
    spicyLevel: 0,
    portion: "Botella 1 Litro",
    image: "assets/images/gaseosa-inca-kola-1l.png",
    description: "Botella de Inca Kola de 1 Litro servida bien fría.",
    ingredients: "Botella Inca Kola 1 Litro helada."
  },
  {
    id: "gaseosa-coca-cola-1l",
    name: "Gaseosa Coca Cola (1 Litro)",
    category: "bebidas",
    price: 7.00,
    tag: "Mediana",
    tagType: "tag-drink",
    spicyLevel: 0,
    portion: "Botella 1 Litro",
    image: "assets/images/gaseosa-coca-cola-1l.png",
    description: "Botella de Coca Cola de 1 Litro servida bien helada.",
    ingredients: "Botella Coca Cola 1 Litro helada."
  },
  {
    id: "gaseosa-inca-kola-500ml",
    name: "Gaseosa Inca Kola (500 ml)",
    category: "bebidas",
    price: 4.00,
    tag: "Personal",
    tagType: "tag-drink",
    spicyLevel: 0,
    portion: "Botella Personal 500 ml",
    image: "assets/images/gaseosa-inca-kola-500ml.png",
    description: "Inca Kola personal de 500 ml bien fría, el acompañamiento perfecto para tu almuerzo individual.",
    ingredients: "Botella Inca Kola 500 ml personal helada."
  },
  {
    id: "gaseosa-coca-cola-500ml",
    name: "Gaseosa Coca Cola (500 ml)",
    category: "bebidas",
    price: 4.00,
    tag: "Personal",
    tagType: "tag-drink",
    spicyLevel: 0,
    portion: "Botella Personal 500 ml",
    image: "assets/images/gaseosa-coca-cola-500ml.png",
    description: "Coca Cola personal de 500 ml al polo para disfrutar al instante.",
    ingredients: "Botella Coca Cola 500 ml personal helada."
  }
];

// ==========================================================================
// ESTADO DE LA APLICACIÓN
// ==========================================================================
let currentCategory = "all";
let searchQuery = "";
let cart = [];

// Inicialización desde LocalStorage si existe
try {
  const savedCart = localStorage.getItem("las_delicias_cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
} catch (e) {
  cart = [];
}

// ==========================================================================
// RENDERIZADO DEL MENÚ DE PLATILLOS
// ==========================================================================
function renderMenu() {
  const grid = document.getElementById("dishesGrid");
  if (!grid) return;

  const filteredDishes = MENU_DATA.filter(dish => {
    const matchesCat = currentCategory === "all" || dish.category === currentCategory;
    const matchesQuery = dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dish.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dish.ingredients.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  if (filteredDishes.length === 0) {
    grid.innerHTML = `
      <div class="no-results-msg">
        <i class="fa-solid fa-fish"></i>
        <h3>No encontramos platillos con "${escapeHtml(searchQuery)}"</h3>
        <p>Prueba con otra palabra clave como "ceviche", "arroz", "chicharrón" o selecciona una categoría arriba.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filteredDishes.map(dish => {
    // Generar indicador de picante
    let spicyIcons = '';
    if (dish.spicyLevel > 0) {
      spicyIcons = `<span class="dish-spicy-indicator" title="Nivel de picante: ${dish.spicyLevel}/3">
        ${'<i class="fa-solid fa-pepper-hot"></i>'.repeat(dish.spicyLevel)}
      </span>`;
    }

    return `
      <article class="dish-card" data-dish-id="${dish.id}">
        <div class="dish-media-wrapper">
          <img src="${dish.image}" alt="${escapeHtml(dish.name)}" class="dish-image" loading="lazy" onerror="this.src='assets/images/ceviche-simple.png'">
          ${dish.tag ? `<span class="dish-badge-tag ${dish.tagType}">${dish.tag}</span>` : ''}
          <button class="dish-quick-view-btn" onclick="openQuickView('${dish.id}')" title="Ver detalles del plato" aria-label="Ver detalles de ${escapeHtml(dish.name)}">
            <i class="fa-solid fa-eye"></i>
          </button>
        </div>

        <div class="dish-body">
          <div class="dish-meta-info">
            <span><i class="fa-solid fa-utensils"></i> ${dish.portion}</span>
            ${spicyIcons}
          </div>

          <h3 class="dish-title">${escapeHtml(dish.name)}</h3>
          <p class="dish-description">${escapeHtml(dish.description)}</p>

          <div class="dish-footer">
            <div class="dish-price">
              <span class="currency">S/</span>
              <span>${dish.price.toFixed(2)}</span>
              ${dish.priceNote ? `<small class="price-note">${dish.priceNote}</small>` : ''}
            </div>
            <button class="btn-add-cart" onclick="addToCart('${dish.id}')">
              <i class="fa-solid fa-plus"></i> Agregar
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// ==========================================================================
// FUNCIONES DEL CARRITO DE COMPRAS
// ==========================================================================
function saveCart() {
  try {
    localStorage.setItem("las_delicias_cart", JSON.stringify(cart));
  } catch (e) {
    console.error("Error al guardar en LocalStorage:", e);
  }
}

function addToCart(dishId, qty = 1, customNotes = '') {
  const dish = MENU_DATA.find(d => d.id === dishId);
  if (!dish) return;

  const existingIndex = cart.findIndex(item => item.id === dishId && item.notes === customNotes);
  if (existingIndex > -1) {
    cart[existingIndex].qty += qty;
  } else {
    cart.push({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      image: dish.image,
      portion: dish.portion,
      qty: qty,
      notes: customNotes
    });
  }

  saveCart();
  updateCartUI();
  showToast(`¡Agregado al carrito: ${dish.name}!`);
}

function updateItemQty(index, change) {
  if (cart[index]) {
    cart[index].qty += change;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
  }
}

function removeFromCart(index) {
  if (cart[index]) {
    const item = cart[index];
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
    showToast(`Eliminado: ${item.name}`);
  }
}

function clearCart() {
  if (cart.length === 0) return;
  if (confirm("¿Deseas vaciar todos los platillos de tu carrito?")) {
    cart = [];
    saveCart();
    updateCartUI();
  }
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  // Actualizar contadores en la barra y botón flotante
  const headerBadge = document.getElementById("headerCartBadge");
  const floatingBadge = document.getElementById("floatingCartBadge");
  const drawerCounter = document.getElementById("drawerCartCount");

  if (headerBadge) headerBadge.textContent = totalCount;
  if (floatingBadge) floatingBadge.textContent = totalCount;
  if (drawerCounter) drawerCounter.textContent = `(${totalCount})`;

  // Renderizar contenido del Drawer
  const cartBody = document.getElementById("cartDrawerBody");
  const cartFooter = document.getElementById("cartDrawerFooter");

  if (!cartBody || !cartFooter) return;

  if (cart.length === 0) {
    cartBody.innerHTML = `
      <div class="cart-empty-view">
        <div class="empty-cart-icon"><i class="fa-solid fa-basket-shopping"></i></div>
        <h4>Tu carrito está vacío</h4>
        <p>Explora nuestra carta y elige tus ceviches y mariscos preferidos para disfrutarlos hoy.</p>
        <button class="btn-primary-order" onclick="closeCartDrawer(); scrollToMenu();" style="font-size: 0.95rem; padding: 10px 24px;">
          <i class="fa-solid fa-utensils"></i> Ver la Carta
        </button>
      </div>
    `;
    cartFooter.style.display = "none";
    return;
  }

  cartFooter.style.display = "block";

  // Determinar costo de envío
  const deliveryType = document.querySelector('input[name="deliveryType"]:checked')?.value || 'delivery';
  let deliveryCost = 0;
  let deliveryLabel = "S/ 0.00";

  if (deliveryType === 'delivery') {
    if (subtotal >= 60) {
      deliveryCost = 0;
      deliveryLabel = '<strong style="color: #10b981;">¡GRATIS!</strong>';
    } else {
      deliveryCost = 5.00;
      deliveryLabel = "S/ 5.00";
    }
  } else if (deliveryType === 'pickup') {
    deliveryCost = 0;
    deliveryLabel = "Recojo en Tienda (Gratis)";
  } else if (deliveryType === 'table') {
    deliveryCost = 0;
    deliveryLabel = "Atención en Mesa";
  }

  const grandTotal = subtotal + deliveryCost;

  // Render items
  const itemsHtml = cart.map((item, idx) => `
    <div class="cart-item-row">
      <img src="${item.image}" alt="${escapeHtml(item.name)}" class="cart-item-thumb">
      <div class="cart-item-info">
        <h5>${escapeHtml(item.name)}</h5>
        <div class="cart-item-price">S/ ${item.price.toFixed(2)} c/u</div>
        ${item.notes ? `<div style="font-size: 0.75rem; color: #fb8500;"><i class="fa-solid fa-pencil"></i> ${escapeHtml(item.notes)}</div>` : ''}
        <div class="cart-qty-controls">
          <button class="btn-qty" onclick="updateItemQty(${idx}, -1)" title="Reducir"><i class="fa-solid fa-minus"></i></button>
          <span class="qty-val">${item.qty}</span>
          <button class="btn-qty" onclick="updateItemQty(${idx}, 1)" title="Aumentar"><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
      <div class="cart-item-actions">
        <span class="cart-item-subtotal">S/ ${(item.price * item.qty).toFixed(2)}</span>
        <button class="btn-remove-item" onclick="removeFromCart(${idx})" title="Eliminar platillo">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  `).join('');

  // Formulario de datos de pedido
  cartBody.innerHTML = `
    <div class="cart-items-list">
      ${itemsHtml}
    </div>

    <div class="order-form-section">
      <h4 class="order-form-title"><i class="fa-solid fa-motorcycle"></i> Modalidad de Pedido</h4>
      
      <div class="delivery-options-pills">
        <label class="delivery-pill-label">
          <input type="radio" name="deliveryType" value="delivery" ${deliveryType === 'delivery' ? 'checked' : ''} onchange="updateCartUI()">
          <i class="fa-solid fa-moped"></i>
          <span>Delivery</span>
        </label>
        <label class="delivery-pill-label">
          <input type="radio" name="deliveryType" value="pickup" ${deliveryType === 'pickup' ? 'checked' : ''} onchange="updateCartUI()">
          <i class="fa-solid fa-store"></i>
          <span>Recojo Local</span>
        </label>
        <label class="delivery-pill-label">
          <input type="radio" name="deliveryType" value="table" ${deliveryType === 'table' ? 'checked' : ''} onchange="updateCartUI()">
          <i class="fa-solid fa-utensils"></i>
          <span>En Mesa</span>
        </label>
      </div>

      <div class="form-group-cart">
        <label for="orderCustomerName">Tu Nombre Completo *</label>
        <input type="text" id="orderCustomerName" placeholder="Ej. Juan Pérez" required>
      </div>

      <div class="form-group-cart">
        <label for="orderCustomerPhone">Teléfono / WhatsApp *</label>
        <input type="tel" id="orderCustomerPhone" placeholder="Ej. 914575242" required>
      </div>

      <div id="deliveryAddressGroup" class="form-group-cart" style="${deliveryType === 'delivery' ? 'display:block;' : 'display:none;'}">
        <label for="orderAddress">Dirección de Entrega y Referencia *</label>
        <input type="text" id="orderAddress" placeholder="Ej. Av. Principal 123, Urb. Palmeras (Frente al parque)">
      </div>

      <div id="tableNumberGroup" class="form-group-cart" style="${deliveryType === 'table' ? 'display:block;' : 'display:none;'}">
        <label for="orderTableNumber">Número de Mesa *</label>
        <input type="text" id="orderTableNumber" placeholder="Ej. Mesa 4">
      </div>

      <div class="form-group-cart">
        <label for="orderPaymentMethod">Método de Pago Preferido</label>
        <select id="orderPaymentMethod" onchange="togglePaymentMethodDetails(this.value)">
          <option value="Yape / Plin (Billetera Digital con QR)" selected>📱 Yape / Plin (Billetera Digital con QR)</option>
          <option value="Efectivo contra entrega">💵 Efectivo contra entrega</option>
          <option value="Tarjeta de Crédito / Débito (POS Móvil)">💳 Tarjeta de Crédito / Débito (POS inalámbrico)</option>
        </select>
      </div>

      <!-- Caja Interactiva para Yape / Plin con Código QR -->
      <div id="qrPaymentBox" class="qr-payment-cart-box">
        <div class="qr-payment-header">
          <div class="wallet-badges">
            <span class="wallet-badge yape-badge"><i class="fa-solid fa-mobile-screen"></i> Yape</span>
            <span class="wallet-badge plin-badge"><i class="fa-solid fa-bolt"></i> Plin</span>
          </div>
          <span class="wallet-interop-tag">Interoperable</span>
        </div>
        
        <div class="qr-code-display-wrap" onclick="openQrModal()" title="Clic para ampliar código QR">
          <img src="assets/qr-yape-plin.png" alt="Código QR Yape y Plin Cevichería Las Delicias" class="qr-code-img">
          <span class="qr-zoom-hint"><i class="fa-solid fa-magnifying-glass-plus"></i> Clic para ver en grande</span>
        </div>

        <div class="qr-account-details">
          <div class="qr-data-row">
            <span class="qr-label">Número Yape / Plin:</span>
            <div class="qr-number-action">
              <strong class="qr-phone-number">914 575 242</strong>
              <button type="button" class="btn-copy-clip" onclick="copyPaymentNumber('914575242', this)" title="Copiar número">
                <i class="fa-regular fa-copy"></i> Copiar
              </button>
            </div>
          </div>
          <div class="qr-data-row">
            <span class="qr-label">Titular:</span>
            <span class="qr-value-name">Cevichería Las Delicias</span>
          </div>
        </div>

        <p class="qr-instruction-tip">
          <i class="fa-solid fa-circle-check" style="color: #25d366;"></i> Escanea el QR o transfiere al número. Envía la captura del comprobante por WhatsApp al confirmar tu pedido.
        </p>
      </div>

      <!-- Caja para Efectivo -->
      <div id="cashInputGroup" class="form-group-cart" style="display: none;">
        <label for="orderCashAmount">¿Con cuánto vas a pagar? (Para llevarte vuelto exacto)</label>
        <input type="text" id="orderCashAmount" placeholder="Ej. Billete de S/ 50 o S/ 100">
      </div>

      <!-- Caja para Tarjeta POS -->
      <div id="cardNoticeGroup" class="card-notice-box" style="display: none;">
        <div class="card-notice-header">
          <i class="fa-solid fa-credit-card" style="color: var(--color-primary-blue);"></i>
          <span>Cobro con Tarjeta en tu Domicilio o Mesa</span>
        </div>
        <p class="card-notice-text">
          Llevamos terminal <strong>POS inalámbrico</strong> sin recargo adicional. Aceptamos tarjetas de crédito y débito Visa, Mastercard, American Express y Diners Club.
        </p>
        <div class="card-icons-row">
          <i class="fa-brands fa-cc-visa" title="Visa"></i>
          <i class="fa-brands fa-cc-mastercard" title="Mastercard"></i>
          <i class="fa-brands fa-cc-amex" title="American Express"></i>
          <i class="fa-brands fa-cc-diners-club" title="Diners Club"></i>
        </div>
      </div>

      <div class="form-group-cart">
        <label for="orderNotes">Notas de Cocina / Preferencias</label>
        <textarea id="orderNotes" rows="2" placeholder="Ej. Cancha extra, sin cebolla, ají bien picante aparte, etc."></textarea>
      </div>
    </div>
  `;

  // Render Footer Summary
  cartFooter.innerHTML = `
    <div class="cart-summary-line">
      <span>Subtotal de Platillos:</span>
      <strong>S/ ${subtotal.toFixed(2)}</strong>
    </div>
    <div class="cart-summary-line">
      <span>Costo de Entrega:</span>
      <span>${deliveryLabel}</span>
    </div>
    ${subtotal < 60 && deliveryType === 'delivery' ? `
      <div style="font-size: 0.76rem; color: #fb8500; margin-bottom: 8px;">
        <i class="fa-solid fa-gift"></i> ¡Agrega S/ ${(60 - subtotal).toFixed(2)} más para delivery <strong>GRATIS</strong>!
      </div>
    ` : ''}
    <div class="cart-summary-line total-line">
      <span>Total a Pagar:</span>
      <span class="total-val">S/ ${grandTotal.toFixed(2)}</span>
    </div>
    
    <button class="btn-whatsapp-checkout" onclick="submitWhatsAppOrder()">
      <i class="fa-brands fa-whatsapp" style="font-size: 1.4rem;"></i>
      Enviar Pedido por WhatsApp
    </button>
    <p class="checkout-note-disclaimer">
      <i class="fa-solid fa-shield-halved"></i> Tu pedido se enviará detallado a nuestro WhatsApp oficial para atención inmediata.
    </p>
  `;
}

function togglePaymentMethodDetails(value) {
  const qrBox = document.getElementById("qrPaymentBox");
  const cashBox = document.getElementById("cashInputGroup");
  const cardBox = document.getElementById("cardNoticeGroup");

  if (qrBox) {
    qrBox.style.display = value.includes("Yape") ? "block" : "none";
  }
  if (cashBox) {
    cashBox.style.display = value.includes("Efectivo") ? "block" : "none";
  }
  if (cardBox) {
    cardBox.style.display = value.includes("Tarjeta") ? "block" : "none";
  }
}

// Compatibilidad
function toggleCashInput(value) {
  togglePaymentMethodDetails(value);
}

// Copiar número al portapapeles con feedback visual
function copyPaymentNumber(number, btnElement) {
  const doFeedback = () => {
    showToast("¡Número " + number + " copiado al portapapeles!");
    if (btnElement) {
      const originalHTML = btnElement.innerHTML;
      btnElement.innerHTML = '<i class="fa-solid fa-check"></i> ¡Copiado!';
      btnElement.classList.add("copied");
      setTimeout(() => {
        btnElement.innerHTML = originalHTML;
        btnElement.classList.remove("copied");
      }, 2500);
    }
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(number).then(doFeedback).catch(() => {
      fallbackCopy(number);
      doFeedback();
    });
  } else {
    fallbackCopy(number);
    doFeedback();
  }
}

function fallbackCopy(text) {
  const tempInput = document.createElement("input");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

// Modal QR Yape / Plin
function openQrModal() {
  const modal = document.getElementById("qrModalBackdrop");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeQrModal(event) {
  const modal = document.getElementById("qrModalBackdrop");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Cerrar con Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeQrModal();
  }
});

// ==========================================================================
// CONSTRUCCIÓN Y ENVÍO DEL PEDIDO A WHATSAPP
// ==========================================================================
function submitWhatsAppOrder() {
  if (cart.length === 0) {
    alert("Tu carrito está vacío. Agrega platillos antes de ordenar.");
    return;
  }

  const nameInput = document.getElementById("orderCustomerName");
  const phoneInput = document.getElementById("orderCustomerPhone");
  const deliveryType = document.querySelector('input[name="deliveryType"]:checked')?.value || 'delivery';
  const addressInput = document.getElementById("orderAddress");
  const tableInput = document.getElementById("orderTableNumber");
  const paymentMethod = document.getElementById("orderPaymentMethod")?.value || "Yape / Plin";
  const cashAmount = document.getElementById("orderCashAmount")?.value || "";
  const notesInput = document.getElementById("orderNotes");

  const customerName = nameInput ? nameInput.value.trim() : "";
  const customerPhone = phoneInput ? phoneInput.value.trim() : "";
  const deliveryAddress = addressInput ? addressInput.value.trim() : "";
  const tableNumber = tableInput ? tableInput.value.trim() : "";
  const notes = notesInput ? notesInput.value.trim() : "";

  // Validaciones
  if (!customerName) {
    alert("Por favor, ingresa tu Nombre para coordinar tu pedido.");
    if (nameInput) nameInput.focus();
    return;
  }

  if (deliveryType === 'delivery' && !deliveryAddress) {
    alert("Por favor, ingresa tu dirección para el delivery.");
    if (addressInput) addressInput.focus();
    return;
  }

  if (deliveryType === 'table' && !tableNumber) {
    alert("Por favor, ingresa el número de mesa en el que te encuentras.");
    if (tableInput) tableInput.focus();
    return;
  }

  // Cálculos
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let deliveryCost = 0;
  let deliveryText = "S/ 0.00 (Recojo / Mesa)";

  if (deliveryType === 'delivery') {
    if (subtotal >= 60) {
      deliveryCost = 0;
      deliveryText = "¡GRATIS! (Promoción > S/ 60)";
    } else {
      deliveryCost = 5.00;
      deliveryText = "S/ 5.00";
    }
  }

  const total = subtotal + deliveryCost;

  // Formatear texto para WhatsApp
  let msg = `*¡HOLA CEVICHERÍA LAS DELICIAS - LA CURVA!* 🐟🌊\n`;
  msg += `Deseo realizar el siguiente pedido desde su página web:\n\n`;
  
  msg += `🛒 *DETALLE DEL PEDIDO:*\n`;
  cart.forEach(item => {
    const lineTotal = (item.price * item.qty).toFixed(2);
    msg += `• *${item.qty}x* ${item.name} - S/ ${lineTotal}\n`;
    if (item.notes) {
      msg += `   └ _Nota: ${item.notes}_\n`;
    }
  });

  msg += `\n💵 *Subtotal:* S/ ${subtotal.toFixed(2)}\n`;
  msg += `🛵 *Envío:* ${deliveryText}\n`;
  msg += `💰 *TOTAL A PAGAR: S/ ${total.toFixed(2)}*\n\n`;

  msg += `📋 *DATOS DE ATENCIÓN:*\n`;
  msg += `👤 *Cliente:* ${customerName}\n`;
  if (customerPhone) {
    msg += `📱 *Teléfono:* ${customerPhone}\n`;
  }

  if (deliveryType === 'delivery') {
    msg += `📍 *Modalidad:* Delivery a Domicilio\n`;
    msg += `🏠 *Dirección:* ${deliveryAddress}\n`;
  } else if (deliveryType === 'pickup') {
    msg += `📍 *Modalidad:* Recojo en Local\n`;
  } else {
    msg += `📍 *Modalidad:* Consumo en Mesa (${tableNumber})\n`;
  }

  msg += `💳 *Método de Pago:* ${paymentMethod}\n`;
  if (paymentMethod.includes("Efectivo") && cashAmount) {
    msg += `💵 *Paga con:* ${cashAmount}\n`;
  } else if (paymentMethod.includes("Yape") || paymentMethod.includes("Plin")) {
    msg += `📲 *Billetera Digital:* Adjunto captura de constancia Yape/Plin\n`;
  } else if (paymentMethod.includes("Tarjeta")) {
    msg += `💳 *POS Móvil:* Llevar terminal inalámbrico para tarjeta\n`;
  }

  if (notes) {
    msg += `📝 *Notas de Cocina:* ${notes}\n`;
  }

  msg += `\n¡Quedo a la espera de su confirmación para prepararlo! Muchas gracias. 🦐✨`;

  // Abrir enlace oficial de WhatsApp API
  const encodedMsg = encodeURIComponent(msg);
  const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMsg}`;

  window.open(waUrl, "_blank");
}

// ==========================================================================
// QUICK VIEW MODAL (VISTA RÁPIDA DE PLATILLO)
// ==========================================================================
let currentQuickViewDishId = null;

function openQuickView(dishId) {
  const dish = MENU_DATA.find(d => d.id === dishId);
  if (!dish) return;

  currentQuickViewDishId = dishId;
  const modal = document.getElementById("quickViewModal");
  if (!modal) return;

  document.getElementById("modalDishImg").src = dish.image;
  document.getElementById("modalDishImg").alt = dish.name;
  const catNames = {
    ceviches: "Ceviches & Entradas",
    chicharrones: "Chicharrones",
    arroces: "Arroces & Sopas",
    combos: "Dúos & Tríos Marinos",
    carta: "Platos a la Carta",
    bebidas: "Bebidas"
  };
  document.getElementById("modalDishCat").textContent = (catNames[dish.category] || dish.category).toUpperCase();
  document.getElementById("modalDishTitle").textContent = dish.name;
  document.getElementById("modalDishPrice").innerHTML = `S/ ${dish.price.toFixed(2)}${dish.priceNote ? ` <small style="font-size:0.85rem;color:#fb8500;font-weight:700;">${dish.priceNote}</small>` : ''}`;
  document.getElementById("modalDishDesc").textContent = dish.description;
  document.getElementById("modalDishPortion").textContent = dish.portion;
  document.getElementById("modalDishIngredients").textContent = dish.ingredients;

  const spicyEl = document.getElementById("modalDishSpicy");
  if (dish.spicyLevel > 0) {
    spicyEl.innerHTML = `<span style="color: #e63946;">${'<i class="fa-solid fa-pepper-hot"></i> '.repeat(dish.spicyLevel)} (${dish.spicyLevel}/3 picante)</span>`;
  } else {
    spicyEl.innerHTML = `<span>No pica / Suave</span>`;
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeQuickView() {
  const modal = document.getElementById("quickViewModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function addQuickViewToCart() {
  if (currentQuickViewDishId) {
    addToCart(currentQuickViewDishId);
    closeQuickView();
  }
}

// ==========================================================================
// TOAST NOTIFICATIONS
// ==========================================================================
function showToast(message) {
  const toastContainer = document.getElementById("toastContainer");
  if (!toastContainer) return;

  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.innerHTML = `
    <i class="fa-solid fa-circle-check" style="color: #ffb703; font-size: 1.2rem;"></i>
    <span>${escapeHtml(message)}</span>
  `;

  toastContainer.appendChild(toast);

  // Trigger animación
  setTimeout(() => toast.classList.add("show"), 10);

  // Quitar después de 3.2s
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 350);
  }, 3200);
}

// ==========================================================================
// HELPERS & NAVEGACIÓN
// ==========================================================================
function openCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (drawer && overlay) {
    drawer.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
    updateCartUI();
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (drawer && overlay) {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function scrollToMenu() {
  const section = document.getElementById("la-carta");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
}

function setCategory(cat) {
  currentCategory = cat;
  const categoryButtons = document.querySelectorAll(".category-tab-btn");
  categoryButtons.forEach(btn => {
    if (btn.getAttribute("data-category") === cat) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  renderMenu();
}
window.setCategory = setCategory;

// ==========================================================================
// SISTEMA DE RESEÑAS VERIFICADAS CON DNI (PROTECCIÓN CONTRA OPINIONES FALSAS)
// ==========================================================================
let currentReviewRating = 5;
let adminAuthed = false;

// Manejo del selector de estrellas en el formulario
function setReviewRating(stars) {
  currentReviewRating = stars;
  const ratingButtons = document.querySelectorAll("#ratingStarsRow .rating-star-btn");
  ratingButtons.forEach((btn, idx) => {
    if (idx < stars) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  const ratingLabels = {
    5: "⭐⭐⭐⭐⭐ ¡Excelente! Lo mejor de lo mejor",
    4: "⭐⭐⭐⭐ Muy Bueno, gran sazón",
    3: "⭐⭐⭐ Bueno, aceptable",
    2: "⭐⭐ Regular, por mejorar",
    1: "⭐ Malo, no me gustó"
  };
  const labelEl = document.getElementById("ratingSelectedText");
  if (labelEl) {
    labelEl.textContent = ratingLabels[stars] || "";
  }
}
window.setReviewRating = setReviewRating;

// Gestión en localStorage
function getStoredReviews() {
  try {
    const raw = localStorage.getItem("delicias_reviews");
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error("Error reading reviews:", e);
  }
  return [];
}

function saveStoredReviews(reviews) {
  try {
    localStorage.setItem("delicias_reviews", JSON.stringify(reviews));
  } catch (e) {
    console.error("Error saving reviews:", e);
  }
}

// Renderizado de las reseñas aprobadas en la web
function renderReviews() {
  const container = document.getElementById("reviewsGrid");
  if (!container) return;

  const allReviews = getStoredReviews();
  const approvedReviews = allReviews.filter(r => r.approved === true);

  if (approvedReviews.length === 0) {
    container.innerHTML = `
      <div class="empty-reviews-card">
        <i class="fa-regular fa-comments main-icon"></i>
        <h4>Sé el primero en calificar tu visita</h4>
        <p>
          En Cevichería Las Delicias valoramos las opiniones sinceras de comensales reales. Protegemos el negocio requiriendo DNI para evitar reseñas falsas o anónimas.
        </p>
        <button class="btn-leave-review" onclick="openReviewModal()">
          <i class="fa-solid fa-pen-to-square"></i> Dejar mi Reseña Verificada
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = approvedReviews.map(r => {
    const initials = r.author ? r.author.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() : 'C';
    const maskedDni = r.dni ? r.dni.slice(0, 2) + '****' + r.dni.slice(-2) : 'Verificado';
    const stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);

    return `
      <div class="testimonial-card">
        <div>
          <div class="testimonial-header-top">
            <div class="testimonial-rating" title="${r.rating} de 5 estrellas">${stars}</div>
            <span class="verified-dni-pill" title="Comensal identificado con DNI ${maskedDni}">
              <i class="fa-solid fa-circle-check"></i> DNI ${maskedDni}
            </span>
          </div>
          ${r.dish ? `
            <div class="testimonial-dish-tag">
              <i class="fa-solid fa-utensils"></i> Probó: ${escapeHtml(r.dish)}
            </div>
          ` : ''}
          <p class="testimonial-quote">"${escapeHtml(r.comment)}"</p>
        </div>
        <div class="testimonial-author">
          <div class="author-avatar">${initials}</div>
          <div class="author-info">
            <h6>${escapeHtml(r.author)}</h6>
            <span>${r.date || 'Cliente Verificado'} • Huayobamba</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}
window.renderReviews = renderReviews;

// Modal para dejar reseña
function openReviewModal() {
  const modal = document.getElementById("reviewModalBackdrop");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    setReviewRating(5);
  }
}
window.openReviewModal = openReviewModal;

function closeReviewModal(event) {
  const modal = document.getElementById("reviewModalBackdrop");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}
window.closeReviewModal = closeReviewModal;

// Envío de la reseña con validación estricta de DNI (8 dígitos)
function submitVerifiedReview(e) {
  e.preventDefault();

  const nameInput = document.getElementById("reviewAuthorName");
  const dniInput = document.getElementById("reviewAuthorDni");
  const dishSelect = document.getElementById("reviewDish");
  const commentInput = document.getElementById("reviewComment");

  const name = nameInput ? nameInput.value.trim() : "";
  const dni = dniInput ? dniInput.value.trim() : "";
  const dish = dishSelect ? dishSelect.value : "";
  const comment = commentInput ? commentInput.value.trim() : "";

  if (!name) {
    alert("Por favor, ingresa tu nombre completo.");
    if (nameInput) nameInput.focus();
    return;
  }

  // Validación estricta de DNI peruano: exactamente 8 dígitos numéricos
  const dniRegex = /^\d{8}$/;
  if (!dniRegex.test(dni)) {
    alert("⚠️ El número de DNI debe contener exactamente 8 dígitos numéricos para verificar que eres un comensal real.");
    if (dniInput) dniInput.focus();
    return;
  }

  if (comment.length < 10) {
    alert("Por favor, escribe un comentario de al menos 10 caracteres compartiendo tu experiencia.");
    if (commentInput) commentInput.focus();
    return;
  }

  const newReview = {
    id: "rev_" + Date.now(),
    author: name,
    dni: dni,
    dish: dish,
    rating: currentReviewRating,
    comment: comment,
    date: new Date().toLocaleDateString("es-PE"),
    approved: false // En espera de aprobación del dueño para proteger la reputación del negocio
  };

  const reviews = getStoredReviews();
  reviews.push(newReview);
  saveStoredReviews(reviews);

  // Cerrar modal y limpiar
  closeReviewModal();
  e.target.reset();
  setReviewRating(5);

  showToast("¡Reseña registrada con éxito! Pasará por una breve validación.");

  // Ofrecer al comensal notificar al dueño por WhatsApp
  const confirmWa = confirm(
    "¡Muchas gracias por tu reseña!\n\nTu opinión ha sido registrada con tu DNI (" + dni + ") para garantizar comensales reales.\n\n¿Deseas enviar tu constancia de reseña por WhatsApp para que el dueño la apruebe de inmediato?"
  );

  if (confirmWa) {
    const stars = "⭐".repeat(newReview.rating);
    const textMsg = `*NUEVA RESEÑA VERIFICADA (DNI: ${dni})*\n\n` +
      `👤 *Cliente:* ${name}\n` +
      `🆔 *DNI:* ${dni}\n` +
      `🐟 *Plato:* ${dish}\n` +
      `⭐ *Calificación:* ${stars}\n` +
      `💬 *Comentario:* "${comment}"\n\n` +
      `_Enviado desde la web para aprobación en el portal._`;
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(textMsg)}`, "_blank");
  }
}
window.submitVerifiedReview = submitVerifiedReview;

// Panel de Moderación para el Dueño
function openAdminReviewModal() {
  if (!adminAuthed) {
    const pwd = prompt("Ingresa la clave de administrador para gestionar las reseñas:", "");
    if (pwd !== "delicias2026") {
      if (pwd !== null) {
        alert("Clave incorrecta. Solo el administrador puede gestionar las reseñas.");
      }
      return;
    }
    adminAuthed = true;
  }

  renderAdminReviewsList();
  const modal = document.getElementById("adminReviewModalBackdrop");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}
window.openAdminReviewModal = openAdminReviewModal;

function closeAdminReviewModal(event) {
  const modal = document.getElementById("adminReviewModalBackdrop");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}
window.closeAdminReviewModal = closeAdminReviewModal;

function renderAdminReviewsList() {
  const container = document.getElementById("adminContentWrap");
  if (!container) return;

  const reviews = getStoredReviews();
  const pending = reviews.filter(r => !r.approved);
  const approved = reviews.filter(r => r.approved);

  let html = `
    <div style="margin-bottom: 15px; font-size: 0.88rem; color: #475569;">
      <strong>Resumen:</strong> ${pending.length} pendientes de aprobación • ${approved.length} publicadas en la web.
    </div>
  `;

  if (reviews.length === 0) {
    html += `
      <div style="text-align: center; padding: 30px; color: #94a3b8;">
        <i class="fa-solid fa-inbox" style="font-size: 2rem; margin-bottom: 8px;"></i>
        <p>No hay reseñas registradas aún en el sistema.</p>
      </div>
    `;
    container.innerHTML = html;
    return;
  }

  html += `<h4 style="font-size: 0.95rem; color: #023e8a; margin: 15px 0 10px;">📋 Pendientes de Aprobación (${pending.length})</h4>`;
  if (pending.length === 0) {
    html += `<p style="font-size: 0.82rem; color: #64748b; font-style: italic;">No hay reseñas pendientes.</p>`;
  } else {
    html += `<div class="admin-reviews-list">`;
    pending.forEach(r => {
      const stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
      html += `
        <div class="admin-review-item">
          <div class="admin-review-header">
            <span class="admin-review-name">${escapeHtml(r.author)}</span>
            <span class="admin-review-dni"><i class="fa-solid fa-id-card"></i> DNI: ${r.dni}</span>
            <span style="color: #f77f00; font-size: 0.9rem;">${stars}</span>
          </div>
          <div class="admin-review-dish"><i class="fa-solid fa-utensils"></i> ${escapeHtml(r.dish || '')} • ${r.date}</div>
          <div class="admin-review-text">"${escapeHtml(r.comment)}"</div>
          <div class="admin-review-actions">
            <button class="btn-admin-approve" onclick="approveReview('${r.id}')">
              <i class="fa-solid fa-check"></i> Aprobar y Publicar
            </button>
            <button class="btn-admin-reject" onclick="deleteReview('${r.id}')">
              <i class="fa-solid fa-trash"></i> Descartar
            </button>
          </div>
        </div>
      `;
    });
    html += `</div>`;
  }

  html += `<h4 style="font-size: 0.95rem; color: #023e8a; margin: 20px 0 10px;">✅ Reseñas Publicadas (${approved.length})</h4>`;
  if (approved.length === 0) {
    html += `<p style="font-size: 0.82rem; color: #64748b; font-style: italic;">Aún no se ha publicado ninguna reseña.</p>`;
  } else {
    html += `<div class="admin-reviews-list">`;
    approved.forEach(r => {
      const stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
      html += `
        <div class="admin-review-item">
          <div class="admin-review-header">
            <span class="admin-review-name">${escapeHtml(r.author)}</span>
            <span class="admin-review-dni"><i class="fa-solid fa-id-card"></i> DNI: ${r.dni}</span>
            <span style="color: #f77f00; font-size: 0.9rem;">${stars}</span>
          </div>
          <div class="admin-review-dish"><i class="fa-solid fa-utensils"></i> ${escapeHtml(r.dish || '')} • ${r.date}</div>
          <div class="admin-review-text">"${escapeHtml(r.comment)}"</div>
          <div class="admin-review-actions">
            <button class="btn-admin-reject" onclick="unpublishReview('${r.id}')">
              <i class="fa-solid fa-eye-slash"></i> Despublicar
            </button>
            <button class="btn-admin-reject" onclick="deleteReview('${r.id}')">
              <i class="fa-solid fa-trash"></i> Eliminar
            </button>
          </div>
        </div>
      `;
    });
    html += `</div>`;
  }

  container.innerHTML = html;
}

function approveReview(id) {
  const reviews = getStoredReviews();
  const target = reviews.find(r => r.id === id);
  if (target) {
    target.approved = true;
    saveStoredReviews(reviews);
    renderReviews();
    renderAdminReviewsList();
    showToast("¡Reseña aprobada y publicada en la web!");
  }
}
window.approveReview = approveReview;

function unpublishReview(id) {
  const reviews = getStoredReviews();
  const target = reviews.find(r => r.id === id);
  if (target) {
    target.approved = false;
    saveStoredReviews(reviews);
    renderReviews();
    renderAdminReviewsList();
    showToast("Reseña despublicada.");
  }
}
window.unpublishReview = unpublishReview;

function deleteReview(id) {
  if (!confirm("¿Seguro que deseas descartar/eliminar esta reseña?")) return;
  let reviews = getStoredReviews();
  reviews = reviews.filter(r => r.id !== id);
  saveStoredReviews(reviews);
  renderReviews();
  renderAdminReviewsList();
  showToast("Reseña eliminada.");
}
window.deleteReview = deleteReview;

// ==========================================================================
// EVENT LISTENERS DOMContentLoaded
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Renderizar carta inicial, carrito y reseñas
  renderMenu();
  updateCartUI();
  renderReviews();

  // Filtrado por Categorías
  const categoryButtons = document.querySelectorAll(".category-tab-btn");
  categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      setCategory(btn.getAttribute("data-category"));
    });
  });

  // Búsqueda en vivo con debounce suave
  const searchInput = document.getElementById("menuSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderMenu();
    });
  }

  // Toggle de navegación móvil
  const mobileToggle = document.getElementById("mobileNavToggle");
  const navMenu = document.getElementById("navMenu");
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      const icon = mobileToggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
      }
    });

    // Cerrar al dar clic en enlaces del menú móvil
    navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        const icon = mobileToggle.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-xmark");
        }
      });
    });
  }

  // Cerrar Drawer al hacer clic en el overlay
  const overlay = document.getElementById("cartOverlay");
  if (overlay) {
    overlay.addEventListener("click", closeCartDrawer);
  }

  // Cerrar Modales con tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCartDrawer();
      closeQuickView();
      closeQrModal();
      closeReviewModal();
      closeAdminReviewModal();
    }
  });

  // Cerrar modal al hacer clic afuera del dialog
  const qvModal = document.getElementById("quickViewModal");
  if (qvModal) {
    qvModal.addEventListener("click", (e) => {
      if (e.target === qvModal) {
        closeQuickView();
      }
    });
  }
});
