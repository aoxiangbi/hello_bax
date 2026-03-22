const yearSpan = document.getElementById('year');
const langToggle = document.getElementById('langToggle');

// Get saved language preference or default to English
const savedLang = localStorage.getItem('language') || 'en';

const setYear = () => {
    const year = new Date().getFullYear();
    if (yearSpan) {
        yearSpan.textContent = year;
    }
};

const switchLanguage = (lang) => {
    const elements = document.querySelectorAll('[data-en][data-zh]');
    
    elements.forEach((el) => {
        if (lang === 'en') {
            el.innerHTML = el.dataset.en;
        } else {
            el.innerHTML = el.dataset.zh;
        }
    });
    
    // Update button text
    if (langToggle) {
        langToggle.textContent = lang === 'en' ? 'English' : '中文';
    }
    
    // Save preference
    localStorage.setItem('language', lang);
};

// Initialize language on page load
if (langToggle) {
    langToggle.addEventListener('click', () => {
        const currentLang = localStorage.getItem('language') || 'en';
        const newLang = currentLang === 'en' ? 'zh' : 'en';
        switchLanguage(newLang);
    });
}

setYear();
switchLanguage(savedLang);

// Lightbox
function openLightbox(item) {
    const img = item.querySelector('img');
    if (!img) return;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('open');
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});