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
        aboutText1: "H Chem is a leading supplier of high-quality chemical products, serving industries across the globe. With over 10 years of experience, we pride ourselves on reliability, innovation, and excellence.",
        aboutText2: "Our team of experts ensures that every product meets the highest industry standards.",
        contactUs: "Contact us to learn more →",
        trustedBy: "Trusted By Industry Leaders",
        client1: "Client 1",
        client2: "Client 2",
        client3: "Client 3",
        client4: "Client 4",
        clientTestimonials: "What Our Clients Say",
        testimonial1: "\"H Chem delivered exceptional quality chemicals on time. Highly recommended!\"",
        testimonial2: "\"Reliable supplier with excellent customer service.\"",
        contactUs: "Contact Us",
        getInTouch: "Get in Touch",
        contactText: "Have questions or need a quote? Reach out to our team.",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        messagePlaceholder: "Your Message",
        sendMessage: "Send Message",
        address: "123 Chemical Ave, Industry City",
        footerTagline: "Quality Chemicals, Reliable Solutions",
        copyright: "© 2023 H Chem. All rights reserved."
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

function updateLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update button text
    languageToggle.textContent = lang === 'en' ? 'العربية (AR)' : 'English (EN)';

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[lang][key];
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.setAttribute('placeholder', translations[lang][key]);
    });
}

// Toggle language on button click
languageToggle.addEventListener('click', () => {
    const newLang = currentLanguage === 'en' ? 'ar' : 'en';
    updateLanguage(newLang);
});

// Initialize with English
updateLanguage('en');

document.addEventListener("DOMContentLoaded", () => {
    const benzeneContainer = document.getElementById("benzene-container");
    const numberOfRings = 20; // Number of benzene rings to display

    for (let i = 0; i < numberOfRings; i++) {
        // Create an image element for the benzene ring
        const benzene = document.createElement("img");
        benzene.setAttribute("src", "d:\H_Chem website_project\benzene.png");
        benzene.setAttribute("alt", "Benzene Ring");
        benzene.setAttribute("class", "benzene");

        // Randomize position
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        benzene.style.position = "absolute";
        benzene.style.left = `${x}px`;
        benzene.style.top = `${y}px`;

        // Append to the container
        benzeneContainer.appendChild(benzene);
    }
});