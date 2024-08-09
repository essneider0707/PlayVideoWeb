document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('video');

    const videoPlayer = document.getElementById('video-player');
    const videoTitle = document.getElementById('video-title');
    const videoDescription = document.getElementById('video-description');

    if (videoId) {
        videoPlayer.src = `https://www.youtube.com/embed/TN2sYO4ojWc?si=V5rWw7WUI-TZTPg1/${videoId}`;
        videoTitle.textContent = `Ktm 390`;  // Puedes ajustar según la información real
        videoDescription.textContent = `Descripción del video ${videoId}`;  // Puedes ajustar según la información real
    }
});
