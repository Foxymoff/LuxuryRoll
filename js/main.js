document.addEventListener('DOMContentLoaded', () => {
    // Корзина
    let cart = [];
    
    // Обработчик добавления в корзину
    function addToCart(product) {
        cart.push(product);
        updateCartCount();
    }

    // Обновление счетчика корзины
    function updateCartCount() {
        const cartCount = document.querySelector('.cart-count');
        cartCount.textContent = cart.length;
    }

    // Обработчик кнопки CTA
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        window.location.href = '/catalog';
    });
}); 