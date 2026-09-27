/**
 * CEVICHERÍA LAS DELICIAS - BAR & CEVICHERÍA LA CURVA
 * Sistema Interactivo de Menú, Carrito de Compras y Pedidos por WhatsApp
 */

// Teléfono oficial para pedidos por WhatsApp (Perú +51)
// Puedes cambiar este número por el número real del negocio
const WHATSAPP_PHONE = "51987654321";

// ==========================================================================
// BASE DE DATOS DE PLATILLOS (CON IMÁGENES REFERENCIALES DE ALTA CALIDAD)
// ==========================================================================
const MENU_DATA = [
  // --- CEVICHES & TIRADITOS ---
  {
    id: "ceviche-clasico",
    name: "Ceviche Clásico Las Delicias",
    category: "ceviches",
    price: 32.00,
    tag: "El Más Pedido",
    tagType: "tag-chef",
    spicyLevel: 2,
    portion: "Personal generoso",
    image: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=800&auto=format&fit=crop&q=80",
    description: "Cubos de pescado blanco fresco del día curados al momento con zumo de limón norteño, ají limo picadito y cebolla roja crujiente. Acompañado de camote glaseado, choclo desgranado y canchita chulpi crocante.",
    ingredients: "Pescado del día, limón de Chulucanas, ají limo, cebolla roja, camote glaseado, choclo y canchita."
  },
  {
    id: "ceviche-mixto",
    name: "Ceviche Mixto Especial",
    category: "ceviches",
    price: 38.00,
    tag: "Especialidad",
    tagType: "tag-chef",
    spicyLevel: 2,
    portion: "1 a 2 personas",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&auto=format&fit=crop&q=80",
    description: "Fresquísimo pescado blanco combinado con mixtura marina: pulpo tierno, langostinos y calamar sellado, bañados en nuestra leche de tigre secreta con toque de culantro y rocoto.",
    ingredients: "Pescado fresco, pulpo, langostinos, calamares, limón, ají limo, camote y choclo tierno."
  },
  {
    id: "ceviche-carretillero",
    name: "Ceviche Carretillero Bravazo",
    category: "ceviches",
    price: 39.00,
    tag: "Favorito de la Casa",
    tagType: "tag-spicy",
    spicyLevel: 3,
    portion: "Bien despachado",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&auto=format&fit=crop&q=80",
    description: "El clásico ceviche norteño de pescado con su toque picantito coronado con una montaña de crocante chicharrón de calamar dorado al instante y salsa tártara de la casa.",
    ingredients: "Pescado del día, chicharrón de calamar crispy, leche de tigre al ají limo, camote y canchita."
  },
  {
    id: "tiradito-aji-amarillo",
    name: "Tiradito en Crema de Ají Amarillo",
    category: "ceviches",
    price: 36.00,
    tag: "Gourmet",
    tagType: "tag-chef",
    spicyLevel: 1,
    portion: "1 a 2 personas",
    image: "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?w=800&auto=format&fit=crop&q=80",
    description: "Finas láminas de pescado blanco bañadas en una suave y aterciopelada emulsión de ají amarillo ahumado, zumo de limón y aceite de oliva. Coronado con choclo desgranado.",
    ingredients: "Láminas de pescado fresco, crema de ají amarillo, limón norteño, choclo y camote."
  },
  {
    id: "leche-de-tigre",
    name: "Copa Leche de Tigre La Curva",
    category: "ceviches",
    price: 24.00,
    tag: "Afrodisíaco",
    tagType: "tag-spicy",
    spicyLevel: 3,
    portion: "Copa gigante 16oz",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80",
    description: "Poderoso concentrado marino con trozos de pescado fresco, mariscos salteados, jugo de limón, ají limo, choclo, canchita serrana y topping de calamar crocante.",
    ingredients: "Concentrado de ceviche, mixtura marina, ají limo, canchita, choclo y calamar frito."
  },

  // --- CHICHARRONES & JALEAS ---
  {
    id: "jalea-mixta",
    name: "Jalea Mixta Marina Familiar",
    category: "chicharrones",
    price: 52.00,
    tag: "Para Compartir",
    tagType: "tag-combo",
    spicyLevel: 0,
    portion: "Familiar (2-3 personas)",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&auto=format&fit=crop&q=80",
    description: "Festín crujiente con trozos de pescado, aros de calamar, langostinos enteros y pulpo rebozados en masa crocante dorada. Servido sobre yucas fritas y coronado con abundante salsa criolla y tártara casera.",
    ingredients: "Pescado, langostinos, calamares, yucas doradas, salsa criolla al limón y tártara."
  },
  {
    id: "chicharron-pescado",
    name: "Chicharrón de Pescado Crocante",
    category: "chicharrones",
    price: 34.00,
    tag: "Muy Crocante",
    tagType: "tag-chef",
    spicyLevel: 0,
    portion: "1 a 2 personas",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=800&auto=format&fit=crop&q=80",
    description: "Trozos de pescado marinados con mostaza, ajo y hierbas aromáticas, rebozados y fritos a temperatura perfecta. Acompañado de bastones de yuca frita y salsa tártara.",
    ingredients: "Filete de pescado en cubos, rebozado crujiente, yucas fritas y salsas de la casa."
  },
  {
    id: "chicharron-calamar",
    name: "Chicharrón de Calamar Crispy",
    category: "chicharrones",
    price: 36.00,
    tag: "Clásico del Bar",
    tagType: "tag-chef",
    spicyLevel: 0,
    portion: "Para picar o plato",
    image: "https://images.unsplash.com/photo-1604908177453-7462950a6a3b?w=800&auto=format&fit=crop&q=80",
    description: "Aros tiernos de calamar empanizados en harina sazonada y fritos hasta quedar ultra dorados y crocantes. Servidos con salsa tártara fresca y limón.",
    ingredients: "Aros de calamar seleccionados, masa especial de la casa, tártara y limón."
  },

  // --- ARROCES & PLATOS CALIENTES ---
  {
    id: "arroz-mariscos",
    name: "Arroz con Mariscos Tradicional",
    category: "arroces",
    price: 38.00,
    tag: "Estrella de la Carta",
    tagType: "tag-chef",
    spicyLevel: 1,
    portion: "Plato hondo generoso",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&auto=format&fit=crop&q=80",
    description: "Arroz al dente con sofrito de ají panca, ají amarillo y vino blanco, salteado con langostinos, conchas de abanico, calamares y pulpo. Terminado con queso parmesano derretido y salsa criolla.",
    ingredients: "Arroz criollo, langostinos, pulpo, calamar, conchas, pimiento, arvejitas y parmesano."
  },
  {
    id: "arroz-chaufa-mariscos",
    name: "Chaufa Marino al Wok",
    category: "arroces",
    price: 37.00,
    tag: "Fusión Criollo-Chifa",
    tagType: "tag-chef",
    spicyLevel: 0,
    portion: "1 a 2 personas",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&auto=format&fit=crop&q=80",
    description: "Arroz salteado en wok a fuego volcánico con mariscos surtidos, tortilla de huevo en cubos, cebollita china, toques de kion, sillao especial y aceite de ajonjolí.",
    ingredients: "Arroz salteado al wok, mixtura de mariscos, sillao, cebolla china, kion y ajonjolí."
  },
  {
    id: "parihuela-especial",
    name: "Parihuela Levanta Muertos",
    category: "arroces",
    price: 44.00,
    tag: "Poderosa y Nutritiva",
    tagType: "tag-spicy",
    spicyLevel: 2,
    portion: "Tazón familiar",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop&q=80",
    description: "Sustanciosa sopa marina tradicional hervida a fuego lento con filete de pescado, cangrejo entero, langostinos, choros, chicha de jora, culantro y ajíes norteños.",
    ingredients: "Cangrejo entero, filete de pescado, langostinos, choros, conchas, chicha de jora y culantro."
  },
  {
    id: "tacu-tacu-mariscos",
    name: "Tacu Tacu en Salsa de Mariscos",
    category: "arroces",
    price: 42.00,
    tag: "Recomendado",
    tagType: "tag-chef",
    spicyLevel: 1,
    portion: "Plato fuerte bien servido",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80",
    description: "Sábana dorada y crujiente de frijoles canarios batidos con arroz criollo, bañada con una cremosa y abundante salsa de mariscos flambeados al pisco y ají amarillo.",
    ingredients: "Frijoles canarios, arroz dorado, mixtura de mariscos en salsa madre y pisco."
  },

  // --- CAUSAS & ENTRADAS ---
  {
    id: "causa-cangrejo",
    name: "Causa con Pulpa de Cangrejo",
    category: "causas",
    price: 28.00,
    tag: "100% Fresca",
    tagType: "tag-chef",
    spicyLevel: 1,
    portion: "Entrada para compartir",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80",
    description: "Fina y sedosa masa de papa amarilla prensada con pasta de ají amarillo y limón, rellena de pura pulpa de cangrejo seleccionada, palta fuerte y mayonesa casera.",
    ingredients: "Papa amarilla, ají amarillo, limón, pulpa de cangrejo, palta y huevo duro."
  },
  {
    id: "tequenos-marinos",
    name: "Tequeños Marinos con Guacamole",
    category: "causas",
    price: 24.00,
    tag: "Ideal para Picar",
    tagType: "tag-combo",
    spicyLevel: 0,
    portion: "Porción de 10 unidades",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=800&auto=format&fit=crop&q=80",
    description: "Diez rollitos crocantes de masa wantán rellenos de queso fundido y trocitos de mariscos sazonados. Acompañados de un cremoso guacamole criollo con limón.",
    ingredients: "Masa wantán crocante, queso paria, mariscos y guacamole fresco al limón."
  },
  {
    id: "pulpo-olivo",
    name: "Pulpo al Olivo La Curva",
    category: "causas",
    price: 36.00,
    tag: "Exquisito",
    tagType: "tag-chef",
    spicyLevel: 0,
    portion: "Entrada fría",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80",
    description: "Finas láminas de pulpo tierno cocido a la perfección sobre rodajas de palta y galletitas saladas, bañadas en nuestra salsa suave de aceitunas botija moradas y aceite de oliva.",
    ingredients: "Pulpo tierno, crema de aceitunas negras botija, palta y galletas de soda."
  },

  // --- DÚOS & TRÍOS MARINOS ---
  {
    id: "duo-marino",
    name: "Dúo Marino Clásico",
    category: "combos",
    price: 42.00,
    tag: "El Más Vendido",
    tagType: "tag-combo",
    spicyLevel: 2,
    portion: "1 a 2 personas",
    image: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=800&auto=format&fit=crop&q=80",
    description: "La combinación marina peruana por excelencia: una porción generosa de Ceviche Mixto acompañada de crujiente Chicharrón de Pescado con sus yucas y salsa tártara.",
    ingredients: "Ceviche Mixto + Chicharrón de Pescado con yucas, camote y choclo."
  },
  {
    id: "trio-las-delicias",
    name: "Trío Marino Las Delicias",
    category: "combos",
    price: 52.00,
    tag: "Plato Bandera",
    tagType: "tag-combo",
    spicyLevel: 2,
    portion: "Para 2 personas",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&auto=format&fit=crop&q=80",
    description: "El tridente perfecto de sabor costeño: Ceviche Clásico de Pescado + sabroso Arroz con Mariscos humeante + Chicharrón de Calamar crujiente con tártara casera.",
    ingredients: "Ceviche de pescado fresco + Arroz con mariscos + Chicharrón crocante."
  },
  {
    id: "ronda-marina",
    name: "Ronda Marina 4 Sabores La Curva",
    category: "combos",
    price: 85.00,
    tag: "Familiar Premium",
    tagType: "tag-combo",
    spicyLevel: 2,
    portion: "Para 3 a 4 personas",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80",
    description: "Bandeja imperial con los 4 pilares de nuestra cocina: Ceviche Mixto Especial, Arroz con Mariscos al Parmesano, Jalea Mixta Marina y Causa de Pulpa de Cangrejo.",
    ingredients: "Ceviche Mixto, Arroz con Mariscos, Jalea Marina y Causa rellena."
  },

  // --- BAR & BEBIDAS ---
  {
    id: "chicha-morada-jarra",
    name: "Jarra de Chicha Morada (1 Litro)",
    category: "bebidas",
    price: 16.00,
    tag: "100% Natural",
    tagType: "tag-chef",
    spicyLevel: 0,
    portion: "Jarra de 1 Litro",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80",
    description: "Elaborada artesanalmente con maíz morado hervido con piña golden, manzana, membrillo, canela, clavo de olor y el toque justo de zumo de limón fresco.",
    ingredients: "Maíz morado, piña, manzana, canela, clavo de olor, limón y azúcar al gusto."
  },
  {
    id: "pisco-sour",
    name: "Pisco Sour Catedral",
    category: "bebidas",
    price: 26.00,
    tag: "Clásico Peruano",
    tagType: "tag-chef",
    spicyLevel: 0,
    portion: "Copa Catedral",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&auto=format&fit=crop&q=80",
    description: "Nuestro coctel nacional preparado con Pisco Quebranta de alta gama, zumo de limón sutil recién exprimido, jarabe de goma, clara de huevo espumosa y gotas de amargo de angostura.",
    ingredients: "Pisco Quebranta, limón, jarabe, clara de huevo y gotas de angostura."
  },
  {
    id: "chilcano-maracuya",
    name: "Chilcano de Maracuyá / Clásico",
    category: "bebidas",
    price: 22.00,
    tag: "Refrescante",
    tagType: "tag-chef",
    spicyLevel: 0,
    portion: "Vaso largo 14oz",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&auto=format&fit=crop&q=80",
    description: "Refrescante mezcla de pisco aromático, zumo natural de maracuyá de la costa, ginger ale bien fría, cubos de hielo y rodaja de limón.",
    ingredients: "Pisco peruano, maracuyá concentrado, ginger ale y hielo cristalino."
  },
  {
    id: "cerveza-helada",
    name: "Cerveza Cusqueña / Pilsen Heladita",
    category: "bebidas",
    price: 12.00,
    tag: "Al Polo",
    tagType: "tag-combo",
    spicyLevel: 0,
    portion: "Botella 330ml / 630ml",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&auto=format&fit=crop&q=80",
    description: "Cerveza peruana servida al polo, perfecta para acompañar y contrastar la frescura de nuestros ceviches y jaleas crujientes.",
    ingredients: "Cerveza rubia o trigo seleccionada bien fría."
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
          <img src="${dish.image}" alt="${escapeHtml(dish.name)}" class="dish-image" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=800&auto=format&fit=crop&q=80'">
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
        <input type="tel" id="orderCustomerPhone" placeholder="Ej. 987654321" required>
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
        <select id="orderPaymentMethod" onchange="toggleCashInput(this.value)">
          <option value="Yape / Plin">Yape o Plin (Transferencia al instante)</option>
          <option value="Efectivo">Efectivo contra entrega</option>
          <option value="Tarjeta">Tarjeta (POS inalámbrico)</option>
        </select>
      </div>

      <div id="cashInputGroup" class="form-group-cart" style="display: none;">
        <label for="orderCashAmount">¿Con cuánto vas a pagar? (Para llevarte vuelto exacto)</label>
        <input type="text" id="orderCashAmount" placeholder="Ej. Billete de S/ 100">
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

function toggleCashInput(value) {
  const group = document.getElementById("cashInputGroup");
  if (group) {
    group.style.display = value === "Efectivo" ? "block" : "none";
  }
}

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
  if (paymentMethod === "Efectivo" && cashAmount) {
    msg += `💵 *Paga con:* ${cashAmount}\n`;
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
  document.getElementById("modalDishCat").textContent = dish.category.toUpperCase();
  document.getElementById("modalDishTitle").textContent = dish.name;
  document.getElementById("modalDishPrice").textContent = `S/ ${dish.price.toFixed(2)}`;
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

// ==========================================================================
// EVENT LISTENERS DOMContentLoaded
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Renderizar carta inicial y carrito
  renderMenu();
  updateCartUI();

  // Filtrado por Categorías
  const categoryButtons = document.querySelectorAll(".category-tab-btn");
  categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      renderMenu();
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

  // Cerrar QuickView con tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCartDrawer();
      closeQuickView();
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
