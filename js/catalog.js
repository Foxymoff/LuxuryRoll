document.addEventListener('DOMContentLoaded', () => {
    const filterToggle = document.getElementById('filterToggle');
    const filtersPanel = document.getElementById('filtersPanel');

    filterToggle.addEventListener('click', () => {
        filtersPanel.classList.toggle('active');
    });

    // Функция для применения фильтров
    function applyFilters() {
        const selectedFilters = {
            layers: [],
            material: [],
            texture: [],
            // ... другие фильтры
        };

        // Логика фильтрации товаров
    }
}); 