document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('btn-nav');
    const sidebar = document.querySelector('.sidebar');
    const categoryButtons = document.querySelectorAll('.category-btn');
    // Toggle sidebar visibility
    toggleButton.addEventListener('change', function() {
        if (this.checked) {
            sidebar.classList.add('active');
        } else {
            sidebar.classList.remove('active');
        }
    });

    const videoItems = document.querySelectorAll('.video-item');
    videoItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoId = this.dataset.videoId;
            window.location.href = `video-view.html?video=${videoId}`;
        });

        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                
                // Muestra todos los videos si se selecciona "Todos"
                videoItems.forEach(item => {
                    if (category === 'all' || item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    });
});
