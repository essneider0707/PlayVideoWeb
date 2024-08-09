document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('btn-nav');
    const sidebar = document.querySelector('.sidebar');
    const profilePicIcon = document.getElementById('profile-pic-icon');
    const userDetails = document.getElementById('user-details');

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
    });
});
