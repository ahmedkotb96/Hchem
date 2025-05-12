// Mobile Menu Toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Language Switcher (English ↔ Arabic)
const languageToggle = document.getElementById('languageToggle');
let currentLanguage = 'en';

console.log('Script loading...'); // Debug loading

// Wrap in IIFE to avoid global scope pollution
(function() {
    // Initialize language function
    function initLanguage() {
        const languageToggle = document.getElementById('languageToggle');
        if (!languageToggle) {
            console.error('Language toggle not found');
            return;
        }
        
        // Move language toggle listener here
        languageToggle.addEventListener('click', () => {
            const newLang = currentLanguage === 'en' ? 'ar' : 'en';
            updateLanguage(newLang);
        });
        
        // Initial language set
        updateLanguage('en');
    }

    // Initialize animation function
    function initAnimation() {
        const aboutSection = document.getElementById('about');
        if (!aboutSection) return;
        
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const particles = [];
        
        // Setup canvas
        canvas.style.position = "fixed";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.pointerEvents = "none";
        canvas.style.zIndex = "0";
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.prepend(canvas);

        // Gas particle settings
        const PARTICLE_COUNT = 12;
        const MAX_SPEED = 2;
        const MIN_SIZE = 7;
        const MAX_SIZE = 12;
        const INTERACTION_DISTANCE = 200; // Increased interaction distance
        const PARTICLE_COLOR = 'rgba(64, 64, 64,'; // Dark gray base color

        // Create gas-like particles
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                z: Math.random() * 500,
                size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE,
                vx: (Math.random() - 0.5) * MAX_SPEED,
                vy: (Math.random() - 0.5) * MAX_SPEED,
                vz: (Math.random() - 0.5) * MAX_SPEED
            });
        }

        function animate() {
            if (window.scrollY >= aboutSection.offsetTop) {
                canvas.style.opacity = '0';
            } else {
                canvas.style.opacity = '1';
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // First, find all close particle groups
                const connections = [];
                particles.forEach((p1, i) => {
                    const closeParticles = particles.filter((p2, j) => {
                        if (i === j) return false;
                        const dx = p2.x - p1.x;
                        const dy = p2.y - p1.y;
                        const dz = p2.z - p1.z;
                        return Math.sqrt(dx * dx + dy * dy + dz * dz) < INTERACTION_DISTANCE;
                    });

                    // If we found 2 or more particles close to current particle
                    if (closeParticles.length >= 2) {
                        connections.push({
                            center: p1,
                            connected: closeParticles
                        });
                    }
                });

                // Draw connections between particle groups
                connections.forEach(group => {
                    group.connected.forEach(p2 => {
                        const dx = p2.x - group.center.x;
                        const dy = p2.y - group.center.y;
                        const dz = p2.z - group.center.z;
                        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                        
                        const opacity = (1 - dist / INTERACTION_DISTANCE) * 0.4;
                        
                        ctx.beginPath();
                        ctx.moveTo(group.center.x, group.center.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(64, 64, 64, ${opacity})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    });
                });

                // Update and draw particles
                const sortedParticles = [...particles].sort((a, b) => b.z - a.z);
                sortedParticles.forEach(p1 => {
                    // Update particle position
                    p1.x += p1.vx;
                    p1.y += p1.vy;
                    p1.z += p1.vz;

                    // Bounce off walls with energy conservation
                    if (p1.x < 0 || p1.x > canvas.width) {
                        p1.vx *= -0.98; // Slight energy loss
                        p1.x = p1.x < 0 ? 0 : canvas.width;
                    }
                    if (p1.y < 0 || p1.y > canvas.height) {
                        p1.vy *= -0.98;
                        p1.y = p1.y < 0 ? 0 : canvas.height;
                    }
                    if (p1.z < 0 || p1.z > 500) {
                        p1.vz *= -0.98;
                        p1.z = p1.z < 0 ? 0 : 500;
                    }

                    // Calculate perspective scale
                    const scale = 0.5 + (p1.z / 1000);
                    const size = p1.size * scale;
                    const alpha = 0.4 + (p1.z / 1000) * 0.6;

                    // Draw particle with solid color instead of gradient
                    ctx.beginPath();
                    ctx.arc(p1.x, p1.y, size, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(64, 64, 64, ${alpha})`;
                    ctx.fill();
                });
            }

            requestAnimationFrame(animate);
        }

        animate();

        // Efficient resize handler
        let resizeTimeout;
        window.addEventListener("resize", () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }, 100);
        });
    }

    // Main initialization
    function init() {
        console.log('Initializing...');
        initLanguage();
        initAnimation();
    }

    // Ensure proper loading
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();


// Move translation related code outside the DOMContentLoaded
const translations = {
    en: {
        home: "Home",
        products: "Products",
        about: "About Us",
        clients: "Our Clients",
        contact: "Contact",
        heroTitle: "Premium Chemical Solutions",
        heroSubtitle: "Delivering high-quality chemical products for industries worldwide.",
        getQuote: "Get a Quote",
        ourProducts: "Our Products",
        product1: "Industrial and Lab Chemicals",
        product1Desc: "High-quality chemicals for industrial and laboratory use.",
        product2: "Glassware",
        product2Desc: "Premium laboratory glassware and accessories.",
        product3: "Media",
        product3Desc: "Complete range of culture media and supplements.",
        aboutUs: "About Us",
        whoWeAre: "Who We Are",
        aboutText1: "H Chem is a leading supplier of high-quality chemical products, serving industries across Egypt. With over 6 years of experience, we pride ourselves on reliability, and excellence.",
        aboutText2: "Our sales experts ensure that every product meets the highest industry standards.",
        contactUs: "Contact us to learn more →",
        trustedBy: "Trusted By Industry Leaders",
        client1: {
            name: "Ezz Steel",
            logo: "./ezzsteel.png"
        },
        client2: {
            name: "Aqua Delta",
            logo: "./aquadelta.png"
        },
        client3: {
            name: "Atco Pharma",
            logo: "./atco_pharma.png"
        },
        client4: {
            name: "Pharaonia",
            logo: "./Pharaonia.png"
        },
        clientTestimonials: "What Our Clients Say",
        testimonial1: "\"H Chem delivered exceptional quality chemicals on time. Highly recommended!\"",
        testimonial2: "\"Reliable supplier with excellent customer service.\"",
        contactUs: "Contact Us",
        getInTouch: "Get in Touch",
        contactText: "Have questions or need a price quotation? Reach out to our team.",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        messagePlaceholder: "Your Message",
        sendMessage: "Send Message",
        address: "Shebin Elkom, Monofiya",
        footerTagline: "Quality Chemicals, Reliable Solutions",
        copyright: "© 2025 Ahmed Kotb. All rights reserved."
    },
    ar: {
        home: "الرئيسية",
        products: "المنتجات",
        about: "من نحن",
        clients: "عملاؤنا",
        contact: "اتصل بنا",
        heroTitle: "حلول كيميائية عالية الجودة",
        heroSubtitle: "نقدم منتجات كيميائية عالية الجودة للصناعات حول العالم.",
        getQuote: "احصل على عرض سعر",
        ourProducts: "منتجاتنا",
        product1: "كيماويات صناعية",
        product1Desc: "كيماويات عالية النقاء للتصنيع والمعالجة.",
        product2: "كواشف مختبرية",
        product2Desc: "كواشف بجودة ممتازة للبحث والاختبار.",
        product3: "حلول متخصصة",
        product3Desc: "خلطات كيميائية مخصصة لاحتياجات صناعية فريدة.",
        aboutUs: "من نحن",
        whoWeAre: "من نحن",
        aboutText1: "إتش كيم هي مورد رائد للمنتجات الكيميائية عالية الجودة، تخدم الصناعات في جميع أنحاء العالم. مع أكثر من 10 سنوات من الخبرة، نفتخر بالموثوقية والابتكار والتميز.",
        aboutText2: "يضمن فريق الخبراء لدينا أن كل منتج يلبي أعلى معايير الصناعة.",
        contactUs: "اتصل بنا لمعرفة المزيد →",
        trustedBy: "موثوق به من قبل قادة الصناعة",
        client1: {
            name: "عز للصلب",
            logo: "./ezzsteel.png"
        },
        client2: {
            name: "أكوا دلتا",
            logo: "./aquadelta.png"
        },
        client3: {
            name: "أتكو فارما",
            logo: "./atco_pharma.png"
        },
        client4: {
            name: "فرعونية",
            logo: "./Pharaonia.png"
        },
        clientTestimonials: "ما يقوله عملاؤنا",
        testimonial1: "\"قدمت إتش كيم منتجات كيميائية عالية الجودة في الوقت المحدد. موصى به للغاية!\"",
        testimonial2: "\"مورد موثوق مع خدمة عملاء ممتازة.\"",
        contactUs: "اتصل بنا",
        getInTouch: "ابقى على تواصل",
        contactText: "هل لديك أسئلة أو تحتاج إلى عرض سعر؟ تواصل مع فريقنا.",
        namePlaceholder: "اسمك",
        emailPlaceholder: "بريدك الإلكتروني",
        messagePlaceholder: "رسالتك",
        sendMessage: "إرسال الرسالة",
        address: "123 شارع الكيماويات، مدينة الصناعة",
        footerTagline: "كيماويات عالية الجودة، حلول موثوقة",
        copyright: "© 2025 Ahmed Kotb. All rights reserved."
    }
};

function updateLanguage(lang) {
    try {
        currentLanguage = lang;
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        languageToggle.textContent = lang === 'en' ? 'العربية (AR)' : 'English (EN)';

        // Force re-query of elements after language change
        requestAnimationFrame(() => {
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[lang][key]) {
                    // Special handling for client elements
                    if (key.startsWith('client') && typeof translations[lang][key] === 'object') {
                        const logoImg = el.querySelector('.client-logo');
                        const nameSpan = el.querySelector('.client-name');
                        
                        if (logoImg) {
                            logoImg.src = translations[lang][key].logo;
                            logoImg.alt = translations[lang][key].name;
                            // Force logo reload
                            logoImg.style.display = 'none';
                            setTimeout(() => logoImg.style.display = 'block', 0);
                        }
                        if (nameSpan) {
                            nameSpan.textContent = translations[lang][key].name;
                        }
                    } else {
                        el.textContent = translations[lang][key];
                    }
                }
            });

            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (translations[lang][key]) {
                    el.setAttribute('placeholder', translations[lang][key]);
                }
            });
        });
    } catch (error) {
        console.error('Language update error:', error);
    }
}

// Add product navigation handling
document.querySelectorAll('[data-product-category]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = e.target.dataset.productCategory;
        window.location.href = `products.html?category=${category}`;
    });
});