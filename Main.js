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
        product1: "Industrial Chemicals",
        product1Desc: "High-purity chemicals for manufacturing and processing.",
        product2: "Laboratory Reagents",
        product2Desc: "Premium-grade reagents for research and testing.",
        product3: "Specialty Solutions",
        product3Desc: "Custom chemical blends for unique industry needs.",
        aboutUs: "About Us",
        whoWeAre: "Who We Are",
        aboutText1: "H Chem is a leading supplier of high-quality chemical products, serving industries across Egypt. With over 6 years of experience, we pride ourselves on reliability, and excellence.",
        aboutText2: "Our sales experts ensure that every product meets the highest industry standards.",
        contactUs: "Contact us to learn more →",
        trustedBy: "Trusted By Industry Leaders",
        client1: "Ezz Steel",
        client2: "Aqua Delta",
        client3: "Atco Pharma",
        client4: "Pharaonia",
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
        client1: "العميل 1",
        client2: "العميل 2",
        client3: "العميل 3",
        client4: "العميل 4",
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
        copyright: "© 2023 إتش كيم. جميع الحقوق محفوظة."
    }
};

// Initialize language function (move this before DOMContentLoaded)
function updateLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    languageToggle.textContent = lang === 'en' ? 'العربية (AR)' : 'English (EN)';

    // Force re-query of elements after language change
    requestAnimationFrame(() => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                el.setAttribute('placeholder', translations[lang][key]);
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Initialize language first
    updateLanguage('en');

    // Canvas and animation setup
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const particles = [];
    const aboutSection = document.getElementById("about");
    const isMobile = window.innerWidth <= 768;

    // Setup canvas with proper z-index
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "0"; // Put it behind content but visible
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.prepend(canvas);

    // Device-specific settings
    const particleCount = isMobile ? 4 : 7;
    const particleSize = isMobile ? 3 : 5;
    const connectionDistance = isMobile ? 100 : 150;
    const particleSpeed = isMobile ? 0.5 : 1;

    // Create particles with controlled speed
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * particleSpeed,
            vy: (Math.random() - 0.5) * particleSpeed
        });
    }

    function animate() {
        // Only hide canvas when scrolled past about section
        if (window.scrollY >= aboutSection.offsetTop) {
            canvas.style.opacity = '0';
        } else {
            canvas.style.opacity = '1';
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach((p1, i) => {
                // Update positions with boundary check
                if (p1.x <= 0 || p1.x >= canvas.width) p1.vx *= -1;
                if (p1.y <= 0 || p1.y >= canvas.height) p1.vy *= -1;
                
                p1.x += p1.vx;
                p1.y += p1.vy;

                // Draw particle
                ctx.beginPath();
                ctx.arc(p1.x, p1.y, particleSize, 0, Math.PI * 2);
                ctx.fillStyle = "#808080";
                ctx.fill();

                // Draw connections
                particles.slice(i + 1).forEach(p2 => {
                    const dx = p2.x - p1.x;
                    const dy = p2.y - p1.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    if (dist < connectionDistance) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        const opacity = 1 - (dist/connectionDistance);
                        ctx.strokeStyle = `rgba(211, 211, 211, ${opacity})`;
                        ctx.stroke();
                    }
                });
            });
        }

        requestAnimationFrame(animate);
    }

    // Start animation
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

    // Language toggle event listener
    languageToggle.addEventListener('click', () => {
        const newLang = currentLanguage === 'en' ? 'ar' : 'en';
        updateLanguage(newLang);
    });
});
