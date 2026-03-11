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
            el.textContent = el.dataset.en;
        } else {
            el.textContent = el.dataset.zh;
        }
    });
    
    // Update button text
    if (langToggle) {
        langToggle.textContent = lang === 'en' ? 'EN' : '中';
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



