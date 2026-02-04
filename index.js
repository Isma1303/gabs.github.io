document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-out-cubic'
    });

    const navigationMap = {
        'redirect-1': 'pages/2022.html',
        'redirect-2': 'pages/2023.html',
        'redirect-3': 'pages/2024.html',
        'redirect-5': 'pages/2025.html',
        'redirect-4': 'pages/cmedt.html',
        'redirect-6': 'pages/2026.html'
    };

    const yearCards = document.querySelectorAll('.year-card');
    yearCards.forEach(card => {
        for (const [className, url] of Object.entries(navigationMap)) {
            if (card.classList.contains(className)) {
                card.addEventListener('click', () => {
                    window.location.href = url;
                });
                break;
            }
        }
    });
});
