/**
 * CEVICHERÍA LAS DELICIAS - BAR & CEVICHERÍA LA CURVA
 * Sistema Interactivo de Menú, Carrito de Compras y Pedidos por WhatsApp
 */

// Teléfono oficial para pedidos por WhatsApp (Perú +51)
// Puedes cambiar este número por el número real del negocio
const WHATSAPP_PHONE = "51978213644";

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
    description: "Cubos de pescado blanco fresco preparados al momento con zumo de limón fresco recién exprimido, ají limo, cebolla roja crujiente, camote y canchita crocante.",
    ingredients: "Pescado del día, limón fresco, ají limo, cebolla roja, camote y canchita."
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
    description: "Porción generosa y bien servida de pescado fresco preparado al instante con jugo de limón fresco seleccionado, ají limo, camote glaseado, choclo desgranado y canchita.",
    ingredients: "Pescado fresco del día, limón fresco seleccionado, ají limo, cebolla roja, camote glaseado, choclo y canchita."
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
    ingredients: "Pescado fresco, mixtura marina seleccionada, limón fresco, ají limo, camote glaseado y choclo tierno."
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
    ingredients: "Pescado del día, limón fresco, ají limo, abundante camote, choclo desgranado y canchita crocante."
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
    description: "Poderoso concentrado marino con trozos de pescado fresco, jugo de limón fresco, ají limo, canchita crocante y choclo desgranado.",
    ingredients: "Concentrado de ceviche, trozos de pescado fresco, ají limo, canchita crocante y choclo."
  },
  {
    id: "choros-chalaca",
    name: "Choros a la Chalaca",
    category: "ceviches",
    price: 20.00,
    tag: "Clásico Marino",
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
    description: "Arroz al dente con sofrito criollo de ají amarillo, vino blanco y especias de la casa, salteado con abundante mixtura de mariscos y terminado con salsa criolla.",
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
    description: "Limonada frappé ultra refrescante preparada al instante con limones frescos recién exprimidos y abundante hielo frappé.",
    ingredients: "Limones frescos seleccionados, hielo frappé y jarabe."
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
    description: "Jugo natural de pura fruta de maracuyá seleccionada con su toque cítrico inconfundible, ideal para acompañar platos marinos.",
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
    description: "Auténtica chicha morada tradicional hervida artesanalmente con maíz morado, piña, manzana, canela, clavo de olor y limón fresco.",
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

// Estado persistente del formulario de pedido para evitar pérdida de datos al actualizar cantidades
let cartFormState = {
  deliveryType: "delivery",
  customerName: "",
  customerPhone: "",
  address: "",
  tableNumber: "",
  paymentMethod: "Yape / Plin (Billetera Digital con QR)",
  cashAmount: "",
  notes: ""
};

// Inicialización desde LocalStorage si existe
try {
  const savedCart = localStorage.getItem("las_delicias_cart");
  if (savedCart) {
    const parsedCart = JSON.parse(savedCart);
    if (Array.isArray(parsedCart)) {
      cart = parsedCart.filter(item => item && typeof item.id === "string" && typeof item.price === "number" && item.qty > 0);
    }
  }
  const savedCustomer = localStorage.getItem("las_delicias_customer");
  if (savedCustomer) {
    const parsedCustomer = JSON.parse(savedCustomer);
    if (parsedCustomer && typeof parsedCustomer === "object") {
      cartFormState.customerName = sanitizeText(parsedCustomer.customerName || "", 50).replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]/g, "");
      cartFormState.customerPhone = sanitizeText(parsedCustomer.customerPhone || "", 9).replace(/[^0-9]/g, "").slice(0, 9);
      cartFormState.address = sanitizeText(parsedCustomer.address || "", 120);
    }
  }
} catch (e) {
  cart = [];
}

// Funciones de validación y filtrado en tiempo real para inputs
function filterOnlyLetters(inputEl) {
  if (!inputEl) return;
  const cleaned = inputEl.value
    .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]/g, "")
    .replace(/^\s+/, "")
    .replace(/\s{2,}/g, " ");
  if (inputEl.value !== cleaned) {
    inputEl.value = cleaned;
  }
}
window.filterOnlyLetters = filterOnlyLetters;

function filterOnlyDigits(inputEl, maxLen = 9) {
  if (!inputEl) return;
  const cleaned = inputEl.value.replace(/[^0-9]/g, "").slice(0, maxLen);
  if (inputEl.value !== cleaned) {
    inputEl.value = cleaned;
  }
}
window.filterOnlyDigits = filterOnlyDigits;

function filterCashAmountInput(inputEl) {
  if (!inputEl) return;
  let cleaned = inputEl.value.replace(/[^0-9.]/g, "");
  const parts = cleaned.split(".");
  if (parts.length > 2) {
    cleaned = parts[0] + "." + parts.slice(1).join("");
  }
  if (parts[1] && parts[1].length > 2) {
    cleaned = parts[0] + "." + parts[1].slice(0, 2);
  }
  cleaned = cleaned.slice(0, 8);
  if (inputEl.value !== cleaned) {
    inputEl.value = cleaned;
  }
}
window.filterCashAmountInput = filterCashAmountInput;

// Normalizador de texto sin tildes/acentos para búsquedas inteligentes
function normalizeSearchText(str) {
  if (!str) return "";
  return String(str)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function updateSearchIconUI() {
  const btn = document.getElementById("searchClearBtn");
  if (!btn) return;
  if (searchQuery.length > 0) {
    btn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    btn.setAttribute("aria-label", "Limpiar búsqueda");
    btn.setAttribute("title", "Limpiar búsqueda");
  } else {
    btn.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';
    btn.setAttribute("aria-label", "Buscar");
    btn.setAttribute("title", "Buscar");
  }
}

function handleSearchBtnClick() {
  const searchInput = document.getElementById("menuSearchInput");
  if (!searchInput) return;
  if (searchQuery.length > 0) {
    searchQuery = "";
    searchInput.value = "";
    updateSearchIconUI();
    renderMenu();
    searchInput.focus();
  } else {
    searchInput.focus();
  }
}
window.handleSearchBtnClick = handleSearchBtnClick;

// ==========================================================================
// RENDERIZADO DEL MENÚ DE PLATILLOS
// ==========================================================================
function renderMenu() {
  const grid = document.getElementById("dishesGrid");
  if (!grid) return;

  const normalizedQuery = normalizeSearchText(searchQuery);

  const filteredDishes = MENU_DATA.filter(dish => {
    const matchesCat = currentCategory === "all" || dish.category === currentCategory;
    if (!matchesCat) return false;
    if (!normalizedQuery) return true;
    const matchesQuery = normalizeSearchText(dish.name).includes(normalizedQuery) ||
      normalizeSearchText(dish.description).includes(normalizedQuery) ||
      normalizeSearchText(dish.ingredients).includes(normalizedQuery) ||
      normalizeSearchText(dish.tag || "").includes(normalizedQuery);
    return matchesQuery;
  });

  if (filteredDishes.length === 0) {
    grid.innerHTML = `
      <div class="no-results-msg">
        <i class="fa-solid fa-fish"></i>
        <h3>No encontramos platillos con "${escapeHtml(searchQuery)}"</h3>
        <p>Prueba con otra palabra clave como "ceviche", "arroz", "chicharrón" o selecciona una categoría arriba.</p>
        ${searchQuery ? `<button type="button" class="btn-add-cart" onclick="handleSearchBtnClick()" style="margin-top: 14px;"><i class="fa-solid fa-rotate-left"></i> Mostrar todos los platos</button>` : ''}
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
    showToast("Carrito vaciado.");
  }
}
window.clearCart = clearCart;

// Captura los valores actuales del formulario del carrito antes de re-renderizar
function captureCartFormStateFromDOM() {
  const checkedDelivery = document.querySelector('input[name="deliveryType"]:checked');
  if (checkedDelivery) cartFormState.deliveryType = checkedDelivery.value;

  const nameEl = document.getElementById("orderCustomerName");
  if (nameEl) cartFormState.customerName = nameEl.value;

  const phoneEl = document.getElementById("orderCustomerPhone");
  if (phoneEl) cartFormState.customerPhone = phoneEl.value;

  const addressEl = document.getElementById("orderAddress");
  if (addressEl) cartFormState.address = addressEl.value;

  const tableEl = document.getElementById("orderTableNumber");
  if (tableEl) cartFormState.tableNumber = tableEl.value;

  const paymentEl = document.getElementById("orderPaymentMethod");
  if (paymentEl) cartFormState.paymentMethod = paymentEl.value;

  const cashEl = document.getElementById("orderCashAmount");
  if (cashEl) cartFormState.cashAmount = cashEl.value;

  const notesEl = document.getElementById("orderNotes");
  if (notesEl) cartFormState.notes = notesEl.value;

  try {
    localStorage.setItem("las_delicias_customer", JSON.stringify({
      customerName: cartFormState.customerName,
      customerPhone: cartFormState.customerPhone,
      address: cartFormState.address
    }));
  } catch (e) {
    // Ignorar error de cuota de almacenamiento
  }
}

function updateCartUI() {
  // Preservar lo que el usuario haya escrito antes de re-renderizar el DOM
  captureCartFormStateFromDOM();

  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  // Actualizar contadores en la barra y botón flotante
  const headerBadge = document.getElementById("headerCartBadge");
  const floatingBadge = document.getElementById("floatingCartBadge");
  const drawerCounter = document.getElementById("drawerCartCount");
  const btnClearCart = document.getElementById("btnClearCart");

  if (headerBadge) headerBadge.textContent = totalCount;
  if (floatingBadge) floatingBadge.textContent = totalCount;
  if (drawerCounter) drawerCounter.textContent = `(${totalCount})`;
  if (btnClearCart) btnClearCart.style.display = cart.length > 0 ? "inline-flex" : "none";

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
  const deliveryType = cartFormState.deliveryType || 'delivery';
  const paymentMethod = (cartFormState.paymentMethod && cartFormState.paymentMethod.includes("Efectivo"))
    ? "Efectivo contra entrega"
    : "Yape / Plin (Billetera Digital con QR)";
  cartFormState.paymentMethod = paymentMethod;
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
      <img src="${item.image}" alt="${escapeHtml(item.name)}" class="cart-item-thumb" onerror="this.src='assets/images/ceviche-simple.png'">
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

  // Formulario de datos de pedido (con preservación de estado)
  cartBody.innerHTML = `
    <div class="cart-items-list">
      ${itemsHtml}
    </div>

    <div class="order-form-section" oninput="captureCartFormStateFromDOM()">
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
        <label for="orderCustomerName">Tu Nombre Completo * <small style="font-weight:400;color:#64748b;">(Solo letras)</small></label>
        <input type="text" id="orderCustomerName" value="${escapeHtml(cartFormState.customerName)}" placeholder="Ej. Juan Pérez" maxlength="50" minlength="3" autocomplete="name" oninput="filterOnlyLetters(this); captureCartFormStateFromDOM();" required>
      </div>

      <div class="form-group-cart">
        <label for="orderCustomerPhone">Celular / WhatsApp (9 dígitos) *</label>
        <input type="tel" id="orderCustomerPhone" value="${escapeHtml(cartFormState.customerPhone)}" placeholder="Ej. 978213644" maxlength="9" minlength="9" pattern="9[0-9]{8}" inputmode="numeric" oninput="filterOnlyDigits(this, 9); captureCartFormStateFromDOM();" required>
      </div>

      <div id="deliveryAddressGroup" class="form-group-cart" style="${deliveryType === 'delivery' ? 'display:block;' : 'display:none;'}">
        <label for="orderAddress">Dirección de Entrega y Referencia *</label>
        <input type="text" id="orderAddress" value="${escapeHtml(cartFormState.address)}" placeholder="Ej. Av. Cajamarca 800 (Frente a la plaza)" maxlength="120" minlength="6">
      </div>

      <div id="tableNumberGroup" class="form-group-cart" style="${deliveryType === 'table' ? 'display:block;' : 'display:none;'}">
        <label for="orderTableNumber">Número de Mesa *</label>
        <input type="text" id="orderTableNumber" value="${escapeHtml(cartFormState.tableNumber)}" placeholder="Ej. 4" maxlength="2" inputmode="numeric" oninput="filterOnlyDigits(this, 2); captureCartFormStateFromDOM();">
      </div>

      <div class="form-group-cart">
        <label for="orderPaymentMethod">Método de Pago Preferido</label>
        <select id="orderPaymentMethod" onchange="togglePaymentMethodDetails(this.value)">
          <option value="Yape / Plin (Billetera Digital con QR)" ${paymentMethod.includes("Yape") ? "selected" : ""}>📱 Yape / Plin (Billetera Digital con QR)</option>
          <option value="Efectivo contra entrega" ${paymentMethod.includes("Efectivo") ? "selected" : ""}>💵 Efectivo</option>
        </select>
      </div>

      <!-- Caja Interactiva para Yape / Plin con Código QR -->
      <div id="qrPaymentBox" class="qr-payment-cart-box" style="${paymentMethod.includes("Yape") ? 'display:block;' : 'display:none;'}">
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
              <strong class="qr-phone-number">978 213 644</strong>
              <button type="button" class="btn-copy-clip" onclick="copyPaymentNumber('978213644', this)" title="Copiar número">
                <i class="fa-regular fa-copy"></i> Copiar
              </button>
            </div>
          </div>
          <div class="qr-data-row">
            <span class="qr-label">Titular:</span>
            <span class="qr-value-name">Maria Nieves Novoa Salas</span>
          </div>
        </div>

        <p class="qr-instruction-tip">
          <i class="fa-solid fa-circle-check" style="color: #25d366;"></i> Escanea el QR o transfiere al número. Envía la captura del comprobante por WhatsApp al confirmar tu pedido.
        </p>
      </div>

      <!-- Caja para Efectivo -->
      <div id="cashInputGroup" class="form-group-cart" style="${paymentMethod.includes("Efectivo") ? 'display:block;' : 'display:none;'}">
        <label for="orderCashAmount">¿Con cuánto vas a pagar en S/? (Para llevarte vuelto exacto)</label>
        <input type="text" id="orderCashAmount" value="${escapeHtml(cartFormState.cashAmount)}" placeholder="Ej. 50 o 100 (Solo números)" maxlength="8" inputmode="decimal" oninput="filterCashAmountInput(this); captureCartFormStateFromDOM();">
      </div>

      <div class="form-group-cart">
        <label for="orderNotes">Notas de Cocina / Preferencias</label>
        <textarea id="orderNotes" rows="2" placeholder="Ej. Cancha extra, sin cebolla, ají bien picante aparte, etc." maxlength="200">${escapeHtml(cartFormState.notes)}</textarea>
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
  cartFormState.paymentMethod = value;
  const qrBox = document.getElementById("qrPaymentBox");
  const cashBox = document.getElementById("cashInputGroup");

  if (qrBox) {
    qrBox.style.display = value.includes("Yape") ? "block" : "none";
  }
  if (cashBox) {
    cashBox.style.display = value.includes("Efectivo") ? "block" : "none";
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

// Control centralizado del bloqueo de scroll cuando hay modales o drawers abiertos
function syncBodyScrollLock() {
  const anyActive = document.querySelector(
    "#cartDrawer.active, #quickViewModal.active, #qrModalBackdrop.active, #reviewModalBackdrop.active, #adminReviewModalBackdrop.active, #welcomeNoticeBackdrop.active"
  );
  document.body.style.overflow = anyActive ? "hidden" : "";
}

// Modal de Anuncio de Bienvenida (Comprobante de Pago)
const WELCOME_NOTICE_STORAGE_KEY = "las_delicias_hide_payment_notice";

function checkAndShowWelcomeNotice() {
  try {
    const hideNotice = localStorage.getItem(WELCOME_NOTICE_STORAGE_KEY);
    if (hideNotice === "true") return;
  } catch (e) {
    // Continuar si localStorage no está disponible
  }
  const modal = document.getElementById("welcomeNoticeBackdrop");
  if (modal) {
    modal.classList.add("active");
    syncBodyScrollLock();
  }
}

function closeWelcomeNotice(event) {
  const modal = document.getElementById("welcomeNoticeBackdrop");
  const checkbox = document.getElementById("dontShowWelcomeNoticeAgain");
  if (checkbox && checkbox.checked) {
    try {
      localStorage.setItem(WELCOME_NOTICE_STORAGE_KEY, "true");
    } catch (e) {
      console.warn("No se pudo guardar la preferencia del anuncio:", e);
    }
  }
  if (modal) {
    modal.classList.remove("active");
    syncBodyScrollLock();
  }
}
window.closeWelcomeNotice = closeWelcomeNotice;

// Modal QR Yape / Plin
function openQrModal() {
  const modal = document.getElementById("qrModalBackdrop");
  if (modal) {
    modal.classList.add("active");
    syncBodyScrollLock();
  }
}

function closeQrModal(event) {
  const modal = document.getElementById("qrModalBackdrop");
  if (modal) {
    modal.classList.remove("active");
    syncBodyScrollLock();
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

  captureCartFormStateFromDOM();

  const nameInput = document.getElementById("orderCustomerName");
  const phoneInput = document.getElementById("orderCustomerPhone");
  const deliveryType = document.querySelector('input[name="deliveryType"]:checked')?.value || 'delivery';
  const addressInput = document.getElementById("orderAddress");
  const tableInput = document.getElementById("orderTableNumber");
  const paymentMethod = document.getElementById("orderPaymentMethod")?.value || "Yape / Plin (Billetera Digital con QR)";
  const cashAmountInput = document.getElementById("orderCashAmount");
  const cashAmountRaw = cashAmountInput ? cashAmountInput.value.trim() : "";
  const notesInput = document.getElementById("orderNotes");

  const customerName = sanitizeText(nameInput ? nameInput.value : "", 50);
  const customerPhone = sanitizeText(phoneInput ? phoneInput.value : "", 9);
  const deliveryAddress = sanitizeText(addressInput ? addressInput.value : "", 120);
  const tableNumber = sanitizeText(tableInput ? tableInput.value : "", 5);
  const notes = sanitizeText(notesInput ? notesInput.value : "", 200);

  // 1. Validación estricta del Nombre (solo letras y espacios, mínimo 3 letras)
  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]{3,50}$/;
  const lettersCount = customerName.replace(/\s/g, "").length;
  if (!customerName || !nameRegex.test(customerName) || lettersCount < 3) {
    alert("⚠️ Por favor, ingresa un Nombre válido (solo letras, mínimo 3 caracteres).");
    if (nameInput) nameInput.focus();
    return;
  }

  // 2. Validación estricta del Celular (exactamente 9 dígitos numéricos y empieza con 9)
  const phoneRegex = /^9\d{8}$/;
  if (!phoneRegex.test(customerPhone)) {
    alert("⚠️ Por favor, ingresa un número de celular válido de 9 dígitos que empiece con 9 (Ejemplo: 978213644).");
    if (phoneInput) phoneInput.focus();
    return;
  }

  // 3. Validación de Dirección para Delivery
  if (deliveryType === 'delivery') {
    if (!deliveryAddress || deliveryAddress.length < 6 || !/[a-zA-ZáéíóúÁÉÍÓÚñÑ]/.test(deliveryAddress)) {
      alert("⚠️ Por favor, ingresa una dirección de entrega detallada y válida (mínimo 6 caracteres).");
      if (addressInput) addressInput.focus();
      return;
    }
  }

  // 4. Validación de Número de Mesa para Consumo en Mesa
  if (deliveryType === 'table') {
    const tableNumInt = parseInt(tableNumber, 10);
    if (!/^\d{1,2}$/.test(tableNumber) || isNaN(tableNumInt) || tableNumInt < 1 || tableNumInt > 50) {
      alert("⚠️ Por favor, ingresa un número de mesa válido (del 1 al 50).");
      if (tableInput) tableInput.focus();
      return;
    }
  }

  // Cálculos de subtotal y envío
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

  // 5. Validación del Monto en Efectivo (si eligió pagar en Efectivo e ingresó monto)
  let cashPaymentLine = "";
  if (paymentMethod.includes("Efectivo")) {
    if (cashAmountRaw) {
      const parsedCash = parseFloat(cashAmountRaw);
      if (isNaN(parsedCash) || parsedCash <= 0) {
        alert("⚠️ El monto en efectivo ingresado no es válido. Ingresa solo números (Ej. 50 o 100).");
        if (cashAmountInput) cashAmountInput.focus();
        return;
      }
      if (parsedCash < total) {
        alert(`⚠️ El monto con el que vas a pagar (S/ ${parsedCash.toFixed(2)}) no puede ser menor al Total a Pagar (S/ ${total.toFixed(2)}).`);
        if (cashAmountInput) cashAmountInput.focus();
        return;
      }
      const changeAmount = parsedCash - total;
      cashPaymentLine = changeAmount > 0
        ? `S/ ${parsedCash.toFixed(2)} (Vuelto: S/ ${changeAmount.toFixed(2)})`
        : `S/ ${parsedCash.toFixed(2)} (Monto exacto)`;
    } else {
      cashPaymentLine = "Efectivo (Pago exacto)";
    }
  }

  // Emojis generados con puntos de código Unicode seguros para garantizar visualización en WhatsApp Web y Móvil
  const E_FISH = "\u{1F41F}";
  const E_WAVE = "\u{1F30A}";
  const E_CART = "\u{1F6D2}";
  const E_DOLLAR = "\u{1F4B5}";
  const E_SCOOTER = "\u{1F6F5}";
  const E_BAG = "\u{1F4B0}";
  const E_CLIP = "\u{1F4CB}";
  const E_USER = "\u{1F464}";
  const E_PHONE = "\u{1F4F1}";
  const E_PIN = "\u{1F4CD}";
  const E_HOME = "\u{1F3E0}";
  const E_CARD = "\u{1F4B3}";
  const E_PAY_MOBILE = "\u{1F4F2}";
  const E_NOTE = "\u{1F4DD}";
  const E_SHRIMP = "\u{1F990}";
  const E_SPARKLES = "\u{2728}";

  // Formatear texto para WhatsApp
  let msg = `*¡HOLA CEVICHERÍA LAS DELICIAS - LA CURVA!* ${E_FISH}${E_WAVE}\n`;
  msg += `Deseo realizar el siguiente pedido desde su página web:\n\n`;

  msg += `${E_CART} *DETALLE DEL PEDIDO:*\n`;
  cart.forEach(item => {
    const lineTotal = (item.price * item.qty).toFixed(2);
    msg += `• *${item.qty}x* ${item.name} - S/ ${lineTotal}\n`;
    if (item.notes) {
      msg += `   └ _Nota: ${item.notes}_\n`;
    }
  });

  msg += `\n${E_DOLLAR} *Subtotal:* S/ ${subtotal.toFixed(2)}\n`;
  msg += `${E_SCOOTER} *Envío:* ${deliveryText}\n`;
  msg += `${E_BAG} *TOTAL A PAGAR: S/ ${total.toFixed(2)}*\n\n`;

  msg += `${E_CLIP} *DATOS DE ATENCIÓN:*\n`;
  msg += `${E_USER} *Cliente:* ${customerName}\n`;
  msg += `${E_PHONE} *Teléfono:* ${customerPhone}\n`;

  if (deliveryType === 'delivery') {
    msg += `${E_PIN} *Modalidad:* Delivery a Domicilio\n`;
    msg += `${E_HOME} *Dirección:* ${deliveryAddress}\n`;
  } else if (deliveryType === 'pickup') {
    msg += `${E_PIN} *Modalidad:* Recojo en Local\n`;
  } else {
    msg += `${E_PIN} *Modalidad:* Consumo en Mesa (Mesa ${tableNumber})\n`;
  }

  msg += `${E_CARD} *Método de Pago:* ${paymentMethod}\n`;
  if (paymentMethod.includes("Efectivo")) {
    msg += `${E_DOLLAR} *Paga con:* ${cashPaymentLine}\n`;
  } else {
    msg += `${E_PAY_MOBILE} *Billetera Digital:* Adjunto captura de constancia Yape/Plin\n`;
  }

  if (notes) {
    msg += `${E_NOTE} *Notas de Cocina:* ${notes}\n`;
  }

  msg += `\n¡Quedo a la espera de su confirmación para prepararlo! Muchas gracias. ${E_SHRIMP}${E_SPARKLES}`;

  // Usar api.whatsapp.com/send directamente evita que el redireccionador wa.me rompa los emojis UTF-8 en PC/Web
  const encodedMsg = encodeURIComponent(msg);
  const waUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodedMsg}`;

  // Abrir siempre en una pestaña nueva sin reemplazar la página actual de la cevichería
  const waLink = document.createElement("a");
  waLink.href = waUrl;
  waLink.target = "_blank";
  waLink.rel = "noopener noreferrer";
  document.body.appendChild(waLink);
  waLink.click();
  document.body.removeChild(waLink);

  showToast("¡Pedido listo! Se abrió WhatsApp en una nueva pestaña.");
}

// ==========================================================================
// QUICK VIEW MODAL (VISTA RÁPIDA DE PLATILLO)
// ==========================================================================
let currentQuickViewDishId = null;
let quickViewQty = 1;

function changeQuickViewQty(delta) {
  quickViewQty = Math.max(1, Math.min(20, quickViewQty + delta));
  const qtyEl = document.getElementById("quickViewQtyVal");
  if (qtyEl) qtyEl.textContent = quickViewQty;
}
window.changeQuickViewQty = changeQuickViewQty;

function openQuickView(dishId) {
  const dish = MENU_DATA.find(d => d.id === dishId);
  if (!dish) return;

  currentQuickViewDishId = dishId;
  quickViewQty = 1;
  const modal = document.getElementById("quickViewModal");
  if (!modal) return;

  const qtyEl = document.getElementById("quickViewQtyVal");
  if (qtyEl) qtyEl.textContent = "1";
  const notesEl = document.getElementById("modalDishNotes");
  if (notesEl) notesEl.value = "";

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
  syncBodyScrollLock();
}

function closeQuickView() {
  const modal = document.getElementById("quickViewModal");
  if (modal) {
    modal.classList.remove("active");
    syncBodyScrollLock();
  }
}

function addQuickViewToCart() {
  if (currentQuickViewDishId) {
    const notesEl = document.getElementById("modalDishNotes");
    const customNotes = sanitizeText(notesEl ? notesEl.value : "", 100);
    addToCart(currentQuickViewDishId, quickViewQty, customNotes);
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
    updateCartUI();
    syncBodyScrollLock();
  }
}

function closeCartDrawer() {
  captureCartFormStateFromDOM();
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (drawer && overlay) {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
    syncBodyScrollLock();
  }
}

function scrollToMenu() {
  const section = document.getElementById("la-carta");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Sanitizador de texto contra inyección de código y payloads maliciosos
function sanitizeText(str, maxLength = 250) {
  if (!str || typeof str !== 'string') return '';
  return str
    .replace(/<[^>]*>?/gm, '') // Eliminar cualquier etiqueta HTML/Script
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, '') // Eliminar caracteres de control invisibles
    .trim()
    .slice(0, maxLength);
}

// Sanitizador estricto de identificadores (solo alfanumérico y guiones)
function sanitizeId(id) {
  if (!id || typeof id !== 'string') return '';
  return id.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 60);
}

// ==========================================================================
// SEGURIDAD CRIPTOGRÁFICA Y HASHING (PROTECCIÓN CONTRA ACCESOS INDEBIDOS)
// ==========================================================================
// Clave del propietario protegida mediante función unidireccional SHA-256
// La contraseña NUNCA se almacena en texto plano en los archivos fuente.
const ADMIN_PWD_HASH = "1eb66aeb2d8abe66176563bbd1790a925ccef55987eca5ee187c168bf19117fe";
const REVIEW_SECURITY_SALT = "delicias_las_curva_huayobamba_2026_salt";

// Función asíncrona de hashing SHA-256 con Web Crypto API
async function sha256Hex(message) {
  try {
    if (window.crypto && window.crypto.subtle) {
      const encoder = new TextEncoder();
      const data = encoder.encode(message);
      const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
      return Array.from(new Uint8Array(hashBuffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
    }
  } catch (err) {
    console.warn("Crypto API fallback activado:", err);
  }
  // Algoritmo seguro determinista de respaldo
  let h1 = 0xdeadbeef ^ message.length, h2 = 0x41c6ce57 ^ message.length;
  for (let i = 0; i < message.length; i++) {
    const ch = message.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(16).padStart(16, '0');
}

// Genera un token de firma única para enlaces de WhatsApp
async function generateReviewToken(reviewId, dni) {
  return await sha256Hex(`${reviewId}:${dni}:${REVIEW_SECURITY_SALT}`);
}

function setCategory(cat) {
  currentCategory = cat;
  const categoryButtons = document.querySelectorAll(".category-tab-btn");
  categoryButtons.forEach(btn => {
    const isMatch = btn.getAttribute("data-category") === cat;
    if (isMatch) {
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
    } else {
      btn.classList.remove("active");
      btn.setAttribute("aria-selected", "false");
    }
  });

  // Si hay una búsqueda activa que dejaría esta categoría sin resultados, limpiarla automáticamente
  if (searchQuery) {
    const normalizedQuery = normalizeSearchText(searchQuery);
    const hasMatchInCat = MENU_DATA.some(dish => {
      const matchesCat = cat === "all" || dish.category === cat;
      return matchesCat && (
        normalizeSearchText(dish.name).includes(normalizedQuery) ||
        normalizeSearchText(dish.description).includes(normalizedQuery) ||
        normalizeSearchText(dish.ingredients).includes(normalizedQuery)
      );
    });
    if (!hasMatchInCat) {
      searchQuery = "";
      const searchInput = document.getElementById("menuSearchInput");
      if (searchInput) searchInput.value = "";
      updateSearchIconUI();
    }
  }

  renderMenu();
}
window.setCategory = setCategory;

// ==========================================================================
// SISTEMA DE RESEÑAS VERIFICADAS CON DNI (PROTECCIÓN CONTRA OPINIONES FALSAS)
// ==========================================================================
let currentReviewRating = 5;
let adminAuthed = false;
let adminFailedAttempts = 0;
let adminLockoutUntil = 0;
let adminLockoutTimer = null;

// Reseñas verificadas iniciales de muestra cuando el almacenamiento está virgen
const INITIAL_VERIFIED_REVIEWS = [
  {
    id: "rev_init_1",
    author: "Carlos Mendoza",
    dni: "45891234",
    dish: "Trío Marino",
    rating: 5,
    comment: "¡El mejor Trío Marino de Huayobamba! El ceviche súper fresco, el arroz con mariscos en su punto y el chicharrón bien crocante. 100% recomendado.",
    date: "10/11/2026",
    approved: true
  },
  {
    id: "rev_init_2",
    author: "María Elena Rojas",
    dni: "71239845",
    dish: "Ceviche Mixto",
    rating: 5,
    comment: "Pedimos por WhatsApp y llegó rapidísimo. La leche de tigre y el limón tienen un sabor espectacular, porciones bien generosas con bastante camote y canchita.",
    date: "08/11/2026",
    approved: true
  },
  {
    id: "rev_init_3",
    author: "Jorge Luis Vásquez",
    dni: "42908173",
    dish: "Parihuela",
    rating: 5,
    comment: "La parihuela de cabrilla es contundente y levanta muertos de verdad. Excelente atención en La Curva y la chicha morada heladita.",
    date: "05/11/2026",
    approved: true
  }
];

// Manejo del selector de estrellas en el formulario
function setReviewRating(stars) {
  currentReviewRating = Math.max(1, Math.min(5, parseInt(stars) || 5));
  const ratingButtons = document.querySelectorAll("#ratingStarsRow .rating-star-btn");
  ratingButtons.forEach((btn, idx) => {
    btn.classList.remove("hovered");
    if (idx < currentReviewRating) {
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
    labelEl.textContent = ratingLabels[currentReviewRating] || "";
  }
}
window.setReviewRating = setReviewRating;

// Gestión segura en localStorage con validación de integridad
function getStoredReviews() {
  try {
    const raw = localStorage.getItem("delicias_reviews");
    if (raw === null) {
      localStorage.setItem("delicias_reviews", JSON.stringify(INITIAL_VERIFIED_REVIEWS));
      return [...INITIAL_VERIFIED_REVIEWS];
    }
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        // Filtrar y validar integridad de datos contra envenenamiento
        return parsed.filter(item =>
          item && typeof item === 'object' &&
          typeof item.id === 'string' &&
          typeof item.author === 'string' &&
          typeof item.comment === 'string' &&
          typeof item.rating === 'number' &&
          item.rating >= 1 && item.rating <= 5
        ).map(item => ({
          id: sanitizeId(item.id),
          author: sanitizeText(item.author, 50),
          dni: sanitizeText(item.dni, 12),
          dish: sanitizeText(item.dish, 60),
          rating: Math.max(1, Math.min(5, item.rating)),
          comment: sanitizeText(item.comment, 350),
          date: sanitizeText(item.date, 20),
          approved: Boolean(item.approved)
        }));
      }
    }
  } catch (e) {
    console.error("Error validando integridad de reseñas:", e);
  }
  return [...INITIAL_VERIFIED_REVIEWS];
}

function saveStoredReviews(reviews) {
  try {
    if (!Array.isArray(reviews)) return;
    // Límite de seguridad: máximo 200 reseñas para evitar desbordar cuota del navegador
    const safeReviews = reviews.slice(-200);
    localStorage.setItem("delicias_reviews", JSON.stringify(safeReviews));
  } catch (e) {
    console.error("Error guardando reseñas:", e);
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
    const maskedDni = (r.dni && r.dni.length >= 8)
      ? r.dni.slice(0, 2) + '****' + r.dni.slice(-2)
      : (r.dni || 'Verificado');
    const safeStars = Math.max(1, Math.min(5, r.rating || 5));
    const stars = '★'.repeat(safeStars) + '☆'.repeat(5 - safeStars);

    return `
      <div class="testimonial-card">
        <div>
          <div class="testimonial-header-top">
            <div class="testimonial-rating" title="${safeStars} de 5 estrellas">${stars}</div>
            <span class="verified-dni-pill" title="Comensal verificado">
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
          <div class="author-avatar">${escapeHtml(initials)}</div>
          <div class="author-info">
            <h6>${escapeHtml(r.author)}</h6>
            <span>${escapeHtml(r.date || 'Cliente Verificado')} • Huayobamba</span>
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
    setReviewRating(5);
    syncBodyScrollLock();
  }
}
window.openReviewModal = openReviewModal;

function closeReviewModal(event) {
  const modal = document.getElementById("reviewModalBackdrop");
  if (modal) {
    modal.classList.remove("active");
    syncBodyScrollLock();
  }
}
window.closeReviewModal = closeReviewModal;

// Envío de la reseña con validación estricta y firma digital segura
async function submitVerifiedReview(e) {
  e.preventDefault();

  const nameInput = document.getElementById("reviewAuthorName");
  const dniInput = document.getElementById("reviewAuthorDni");
  const dishSelect = document.getElementById("reviewDish");
  const commentInput = document.getElementById("reviewComment");

  const name = sanitizeText(nameInput ? nameInput.value : "", 50);
  const dni = sanitizeText(dniInput ? dniInput.value : "", 8);
  const dish = sanitizeText(dishSelect ? dishSelect.value : "", 60);
  const comment = sanitizeText(commentInput ? commentInput.value : "", 350);

  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]{3,50}$/;
  if (!name || !nameRegex.test(name) || name.replace(/\s/g, "").length < 3) {
    alert("⚠️ Por favor, ingresa tu nombre completo usando solo letras (mínimo 3 caracteres).");
    if (nameInput) nameInput.focus();
    return;
  }

  // Validación estricta de DNI peruano: exactamente 8 dígitos numéricos y no repetidos inválidos
  const dniRegex = /^\d{8}$/;
  if (!dniRegex.test(dni) || /^(\d)\1{7}$/.test(dni)) {
    alert("⚠️ El número de DNI debe contener 8 dígitos numéricos válidos para verificar que eres un comensal real.");
    if (dniInput) dniInput.focus();
    return;
  }

  if (comment.length < 10) {
    alert("Por favor, escribe un comentario de al menos 10 caracteres compartiendo tu experiencia.");
    if (commentInput) commentInput.focus();
    return;
  }

  const reviewId = "rev_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7);
  const safeRating = Math.max(1, Math.min(5, currentReviewRating));

  const newReview = {
    id: reviewId,
    author: name,
    dni: dni,
    dish: dish,
    rating: safeRating,
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

  // Generar firma criptográfica para el enlace de WhatsApp
  const token = await generateReviewToken(reviewId, dni);

  // Ofrecer al comensal notificar al dueño por WhatsApp
  const confirmWa = confirm(
    "¡Muchas gracias por tu reseña!\n\nTu opinión ha sido registrada con tu DNI (" + dni + ") para garantizar comensales reales.\n\n¿Deseas enviar tu constancia de reseña por WhatsApp para que el dueño la apruebe de inmediato?"
  );

  if (confirmWa) {
    const origin = window.location.origin + window.location.pathname;
    const approveUrl = `${origin}?aprobar=${encodeURIComponent(reviewId)}&auth=${encodeURIComponent(name)}&dni=${encodeURIComponent(dni)}&stars=${safeRating}&dish=${encodeURIComponent(dish)}&msg=${encodeURIComponent(comment)}&token=${encodeURIComponent(token)}`;

    const stars = "\u{2B50}".repeat(safeRating);
    const textMsg = `*NUEVA RESEÑA VERIFICADA (DNI: ${dni})* \u{1F990}\u{2728}\n\n` +
      `\u{1F464} *Cliente:* ${name}\n` +
      `\u{1F194} *DNI:* ${dni}\n` +
      `\u{1F41F} *Plato:* ${dish}\n` +
      `\u{2B50} *Calificación:* ${stars}\n` +
      `\u{1F4AC} *Comentario:* "${comment}"\n\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `\u{1F449} *DUEÑO: Para APROBAR y publicar en la web con 1 clic, toca aquí:*\n` +
      `${approveUrl}`;
    const reviewWaLink = document.createElement("a");
    reviewWaLink.href = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(textMsg)}`;
    reviewWaLink.target = "_blank";
    reviewWaLink.rel = "noopener noreferrer";
    document.body.appendChild(reviewWaLink);
    reviewWaLink.click();
    document.body.removeChild(reviewWaLink);
  }
}
window.submitVerifiedReview = submitVerifiedReview;

// Verificación y Aprobación Mágica desde el enlace de WhatsApp con Validación Criptográfica
async function checkUrlApproval() {
  const params = new URLSearchParams(window.location.search);
  const rawReviewId = params.get("aprobar");
  if (!rawReviewId) return;

  const reviewId = sanitizeId(rawReviewId);
  const token = params.get("token") || "";
  const legacyKey = params.get("key") || "";
  const rawDni = params.get("dni") || "";
  const dni = sanitizeText(rawDni, 8);

  // Validar firma del token o clave de compatibilidad (hasheada)
  const expectedToken = await generateReviewToken(reviewId, dni);
  const isKeyValid = legacyKey ? ((await sha256Hex(legacyKey)) === ADMIN_PWD_HASH) : false;
  const isValidAuth = (token && token === expectedToken) || isKeyValid;

  if (!isValidAuth) {
    console.warn("Intento de aprobación con token o clave no autorizada.");
    return;
  }

  const author = sanitizeText(params.get("auth") || "Comensal", 50);
  const stars = Math.max(1, Math.min(5, parseInt(params.get("stars")) || 5));
  const dish = sanitizeText(params.get("dish") || "Plato Marino", 60);
  const comment = sanitizeText(params.get("msg") || "", 350);

  const reviews = getStoredReviews();
  const existingIndex = reviews.findIndex(r => r.id === reviewId);

  if (existingIndex >= 0) {
    reviews[existingIndex].approved = true;
  } else {
    reviews.push({
      id: reviewId,
      author: author,
      dni: dni || "Verificado",
      dish: dish,
      rating: stars,
      comment: comment,
      date: new Date().toLocaleDateString("es-PE"),
      approved: true
    });
  }

  saveStoredReviews(reviews);
  renderReviews();

  // Notificación en pantalla
  showToast(`✅ ¡Reseña de ${author} aprobada y publicada en la web!`);

  // Limpiar la URL de la barra de direcciones de manera segura
  window.history.replaceState({}, document.title, window.location.pathname);

  // Scroll suave hacia la sección de testimonios
  setTimeout(() => {
    const section = document.querySelector(".testimonials-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }, 500);
}

// Panel de Moderación para el Dueño
function openAdminReviewModal() {
  renderAdminReviewsList();
  const modal = document.getElementById("adminReviewModalBackdrop");
  if (modal) {
    modal.classList.add("active");
    syncBodyScrollLock();
  }
}
window.openAdminReviewModal = openAdminReviewModal;

function closeAdminReviewModal(event) {
  const modal = document.getElementById("adminReviewModalBackdrop");
  if (modal) {
    modal.classList.remove("active");
    syncBodyScrollLock();
  }
}
window.closeAdminReviewModal = closeAdminReviewModal;

// Autenticación segura en el modal con protección contra ataques de fuerza bruta
async function attemptAdminLogin(e) {
  if (e && e.preventDefault) e.preventDefault();

  // Verificar si hay bloqueo temporal activo
  if (Date.now() < adminLockoutUntil) {
    const remainingSec = Math.ceil((adminLockoutUntil - Date.now()) / 1000);
    alert(`⚠️ Acceso temporalmente bloqueado por demasiados intentos fallidos. Espera ${remainingSec} segundos.`);
    return;
  }

  const pwdInput = document.getElementById("adminPasswordInput");
  const errorContainer = document.getElementById("adminLoginError");
  const pwd = pwdInput ? pwdInput.value.trim() : "";

  if (!pwd) {
    if (errorContainer) {
      errorContainer.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Ingresa la clave de administrador.';
      errorContainer.style.display = "flex";
    }
    return;
  }

  const hashed = await sha256Hex(pwd);

  if (hashed === ADMIN_PWD_HASH) {
    adminAuthed = true;
    adminFailedAttempts = 0;
    if (adminLockoutTimer) {
      clearInterval(adminLockoutTimer);
      adminLockoutTimer = null;
    }
    renderAdminReviewsList();
    showToast("🔓 Sesión de Administrador iniciada.");
  } else {
    adminFailedAttempts++;
    if (adminFailedAttempts >= 3) {
      adminLockoutUntil = Date.now() + 60000; // 60 segundos de bloqueo
      renderAdminReviewsList();
      if (adminLockoutTimer) clearInterval(adminLockoutTimer);
      adminLockoutTimer = setInterval(() => {
        if (Date.now() >= adminLockoutUntil) {
          clearInterval(adminLockoutTimer);
          adminLockoutTimer = null;
          adminFailedAttempts = 0;
          renderAdminReviewsList();
        } else {
          const errorEl = document.getElementById("adminLoginError");
          if (errorEl) {
            const sec = Math.ceil((adminLockoutUntil - Date.now()) / 1000);
            errorEl.innerHTML = `<i class="fa-solid fa-ban"></i> Demasiados intentos fallidos. Bloqueado por ${sec}s por seguridad.`;
          }
        }
      }, 1000);
    } else {
      if (errorContainer) {
        errorContainer.className = "admin-error-msg";
        errorContainer.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Clave incorrecta. Te quedan ${3 - adminFailedAttempts} intento(s).`;
        errorContainer.style.display = "flex";
      }
    }
    if (pwdInput) {
      pwdInput.value = "";
      pwdInput.focus();
    }
  }
}
window.attemptAdminLogin = attemptAdminLogin;

function logoutAdmin() {
  adminAuthed = false;
  renderAdminReviewsList();
  showToast("🔒 Sesión de Administrador cerrada.");
}
window.logoutAdmin = logoutAdmin;

function renderAdminReviewsList() {
  const container = document.getElementById("adminContentWrap");
  if (!container) return;

  // Si no está autenticado, mostrar formulario seguro de contraseña
  if (!adminAuthed) {
    const isLocked = Date.now() < adminLockoutUntil;
    const remainingSec = isLocked ? Math.ceil((adminLockoutUntil - Date.now()) / 1000) : 0;

    container.innerHTML = `
      <div class="admin-login-box">
        <div class="admin-login-icon">
          <i class="fa-solid fa-shield-halved"></i>
        </div>
        <h4>Acceso Protegido - Administración</h4>
        <p>Solo el propietario del restaurante puede moderar y publicar reseñas.</p>
        
        <form onsubmit="attemptAdminLogin(event)" style="margin: 0 auto; max-width: 320px;">
          <div class="admin-password-wrap">
            <input 
              type="password" 
              id="adminPasswordInput" 
              class="admin-password-input" 
              placeholder="Ingresa tu clave secreta" 
              autocomplete="current-password"
              maxlength="32" 
              ${isLocked ? 'disabled' : 'autofocus'}
            >
          </div>

          <button type="submit" class="admin-btn-login" ${isLocked ? 'disabled style="opacity:0.6;cursor:not-allowed;"' : ''}>
            <i class="fa-solid fa-key"></i> Ingresar al Panel
          </button>
        </form>

        <div id="adminLoginError" style="${isLocked ? 'display:flex;' : 'display:none;'}" class="${isLocked ? 'admin-lockout-msg' : 'admin-error-msg'}">
          ${isLocked ? `<i class="fa-solid fa-ban"></i> Acceso bloqueado. Espera ${remainingSec} segundos.` : ''}
        </div>
      </div>
    `;
    return;
  }

  // Panel desbloqueado para el Administrador
  const reviews = getStoredReviews();
  const pending = reviews.filter(r => !r.approved);
  const approved = reviews.filter(r => r.approved);

  let html = `
    <div class="admin-top-bar">
      <div style="font-size: 0.88rem; color: #475569;">
        <strong>Resumen:</strong> ${pending.length} pendientes • ${approved.length} publicadas.
      </div>
      <button type="button" class="btn-admin-logout" onclick="logoutAdmin()">
        <i class="fa-solid fa-right-from-bracket"></i> Cerrar Sesión
      </button>
    </div>

    <!-- Formulario para publicar reseña recibida directamente por WhatsApp -->
    <div style="background: #f1f5f9; padding: 14px; border-radius: var(--radius-sm); margin-bottom: 20px; border: 1.5px dashed #94a3b8; text-align: left;">
      <h5 style="font-size: 0.88rem; color: #0f172a; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
        <i class="fa-brands fa-whatsapp" style="color: #25d366; font-size: 1.1rem;"></i> Publicar Reseña recibida por WhatsApp
      </h5>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 8px;">
        <input type="text" id="manualReviewAuthor" placeholder="Nombre (Solo letras)" maxlength="50" oninput="filterOnlyLetters(this)" style="padding: 7px; font-size: 0.82rem; border: 1px solid #cbd5e1; border-radius: 4px;">
        <input type="text" id="manualReviewDni" placeholder="DNI (8 dígitos)" maxlength="8" inputmode="numeric" oninput="filterOnlyDigits(this, 8)" style="padding: 7px; font-size: 0.82rem; border: 1px solid #cbd5e1; border-radius: 4px;">
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 8px;">
        <input type="text" id="manualReviewDish" placeholder="Plato consumido (Ej. Ceviche Mixto)" maxlength="60" style="padding: 7px; font-size: 0.82rem; border: 1px solid #cbd5e1; border-radius: 4px;">
        <select id="manualReviewRating" style="padding: 7px; font-size: 0.82rem; border: 1px solid #cbd5e1; border-radius: 4px;">
          <option value="5" selected>⭐⭐⭐⭐⭐ 5 Estrellas</option>
          <option value="4">⭐⭐⭐⭐ 4 Estrellas</option>
          <option value="3">⭐⭐⭐ 3 Estrellas</option>
          <option value="2">⭐⭐ 2 Estrellas</option>
          <option value="1">⭐ 1 Estrella</option>
        </select>
      </div>
      <textarea id="manualReviewComment" rows="2" placeholder="Pega aquí el mensaje o comentario que te mandó el cliente por WhatsApp..." maxlength="350" style="width: 100%; padding: 7px; font-size: 0.82rem; border: 1px solid #cbd5e1; border-radius: 4px; margin-bottom: 8px;"></textarea>
      <button type="button" class="btn-admin-approve" onclick="submitManualReview()" style="width: 100%; justify-content: center; padding: 9px; font-size: 0.84rem;">
        <i class="fa-solid fa-plus"></i> Publicar de Inmediato en la Web
      </button>
    </div>
  `;

  if (reviews.length === 0) {
    html += `
      <div style="text-align: center; padding: 25px; color: #94a3b8;">
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
      const safeId = sanitizeId(r.id);
      const safeRating = Math.max(1, Math.min(5, r.rating || 5));
      const stars = '★'.repeat(safeRating) + '☆'.repeat(5 - safeRating);
      html += `
        <div class="admin-review-item">
          <div class="admin-review-header">
            <span class="admin-review-name">${escapeHtml(r.author)}</span>
            <span class="admin-review-dni"><i class="fa-solid fa-id-card"></i> DNI: ${escapeHtml(r.dni)}</span>
            <span style="color: #f77f00; font-size: 0.9rem;">${stars}</span>
          </div>
          <div class="admin-review-dish"><i class="fa-solid fa-utensils"></i> ${escapeHtml(r.dish || '')} • ${escapeHtml(r.date)}</div>
          <div class="admin-review-text">"${escapeHtml(r.comment)}"</div>
          <div class="admin-review-actions">
            <button class="btn-admin-approve" onclick="approveReview('${safeId}')">
              <i class="fa-solid fa-check"></i> Aprobar y Publicar
            </button>
            <button class="btn-admin-reject" onclick="deleteReview('${safeId}')">
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
      const safeId = sanitizeId(r.id);
      const safeRating = Math.max(1, Math.min(5, r.rating || 5));
      const stars = '★'.repeat(safeRating) + '☆'.repeat(5 - safeRating);
      html += `
        <div class="admin-review-item">
          <div class="admin-review-header">
            <span class="admin-review-name">${escapeHtml(r.author)}</span>
            <span class="admin-review-dni"><i class="fa-solid fa-id-card"></i> DNI: ${escapeHtml(r.dni)}</span>
            <span style="color: #f77f00; font-size: 0.9rem;">${stars}</span>
          </div>
          <div class="admin-review-dish"><i class="fa-solid fa-utensils"></i> ${escapeHtml(r.dish || '')} • ${escapeHtml(r.date)}</div>
          <div class="admin-review-text">"${escapeHtml(r.comment)}"</div>
          <div class="admin-review-actions">
            <button class="btn-admin-reject" onclick="unpublishReview('${safeId}')">
              <i class="fa-solid fa-eye-slash"></i> Despublicar
            </button>
            <button class="btn-admin-reject" onclick="deleteReview('${safeId}')">
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

function submitManualReview() {
  const authorInput = document.getElementById("manualReviewAuthor");
  const dniInput = document.getElementById("manualReviewDni");
  const dishInput = document.getElementById("manualReviewDish");
  const ratingSelect = document.getElementById("manualReviewRating");
  const commentInput = document.getElementById("manualReviewComment");

  const author = sanitizeText(authorInput ? authorInput.value : "", 50);
  const dni = sanitizeText(dniInput ? dniInput.value : "", 8);
  const dish = sanitizeText(dishInput ? dishInput.value : "Plato Marino", 60);
  const rating = Math.max(1, Math.min(5, ratingSelect ? parseInt(ratingSelect.value) : 5));
  const comment = sanitizeText(commentInput ? commentInput.value : "", 350);

  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]{3,50}$/;
  if (!author || !nameRegex.test(author) || author.replace(/\s/g, "").length < 3) {
    alert("⚠️ Por favor, ingresa un Nombre de comensal válido (solo letras, mínimo 3 caracteres).");
    if (authorInput) authorInput.focus();
    return;
  }

  if (dni && (!/^\d{8}$/.test(dni) || /^(\d)\1{7}$/.test(dni))) {
    alert("⚠️ Si ingresas DNI, debe tener 8 dígitos numéricos válidos.");
    if (dniInput) dniInput.focus();
    return;
  }

  if (!comment || comment.length < 5) {
    alert("⚠️ Por favor, ingresa el comentario de la reseña (mínimo 5 caracteres).");
    if (commentInput) commentInput.focus();
    return;
  }

  const newRev = {
    id: "rev_manual_" + Date.now() + "_" + Math.random().toString(36).substring(2, 6),
    author: author,
    dni: dni || "Verificado",
    dish: dish,
    rating: rating,
    comment: comment,
    date: new Date().toLocaleDateString("es-PE"),
    approved: true
  };

  const reviews = getStoredReviews();
  reviews.push(newRev);
  saveStoredReviews(reviews);

  renderReviews();
  renderAdminReviewsList();
  showToast("¡Reseña de WhatsApp publicada con éxito!");
}
window.submitManualReview = submitManualReview;

function approveReview(id) {
  const safeId = sanitizeId(id);
  const reviews = getStoredReviews();
  const target = reviews.find(r => r.id === safeId);
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
  const safeId = sanitizeId(id);
  const reviews = getStoredReviews();
  const target = reviews.find(r => r.id === safeId);
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
  const safeId = sanitizeId(id);
  if (!confirm("¿Seguro que deseas descartar/eliminar esta reseña?")) return;
  let reviews = getStoredReviews();
  reviews = reviews.filter(r => r.id !== safeId);
  saveStoredReviews(reviews);
  renderReviews();
  renderAdminReviewsList();
  showToast("Reseña eliminada.");
}
window.deleteReview = deleteReview;

// Exponer todas las funciones interactivas en window para garantizar compatibilidad en producción (Vercel / Bundlers)
window.addToCart = addToCart;
window.updateItemQty = updateItemQty;
window.removeFromCart = removeFromCart;
window.openCartDrawer = openCartDrawer;
window.closeCartDrawer = closeCartDrawer;
window.scrollToMenu = scrollToMenu;
window.openQuickView = openQuickView;
window.closeQuickView = closeQuickView;
window.addQuickViewToCart = addQuickViewToCart;
window.openQrModal = openQrModal;
window.closeQrModal = closeQrModal;
window.copyPaymentNumber = copyPaymentNumber;
window.togglePaymentMethodDetails = togglePaymentMethodDetails;
window.toggleCashInput = toggleCashInput;
window.submitWhatsAppOrder = submitWhatsAppOrder;
window.captureCartFormStateFromDOM = captureCartFormStateFromDOM;
window.updateCartUI = updateCartUI;
window.renderMenu = renderMenu;

// ==========================================================================
// INICIALIZACIÓN DE LA APLICACIÓN
// ==========================================================================
function initApp() {
  // Renderizar carta inicial, carrito y reseñas
  renderMenu();
  updateCartUI();
  renderReviews();

  // Verificar si se abrió desde un enlace de aprobación de WhatsApp
  checkUrlApproval();

  // Mostrar anuncio de bienvenida sobre comprobante de pago (si el usuario no eligió ocultarlo)
  checkAndShowWelcomeNotice();

  // Filtrado por Categorías
  const categoryButtons = document.querySelectorAll(".category-tab-btn");
  categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      setCategory(btn.getAttribute("data-category"));
    });
  });

  // Búsqueda en vivo con soporte sin tildes y botón de limpiar
  const searchInput = document.getElementById("menuSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      updateSearchIconUI();
      renderMenu();
    });
  }

  // Efecto hover interactivo en el selector de estrellas de reseña
  const ratingButtons = document.querySelectorAll("#ratingStarsRow .rating-star-btn");
  ratingButtons.forEach((btn, idx) => {
    btn.addEventListener("mouseenter", () => {
      ratingButtons.forEach((b, i) => {
        b.classList.toggle("hovered", i <= idx);
      });
    });
    btn.addEventListener("mouseleave", () => {
      ratingButtons.forEach(b => b.classList.remove("hovered"));
    });
  });

  // Scroll-Spy para actualizar el enlace activo en la barra de navegación
  const navLinks = document.querySelectorAll(".nav-menu .nav-link");
  const sections = ["inicio", "promociones", "la-carta", "nosotros", "ubicacion"]
    .map(id => document.getElementById(id))
    .filter(Boolean);

  function updateActiveNavOnScroll() {
    const scrollPos = window.scrollY + 160;
    let currentSectionId = "inicio";
    sections.forEach(sec => {
      if (scrollPos >= sec.offsetTop) {
        currentSectionId = sec.id;
      }
    });
    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (href === `#${currentSectionId}`) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
  window.addEventListener("scroll", updateActiveNavOnScroll, { passive: true });

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

  // Cerrar Modales con tecla Escape en orden de prioridad (primero el modal superior)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const welcomeModal = document.getElementById("welcomeNoticeBackdrop");
      if (welcomeModal && welcomeModal.classList.contains("active")) {
        closeWelcomeNotice();
        return;
      }
      const qrModal = document.getElementById("qrModalBackdrop");
      if (qrModal && qrModal.classList.contains("active")) {
        closeQrModal();
        return;
      }
      const qvModal = document.getElementById("quickViewModal");
      if (qvModal && qvModal.classList.contains("active")) {
        closeQuickView();
        return;
      }
      const revModal = document.getElementById("reviewModalBackdrop");
      if (revModal && revModal.classList.contains("active")) {
        closeReviewModal();
        return;
      }
      const adminModal = document.getElementById("adminReviewModalBackdrop");
      if (adminModal && adminModal.classList.contains("active")) {
        closeAdminReviewModal();
        return;
      }
      const cartDrawer = document.getElementById("cartDrawer");
      if (cartDrawer && cartDrawer.classList.contains("active")) {
        closeCartDrawer();
      }
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
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
