document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('video');

    const videoPlayer = document.getElementById('video-player');
    const videoTitle = document.getElementById('video-title');
    const videoDescription = document.getElementById('video-description');
    const submitCommentButton = document.getElementById('submit-comment');
    const commentText = document.getElementById('comment-text');
    const commentsList = document.getElementById('comments-list');

    if (videoId) {
        videoPlayer.src = `https://www.youtube.com/embed/TN2sYO4ojWc?si=V5rWw7WUI-TZTPg1/${videoId}`;
        videoTitle.textContent = `Ktm 390`;  // Puedes ajustar según la información real
        videoDescription.textContent = `Descripción del video ${videoId}`;  // Puedes ajustar según la información real
    }
    submitCommentButton.addEventListener('click', function() {
        const comment = commentText.value.trim();

        if (comment) {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.innerHTML = `<p>${comment}</p>`;

            commentsList.appendChild(commentElement);
            commentText.value = ''; // Limpiar el área de texto
        } else {
            alert('Por favor, escribe un comentario antes de enviarlo.');
        }
    });
});
