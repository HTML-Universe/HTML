// Función para mostrar un mensaje de bienvenida
function mostrarMensaje() {
    alert('¡Bienvenido a mi página web!');
}

// Función para cambiar el color de fondo
function cambiarColorFondo() {
    const colores = ['#f0f0f0', '#e6f7ff', '#f0ffe6', '#fff0e6'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
}

// Función para mostrar la fecha y hora actual
function mostrarFechaHora() {
    const ahora = new Date();
    const fechaHora = ahora.toLocaleString('es-ES');
    alert('La fecha y hora actual es: ' + fechaHora);
}

// Evento que se ejecuta cuando la página se carga completamente
document.addEventListener('DOMContentLoaded', function() {
    console.log('La página se ha cargado correctamente');
    
    // Ejemplo de cómo agregar un evento a un botón
    const botonCambiarColor = document.createElement('button');
    botonCambiarColor.textContent = 'Cambiar Color de Fondo';
    botonCambiarColor.addEventListener('click', cambiarColorFondo);
    
    // Agregar el botón al contenedor
    const container = document.querySelector('.container');
    if (container) {
        container.appendChild(botonCambiarColor);
    }

    // Agregar evento al carrito para mostrar el modal de pago
    const cartIcon = document.querySelector('.cart a');
    if (cartIcon) {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            const paymentModal = document.getElementById('paymentModal');
            if (paymentModal) {
                paymentModal.style.display = 'flex';
            }
        });
    }

    // Agregar evento para cerrar el modal
    const closeBtn = document.querySelector('.payment-modal .close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            const paymentModal = document.getElementById('paymentModal');
            if (paymentModal) {
                paymentModal.style.display = 'none';
            }
        });
    }

    // Agregar evento para el botón de confirmación
    const confirmBtn = document.getElementById('confirmPayment');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', function() {
            showToast('¡Gracias por tu compra! En breve recibirás tus recursos por correo electrónico.');
            setTimeout(() => {
                const paymentModal = document.getElementById('paymentModal');
                if (paymentModal) {
                    paymentModal.style.display = 'none';
                }
                cart = [];
                total = 0;
                updateCartCount();
            }, 2500);
        });
    }
});

// Variables globales
let cart = [];
let total = 0;
const MAX_CART_ITEMS = 5;

// Datos de productos
const products = [
    // Scripts
    {
        id: 1,
        title: "Hud",
        description: "Hud para tu servidor de roleplay",
        price: "2 USD",
        category: "scripts",
        rating: 4.9,
        sales: 230,
        date: "2024-03-15",
        image: "interior-mapping.jpg",
        features: [
            "50+ interiores predefinidos",
            "Editor visual de interiores",
            "Sistema de iluminación dinámica",
            "Optimizado para 500+ jugadores",
            "Documentación completa"
        ]
    },
    {
        id: 2,
        title: "Sistema de pinchos",
        description: "Sistema de pinchos para mayor realidad en tu servidor",
        price: "2.99 USD",
        category: "scripts",
        rating: 5.0,
        sales: 150,
        date: "2024-03-18",
        image: "economy-system.jpg",
        features: [
            "20+ empleos dinámicos",
            "Sistema de empresas",
            "Mercado de acciones",
            "Propiedades comprables",
            "Panel de administración"
        ]
    },
    {
        id: 3,
        title: "Sistema de Scoreboard",
        description: "Scoreboard para tu servidor",
        price: "2.50 USD",
        category: "scripts",
        rating: 4.8,
        sales: 180,
        date: "2024-03-20",
        image: "inventory-system.jpg",
        features: [
            "Drag & Drop intuitivo",
            "Sistema de categorías",
            "Límites por peso",
            "Items con durabilidad",
            "API completa"
        ]
    },
    {
        id: 4,
        title: "Sistema de Trabajos",
        description: "Sistema completo de trabajos y misiones dinámicas",
        price: "2.75 USD",
        category: "scripts",
        rating: 4.7,
        sales: 165,
        date: "2024-03-19",
        image: "jobs-system.jpg",
        features: [
            "15+ trabajos incluidos",
            "Misiones dinámicas",
            "Sistema de niveles",
            "Recompensas personalizables",
            "Fácil de configurar"
        ]
    },
    {
        id: 5,
        title: "Sistema de agarrarse a vehiculo policial",
        description: "Sistema de agarrarse a vehiculo para mayor rol",
        price: "2.85 USD",
        category: "scripts",
        rating: 4.9,
        sales: 200,
        date: "2024-03-17",
        image: "houses-system.jpg",
        features: [
            "Interiores personalizables",
            "Sistema de cerraduras",
            "Almacenamiento propio",
            "Gestión de llaves",
            "Panel de administración"
        ]
    },
    {
        id: 6,
        title: "Sistema en proceso",
        description: "Sistema en proceso",
        price: "2.95 USD",
        category: "scripts",
        rating: 4.8,
        sales: 175,
        date: "2024-03-16",
        image: "https://imgur.com/GoXNOTh",
        features: [
            "Gestión de territorios",
            "Guerras de bandas",
            "Rangos personalizables",
            "Sistema de alianzas",
            "Estadísticas detalladas"
        ]
    },
    // Texturas
    {
        id: 7,
        title: "Txd terpel gasolinera",
        description: "una gasolinera mayor realista",
        price: "2.99 USD",
        category: "textures",
        rating: 2.1,
        sales: 185,
        date: "2024-03-10",
        image: "textures-pack.jpg",
        features: [
            "100+ texturas en 4K",
            "Mapeo UV optimizado",
            "Texturas PBR incluidas",
            "Compatibilidad total",
            "Actualizaciones gratuitas"
        ]
    },
    {
        id: 8,
        title: "Textura en proceso",
        description: "Textura en proceso",
        price: "2.80 USD",
        category: "textures",
        rating: 4.9,
        sales: 160,
        date: "2024-03-12",
        image: "realistic-textures.jpg",
        features: [
            "Texturas 4K realistas",
            "Normal maps incluidos",
            "Optimización máxima",
            "50+ variaciones",
            "Soporte premium"
        ]
    },
    {
        id: 9,
        title: "Textura en proceso",
        description: "Textura en proceso",
        price: "2.70 USD",
        category: "textures",
        rating: 4.7,
        sales: 145,
        date: "2024-03-14",
        image: "urban-textures.jpg",
        features: [
            "Graffiti realistas",
            "Texturas de asfalto",
            "Señales de tráfico",
            "Carteles personalizables",
            "Alta resolución"
        ]
    },
    {
        id: 10,
        title: "Textura en proceso",
        description: "Textura en proceso",
        price: "2.60 USD",
        category: "textures",
        rating: 4.8,
        sales: 170,
        date: "2024-03-13",
        image: "nature-textures.jpg",
        features: [
            "Texturas de vegetación",
            "Terrenos realistas",
            "Efectos climáticos",
            "Variaciones estacionales",
            "Optimización avanzada"
        ]
    },
    {
        id: 11,
        title: "Textura en proceso",
        description: "Textura en proceso",
        price: "2.75 USD",
        category: "textures",
        rating: 4.9,
        sales: 155,
        date: "2024-03-11",
        image: "interior-textures.jpg",
        features: [
            "Texturas de muebles",
            "Materiales realistas",
            "Mapeo preciso",
            "Variedad de estilos",
            "Alta calidad"
        ]
    },
    {
        id: 12,
        title: "Textura de interior de garaje para modificar de la dowtown",
        description: "Garaje",
        price: "1.2 USD",
        category: "interiors",
        rating: 4.8,
        sales: 190,
        date: "2024-03-15",
        image: "https://media.discordapp.net/attachments/1325185503326109808/1363956008048922645/image.png?ex=680bdf05&is=680a8d85&hm=733880b5ae24aeb4f7162a12a129d8316dee4cf1c8a1da3b84b50d705e8e68a1&=&format=webp&quality=lossless&width=690&height=387",
        features: [
            "Pinturas metálicas",
            "Efectos de daño",
            "Interiores detallados",
            "Calcomanías HD",
            "Personalización total"
        ]
    },
    // Modelos
    {
        id: 13,
        title: "Textura en proceso",
        description: "Textura en proceso",
        price: "2.50 USD",
        category: "models",
        rating: 4.9,
        sales: 200,
        date: "2024-03-12",
        image: "vip-models.jpg",
        features: [
            "30+ modelos exclusivos",
            "Texturas 4K incluidas",
            "LODs optimizados",
            "Soporte para damaged.img",
            "Modelos verificados"
        ]
    },
    {
        id: 14,
        title: "Textura en proceso",
        description: "Textura en proceso",
        price: "2.90 USD",
        category: "models",
        rating: 4.8,
        sales: 175,
        date: "2024-03-16",
        image: "premium-vehicles.jpg",
        features: [
            "20+ vehículos únicos",
            "Interiores detallados",
            "Daños realistas",
            "Optimización máxima",
            "Texturas 4K"
        ]
    },
    {
        id: 15,
        title: "Textura en proceso",
        description: "Textura en proceso",
        price: "2.65 USD",
        category: "models",
        rating: 4.7,
        sales: 160,
        date: "2024-03-14",
        image: "urban-props.jpg",
        features: [
            "100+ props únicos",
            "Alta optimización",
            "Colisiones correctas",
            "LODs incluidos",
            "Fácil instalación"
        ]
    },
    {
        id: 16,
        title: "Textura en proceso",
        description: "Textura en proceso",
        price: "2.80 USD",
        category: "models",
        rating: 4.9,
        sales: 185,
        date: "2024-03-13",
        image: "interior-models.jpg",
        features: [
            "Muebles detallados",
            "Props decorativos",
            "Texturas HD",
            "Bajo consumo",
            "Fácil colocación"
        ]
    },
    {
        id: 17,
        title: "Textura en proceso",
        description: "Textura en proceso",
        price: "2.95 USD",
        category: "models",
        rating: 4.8,
        sales: 170,
        date: "2024-03-15",
        image: "custom-weapons.jpg",
        features: [
            "15+ armas únicas",
            "Animaciones incluidas",
            "Texturas 4K",
            "Efectos visuales",
            "Sonidos HD"
        ]
    },
    {
        id: 18,
        title: "Textura en proceso",
        description: "Textura en proceso",
        price: "2.85 USD",
        category: "models",
        rating: 4.9,
        sales: 195,
        date: "2024-03-17",
        image: "custom-characters.jpg",
        features: [
            "10+ personajes únicos",
            "Ropa personalizada",
            "Animaciones incluidas",
            "Texturas HD",
            "Optimización máxima"
        ]
    }
];

// Testimonios
const testimonials = [
    {
        name: "Carlos Rodriguez",
        role: "Dueño de Hyper Gaming",
        text: "Los recursos de HTML Universe han transformado completamente nuestro servidor. La calidad y el soporte son excepcionales.",
        rating: 5,
        image: "testimonial1.jpg"
    },
    {
        name: "Ana Martinez",
        role: "Desarrolladora en MTAZone",
        text: "Los sistemas son increíblemente estables y bien optimizados. La documentación es clara y el soporte es rápido.",
        rating: 5,
        image: "testimonial2.jpg"
    },
    {
        name: "Diego Morales",
        role: "CEO de GameWorld",
        text: "La mejor inversión para nuestro servidor. Los recursos son únicos y la calidad es incomparable.",
        rating: 4.9,
        image: "testimonial3.jpg"
    }
];

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar AOS
    AOS.init({
        duration: 800,
        once: true
    });

    // Remover loader
    setTimeout(() => {
        document.querySelector('.loader').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.loader').style.display = 'none';
        }, 500);
    }, 1500);

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Event Listeners
    setupEventListeners();

    // Inicializar filtros
    initializeFilters();

    // Cargar productos y testimonios
    loadProducts();
    loadTestimonials();

    // Inicializar slider de testimonios
    initTestimonialSlider();
});

// Configuración de Event Listeners
function setupEventListeners() {
    // Búsqueda
    const searchTrigger = document.querySelector('.search-trigger');
    const searchOverlay = document.querySelector('.search-overlay');
    const closeSearch = document.querySelector('.close-search');

    if (searchTrigger && searchOverlay && closeSearch) {
        searchTrigger.addEventListener('click', () => {
            searchOverlay.style.display = 'flex';
            setTimeout(() => {
                searchOverlay.style.opacity = '1';
                searchOverlay.querySelector('input').focus();
            }, 10);
        });

        closeSearch.addEventListener('click', () => {
            searchOverlay.style.opacity = '0';
            setTimeout(() => {
                searchOverlay.style.display = 'none';
            }, 300);
        });
    }

    // Newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            showToast('¡Gracias por suscribirte!');
            newsletterForm.reset();
        });
    }
}

// Inicialización de filtros
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortSelect = document.querySelector('.sort-select');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            loadProducts(); // Recargar productos con el nuevo filtro
        });
    });

    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            sortResources(sortSelect.value);
        });
    }
}

// Funciones del carrito
function addToCart(e) {
    if (cart.length >= MAX_CART_ITEMS) {
        const cartCount = document.querySelector('.cart-count');
        cartCount.classList.add('limit');
        showToast('Máximo 5 productos en el carrito');
        setTimeout(() => cartCount.classList.remove('limit'), 500);
        return;
    }

    const card = e.target.closest('.resource-card');
    const title = card.querySelector('h3').textContent;
    const priceText = card.querySelector('.resource-price span').textContent;
    // Convertir el precio de "X.XX USD" a número
    const price = parseFloat(priceText.replace(' USD', ''));
    
    cart.push({ title, price });
    total += price;
    
    updateCartCount();
    showToast(`${title} agregado al carrito`);
    
    // Animación del botón
    const button = e.target;
    button.classList.add('adding');
    setTimeout(() => button.classList.remove('adding'), 1500);

    // Actualizar el total en el modal si está abierto
    const paymentAmount = document.getElementById('paymentAmount');
    if (paymentAmount) {
        paymentAmount.textContent = total.toFixed(2);
    }
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
        cartCount.classList.add('pulse');
        setTimeout(() => cartCount.classList.remove('pulse'), 300);
    }
}

// Modal de pago
function showPaymentModal() {
    // Verificar si hay productos en el carrito
    if (cart.length === 0) {
        showToast('Agrega productos al carrito antes de realizar el pago');
        return;
    }

    const modal = document.getElementById('paymentModal');
    if (!modal) return;

    // Calcular el total
    const totalUSD = cart.reduce((sum, item) => sum + item.price, 0);
    // Convertir a COP (1 USD = 4000 COP aproximadamente)
    const totalCOP = totalUSD * 4000;

    // Actualizar el contenido del modal
    const modalContent = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Finalizar Compra</h2>
                <button class="close">×</button>
            </div>
            <div class="modal-body">
                <div class="payment-summary">
                    <h3>Total a pagar:</h3>
                    <div class="total-amounts">
                        <span class="total-amount-cop">$${totalCOP.toLocaleString('es-CO')} COP</span>
                        <span class="total-amount-usd">$${totalUSD.toFixed(2)} USD</span>
                    </div>
                </div>
                <div class="payment-method">
                    <h3>Método de pago</h3>
                    <div class="payment-option active">
                        <div class="nequi-logo-container">
                            <img src="https://w7.pngwing.com/pngs/416/611/png-transparent-nequi-hd-logo.png" alt="Nequi Logo" class="nequi-logo">
                        </div>
                        <span>Pago con Nequi</span>
                    </div>
                </div>
                <div class="payment-steps">
                    <div class="step active">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h4>Abre la app de Nequi</h4>
                            <p>Inicia sesión en tu cuenta</p>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h4>Selecciona "Enviar"</h4>
                            <p>Busca la opción de envío</p>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h4>Ingresa el número</h4>
                            <div class="nequi-number">
                                <span>3247453009</span>
                            </div>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-number">4</div>
                        <div class="step-content">
                            <h4>Ingresa el monto</h4>
                            <div class="payment-amounts">
                                <div class="payment-amount-cop">$${totalCOP.toLocaleString('es-CO')} COP</div>
                                <div class="payment-amount-usd">$${totalUSD.toFixed(2)} USD</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button id="confirmPayment" class="btn-primary">
                    <span class="btn-content">
                        <i class="fas fa-check"></i>
                        Ya hice el procedimiento
                    </span>
                </button>
            </div>
        </div>
    `;

    modal.innerHTML = modalContent;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Eventos del modal
    const closeBtn = modal.querySelector('.close');
    const confirmBtn = modal.querySelector('#confirmPayment');

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    });

    confirmBtn.addEventListener('click', () => {
        showToast('¡Gracias por tu compra! En breve recibirás tus recursos por correo electrónico.');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            cart = [];
            total = 0;
            updateCartCount();
        }, 2500);
    });
}

// Sistema de notificaciones
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    const container = document.querySelector('.toast-container');
    if (container) {
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('fade-out');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

// Filtrado y ordenamiento de recursos
function filterResources(filter) {
    const resources = document.querySelectorAll('.resource-card');
    resources.forEach(resource => {
        if (filter === 'all' || resource.classList.contains(filter)) {
            resource.style.display = 'block';
        } else {
            resource.style.display = 'none';
        }
    });
}

function sortResources(criteria) {
    const resourceGrid = document.querySelector('.resource-grid');
    const resources = Array.from(document.querySelectorAll('.resource-card'));
    
    resources.sort((a, b) => {
        switch (criteria) {
            case 'price-low':
                return getPrice(a) - getPrice(b);
            case 'price-high':
                return getPrice(b) - getPrice(a);
            case 'popular':
                return getRating(b) - getRating(a);
            case 'recent':
                return getDate(b) - getDate(a);
            default:
                return 0;
        }
    });
    
    resourceGrid.innerHTML = '';
    resources.forEach(resource => resourceGrid.appendChild(resource));
}

// Funciones auxiliares
function getPrice(element) {
    const priceText = element.querySelector('.resource-price span').textContent;
    return parseFloat(priceText.split(' ')[0]); // Extraer el número del precio
}

function getRating(element) {
    return parseFloat(element.querySelector('.resource-meta span:first-child').textContent);
}

function getDate(element) {
    return new Date(element.dataset.date).getTime();
}

// Animaciones personalizadas
document.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled * 0.003);
    }
});

// Función para cargar productos
function loadProducts() {
    const resourceGrid = document.querySelector('.resource-grid');
    if (!resourceGrid) return;

    // Función para obtener los mejores productos de una categoría
    function getTopProducts(category, limit = 3) {
        return products
            .filter(p => p.category === category)
            .sort((a, b) => b.sales - a.sales)
            .slice(0, limit);
    }

    // Función para renderizar un producto
    function renderProduct(product) {
        return `
            <div class="resource-card ${product.category}" data-aos="fade-up" data-date="${product.date}">
                <div class="resource-image">
                    <img src="${product.image}" alt="${product.title}">
                    <div class="resource-overlay">
                        <button class="btn-primary add-to-cart">
                            <i class="fas fa-shopping-cart"></i>
                            Agregar al Carrito
                        </button>
                    </div>
                </div>
                <div class="resource-content">
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                    <div class="resource-features">
                        ${product.features.map(feature => `
                            <span><i class="fas fa-check"></i> ${feature}</span>
                        `).join('')}
                    </div>
                    <div class="resource-meta">
                        <span><i class="fas fa-star"></i> ${product.rating}</span>
                        <span><i class="fas fa-download"></i> ${product.sales}</span>
                    </div>
                    <div class="resource-price">
                        <span>${product.price}</span>
                    </div>
                </div>
            </div>
        `;
    }

    // Obtener el filtro activo
    const activeFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';

    let productsToShow;
    if (activeFilter === 'all') {
        // En la vista 'todo', mostrar solo los top 3 de cada categoría
        productsToShow = [
            ...getTopProducts('scripts'),
            ...getTopProducts('textures'),
            ...getTopProducts('models')
        ];
    } else {
        // En vistas filtradas, mostrar todos los productos de esa categoría
        productsToShow = products.filter(p => p.category === activeFilter);
    }

    // Renderizar los productos
    resourceGrid.innerHTML = productsToShow.map(renderProduct).join('');

    // Reinicializar eventos después de cargar productos
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Función para cargar testimonios
function loadTestimonials() {
    const testimonialTrack = document.querySelector('.testimonial-track');
    if (!testimonialTrack) return;

    testimonialTrack.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial-card" data-aos="fade-up">
            <div class="testimonial-image">
                <img src="images/${testimonial.image}" alt="${testimonial.name}">
            </div>
            <div class="testimonial-content">
                <div class="testimonial-rating">
                    ${Array(Math.round(testimonial.rating)).fill('★').join('')}
                </div>
                <p class="testimonial-text">"${testimonial.text}"</p>
                <div class="testimonial-author">
                    <strong>${testimonial.name}</strong>
                    <span>${testimonial.role}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Función para el slider de testimonios
function initTestimonialSlider() {
    const track = document.querySelector('.testimonial-track');
    const prevButton = document.querySelector('.prev-testimonial');
    const nextButton = document.querySelector('.next-testimonial');
    let currentIndex = 0;

    if (!track || !prevButton || !nextButton) return;

    function updateSlider() {
        const slideWidth = track.querySelector('.testimonial-card').offsetWidth;
        track.style.transform = `translateX(-${currentIndex * (slideWidth + 20)}px)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        const maxIndex = track.children.length - 1;
        currentIndex = Math.min(currentIndex + 1, maxIndex);
        updateSlider();
    });
}
